$(document).ready(function() {
    // New card data
    const iconCardsData = [
        {
            text: "EC-Council Accredited Training Center - kreditirani trening centar",
            imageSrc: "./materials/img/EC-Council.png",
            altText: "EC-Council Logo"
        },
        {
            text: "Cisco Networking Academy, Cisco akademija mrežnih tehnologija",
            imageSrc: "./materials/img/1024px-Cisco_academy.png",
            altText: "Cisco Logo"
        },
        {
            text: "VUE Ispitni centar za testiranje kandidata",
            imageSrc: "./materials/img/VUElogo.jpg",
            altText: "VUE Logo"
        },
        {
            text: "Autodesk trening centar za AutoCAD, Inventor i 3D Studio alate",
            imageSrc: "./materials/img/autodesk.png",
            altText: "Autodesk Logo"
        },
        {
            text: "Adobe autorizirani trening partner za grafičke i web aplikacije",
            imageSrc: "./materials/img/auth_training_cntr.gif",
            altText: "Adobe Logo"
        },
        {
            text: "Microsoft Gold Certified Partner for Learning Solutions",
            imageSrc: "./materials/img/ms_novo.png",
            altText: "Microsoft Logo"
        },
        {
            text: "Red Hat Akademija – podržava nastavu i certifikacijske ispite",
            imageSrc: "./materials/img/redhatLogo.png",
            altText: "Red Hat Logo"
        },
        {
            text: "Oracle Approved Education Center – provedba službene Oracle edukacije",
            imageSrc: "./materials/img/oracleLogo.png",
            altText: "Oracle Logo"
        }
    ];

    // Function to create icon cards
    function createIconCards(cardsData, containerSelector) {
        const container = $(containerSelector);
        
        // Clear the container before adding new cards
        container.empty();

        cardsData.forEach(cardData => {
            // Create the card HTML structure dynamically
            const cardHTML = `
                <div class="icon-card">
                    <div class="icon-card-text">
                        ${cardData.text}
                    </div>
                    <div class="icon-card-line"></div>
                    <img class="icon-card-image" src="${cardData.imageSrc}" alt="${cardData.altText}">
                </div>
            `;

            // Append the card to the container
            container.append(cardHTML);
        });
    }

    // Call the function to generate the icon cards inside a container with id "icon-cards-container"
    createIconCards(iconCardsData, '#icon-cards-container');
});
