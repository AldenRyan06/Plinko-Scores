class Particle{
    constructor(x, y, r){
        var options ={
            restitution: 0.4,
            density: 1.2 
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0,255), random(0, 255));
        World.add(world, this.body);
 
        if(this.body.position.x<80){
            score = score+100
          }
          if(this.body.position.x>80&&this.body.position.x<160){
            score = score+150
          }
          if(this.body.position.x>160&&this.body.position.x<320){
            score = score+200
          }
          if(this.body.position.x>320&&this.body.position.x<400){
            score = score+150
          }
          if(this.body.position.x>400&&this.body.position.x<480){
            score = score+100
          }
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}