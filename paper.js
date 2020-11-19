class Paper{
    constructor(x, y, radius){
        var options={
            restitution:0.8,
            friction:0.3,
            density:0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        
        push ()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("blue");
        stroke("white");
        ellipse(0, 0, this.radius, this.radius);
        pop ()
        
    }
}