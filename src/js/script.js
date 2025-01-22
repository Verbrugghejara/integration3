// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const init = () => {
  if (mediaQuery.matches) {
    // Registreer de plugin
    gsap.registerPlugin(ScrollTrigger);
    console.log(gsap);
    console.log(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".header__container", // Het element dat de animatie activeert
          //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 9%", // Wanneer de bovenkant van het element het midden van de viewport raakt
          end: "top 1%", // Wanneer de onderkant van het element het midden van de viewport raakt
          scrub: true, // Synchroniseer animatie met scrollen
        },
      })
      .to(".header__container", {
        height: "81vh", // Verander de hoogte van de header__container bij scrollen
        ease: "circ",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".location-section__book", // Het element dat de animatie activeert
          // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 15%", // Wanneer de bovenkant van het element het midden van de viewport raakt
          end: "top 0%", // Wanneer de onderkant van het element het midden van de viewport raakt
          scrub: true, // Synchroniseer animatie met scrollen
        },
      })
      .to(".location-section__robert", {
        right: "0", // Verander de hoogte van de header__container bij scrollen
        ease: "none",
      });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".location-section__book", // Het element dat de animatie activeert
          //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "bottom 0%", // Wanneer de bovenkant van het element het midden van de viewport raakt
          end: "bottom -90%", // Wanneer de onderkant van het element het midden van de viewport raakt
          scrub: true, // Synchroniseer animatie met scrollen
        },
      })
      .to(".white", {
        height: "100vh", // Verander de hoogte van de header__container bij scrollen
        width: "100vw", // Verander de hoogte van de header__container bij scrollen
        top: "120vh", // Verander de hoogte van de header__container bij scrollen
        //   left: "0", // Verander de hoogte van de header__container bij scrollen
        //   rig: "100vh", // Verander de hoogte van de header__container bij scrollen
        ease: "none",
      });
    function applyScrollAnimation(id) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#${id}`, // Het element dat de animatie activeert, gebaseerd op het id
            // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
            start: "top 30%", // Wanneer de bovenkant van het element het midden van de viewport raakt
            end: "bottom 50%", // Wanneer de onderkant van het element het midden van de viewport raakt
            scrub: true, // Synchroniseer animatie met scrollen
          },
        })
        .to(`#${id} .location-section__rectangle__fixed`, {
          opacity: "1", // Verander de hoogte van de header__container bij scrollen
          ease: "circ.out",
        })
        .to(`#${id} .location-section__rectangle__fixed`, {
          opacity: "0", // Laat de opacity teruggaan naar 0
          ease: "circ.out",
        });
    }

    // Roep de functie aan voor het element #margareta (of een ander ID)
    applyScrollAnimation("margareta");
    applyScrollAnimation("catharina");
    applyScrollAnimation("henrica");
    function applyScrollAnimationImages(id) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#${id}`, // Het element dat de animatie activeert
            //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
            start: "top 30%", // Wanneer de bovenkant van het element het midden van de viewport raakt
            end: "bottom 50%", // Wanneer de onderkant van het element het midden van de viewport raakt
            scrub: true, // Synchroniseer animatie met scrollen
          },
        })
        .to(`#${id} .location-section__frame__fixed`, {
          opacity: "1", // Verander de hoogte van de header__container bij scrollen
          // width: "100vw", // Verander de hoogte van de header__container bij scrollen
          // top: "120vh", // Verander de hoogte van de header__container bij scrollen
          //   left: "0", // Verander de hoogte van de header__container bij scrollen
          //   rig: "100vh", // Verander de hoogte van de header__container bij scrollen
          ease: "circ.out",
        })
        .to(`#${id} .location-section__frame__fixed`, {
          opacity: "0", // Laat de opacity teruggaan naar 0
          ease: "circ.out",
        });
    }

    // Roep de functie aan voor het element #margareta (of een ander ID)
    applyScrollAnimationImages("martina");
    applyScrollAnimationImages("magdalena");
  }
};
init();
