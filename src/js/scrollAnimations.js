// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
console.log(
  "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
);

gsap.registerPlugin(ScrollTrigger);
const mediaQuery = window.matchMedia("(min-width: 1024px)");
function pathParis() {
  if (mediaQuery.matches){
  const path = document.querySelector("#motionPath");
  const pathLength = path.getTotalLength();

  // Stel de initiële dasharray en dashoffset in
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength; // Verberg het pad aan het begin

  // Maak een animatie voor het pad
  gsap.to("#motionPath", {
    strokeDasharray: pathLength, // Zorg ervoor dat dit overeenkomt met de totale lengte van je pad
    strokeDashoffset: 0, // Het pad volledig zichtbaar maken
    duration: 3,
    scrollTrigger: {
      trigger: ".location-section__paris", // Het element dat scroll triggert
      start: "top top", // Start de animatie wanneer de bovenkant van de trigger in beeld is
      end: "bottom bottom", // Eindigt wanneer het einde van de trigger in beeld is
      scrub: true, 
      onUpdate: (self) => {
        if (self.progress >= 0.95) {
          gsap.set(".sold", { display: "block", opacity: 1, delay: 0.5 }); // Sold zichtbaar maken
          gsap.to(".location-antwerp", {
            display: "block",
          }); 
        }
      },
      onLeaveBack: () => gsap.set(".location-antwerp", { display: "none" }),
      onLeaveBack: () => gsap.set(".sold", { display: "none" }),
    },
  });

  // Zorg dat "Paris" zichtbaar wordt
  gsap.to(".location-paris", {
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".location-section__paris",
      start: "top top",
      onEnter: () => gsap.set(".location-paris", { display: "block" }),
      onLeaveBack: () => gsap.set(".location-paris", { display: "none" }),
    },
  });

  }
}
if (mediaQuery.matches) {

  gsap.registerPlugin(ScrollTrigger); // Registreer de plugin
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".header__container", // Het element dat de animatie activeert
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 9%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "top -10vh", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(".header__container", {
      height: "80vh", // Verander de hoogte van de header__container bij scrollen
      ease: "circ",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__book", // Het element dat de animatie activeert
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 25%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "top 10%", // Wanneer de onderkant van het element het midden van de viewport raakt
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
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "bottom 0%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "bottom -300%", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(".white", {
      height: "101vh", // Verander de hoogte van de header__container bij scrollen
      width: "100vw", // Verander de hoogte van de header__container bij scrollen
      // top: "120vh", // Verander de hoogte van de header__container bij scrollen
      //   left: "0", // Verander de hoogte van de header__container bij scrollen
      //   rig: "100vh", // Verander de hoogte van de header__container bij scrollen
      ease: "none",
    })
    .to(".white", {
      position: "relative",
      // height: "290vh", // Verander de hoogte van de header__container bij scrollen
      // width: "100vw", // Verander de hoogte van de header__container bij scrollen
      // top: "120vh", // Verander de hoogte van de header__container bij scrollen
      //   left: "0", // Verander de hoogte van de header__container bij scrollen
      //   rig: "100vh", // Verander de hoogte van de header__container bij scrollen
      ease: "none",
    });
  function applyScrollAnimation(id) {
    console.log(
      "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id}`, // Het element dat de animatie activeert, gebaseerd op het id
          // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 160vh", // Wanneer de bovenkant van het element het midden van de viewport raakt
          end: "bottom 0vh", // Wanneer de onderkant van het element het midden van de viewport raakt
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
  console.log(
    "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
  );

  // Roep de functie aan voor het element #margareta (of een ander ID)
  applyScrollAnimation("margareta");
  applyScrollAnimation("catharina");
  applyScrollAnimation("henrica");
  function applyScrollAnimationImages(id) {
    console.log(
      "test test test zeg stssssssaat dit ding wel aan want ik wil helemaal gaan"
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id}`, // Het element dat de animatie activeert
          markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 160vh", // Wanneer de bovenkant van het element het midden van de viewport raakt
          end: "bottom 0vh", // Wanneer de onderkant van het element het midden van de viewport raakt
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
  console.log(
    "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
  );

  // Roep de functie aan voor het element #margareta (of een ander ID)
  applyScrollAnimationImages("martina");
  applyScrollAnimationImages("magdalena");
  console.log(
    "sssssssest test test zeg staat dit ding wel aan want ik wil helemaal gaan"
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__workshop__presses", // Het element dat de animatie activeert
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 70%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "bottom 60%", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(`.location-section__workshop__presses img`, {
      scale: 1, // Vergroot afbeeldingen bij scrollen
      // rotation: 360, // Laat afbeeldingen volledig draaien
      ease: "bounce.inOut",
      stagger: {
        each: 0.1,
        from: "random", // Willekeurige volgorde
        grid: "auto", // Gebruik automatische grid
        amount: 1, // Spreid de animaties over 1 seconde
      },
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__workshop__printers", // Het element dat de animatie activeert
        //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 70%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "bottom 60%", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(`.location-section__workshop__printers img`, {
      scale: 1, // Vergroot afbeeldingen bij scrollen
      // rotation: 360, // Laat afbeeldingen volledig draaien
      ease: "bounce.inOut",
      stagger: {
        each: 0.1,
        from: "random", // Willekeurige volgorde
        grid: "auto", // Gebruik automatische grid
        amount: 1, // Spreid de animaties over 1 seconde
      },
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__workshop__compositors", // Het element dat de animatie activeert
        //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 70%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "bottom 60%", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(`.location-section__workshop__compositors img`, {
      scale: 1, // Vergroot afbeeldingen bij scrollen
      // rotation: 360, // Laat afbeeldingen volledig draaien
      ease: "bounce.inOut",
      stagger: {
        each: 0.1,
        from: "random", // Willekeurige volgorde
        grid: "auto", // Gebruik automatische grid
        amount: 1, // Spreid de animaties over 1 seconde
      },
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__workshop__proofreaders", // Het element dat de animatie activeert
        //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 70%", // Wanneer de bovenkant van het element het midden van de viewport raakt
        end: "bottom 60%", // Wanneer de onderkant van het element het midden van de viewport raakt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(`.location-section__workshop__proofreaders img`, {
      scale: 1, // Vergroot afbeeldingen bij scrollen
      // rotation: 360, // Laat afbeeldingen volledig draaien
      ease: "bounce.inOut",
      stagger: {
        each: 0.1,
        from: "random", // Willekeurige volgorde
        grid: "auto", // Gebruik automatische grid
        amount: 1, // Spreid de animaties over 1 seconde
      },
    });
  // const gifImage = document.getElementById("gif-image");

  // // Aantal frames in de GIF en de bijbehorende bronbestanden
  // const gifFrames = [
  //   "/assets/romanCatholicism00.gif",
  //   "/assets/romanCatholicism01.gif",
  //   "/assets/romanCatholicism02.gif",
  //   "/assets/romanCatholicism03.gif",
  //   "/assets/romanCatholicism04.gif",
  //   "/assets/romanCatholicism05.gif",
  //   "/assets/romanCatholicism06.gif",
  //   "/assets/romanCatholicism07.gif",
  //   "/assets/romanCatholicism08.gif",
  //   "/assets/romanCatholicism09.gif",
  //   // Voeg hier zoveel frames toe als nodig
  // ];

  // gsap.to(gifImage, {
  //   scrollTrigger: {
  //     trigger: ".gif-container", // Trigger de animatie wanneer de container in beeld komt
  //     start: "top bottom", // Start de animatie wanneer de bovenkant van de container de onderkant van de viewport raakt
  //     end: "bottom top", // Eindig de animatie wanneer de onderkant van de container de bovenkant van de viewport bereikt
  //     scrub: true, // Synchroniseer de animatie met scrollen
  //     markers: true, // Zet markers aan voor debugging (verwijder voor productie)
  //   },
  //   onUpdate: function () {
  //     // Bereken welk frame we moeten tonen op basis van de scrollpositie
  //     const scrollProgress = ScrollTrigger.progress;
  //     const currentFrame = Math.floor(
  //       scrollProgress * (gifFrames.length - 1)
  //     ); // Frame index berekenen

  //     // Verander de src van de GIF afhankelijk van het frame
  //     gifImage.src = gifFrames[currentFrame];
  //   },
  //   ease: "none",
  // });
}
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".location-section__cleared", // Het element dat de animatie activeert
      markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
      start: "top 40%", // Wanneer de bovenkant van het element het midden van de viewport raakt
      end: "bottom 40%", // Wanneer de onderkant van het element het midden van de viewport raakt
      scrub: true, // Synchroniseer animatie met scrollen
    },
  })
  .to(`.cleared`, {
    // backgroundSize: "200%", // Vergroot de achtergrond om deze te laten "verdwijnen"
    backgroundPosition: "150vh 0%", // Verschuif de achtergrond naar beneden
    ease: "none",
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".location-section__printer__rectangle", // Het element dat de animatie activeert
      //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
      start: "top 50%", // Wanneer de bovenkant van het element het midden van de viewport raakt
      end: "bottom 30%", // Wanneer de onderkant van het element het midden van de viewport raakt
      scrub: true, // Synchroniseer animatie met scrollen
    },
  })
  .to(`.location-section__printer__rectangle__name h2`, {
    transform: "rotateY(0)",
    // backgroundSize: "200%", // Vergroot de achtergrond om deze te laten "verdwijnen"
    // backgroundPosition: "-150% 0%", // Verschuif de achtergrond naar beneden
    ease: "none",
  });
