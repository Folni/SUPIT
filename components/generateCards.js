$(document).ready(function() {
    const cardData = [
        {
          year: "",
          title: "SPECIJALIZIRANO I KVALITETNO",
          text: "Svi naši nastavni programi i procesi baziraju se na globalnim standardima i najrelevantnijim znanjima potrebnim za uspjeh na tržištu rada. Spajamo snažnu teorijsku podlogu s praktičnim znanjima kako bismo pomogli našim polaznicima da pronađu ono što vole raditi. Koliko smo uspješni u tome najbolje pokazuje činjenica da 100% naših studenata pronalazi posao unutar 6 mjeseci od diplome, dok čak 85% polaznika programa cjeloživotnog obrazovanja promijeni posao ili napreduje u roku 3 mjeseca nakon završetka programa."
        },
        {
          year: "",
          title: "IZBALANSIRANO",
          text: "Obrazovanje za nas podrazumijeva akademsku, ali i društvenu komponentu čovjeka. Snažno vjerujemo da je čovjek spreman na napredak tek kada pronađe ravnotežu u životu. Stoga kreiramo okruženje koje će u jednakoj mjeri poticati kvalitetu obrazovanja i ispunjen i kvalitetan život. Ulaganje u obrazovanje uvijek znači ulaganje u sebe. Vjerujemo da upravo upisom studija ili programa obrazovanja postižemo balans između svakodnevnih obveza i kvalitetnog vremena koje odvajamo za sebe."
        },
        {
          year: "",
          title: "IZVRSNO",
          text: "Izvrsnost je ključna emocionalna diferencijacija našeg branda – pomažemo našim polaznicima i studentima da pronađu ono što vole raditi i postanu izvrsni u tome. Našu izvrsnost dokazuju brojna priznanja i certifikati za kvalitetu naših nastavnih programa i procesa, ali i vrhunski strastveni predavači koji prenose tu iskru na sve studente i polaznike koji dođu u Algebru. Na putu do pronalaska onog što volimo postoji onaj trenutak kad shvatimo da mi to možemo i mi to želimo raditi, mi taj moment nazivamo iskra, zato želimo da svi koji su dio Algebre postanu izvrsni u onom što vole raditi odnosno da zaiskre u Algebri."
        },
        {
          year: "1998",
          title: "- Osnovan Algebra d.o.o. – poduzeće za obrazovanje odraslih",
          text: "Algebra d.o.o. osnovana je u travnju 1998. godine kao poduzeće za obrazovanje odraslih. U lipnju 1998. bilježi prve polaznike seminara primjene računala i računalnih aplikacija. U rujnu 1998. bilježi prvi znatniji porast broja korisnika usluga, da bi se kroz višeznamenkasti rast u godinama 1999. i 2000. etablirala na tržištu edukacije odraslih, na području korisničke primjene informacijskih tehnologija (IT)."
        },
        {
          year: "2000",
          title: "- Microsoft Authorized Training Center (ATC)",
          text: "Nakon dosta napora i truda uvjerili smo 2000 godine lokalni ured Microsoft Hrvatska da zadovoljavamo postavljene uvjete kako bismo mogli postati autorizirani obrazovni centar za njihove tehnologije. Ova, prva u nizu, autorizacija distancirala nas je do drugih obrazovnih ponuđača iz tog vremena te nam je osigurala dostup službenim nastavnim materijalima i povoljnije uvjete licenciranja softvera. Ovaj smo status naknadno značajno unaprijedili kako bismo dosegli „Gold“ epitet."
        },
        {
          year: "2001",
          title: "- Adobe, Macromedia i Autodesk Training Center",
          text: "Potaknuti uspjehom dobivanja Microsoft akreditacije, u 2001 godini smo svu snagu uložili upravo na zadovoljavanje uvjeta za uspostavu službenog trening centra i za druge proizvođače te smo iste godine postali: Macromedia Authorized Training Center, Adobe Authorized Training Provider, Autodesk Authorized Training Center i IBM Business Partner."
        },
        {
          year: "2002",
          title: "- Osnovano Učilište Algebra",
          text: "Početkom 2002. godine Algebra d.o.o. osniva Učilište Algebra, a iste godine seli se u znatno veći i kvalitetniji prostor u Maksimirsku 58a, Zagreb gdje se polaznicima na raspolaganje stavlja ukupno 6 učionica i oko 800 m2 uređenog obrazovnog prostora. Prema procjenama Microsoft Hrvatska, udio Algebre na hrvatskom tržištu edukacijskih usluga za Microsoft alate narastao je u toj godini na 30%–35%."
        },
        {
          year: "2003",
          title: "- Učilište Algebra postalo vodeći ponuđač obrazovanja u IT-u",
          text: "Uvođenjem niza novih programa obrazovanja odraslih u akreditiranim kod Ministarstva zaduženog za obrazovanje kroz nekoliko prethodnih godina, Algebra je u 2003. u samo godinu dana sa 5. skočila na 1. mjesto ponuđača informatičke edukacije (mjereno prema ostvarenom prihodu i broju polaznika), ostvarivši rast u jednoj godini poslovanja od 91,8%. Poziciju vodećeg obrazovnog sustava u obrazovanju odraslih držimo još i danas."
        },
        {
          year: "2007",
          title: "- Visoko učilište Algebra dobiva akreditaciju",
          text: "Nakon više od 2 godine intenzivnih priprema, krajem 2007. je osnovana Visoka škola za primijenjeno računarstvo koja je dopusnicu Ministarstva znanosti, obrazovanja i sporta dobila u lipnju 2008. godine. Ovaj događaj postavio je nove smjernice razvoja Algebra obrazovne grupe te je na određeni način uspješno zaokružio nastojanja za pokretanjem visokoškolskog obrazovnog programa koja su inicirana još u 2002. godini kroz provedbu IBM ACE obrazovnog programa. Provedba nastavnog programa započinje u prostorijama FER-a te u zgradi Algebre u Maksimirskoj ulici."
        },
        {
          year: "2013",
          title: "- Izvrsni rezultati u europskim projektima, kvaliteta i dalje u fokusu",
          text: "Dodatno smo proširili svoje kapacitete dodavanjem novih učionica na adresi u Ilici, a uspješno smo prošli i provjeru kvalitete provedbe programa u organizaciji FER-a i do 2016. produžili certifikat „Odobreno od FER-a“. Čitava Algebra grupa je ocijenjena kao vodeći ECDL centar u Hrvatskoj, a istaknuti smo i kao primjer u provedbi EU projekata što je okrunio i posjet povjerenika EU g. Andora. Visoko učilište Algebra od ove godine ima novi logotip i vizualni identitet."
        },
        {
          year: "2015",
          title: "- Visoko učilište Algebra pokreće novi Studij digitalnog marketinga",
          text: "Nakon dvije godine intenzivnih priprema te provedenog postupka inicijalne akreditacije, Visoko učilište Algebra dobilo je u siječnju 2015. dopusnice novi preddiplomski i diplomski Studij digitalnog marketinga, prvi u ovom dijelu Europe. Znamo da je još mnogo toga što treba napraviti ispred nas. Znamo da se tek ponekad smijemo okrenuti i pogledati unazad kako bismo se prisjetili lijepih trenutaka koji su obilježili naših skoro 20 godina rada. Hvala Vam što ste u nas vjerovali sve ove godine i pomogli nam da rastemo."
        },
        {
          year: "2016",
          title: "- Pokrećemo MBA e-leadership studij – doing business in digital economy",
          text: "U svoj sustav pripojili smo jednu od prvih hrvatskih poslovnih škola: International Graduate Business School (IgBS Zagreb) a u svoj program uvodimo i diplomski MBA studij eLeadershipa (eVođenja) na engleskom jeziku. Ovaj studij u većem dijelu izvode nastavnici s University of Indiana, Kelley School of Business, jedne od pet vodećih američkih poslovnih škola prema uglednom poslovnom časopisu Bloomberg, dok su pojedine specifične teme rezervirane za hrvatske i europske profesore."
        }
        
      ];
      
  
    function createCards(startIndex, endIndex, containerId) {
        if (startIndex < 0 || endIndex >= cardData.length || startIndex > endIndex) {
          console.log("Invalid range");
          return;
        }
    
        for (let i = startIndex; i <= endIndex; i++) {
          const data = cardData[i];
          const cardHTML = `
            <div class="card">
            <div class="card-title" style="display: flex; gap: 1rem;">
            <div style="color: blue;">${data.year}</div>  ${data.title}
          </div>
              <div class="card-line"></div>
              <div class="card-text">${data.text}</div>
            </div>
          `;
          $(containerId).append(cardHTML);
        }
      }
    
      // Group 1: Cards 1 to 3 (index 0 to 2) 
      createCards(0, 2, '#cards-container1');
    
      // Group 2: Rest 
      createCards(3, cardData.length - 1, '#cards-container2');
    });
  