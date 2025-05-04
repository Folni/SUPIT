$(document).ready(function() {
    // Navbar HTML content
    const navHtml = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="prijava_container">
                    <a class="navbar-brand" href="Registracija.html" id="login-link">Prijava</a>
                    <button id="logout-btn" style="display:none;">Odjava</button>
                    <svg class="nav-icon prijava-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
                    </svg>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                            </svg>
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>
                            <a class="nav-link" href="Onama.html">O nama</a>
                        </li>
                        <li class="nav-item">
                            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                            </svg>
                            <a class="nav-link" href="Novosti.html">Novosti</a>
                        </li>
                        <li class="nav-item">
                            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                            </svg>
                            <a class="nav-link" href="#"  data-bs-toggle="modal" data-bs-target="#formModal">Kontakti</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" id="Nastavniplan" style="display:none;" href="NastavniPlan.html">Nastavni plan</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    $('body').prepend(navHtml);


    const sidebarHtml = `
    <ul class="navbar-nav sidebar" id="sidebar">
        <li class="nav-item">
            <a class="nav-link sidebar-li" href="#nase-vrijednosti">Nase vrijednosti</a>
        </li>
        <li class="nav-item">
            <a class="nav-link sidebar-li" href="#povijest">Povijest</a>
        </li>
        <li class="nav-item">
            <a class="nav-link sidebar-li" href="#algebrina-grupa">Algebrina grupa</a>
        </li>
        <li class="nav-item">
            <a class="nav-link sidebar-li" href="#kako-do-nas">Kako do nas?</a>
        </li>
    </ul>
`;

//  between  `</ul>` and `</div>`
const navBarNav = document.querySelector('.navbar-nav');
navBarNav.insertAdjacentHTML('afterend', sidebarHtml);

const currentPage = window.location.pathname;
const sidebar = document.getElementById('sidebar');

if (currentPage.includes('Onama.html')) {
    sidebar.style.display = 'flex';  
} else {
    sidebar.style.display = 'none';   
}

$('.sidebar-li').on('click', function(event) {
    event.preventDefault();  // default link behavior

    const targetId = $(this).attr('href'); 
    const targetElement = $(targetId)[0]; // corresponding element

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'  
        });

        
        const offset = 110;  
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition - offset, 
            behavior: 'smooth'  
        });
    }
})
});
