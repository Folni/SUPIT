$(document).ready(() => {
  if (localStorage.JWTToken === undefined) {
    $("#login-link").show();
    $("#logout-link").hide();
    $("#odjavaime").text("");
    $("#Nastavniplan").hide();
  } else {
    $("#Nastavniplan").show();
    $("#login-link").hide();
    $("#logout-link").show();
    $("#logout-link").on("click", function (event) {
      localStorage.clear();
    });
  }
});
