class Hero {
  constructor(x, y,r) {
    var options = {
        
        frictionAir:1,
        density:1.
        
      
    }
    this.x=x;
    this.y=y;
    this.radius=r;
    
    this.body=Bodies.circle(this.x,this.y,r/2,options);
    this.image=loadImage("image/Superhero-01.png");
    
    World.add(world, this.body);
  }
  display(){
    var heropos =this.body.position;
    
    push();
    translate(heropos.x, heropos.y);
    ellipseMode(RADIUS)
    strokeWeight(4);
    stroke("white");
    fill("white");
   image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
  }
};

  