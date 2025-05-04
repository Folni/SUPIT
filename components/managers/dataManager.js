import { ajaxManager } from './ajaxManager.js';

export const dataManager = {
    getCurriculumList: function (token) {
        ajaxManager.get(
            'https://www.fulek.com/data/api/supit/curriculum-list/hr',
            token,
            (response) => {
                const { data } = response;
                if (data && data.length > 0) {
                    $('#dropdown-list').empty();
                    data.forEach(({ id, kolegij }) => {
                        $('#dropdown-list').append(`
                            <li>
                                <a href="#" data-id="${id}" class="dropdown-item">${kolegij}</a>
                            </li>
                        `);
                    });

                    $('#dropdown-list').on('click', '.dropdown-item', function () {
                        const id = $(this).data('id');
                        dataManager.updateTable(id);
                    });
                }
            },
            (error) => console.log('Error fetching curriculum list:', error)
        );
    },

    updateTable: function (id) {
        const token = localStorage.getItem('JWTToken');
        if (!token) {
            console.log("No JWT token found. Please log in.");
            return;
        }

        console.log("Fetching details for curriculum ID:", id);

        ajaxManager.get(
            `https://www.fulek.com/data/api/supit/get-curriculum/${id}`,
            token,
            (response) => {
                console.log("Response from curriculum details API:", response);

                const { data } = response;
                if (data && data.kolegij) {
                    const existingRow = $('#curriculum-list tr').filter(function () {
                        return $(this).data('id') === id;
                    });

                    if (existingRow.length > 0) {
                        console.log("Curriculum with ID", id, "already exists in the table.");
                        return;
                    }

                    $('#curriculum-list').append(`
                        <tr data-id="${id}">
                            <td>${data.kolegij}</td>
                            <td>${data.ects}</td>
                            <td>${data.sati}</td>
                            <td>${data.predavanja}</td>
                            <td>${data.vjezbe}</td>
                            <td>${data.tip}</td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    `);

                    $('.delete-btn').off('click').on('click', function () {
                        const row = $(this).closest('tr');
                        const rowId = row.data('id');
                        console.log('Deleting row with ID:', rowId);
                        row.remove();
                        dataManager.updateSums(); // Call updateSums after deletion
                    });

                    dataManager.updateSums(); // Initial sum calculation
                } else {
                    console.log('No valid curriculum data found.');
                }
            },
            (error) => {
                console.log('Error fetching curriculum detail:', error);
            }
        );
    },

    updateSums: function () {
        let totalEcts = 0;
        let totalSati = 0;
        let totalPredavanja = 0;
        let totalVjezbe = 0;

        $('#curriculum-list tr').each(function () {
            const ects = parseInt($(this).find('td').eq(1).text()) || 0;
            const sati = parseInt($(this).find('td').eq(2).text()) || 0;
            const predavanja = parseInt($(this).find('td').eq(3).text()) || 0;
            const vjezbe = parseInt($(this).find('td').eq(4).text()) || 0;

            totalEcts += ects;
            totalSati += sati;
            totalPredavanja += predavanja;
            totalVjezbe += vjezbe;
        });

        $('#total-ects').text(totalEcts);
        $('#total-sati').text(totalSati);
        $('#total-predavanja').text(totalPredavanja);
        $('#total-vjezbe').text(totalVjezbe);
    }
};
