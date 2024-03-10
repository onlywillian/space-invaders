// Define your layers and their speeds
const layers = [
  { src: "background.png", speed: 0.02 },
  { src: "midground.png", speed: 0.06 },
  { src: "foreground.png", speed: 0.12 },
];

// Load all the images
const loadImages = (sources, callback) => {
  let images = {};
  let loadedImages = 0;
  let numImages = sources.length;

  sources.forEach((layer, index) => {
    images[index] = new Image();
    images[index].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[index].src = layer.src;
  });
};

// Draw the images to the canvas
const draw = (ctx, images, dt) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  images.forEach((image, index) => {
    ctx.drawImage(image, layers[index].speed * dt, 0);
  });
};

// Get the canvas context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Load the images and start the game loop
loadImages(layers, (images) => {
  let lastTimestamp;
  const gameLoop = (timestamp) => {
    let dt = lastTimestamp ? timestamp - lastTimestamp : 0;
    draw(ctx, images, dt);
    lastTimestamp = timestamp;
    requestAnimationFrame(gameLoop);
  };
  requestAnimationFrame(gameLoop);
});
