// import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
console.log(
  "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
);

gsap.registerPlugin(ScrollTrigger);
const mediaQuery = window.matchMedia("(min-width: 1024px)");
function pathParis() {
  if (mediaQuery.matches) {
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
        trigger: ".header__container",
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 9%",
        end: "top -10vh",
        scrub: true,
      },
    })
    .to(".header__container", {
      height: "80vh",
      ease: "circ",
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__book",
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 25%",
        end: "top 10%",
        scrub: true,
      },
    })
    .to(".location-section__robert", {
      right: "0",
      ease: "none",
    });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__book",
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "bottom 0%",
        end: "bottom -300%",
        scrub: true,
      },
    })
    .to(".white", {
      height: "101vh",
      width: "100vw",
      ease: "none",
    })
    .to(".white", {
      position: "relative",
      ease: "none",
    });
  function applyScrollAnimation(id) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id}`,
          // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 160vh",
          end: "bottom 0vh",
          scrub: true,
        },
      })
      .to(`#${id} .location-section__rectangle__fixed`, {
        opacity: "1",
        ease: "circ.out",
      })
      .to(`#${id} .location-section__rectangle__fixed`, {
        opacity: "0",
        ease: "circ.out",
      });
  }
  console.log(
    "test test test zeg staat dit ding wel aan want ik wil helemaal gaan"
  );

  applyScrollAnimation("margareta");
  applyScrollAnimation("catharina");
  applyScrollAnimation("henrica");
  function applyScrollAnimationImages(id) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `#${id}`,
          // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 160vh",
          end: "bottom 0vh",
          scrub: true,
        },
      })
      .to(`#${id} .location-section__frame__fixed`, {
        opacity: "1",
        // width: "100vw",
        // top: "120vh",
        //   left: "0",
        //   rig: "100vh",
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

  function workshopData() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".location-section__workshop__presses",
          // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
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
          trigger: ".location-section__workshop__printers",
          //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
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
          trigger: ".location-section__workshop__compositors",
          //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
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
          trigger: ".location-section__workshop__proofreaders",
          //   markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      })
      .to(`.location-section__workshop__proofreaders img`, {
        scale: 1,
        ease: "bounce.inOut",
        stagger: {
          each: 0.1,
          from: "random",
          grid: "auto",
          amount: 1,
        },
      });
  }
}
function nameCleared() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__cleared",
        markers: { fontSize: "25px", fontWeight: "bold" },
        start: "top 40%",
        end: "bottom 40%",
        scrub: true,
      },
    })
    .to(`.cleared`, {
      backgroundPosition: "150vh 0%",
      ease: "none",
    });
}

function storkAnimation() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".location-section__birth",
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top top",
        end: "bottom 170%",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress >= 0.1) {
            console.log(self.progress);
            gsap.set(".location-section__birth--info p:nth-child(1)", {
              display: "block",
              opacity: 1,
            });
            if (self.progress >= 0.2) {
              console.log(self.progress);
              gsap.set(".location-section__birth--info p:nth-child(2)", {
                display: "block",
                opacity: 1,
              });
            }
            if (self.progress >= 0.4) {
              console.log(self.progress);
              gsap.set(".location-section__birth--info p:nth-child(3)", {
                display: "block",
                opacity: 1,
              });
            }
            if (self.progress >= 0.5) {
              console.log(self.progress);
              gsap.set(".location-section__birth--info p:nth-child(4)", {
                display: "block",
                opacity: 1,
              });
            }
            if (self.progress >= 0.6) {
              console.log(self.progress);
              gsap.set(".location-section__birth--year", {
                display: "block",
                opacity: 1,
              });
            }
          }
        },
        onLeaveBack: () => {
          gsap.set(".location-section__birth--year", {
            display: "none",
            opacity: 0,
          });
          gsap.set(".location-section__birth--info p:nth-child(1)", {
            display: "none",
            opacity: 0,
          });
          gsap.set(".location-section__birth--info p:nth-child(2)", {
            display: "none",
            opacity: 0,
          });
          gsap.set(".location-section__birth--info p:nth-child(3)", {
            display: "none",
            opacity: 0,
          });
          gsap.set(".location-section__birth--info p:nth-child(4)", {
            display: "none",
            opacity: 0,
          });
        },
      },
    })
    .to(".location-section__storkBaby", {
      left: "100%",
      ease: "none",
    });
}
function carveAnimation() {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".location-section__newlife",
      // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
      start: "top top",
      end: "bottom 170%",
      scrub: true,
      onUpdate: (self) => {
        if (self.progress >= 0.1) {
          console.log(self.progress);
          gsap.set(".location-section__newlife--hammer", {
            rotate: "30deg",
            ease: "back.inOut",
          });
          if (self.progress >= 0.3) {
            console.log(self.progress);
            gsap.set(".location-section__newlife--hammer", {
              rotate: "50deg",
              ease: "back.inOut",
            });
          }
          if (self.progress >= 0.5) {
            console.log(self.progress);
            gsap.set(".location-section__newlife--hammer", {
              rotate: "30deg",
              ease: "back.inOut",
            });
          }
          if (self.progress >= 0.7) {
            console.log(self.progress);
            gsap.set(".location-section__newlife--hammer", {
              rotate: "50deg",
              ease: "back.inOut",
            });
          }
          if (self.progress >= 1) {
            console.log(self.progress);
            gsap.set(".location-section__newlife--hammer", {
              rotate: "30deg",
              ease: "back.inOut",
            });
          }
          if (self.progress >= 1) {
            console.log(self.progress);
            gsap.set(".jobs", {
              opacity: "1",
              ease: "back.inOut",
            });
          }
        }
      },
      onLeaveBack: () => {
        gsap.set(".location-section__newlife--hammer", {
          rotate: "50deg",
        });
        gsap.set(".jobs", {
          opacity: "0.25",
        });
      },
    },
  });
}
