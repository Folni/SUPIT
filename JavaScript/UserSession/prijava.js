$(document).ready(function () {
  $("#logout-link").hide();
  $("#errorMsg").hide();
  $("#successMsg").hide();

  $("#login-form").on("submit", function (e) {
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

          $("#failure-message").hide();
          $("#successMsg").fadeIn();

          setTimeout(() => {
            $("#Nastavniplan").show();
            window.location.href = "index.html";
          }, 2000);
        } else {
          $("#failure-message").text(`${response.errorMessages[0]}`);
          $("#failure-message").fadeIn();
          setTimeout(function () {
            $("#failure-message").fadeOut();
            $("#failure-message").text("");
          }, 2000);
        }
      },
      error: function (res) {
        $("#failure-message").text(`Error communicating with api`);
        $("#failure-message").fadeIn();
        setTimeout(function () {
          $("#failure-message").fadeOut();
          $("#failure-message").text("");
        }, 2000);
      },
    });
  });
});
console.log(localStorage);
