$(document).ready(function() {
  //Bootstrap 
  $('head').append('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
  $('body').append('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
  
  //CSS
  $('head').append('<link rel="stylesheet" href="./css/style.css">');
  $('head').append('<link rel="stylesheet" href="./css/home.css">');
  $('head').append('<link rel="stylesheet" href="./css/Onama.css">');
  $('head').append('<link rel="stylesheet" href="./css/Novosti.css">');
  $('head').append('<link rel="stylesheet" href="./css/NastavniPlan.css">');

  
  //fonts
  $('head').append('<link rel="preconnect" href="https://fonts.googleapis.com">');
  $('head').append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
  $('head').append('<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+BE+VLG+Guides&family=Playwrite+TZ+Guides&family=Rouge+Script&display=swap" rel="stylesheet">');
  

  //JS components
  $('body').append('<script src="./components/nav.js"></script>');
  $('body').append('<script src="./components/footer.js"></script>');

  //JS functions
  $('body').append('<script src="./components/generateCards.js"></script>');
  $('body').append('<script src="./components/generateIconCards.js"></script>');
  $('body').append('<script type="module" src="./components/SessionControl.js"></script>');

});
