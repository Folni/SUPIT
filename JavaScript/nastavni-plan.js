const x = [];
let kolegijinazivi = [];
$(document).ready(function () {
  if ($("tbody").children().length === 0) {
    $("table").hide();
  } else {
    $("table").show();
  }
  class Kolegij {
    constructor(ID, Naziv, ects, sati, predavanja, tip, vjezbe) {
      this.ID = ID;
      this.Naziv = Naziv;
      this.ects = ects;
      this.sati = sati;
      this.predavanja = predavanja;
      this.tip = tip;
      this.vjezbe = vjezbe;
    }
  }

  const currentUrl = window.location.href;
  if (
    localStorage.Loggedin &&
    currentUrl === "http://127.0.0.1:5501/Nastavni-plan.html" &&
    x.length === 0
  ) {
    $.ajax({
      url: "https://www.fulek.com/data/api/supit/curriculum-list/hr",
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.JWTToken}` },
      success: function (response) {
        if (response.statusCode === 200) {
          response.data.forEach((element) => {
            kolegijinazivi.push(element.kolegij);
            x.push(
              new Kolegij(
                element.id,
                element.kolegij,
                element.ects,
                element.sati,
                element.predavanja,
                element.tip,
                element.vjezbe
              )
            );
          });
          $("#autocomplete").autocomplete({
            source: kolegijinazivi,
          });
          kolegijinazivi.sort();
        } else {
          localStorage.clear();
        }
      },
      error: function () {
        localStorage.clear();
      },
    });
  }
});

$("#autocomplete").on("autocompleteselect", function (event, ui) {
  let t;
  x.forEach((element) => {
    if (ui.item.value == element.Naziv) {
      t = element;
    }
  });
  const index = kolegijinazivi.indexOf(t.Naziv);
  if (index !== -1) {
    kolegijinazivi.splice(index, 1);
  }
  console.log(t);
  $("tbody").append(
    `<tr data-id="${t.ID}">
            <td>${t.Naziv}</td>
            <td>${t.ects}</td>
            <td>${t.sati}</td>
            <td>${t.predavanja}</td>
            <td>${t.vjezbe}</td>
            <td>${t.tip}</td>
            <td><button class="btn btn-danger NPBTN">Ukloni</button></td>
            </tr>`
  );
  $(".NPBTN")
    .unbind("click")
    .on("click", function () {
      currentrow = this.parentNode.parentNode;
      nazivkolegija = currentrow.children[0].textContent;
      currentrow.remove();
      kolegijinazivi.push(nazivkolegija);
      updateTable();
    });
  updateTable();
  $("table").show();
});

$("#autocomplete").on("input", function (event) {
  if (
    event.originalEvent.inputType === "deleteContentBackward" ||
    event.originalEvent.inputType === "deleteContentForward"
  ) {
    $(this).val(""); // Clear the entire input field
  }
});

function updateTable() {
  kolegijinazivi.sort();
  if ($("tbody").children().length === 0) {
    $("table").hide();
  } else {
    $("table").show();
  }
  $("#autocomplete").val("");
  let ectstabla = 0;
  let satitabla = 0;
  let predavanjatabla = 0;
  let vjezbetabla = 0;
  $("tbody tr").each(function () {
    let currtr = this;
    ectstabla += parseInt(currtr.children[1].textContent);
    satitabla += parseInt(currtr.children[2].textContent);
    predavanjatabla += parseInt(currtr.children[3].textContent);
    vjezbetabla += parseInt(currtr.children[4].textContent);
  });
  $(".colEcts").text(ectstabla);
  $(".colSati").text(satitabla);
  $(".colPredavanja").text(predavanjatabla);
  $(".colVjezbe").text(vjezbetabla);
}

{
  /* <td class="colKolegij">Ukupno</td>
            <td class="colEcts"></td>
            <td class="colSati"></td>
            <td class="colPredavanja"></td>
            <td class="colVjezbe"></td>
            <td class="colTip"></td> */
}
