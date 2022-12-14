const canvas = document.getElementById("canvas");
canvas.width = 200;

const context = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
  canvas.height = window.innerHeight;

  car.update(road.borders);

  context.save();
  context.translate(0, -car.y + canvas.height * 0.8);

  road.draw(context);
  car.draw(context);

  context.restore();
  requestAnimationFrame(animate);
}
