class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }

//to remove ships from the world
  remove(index) {
  this.animation=brokenBoatAnimation
this.speed=0.05;
this.width=300;
this.height=300;
this.isBroken=true;
setTimeout(()=>{
  Matter.World.remove(world, boats[index].body),
  boats.splice(index, 1)
},2000)
    
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
  
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
