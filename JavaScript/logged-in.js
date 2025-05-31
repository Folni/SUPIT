$(document).ready(() => {
  if (localStorage.JWTToken === undefined) {
    $("#prijavalink").show();
    $("#odjavalink").hide();
    $("#odjavaime").text("");
    $("#nastavniplan").hide();
  } else {
    $("#nastavniplan").show();
    $("#prijavalink").hide();
    $("#odjava").show();
    $("#odjavaime").text(`${localStorage.username}`);
    $("#odjava").on("click", function (event) {
      localStorage.clear();
    });
  }
});
