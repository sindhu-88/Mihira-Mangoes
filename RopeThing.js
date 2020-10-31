class Rope{
    constructor(bodyA, pointB){
              
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.005,
            length:1
        
        }
        this.pointB=pointB;
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }
     
    display(){
        
       
        var pointA = this.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(2);
        
        line(pointA.x, pointA.y, pointB.x,point.y);
        
      
    }}