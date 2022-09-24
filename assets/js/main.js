const canvas = document.getElementById("canvas");
canvas.width = 200;

const context = canvas.getContext("2d");

const road = new Road(canvas.width / 2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(3), 100, 30, 50);
car.draw(context);

animate();

function animate() {
  canvas.height = window.innerHeight;
  car.update();
  road.draw(context);
  car.draw(context);
  requestAnimationFrame(animate);
}
