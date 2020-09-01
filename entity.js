class Entity {
  constructor(x, y, r) {
    var options = {
      friction: 0.05,
      restitution: 1
    }
    this.body = Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body)
    this.size = r;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y+this.size/2);
    rotate(angle);
    stroke(255)
    fill(255);
    ellipseMode(CENTER);
    circle(0, 0, this.size);
    pop();
  }
}
