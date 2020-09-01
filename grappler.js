class Grappler {
  constructor(x, y, body) {
    var options = {
      pointA: {
        x: x,
        y: y
      },
      bodyB: body,
      stiffness: 0.008,
      length: 0,
      damping: 1
    }
    this.grappler = Constraint.create(options);
    Matter.World.add(world, this.grappler);
    this.attatched;
  }

  release() {
    this.grappler.bodyB = null;
  }

  show() {
    if (this.grappler.bodyB) {
      stroke('red');
      line(this.grappler.pointA.x, this.grappler.pointA.y, this.grappler.bodyB.position.x, this.grappler.bodyB.position.y);
    }
  }
}
