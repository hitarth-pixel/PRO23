class paper {

    constructor(x, y,radius) {
        var options = {
            isStatic:false,
             restitution:0.3,
              friction:0.5,
              density:1.2
          }
        this.body = Bodies.circle(x,y,20,options);
         World.add(world, this.body);
         this.image=loadImage("paper.png");

      }
      display(){
        var pos =this.body.position;
       
       
        push();
        translate(pos.x, pos.y);
       
       
        imageMode(CENTER);
        image(this.image,0, 0, 40,40);

        pop();
      }




}