class Mango{
    constructor(x,y,r,h){
        var options={
           isStatic: true,
           restitution: 0,
           friction:1     
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage ("mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
    }
}