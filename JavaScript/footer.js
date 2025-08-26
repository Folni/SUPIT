$(document).ready(function () {
  const excludedPaths = ["/index.html"];

  const currentPath = window.location.pathname;

  if (!excludedPaths.includes(currentPath)) {
    const footerHtml = `
        <div class="header-container" 
        style="background-image: url('/materials/img/zaiskri-bg.jpg'); background-position-y: top;">
          <div class="header-text" 
          style="font-size: 3rem; display: flex; flex-direction: column; background-position-y: bottom;">
            BUDI IZVRSTAN U ONOM ŠTO VOLIŠ 
            <div style="color: rgb(242, 6, 6);"> ZAISKRI</div>
          </div>
        </div>
        <footer id="footer" style="background-color: black !important;" class="flex-shrink-0 py-4 bg-dark text-white-50">
          <div class="container text-center">
            <small>Copyright &copy; Filip Folnegović 2RP1</small>
          </div>
        </footer>
      `;

    $("body").append(footerHtml);
  }
});
