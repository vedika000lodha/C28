class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB ;
        World.add(world, this.sling);
    }

    display(){
      if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        console.log(pointB);
        console.log(pointB.x);
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}

    fly(){
        this.sling.bodyA = null ;
    }
    
}