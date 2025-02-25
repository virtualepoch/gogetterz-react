import { useEffect, useRef, useState } from "react";

export function ImageEffectCanvas() {
  const canvas = {
    width: "100%",
    maxWidth: "500px",
    boxShadow: "2px 7px 10px 2px rgba(0,0,0,0.5)",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const canvasRef = useRef(null);
  const myImage = new Image();
  const [myImageSrc] = useState(
    "data:image/jpeg;base64,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"
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    myImage.src = myImageSrc;

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 500;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
      let row = [];
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[y * 4 * pixels.width + x * 4];
        const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
        const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red, green, blue);
        const cell = [brightness];
        row.push(cell);
      }
      mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue) {
      return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
      }

      update() {
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];
        let movement = 2.5 - this.speed + this.velocity;

        this.y += movement;
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(241, 229, 172)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    init();
    function animate() {
      ctx.globalAlpha = 0.02;
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        ctx.globalAlpha = particlesArray[i].speed * 0.8;
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ ...canvas }}></canvas>;
}
