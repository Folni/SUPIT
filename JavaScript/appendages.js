$(document).ready(function () {
  $("head").append(
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">'
  );
  $("body").append(
    '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>'
  );
  $("head").append(
    '<link rel="icon" href="Materials/img/Algebra-logo.png" type="image/x-icon"/>'
  );
  $("head").append('<link rel="stylesheet" href="CSS/Style.css" />');
  $("head").append('<link rel="stylesheet" href="CSS/O-Nama.css" />');
  $("head").append('<link rel="stylesheet" href="CSS/Novosti.css" />');

  $("body").append(`<script src="JavaScript/appending-html.js"></script>`);
  $("body").append(`<script src="JavaScript/login.js"></script>`);
  $("body").append(`<script src="JavaScript/register.js"></script>`);
  $("body").append(`<script src="JavaScript/logged-in.js"></script>`);
  $("body").append(`<script src="JavaScript/nastavni-plan.js"></script>`);
});
