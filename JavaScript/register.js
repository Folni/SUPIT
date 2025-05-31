$("#registerform").on("submit", function (e) {
  e.preventDefault();
  const username = $("#username").val();
  const password = $("#password").val();

  $.ajax({
    url: "https://www.fulek.com/data/api/user/register",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({ username, password }),
    success: function (response) {
      if (response.statusCode === 200) {
        window.location.href = "prijava.html";
        console.log("Uspjesna registracija preusmjeravanje");
      } else {
        $("#errorMsg").text(`${response.errorMessages[0]}`);
        $("#errorMsg").fadeIn();
        setTimeout(function () {
          $("#errorMsg").fadeOut();
          $("#errorMsg").text("");
        }, 5000);
      }
      if (response.statusCode === 401) {
        localStorage.clear();
      }
    },
    error: function (res) {
      $("#errorMsg").text(`${response.errorMessages[0]}`);
      $("#errorMsg").fadeIn();
      setTimeout(function () {
        $("#errorMsg").fadeOut();
        $("#errorMsg").text("");
      }, 5000);
      if (response.statusCode === 401) {
        localStorage.clear();
      }
    },
  });
});
