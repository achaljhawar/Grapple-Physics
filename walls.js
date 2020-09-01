class Wall {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    this.body.isStatic = true;
    Matter.World.add(world, this.body);

    this.w = w;
    this.h = h;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(255);
    fill(255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
