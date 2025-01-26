const flags = document.querySelectorAll(".map-section__flag");

const mediaQuery__sm = window.matchMedia("(min-width: 1024px)");
const mediaQuery__md = window.matchMedia("(min-width: 1280px)");
const mediaQuery__lg = window.matchMedia("(min-width: 1440px)");
const mediaQuery__xl = window.matchMedia("(min-width: 1600px)");
const mediaQuery__xxl = window.matchMedia("(min-width: 1920px)");
let startpositie;
let intervalpositie;

if (mediaQuery__sm.matches) {
  startpositie = "21vw";
  intervalpositie = "18vw";
}
if (mediaQuery__md.matches) {
  startpositie = "17vw";
  intervalpositie = "14vw";
}
if (mediaQuery__lg.matches) {
  startpositie = "15vw";
  intervalpositie = "12vw";
}
if (mediaQuery__xl.matches) {
  startpositie = "13vw";
  intervalpositie = "10vw";
}
if (mediaQuery__xxl.matches) {
  startpositie = "11vw";
  intervalpositie = "9vw";
}
// Variabele om het interval op te slaan
let animationInterval = setInterval(() => {
  // Maak de wiggle-animatie met GSAP
  flags.forEach((flag) => {
    // Toepassen van GSAP animatie
    gsap.fromTo(
      flag,
      {
        // right: "0px", // Startpositie
      },
      {
        right: startpositie, // Animatie naar links
        duration: 0.5, // Duurt 0.5 seconden
        repeat: 1, // Herhaal de animatie eenmaal
        yoyo: true, // Beweeg terug naar de startpositie
        ease: "sine.inOut", // Zachte overgang
      }
    );
  });
}, 2000);

function eventListener() {
  console.log("--------");
  const url =
    "https://ttk.recreatex.be/Exhibitions/Register?ID=193d593e-f57a-ed11-9592-a48785620fa0&refresh=y&language=nl";

  // Selecteer alle buttons met de klasse buyTicketButton
  const buttons = document.querySelectorAll(".buyTicketButton");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("click");
      window.open(url, "_blank"); // Open de URL in een nieuwe tab
    });
  });

  console.log("eventListener");

  flags.forEach((flag) => {
    let isMoved = false; // Variabele om bij te houden of de knop al is verplaatst
    flag.style.right = intervalpositie;
    flag.addEventListener("click", () => {
      clearInterval(animationInterval); // Stop het interval
      console.log("flag clicked");

      if (isMoved) {
        // Als de knop al is verplaatst, breng het dan terug naar de originele positie
        gsap.fromTo(
          flag,
          { right: "800px" }, // Startpositie als het al verplaatst is
          { right: intervalpositie, duration: 0.5, ease: "sine.inOut" }
        );
      } else {
        // Als de knop nog niet is verplaatst, verplaats het naar -221% naar rechts
        gsap.fromTo(
          flag,
          { right: startpositie }, // Startpositie
          { right: "800px", duration: 0.5, ease: "sine.inOut" }
        );
      }

      // Toggle de staat van de knop
      isMoved = !isMoved; // Als het verplaatst is, zet het terug naar niet-verplaatst, en vice versa
    });
  });

  const arrows = document.querySelectorAll(".arrow");
  // Maak de wiggle animatie met GSAP
  arrows.forEach((arrow) => {
    console.log("click");
    // Genereer willekeurige waarden voor de animatie
    arrow.addEventListener("click", () => {
      // Toepassen van GSAP animatie
      gsap.to(window, {
        duration: 1, // Duur van de animatie in seconden
        scrollTo: {
          y: ".map-section", // Scroll naar de nieuwe inhoud
          offsetY: -40, // Optioneel: ruimte boven de nieuwe sectie
        },
        ease: "power2.out", // Soort animatie
      });
    });
  });
}
function printerLever() {
  const lever = document.querySelector(".location-section__printer--lever");
  console.log(lever);
  lever.addEventListener("click", () => {
    gsap.to(".location-section__printer--lever", {
      rotate: 30, // Roteer de afbeelding
      duration: 0.5,
      yoyo: true, // Keer terug naar oorspronkelijke positie
      repeat: 1, // Herhaal eenmaal
    });
    gsap.to(`.location-section__printer__rectangle__name h2`, {
      transform: "rotateY(0)",
      delay: 0.5,
      duration: 1,
      ease: "back.in",
    });
  });
  const button = document.querySelector(".location-section__printer--button");
  console.log(button);
  button.addEventListener("click", () => {
    gsap.to(`.location-section__printer__rectangle__name h2`, {
      transform: "rotateY(0)",
      delay: 0.5,
      duration: 1,
      ease: "back.in",
    });
  });
}
console.log("weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerk");
// printerLever();
eventListener();
