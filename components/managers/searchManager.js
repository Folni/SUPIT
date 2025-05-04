export const searchManager = {
    initialize: function () {
        $('#search-bar').on('input', function () {
            const searchQuery = $(this).val().toLowerCase();
            $('#dropdown-list li').each(function () {
                const text = $(this).text().toLowerCase();
                $(this).toggle(text.includes(searchQuery));
            });
        });

        $('#search-bar').on('focus', function () {
            $('#dropdown').show();
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.search-dropdown-container').length) {
                $('#dropdown').hide();
            }
        });
    }
};
