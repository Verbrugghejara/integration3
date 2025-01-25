// Selecteer de container
const mapContainer = document.getElementById("map-container");
const locationContainer = document.querySelector(".location-section");
console.log(locationContainer);
let isClicked = false;
let lastClickedMarker = null;
gsap.registerPlugin(ScrollToPlugin);
// Een array van marker-posities en hun PNG-bestanden
const markers = [
  { locatie: "Paris", top: 22, left: 53.5, image: "/assets/duimspijker" }, // Midden van de kaart
  { locatie: "Caen", top: 20, left: 47, image: "/assets/duimspijker" }, // Linksboven
  {
    locatie: "Saint-Avertin",
    top: 29,
    left: 47.5,
    image: "/assets/duimspijker",
  }, // Rechtsonder
  { locatie: "Antwerp", top: 11.5, left: 60.5, image: "/assets/duimspijker" }, // Rechtsonder
  { locatie: "Leiden", top: 6, left: 66, image: "/assets/duimspijker" }, // Rechtsonder
];

// Functie om markers toe te voegen
function addMarkers() {
  markers.forEach((marker) => {
    // Maak een marker-element
    const markerElement = document.createElement("img");
    markerElement.classList.add("map-section__europe--duimspijker");

    // Stel de afbeelding in als achtergrond
    markerElement.src = `${marker.image}.png`;

    // Stel de positie van de marker in
    markerElement.style.top = `${marker.top}%`;
    markerElement.style.left = `${marker.left}%`;

    markerElement.addEventListener("click", () => {
      initLocations();
      isClicked = true;
      if (lastClickedMarker !== null && lastClickedMarker !== markerElement) {
        lastClickedMarker.src = `${marker.image}.png`; // Zet de vorige marker terug naar normaal
      }

      markerElement.src = `${marker.image}Rood.png`;
      console.log(lastClickedMarker);
      lastClickedMarker = markerElement;
      // alert(`Je hebt geklikt op een marker: ${marker.locatie}`);
      console.log(marker.locatie);
      if (marker.locatie == "Paris") {
        console.log("paris");
        locationParis();
        pathParis();
      } else if (marker.locatie == "Antwerp") {
        locationAntwerp();
      } else if (marker.locatie == "Caen") {
        locationCaen();
      } else if (marker.locatie == "Saint-Avertin") {
        locationAvertin();
      } else if (marker.locatie == "Leiden") {
        locationLeiden();
      }
      console.log(markerElement.src);

      eventListener();
    });
    markerElement.addEventListener("mouseover", () => {
      // Als de marker al geklikt is, verander dan de afbeelding niet bij mouseover
      if (!isClicked) {
        markerElement.src = `${marker.image}Rood.png`;
      }
    });

    markerElement.addEventListener("mouseout", () => {
      console.log(isClicked);
      // Als de marker al geklikt is, verander dan de afbeelding niet bij mouseout
      if (!isClicked) {
        markerElement.src = `${marker.image}.png`;
      }
    });

    // Voeg de marker toe aan de container
    mapContainer.appendChild(markerElement);
    console.log(markerElement);
  });
}

function scrollToLocation() {
  gsap.to(window, {
    duration: 1, // Duur van de animatie in seconden
    scrollTo: {
      y: ".location-section", // Scroll naar de nieuwe inhoud
      offsetY: 10, // Optioneel: ruimte boven de nieuwe sectie
    },
    ease: "power2.out", // Soort animatie
  });
}

