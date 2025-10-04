Algebra University Website Project

Description

This project is a website based on the structure and content of the Algebra University main site. It was built using foundational web technologies (HTML, CSS, and JavaScript) as a learning exercise to practice front-end development skills.

Key Features

    Static Pages: Includes the main Index page, a separate About Us page (Onama.html), and a News Page (Novosti.html) with links to three sub-articles.

    Authentication Flow: Contains pages for Login (Prijava.html) and Registration (Registracija.html).

    Curriculum Access: If a user is logged in, they can access the Curriculum List page (NastavniPlan.html), which fetches data from the university's API using JavaScript.

    Core Technologies: The project demonstrates the use of:

        HTML for page structure.

        CSS for styling.

        JavaScript for interactivity, login logic, and API calls.

Getting Started

This application is a front-end project and doesn't require complex server setup.

Prerequisites

You need a simple way to serve the files locally in a browser. Visual Studio Code (VS Code) and the Live Server extension are recommended.

Installation and Running

    Clone the Repository:
    Bash

    git clone [repository-url]
    cd [project-directory]

Open in VS Code and Run:

    Open the project folder in Visual Studio Code.

    Right-click on the main Index.html file in the file explorer.

    Select "Open with Live Server".

    The application will open in your default browser (e.g., at http://127.0.0.1:5500/Index.html).
    
Usage Notes

The core functionality of this project is to showcase the use of JavaScript to handle user input and API data.

    Login/Registration: The login logic is handled by our API provider for demonstration purposes.

    Curriculum Page (NastavniPlan.html): This is the main page that calls the external API to display the curriculum list, demonstrating how to fetch and display external data.
