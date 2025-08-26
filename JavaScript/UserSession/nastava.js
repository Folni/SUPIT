const courses = [];
let courseNames = [];

$(document).ready(() => {
  $("#curriculum-table").toggle($("#curriculum-list").children().length > 0);

  class Course {
    constructor(ID, Name, ects, hours, lectures, type, vjezbe) {
      Object.assign(this, { ID, Name, ects, hours, lectures, type, vjezbe });
    }
  }

  const currentUrl = window.location.href;
  if (
    localStorage.Loggedin &&
    currentUrl === "http://127.0.0.1:5501/NastavniPlan.html" &&
    courses.length === 0
  ) {
    $.ajax({
      url: "https://www.fulek.com/data/api/supit/curriculum-list/hr",
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.JWTToken}` },
      success: function (response) {
        if (response.statusCode === 200) {
          console.log("Data received:", response.data); // provjera
          response.data.forEach(
            ({ id, kolegij, ects, sati, predavanja, tip, vjezbe }) => {
              courseNames.push(kolegij);
              courses.push(
                new Course(id, kolegij, ects, sati, predavanja, tip, vjezbe)
              );
            }
          );

          $("#autocomplete").autocomplete({ source: courseNames });
          courseNames.sort();
        } else {
          localStorage.clear();
        }
      },
      error: () => {
        localStorage.clear();
      },
    });
  }
});

$("#autocomplete").on("autocompleteselect", (event, ui) => {
  let selectedCourse = courses.find(({ Name }) => ui.item.value === Name);
  courseNames = courseNames.filter((name) => name !== selectedCourse.Name);

  $("#curriculum-list").append(`
    <tr data-id="${selectedCourse.ID}">
      <td>${selectedCourse.Name}</td>
      <td>${selectedCourse.ects}</td>
      <td>${selectedCourse.hours}</td>
      <td>${selectedCourse.lectures}</td>
      <td>${selectedCourse.vjezbe}</td>
      <td>${selectedCourse.type}</td>
      <td><button class="btn btn-danger btn_delete">Ukloni</button></td>
    </tr>
  `);

  $(".btn_delete")
    .unbind("click")
    .on("click", function () {
      let currentRow = $(this).closest("tr");
      let courseName = currentRow.children().first().text();
      currentRow.remove();
      courseNames.push(courseName);
      updateTable();
    });

  updateTable();
  $("#curriculum-table").show();
});

function updateTable() {
  courseNames.sort();
  $("#curriculum-table").toggle($("#curriculum-list").children().length > 0); //provjera tablice
  $("#autocomplete").autocomplete({ source: courseNames }); //+- autocomplete

  let totals = { ects: 0, hours: 0, lectures: 0, exercises: 0 };

  $("#curriculum-list tr").each(function () {
    let values = $(this)
      .children()
      .map((_, el) => parseInt($(el).text(), 10)) //dom el, base 10
      .get(); // convert to normal js array
    [totals.ects, totals.hours, totals.lectures, totals.exercises] = [
      totals.ects + values[1],
      totals.hours + values[2],
      totals.lectures + values[3],
      totals.exercises + values[4],
    ];
  });

  $("#total-ects").text(totals.ects);
  $("#total-sati").text(totals.hours);
  $("#total-predavanja").text(totals.lectures);
  $("#total-vjezbe").text(totals.exercises);
}