function initLocations() {
  isClicked = false;
  locationContainer.innerHTML = "";
}
function locationAntwerp() {
  console.log("Antwerp toegevoegd");
  const html = `<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" class="lucide lucide-arrow-up">
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
      <h2 class=" justify-center location-name" >Antwerp</h2>
    <div class="container">
      <h2 class="highlight mb-sm">1550</h2>
      <p class="mb-md">Plantin arrived in the bustling city of Antwerp, ready to carve out <span class="highlight">a new
          life</span>.
        <br>He began by working as a...
      </p>
      <p class="jobs">bookbinder and leatherworker</p>
    </div>
    <div class="location-section__printer mb-md container">
      <p class="mb-md">He became a burgher of the city, securing his place in its community. With his footing steady, he
        set his
        sights on a
        new ambition, a path that would soon define his <span class="highlight">legacy</span>. By becoming a ...</p>
      <div class="location-section__printer__rectangle">
        <div class="location-section__printer__rectangle__svg ">
          <div class="location-section__printer__rectangle__name">
            <h2>Printer</h2>
          </div>
          <!-- Eerste SVG - linker bovenhoek -->
          <svg class="location-section__printer__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
            <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
          </svg>

          <!-- Tweede SVG - rechter onderhoek -->
          <svg class="location-section__printer__rectangle__svg-corner--bottom" width="56" height="73"
            viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
              stroke="#191923" />
            <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
          </svg>

        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="highlight mb-md text-center">1555</h2>
      <p class="text-center mb-lg">He built his <span class="highlight">business</span> into the largest typographical
        enterprise of the late
        <span class="highlight">16th century</span>, with support from the
        <span class="highlight">'House
          of Love'</span> sect and later <span class="highlight">Calvinist partners</span>.
      </p>
    </div>
    <div class="container">
      <div class="location-section__printer__rectangle">
        <div class="location-section__printer__rectangle__svg">
          <div class="location-section__printer__rectangle__img">
            <img src="/assets/logoPasser2.png" alt="">
          </div>
          <!-- Eerste SVG - linker bovenhoek -->
          <svg class="location-section__printer__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
            <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
          </svg>

          <!-- Tweede SVG - rechter onderhoek -->
          <svg class="location-section__printer__rectangle__svg-corner--bottom" width="56" height="73"
            viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
              stroke="#191923" />
            <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
          </svg>

        </div>
        <div>

          <h2 class="highlight mb-sm">Labore et constantia</h2>
          <p class="mb-lg">
            The logo of the business was carefully chosen, reflecting the essence of its name, <span
              class="highlight">"The
              Golden Compass."</span> Its motto,
            <span class="highlight">labore et constantia</span>, meaning "Through labor and constancy," spoke volumes
            about
            its mission. The words
            symbolized
            <span class="highlight">tireless effort and steadfast dedication</span>, qualities mirrored by a compass,
            always
            working, always circling with
            unwavering constancy.
          </p>
        </div>
      </div>
      <p>
        The logo has been <span class="highlight">modernized</span>, but the <span class="highlight">authentic</span>
        version still remains proudly displayed within the <span class="highlight">building</span>. If
        you're
        curious to see it, you can <span class="highlight">visit</span> the Plantin-Moretus Museum in Antwerp, where it
        stands as a link to the past.
      </p>
      <div class="location-section__printer__button-container">
        
      <button class="buyTicketButton">Buy a ticket</button>
      </div>
    </div>
    <div class="location-section__bijbel container">

      <div class="location-section__bijbel__svg mb-md">
        <img src="/assets/bijbel.png" alt="bijbel Image">
        <svg class="location-section__bijbel__svg-corner" width="131" height="338" viewBox="0 0 131 338" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="2" y1="0" x2="2" y2="130" />
          <line x1="131" y1="2" x2="1" y2="2" />
          <line x1="2" y1="279" x2="2" y2="338" />
        </svg>
        <svg class="location-section__bijbel__svg-corner--bottom" width="131" height="325" viewBox="0 0 131 325"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="128" y1="8.74231e-08" x2="128" y2="59" />
          <line x1="129" y1="325" x2="129" y2="195" />
          <line x1="1.74846e-07" y1="323" x2="130" y2="323" />
        </svg>


      </div>
      <div>
        <h2 class="highlight mb-sm">Biblia Sacra</h2>
        <p class="mb-lg">The Antwerp printer experienced his <span class="highlight">most productive</span> period
          between
          <span class="highlight">1568 and 1572/73</span> and achieved his
          crowning
          accomplishment: the printing of the magnificent <span class="highlight">Biblia Polyglotta</span>.
        </p>
      </div>
    </div>
    <div class="location-section__workshop justify-center container">
      <h2 class="highlight mb-sm">Workshop</h2>
      <p class="location-section__workshop__info text-center mb-lg">His bustling workshop was a hive of activity,
        equipped with <span class="highlight">sixteen
          presses</span> and staffed by a team of <span class="highlight">thirty-two printers</span>, <span
          class="highlight">twenty compositors</span>, <span class="highlight">three proofreaders</span>, and a <span
          class="highlight">host of servants</span>.</p>
      <div class="location-section__workshop__data">

        <p class="location-section__workshop__info--desktop text-center mb-sm">His bustling workshop was a hive of
          activity, equipped with....</p>
        <div class="location-section__workshop__presses">
          <h2 class="mb-md">Sixteen presses</h2>
          <ul>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
            <li><img src="/assets/Drukpers.png" alt=""></li>
          </ul>

        </div>
        <div class="location-section__workshop__printers">
          <h2 class="mb-md">Thirty-two printers</h2>
          <ul>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
          </ul>

        </div>
        <div class="location-section__workshop__compositors">
          <h2 class="mb-md">Twenty compositors</h2>
          <ul>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
          </ul>

        </div>
        <div class="location-section__workshop__proofreaders">
          <h2 class="mb-md">Three proofreaders</h2>
          <ul>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
            <li><img src="/assets/staf.png" alt=""></li>
          </ul>

        </div>
      </div>
      <!-- <div class="location-section__workshop__data">
        data toevoegen
      </div> -->
    </div>
    <div class="location-section__workshop__tampon only-desktop container">
    <div>
    <h2 class="highlight mb-sm">The "tampon"</h2>
    <p class="mb-lg">
    This is one of the steps in the book printing process that involves using a tool called a "tampon." This tool is used to apply ink to the lead letters, which are meticulously arranged to create the text.
      </p>
    </div>
      <img src="/assets/tampon.png" alt="bijbel Image">

    </div>
    <div class="location-section__cross">
      <img src="/assets/cross.png" alt="">
    </div>
    <div class="location-section__son container">
      <h2 class="highlight mb-sm">1589</h2>
      <p class="text-center">After dedicating <span class="highlight">thirty-four years</span> of his life to the craft
        of printing, Christophe Plantin
        <span class="highlight">passed away</span>. His legacy
        lives on, and his final resting place is in <span class="highlight">the grand Cathedral of Our Lady</span>,
        where he was laid to rest with
        honor.
      </p>
    </div>`;
  locationContainer.innerHTML = html;
  scrollToLocation();
}
function locationParis() {
  const html = ` 
  <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" class="lucide lucide-arrow-up">
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
      <h2 class=" justify-center location-name" >Paris</h2>
    <div class="location-section__roman container">
      <div class="location-section__roman__sequence only-desktop">
        <h2 class="highlight mb-sm">The second half of the 16th century</h2>
        <p class="mb-md">This period was a challenge
          for
          writers and printer-publishers. Religious
          intolerance
          was widespread, and in the Southern Netherlands, under Spanish control, everyone was <span
            class="highlight">required to follow</span> the
          official
          faith. Going against this official religion was <span class="highlight">risky</span> and could lead to
          <span class="highlight">serious consequences</span>, which was...
        </p>
        <div class="location-section__rectangle__svg">
          <div class="location-section__rectangle__name">
            <canvas id="romanCatholiscism"></canvas>
          </div>
          <svg class="location-section__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
            <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
          </svg>

          <svg class="location-section__rectangle__svg-corner--bottom" width="56" height="73" viewBox="0 0 56 73"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
              stroke="#191923" />
            <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
          </svg>
        </div>
      </div>
      <div class="only-mobile">
        <p class="mb-md">The second half of the <span class="highlight">16th century</span> was a challenging
          period for
          writers and printer-publishers. Religious
          intolerance
          was widespread, and in the Southern Netherlands, under Spanish control, everyone was<span
            class="highlight">required
            to follow</span> the
          official
          faith. Going against this official religion was <span class="highlight">risky</span> and could lead to
          <span class="highlight">serious consequences</span>, which was...
        </p>
        <div class="location-section__rectangle__svg">
          <div class="location-section__rectangle__name">
            <h2 class="religion-name text-bold padding-md">Roman Catholicism</h2>
          </div>
          <svg class="location-section__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
            <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
          </svg>

          <svg class="location-section__rectangle__svg-corner--bottom" width="56" height="73" viewBox="0 0 56 73"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
              stroke="#191923" />
            <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
          </svg>

        </div>
      </div>
    </div>
    <div class="location-section__raid mb-md container">
      <div>
        <h2 class="highlight mb-sm">1562</h2>
        <p>
          During this time, a <span class="highlight">raid</span> on his print shop
          <span class="highlight">uncovered</span> something important, something
          <span class="highlight">hidden</span>, waiting to be discovered. To uncover
          what it was, you must <span class="highlight">search</span> the page.
        </p>
      </div>
      <img src="/assets/magnifyGlass.png" alt="Magnify Glass">
    </div>
    <div class="location-section__cleared container">
      <p>For a year and a half, he <span class="highlight">hid</span> in Paris, escaping <span
          class="highlight">persecution</span> and waiting for the day his name would be <span
          class="highlight">cleared</span>.</p>
      <p class="cleared highlight">Plantin</p>
      <!-- <div class="masked-text">
        <img class="background" src="/assets/dirty.png" alt="Dirty Background">
        <span class="text-mask">Plantin</span>
      </div> -->
    </div>
    <div class="location-section__paris container mb-lg">
      <div class="location-section__paris-path">
        <p>
        He made his way back to Antwerp, only to discover that during his absence, all of his cherished furniture had been sold off to the public.
        </p>
        <p class="location-paris">
        Paris
        </p>
        <p class="location-antwerp">
        Antwerp
        </p>
        <svg width="1105" height="787" viewBox="0 0 1105 787" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="motionPath" d="M1 2C98.51 27.16 196.45 54.11 286.12 99.96C375.78 145.81 457.59 212.3 505.77 300.74C525.53 337.02 539.02 382.59 518.78 418.61C499.64 452.66 454.67 465.99 416.6 457.29C368.54 446.31 329.65 403.92 321.4 355.32C313.15 306.71 335.21 254.6 374.98 225.46C414.76 196.33 470.19 190.81 515.54 210.15C563.7 230.69 597.5 275.14 622.06 321.37C646.62 367.6 664.35 417.52 692.77 461.5C740.85 535.92 815.85 588.04 888.89 638.18C960.24 687.17 1031.59 736.15 1102.95 785.14" stroke="black" stroke-width="4" stroke-miterlimit="10"/>
        </svg>
        <img class="sold" src="/assets/sold.png" alt="sold stamp">
        
      </div>

    </div>
    <div class="location-section__partners">
      <p class=" container" class="text-center">It seemed that the creditors and wholesale <span class="highlight">buyers were
          friends</span> of Plantin. Through their support, he managed to prevent
        the government from <span class="highlight">seizing</span> his property. In time, these allies became his <span
          class="highlight">trusted partners</span>.</p>
          
        <img class="shaking--hands" src="/assets/shakingHands.png" alt="Shaking hands">

    </div>
`;

  locationContainer.innerHTML = html;
  init2();
  scrollToLocation();
}
function locationCaen() {
  const html = `    <div class="dark-background container">
      <svg class="arrow" style="border: 2px solid #FFF6E7" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" class="lucide lucide-arrow-up">
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
      <h2 class=" justify-center location-name" >Caen</h2>
      <div class="location-section__container">
        <div class="location-section__book">
          <img src="/assets/book2.png" alt="Book Image">
          <svg class="location-section__book__svg-corner" width="131" height="338" viewBox="0 0 131 338" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="0" x2="2" y2="130" stroke="#FFF6E7" />
            <line x1="131" y1="2" x2="1" y2="2" stroke="#FFF6E7" />
            <line x1="2" y1="279" x2="2" y2="338" stroke="#FFF6E7" />
          </svg>
          <svg class="location-section__book__svg-corner--bottom" width="131" height="325" viewBox="0 0 131 325"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="128" y1="8.74231e-08" x2="128" y2="59" stroke="#FFF6E7" />
            <line x1="129" y1="325" x2="129" y2="195" stroke="#FFF6E7" />
            <line x1="1.74846e-07" y1="323" x2="130" y2="323" stroke="#FFF6E7" />
          </svg>


        </div>
        <p>Plantin <span class="highlight">learned</span> bookbinding and printing from...</p>
      </div>
      <div class="location-section__robert">

        <h2>Robert II macé</h2>
      </div>
    </div>
    <div class="test">
      <div class="white"></div>
    </div>
    <div class="location-section__jeanne">
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
    stroke-linejoin="round" class="lucide lucide-arrow-up">
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </svg>
      <h2>In <span class="highlight">Caen</span> he met...</h2>
      <div class="location-section__jeanne-content">
        <div class="jeanne-frame">
          <img class="jeanne-image-sm" src="/assets/jeanne2.png" alt="Jeanne">
          <img class="jeanne-image-md" src="/assets/jeanneGroot.png" alt="Jeanne">
          <p class="jeanne-name highlight">Jeanne <br> Rivière</p>
        </div>
        <div class="location-section__jeanne-married">
          <div class="married-info font-alexandria">
            <span>Married</span>
            <span class="married-info-sm">in</span>
            <span>1545</span>
          </div>
          <div class="married-image">
            <img src="/assets/ringen.png" alt="Ringen">
          </div>
        </div>
      </div>
      <p class="location-section__jeanne-family-info">Together they had <span class="highlight">six daughters</span>
        (5 of them reached adulthood) and <span class="highlight">one son</span>.</p>
    </div>
    <div id="margareta" class="location-section__rectangle container">
      <div class="location-section__rectangle__svg location-section__rectangle__fixed">
        <div class="location-section__rectangle__name">
          <h2>Margaretha <br> Plantin</h2>
        </div>
        <!-- Eerste SVG - linker bovenhoek -->
        <svg class="location-section__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
          <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
        </svg>

        <!-- Tweede SVG - rechter onderhoek -->
        <svg class="location-section__rectangle__svg-corner--bottom" width="56" height="73" viewBox="0 0 56 73"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
            stroke="#191923" />
          <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
        </svg>

      </div>
      <div class="location-section__rectangle__info">
        <h2 class="mb-sm highlight">1547-1594</h2>
        <p>Married Frans Raphelengius. She managed the <span class="highlight">bookstore</span> while Frans worked in
          Plantin's print shop as <span class="highlight">proofreader</span>. After
          the siege of Antwerp, they moved to Leiden, where Frans took over the northern branch of the printing house
          and
          became a
          professor. Margareta played an important role in the <span class="highlight">family work</span> and their
          success.</p>

      </div>
    </div>
    <div id="martina" class="location-section__frame container">
      <p class="location-section__frame__background">Martina <br> Plantin</p>
      <div class="location-section__frame__image location-section__frame__fixed">
        <img class="location-section__frame__image__img" src="/assets/MartinaPlantin.jpg" alt="">
        <img class="location-section__frame__image__img-groot" src="/assets/MartinaPlantinGroot.png" alt="">
        <h2 class="location-section__frame__name-martina">Martina <br> Plantin</h2>
      </div>
      <div class="location-section__rectangle__info">
        <h2 class="mb-sm highlight">1550-1616</h2>
        <p>She was the second daughter and a pivotal figure in printing history. As the wife of Jan I <span
            class="highlight">Moretus</span>, she became
          the
          matriarch of a renowned printing dynasty. Her sons, <span class="highlight">Balthasar I and Jan II</span>,
          carried on the family business,
          transforming
          the printing house into a lasting <span class="highlight">success</span>.</p>
      </div>
    </div>
    <div id="catharina" class="location-section__rectangle container">
      <div class="location-section__rectangle__svg location-section__rectangle__fixed">
        <div class="location-section__rectangle__name">
          <h2>Catharina <br> Plantin</h2>
        </div>
        <!-- Eerste SVG - linker bovenhoek -->
        <svg class="location-section__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
          <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
        </svg>

        <!-- Tweede SVG - rechter onderhoek -->
        <svg class="location-section__rectangle__svg-corner--bottom" width="56" height="73" viewBox="0 0 56 73"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
            stroke="#191923" />
          <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
        </svg>

      </div>
      <div class="location-section__rectangle__info">
        <h2 class="mb-sm highlight">1553-1622</h2>
        <p>She traded lace and married Parisian merchant Jean Gassen in June 1571. After his death, she returned to
          <span class="highlight">Antwerp</span> and wed
          Hans Arents (alias Spierinck) in November 1575. She had eight children, one with Gassen.
        </p>

      </div>
    </div>
    <div id="magdalena" class="location-section__frame mb-xl">
      <p class="location-section__frame__background" style="
  font-size: 3.5rem; top: 32px;">Magdalena <br> Plantin</p>
      <div class="location-section__frame__image location-section__frame__fixed">
        <img class="location-section__frame__image__img" src="/assets/MagdalenaPlantin.jpg" alt="">
        <img class="location-section__frame__image__img-groot" src="/assets/MagdalenaPlantinGroot.png" alt="">

        <h2 class="location-section__frame__magdalena" style="
  font-size: 2rem;">Magdalena <br> Plantin</h2>
      </div>
      <h2 class="highlight">1557-1599</h2>
    </div>
    <div id="henrica" class="location-section__rectangle mb-xl">
      <div class="location-section__rectangle__svg location-section__rectangle__fixed">
        <div class="location-section__rectangle__name px-lg">
          <h2 class="">Henrica <br> Plantin</h2>
        </div>
        <!-- Eerste SVG - linker bovenhoek -->
        <svg class="location-section__rectangle__svg-corner" width="97" height="53" viewBox="0 0 97 53" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="2.18557e-08" x2="0.499998" y2="52.9859" stroke="#191923" />
          <line x1="96.2998" y1="0.5" x2="7.58568e-06" y2="0.499992" stroke="#191923" />
        </svg>

        <!-- Tweede SVG - rechter onderhoek -->
        <svg class="location-section__rectangle__svg-corner--bottom" width="56" height="73" viewBox="0 0 56 73"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="71.9095" y2="-0.5" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 72.4492)"
            stroke="#191923" />
          <line x1="0.332031" y1="71.9492" x2="55" y2="71.9492" stroke="#191923" />
        </svg>

      </div>
      <h2 class="highlight">1561-1640</h2>
    </div>
    <div class="location-section__cross">
      <img src="/assets/cross.png" alt="">
    </div>
    <div class="location-section__son container">
      <h2 class="highlight mb-sm">Christoffel Plantin</h2>
      <p>Their <span class="highlight">only</span> son, born in 1566, died in infancy before 1570</p>

    </div>
`;

  locationContainer.innerHTML = html;
  scrollToLocation();
}
function locationLeiden() {
  const html = ` <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-arrow-up">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
    <h2 class=" justify-center location-name">Leiden</h2>
    <div id="alexander" class="location-section__frame ">
      <p class="location-section__frame__background">Alexander <br> Farnese</p>
      <div class="location-section__frame__image">
        <img class="location-section__frame__image__img" src="/assets/alexander.jpg" alt="">
        <img class="location-section__frame__image__img-groot" src="/assets/alexanderGroot.png" alt="">
        <h2 class="location-section__frame__name-alexander">Alexander <br> Farnese</h2>
      </div>
      <div class="location-section__rectangle__info">
        <h2 class="mb-sm highlight">1582</h2>
        <p>After the fall of Lier, when the Spanish governor-general Alexander Farnese launched the siege of Antwerp,
          Plantin
          realized he had no choice but to act. Fearing the city’s capture and the collapse of his printing business, he
          made a
          bold decision. In 1582, he established a backup operation in Leiden, securing a future for his work even in
          the face of
          uncertainty.</p>
      </div>
    </div>
    <div id="justus" class="location-section__frame ">
      <p class="location-section__frame__background">Justus <br> Lipsius</p>
      <div class="location-section__frame__image">
        <img class="location-section__frame__image__img" src="/assets/justus.jpg" alt="">
        <img class="location-section__frame__image__img-groot" src="/assets/justusGroot.png" alt="">
        <h2 class="location-section__frame__name-justus">Justus <br> Lipsius</h2>
      </div>
      <div class="location-section__rectangle__info">
        <!-- <h2 class="mb-sm highlight">1582</h2> -->
        <p>In Leiden, the newly founded university had created new sales opportunities. On the recommendation of the great humanist
        Justus Lipsius, Plantin was appointed as university printer. He established the first scientific publishing house and
        bookshop in the Northern Netherlands there. His sons-in-law now ran the business in Antwerp.</p>
      </div>
    </div>`;
  locationContainer.innerHTML = html;
  scrollToLocation();
}

function pulse() {
  // Selecteer alle punaises
  const pins = document.querySelectorAll(".map-section__europe--duimspijker");
  setInterval(() => {
    // Maak de wiggle animatie met GSAP
    pins.forEach((pin) => {
      // Genereer willekeurige waarden voor de animatie
      const randomDelay = 1 + Math.random() * 9; // Dit geeft een waarde tussen 1 en 10 seconden

      // Toepassen van GSAP animatie
      gsap.fromTo(
        pin,
        {
          // rotation: 0, // Start zonder rotatie
        },
        {
          rotation: "+=15", // Eerst draaien naar 15 graden
          duration: 0.5, // Duurt 0.5 seconden
          delay: randomDelay, // Willekeurige vertraging
          repeat: 1, // Herhaal de animatie oneindig
          yoyo: true, // Herhaal de animatie heen en weer
          ease: "sine.inOut", // Zachte overgang
        }
      );
    });
  }, 11000);
}

// Roep de functie aan
addMarkers();
pulse();
