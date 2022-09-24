class Road {
  constructor(x, width, laneCount = 3) {
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;

    this.left = x - width / 2;
    this.right = x + width / 2;

    const infinity = 10e6;
    this.top = -infinity;
    this.bottom = infinity;

    const topLeft = { x: this.left, y: this.top };
    const bottomLeft = { x: this.left, y: this.bottom };
    const topRight = { x: this.right, y: this.top };
    const bottomRight = { x: this.right, y: this.bottom };
    this.borders = [
      [topRight, bottomRight],
      [topLeft, bottomLeft],
    ];
  }

  getLaneCenter(laneIndex) {
    const laneWidth = this.width / this.laneCount;
    return (
      this.left +
      laneWidth / 2 +
      Math.min(laneIndex, this.laneCount - 1) * laneWidth
    );
  }

  draw(context) {
    context.lineWidth = 5;
    context.strokeStyle = "white";
    for (let i = 1; i <= this.laneCount - 1; i++) {
      const x = lerp(this.left, this.right, i / this.laneCount);

      context.setLineDash([20, 20]);

      context.beginPath();
      context.moveTo(x, this.top);
      context.lineTo(x, this.bottom);
      context.stroke();
    }

    context.setLineDash([]);

    this.borders.forEach(function (b) {
      context.beginPath();
      context.moveTo(b[0].x, b[0].y);
      context.lineTo(b[1].x, b[1].y);
      context.stroke();
    });
  }
}
