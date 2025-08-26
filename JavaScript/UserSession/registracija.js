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
      } else {
        $("#failure-message").text(`${response.errorMessages[0]}`);
        $("#failure-message").fadeIn();
        setTimeout(function () {
          $("#failure-message").fadeOut();
          $("#failure-message").text("");
        }, 5000);
      }
      if (response.statusCode === 401) {
        localStorage.clear();
      }
    },
    error: function (res) {
      $("#failure-message").text(`${response.errorMessages[0]}`);
      $("#failure-message").fadeIn();
      setTimeout(function () {
        $("#failure-message").fadeOut();
        $("#failure-message").text("");
      }, 5000);
      if (response.statusCode === 401) {
        localStorage.clear();
      }
    },
  });
});
