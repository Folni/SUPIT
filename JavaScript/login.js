$(document).ready(function () {
  $("#odjava").hide();
  $("#errorMsg").hide();
  $("#successMsg").hide();

  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();

    $.ajax({
      url: "https://www.fulek.com/data/api/user/login",
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ username, password }),
      success: function (response) {
        if (response.statusCode === 200) {
          console.log("Token:", response.token);

          localStorage.setItem("JWTToken", response.data.token);
          localStorage.setItem("username", username);
          localStorage.setItem("Loggedin", true);

          $("#errorMsg").hide();
          $("#successMsg").fadeIn();

          setTimeout(() => {
            $("#nastavniplan").show();
            window.location.href = "index.html";
          }, 2000);
        } else {
          $("#errorMsg").text(`${response.errorMessages[0]}`);
          $("#errorMsg").fadeIn();
          setTimeout(function () {
            $("#errorMsg").fadeOut();
            $("#errorMsg").text("");
          }, 5000);
        }
      },
      error: function (res) {
        $("#errorMsg").text(`${response.errorMessages[0]}`);
        $("#errorMsg").fadeIn();
        setTimeout(function () {
          $("#errorMsg").fadeOut();
          $("#errorMsg").text("");
        }, 5000);
      },
    });
  });
});
console.log(localStorage);
