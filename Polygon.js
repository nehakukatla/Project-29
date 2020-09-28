class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic: true
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("purple");
        fill(222,203,233);
        ellipse(pos.x,pos.y,this.radius,this.radius);

    }
}