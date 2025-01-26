// console.clear();// Zorg ervoor dat je ScrollTrigger hebt geregistreerd
gsap.registerPlugin(ScrollTrigger);

// Animeren van de cirkel langs het pad tijdens het scrollen

const init2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const canvas = document.getElementById("romanCatholiscism");
  const context = canvas.getContext("2d");

  canvas.width = 1400;
  canvas.height = 590;

  const frameCount = 10;
  const currentFrame = (index) =>
    `/assets/romanCatholiscism/romanCatholiscism_${(index + 1)
      .toString()
      .padStart(5, "0")}.png`;
  const images = [];
  const sword = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
    console.log(img);
  }

  gsap
    .timeline({
      scrollTrigger: {
        trigger: canvas, // Het element dat de animatie activeert
        // markers: { fontSize: "25px", fontWeight: "bold" }, // Visualiseer de start- en eindmarkers
        start: "top 30%", // Start de animatie wanneer de bovenkant van het canvas 30% van de viewport bereikt
        end: "bottom 20%", // Eindig de animatie wanneer de onderkant van het canvas het midden van de viewport bereikt
        scrub: true, // Synchroniseer animatie met scrollen
      },
    })
    .to(sword, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render, // Zorg ervoor dat render wordt aangeroepen bij elke update
    });

  //   gsap.to(sword, {
  //     frame: frameCount - 1,
  //     snap: "frame",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: canvas, // Het canvas element als trigger
  //       markers: true,
  //       start: "top 10%",
  //       end: "bottom 50%", // Eindig de animatie wanneer de onderkant van het canvas de bovenkant van het venster bereikt
  //     },
  //     onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  //   });

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[sword.frame], 0, 0);
  }
};
init2();
