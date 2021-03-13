class Monster {
    constructor(x, y,r) {
      var options = {
          
          
          density:1,
          frictionAir:1
        
      }
      this.x=x;
      this.y=y;
      this.radius=r;
      
      this.body=Bodies.circle(this.x,this.y,r/2,options);
      this.image=loadImage("image/Monster-01.png");
      
      World.add(world, this.body);
    }
    display(){
      var monsterpos =this.body.position;
      push();
      //translate(monsterpos.x, monsterpos.y);
      ellipseMode(RADIUS)
      strokeWeight(4);
      stroke("white");
      fill("white");
     image(this.image,0,0,this.radius*2,this.radius*2);
      pop();
    
    }
}