const {
  Engine,
  World,
  Bodies,
  Constraint,
} = Matter;

var walls = [];
var player, engine, world, grappler;
var entities = [];
function setup() {
  engine = Matter.Engine.create();
  world = engine.world;
  createCanvas(windowWidth, windowHeight);
  background(0);

  walls.push(new Wall(width/2, height-10, width-40, 20));
  walls.push(new Wall(10, height/2, 20, height));
  walls.push(new Wall(width-10, height/2, 20, height));
  walls.push(new Wall(width/2, 10, width-40, 20));
  player = new Entity(width/2, height/2, 25);
  entities.push(player);
  //grappler = new Grappler(width/2, height/2, player.body);

}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  for (var wall of walls) {
    wall.show();
  }
  for (var entity of entities) {
    entity.show();
  }
  //player.show();
  if (grappler) {
    grappler.show();
  }

}

function mouseClicked() {
  if (grappler) {
    grappler.release();
    grappler = null;
  } else {
    grappler = new Grappler(mouseX, mouseY, player.body);
  }



}
