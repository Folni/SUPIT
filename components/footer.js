// footer.js
$(document).ready(function() {
  const footerHtml = `
      <footer id="footer" style="background-color: black !important;" class="flex-shrink-0 py-4 bg-dark text-white-50">
          <div class="container text-center">
              <small>Copyright &copy; Your Website</small>
          </div>
      </footer>
  `;
  
  // Append the footer HTML to the body (or wherever you want to place it)
  $('body').append(footerHtml);
});
