class dustbin{
    constructor(x, y, width, height) {
        var options = {
            //'restitution':0.8,
           // 'friction':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
      }
      display(){
        var pos  = this.body.position;
        rectMode(CENTER);
        fill ("green")
        rect(pos.x,pos.y,this.width,this.height);
        
        image(this.image, 1200, 550, 224,224);
        
      }
}