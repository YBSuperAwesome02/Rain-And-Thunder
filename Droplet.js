class Drop{
    constructor(x, y){
        var options={
            restitution:0.2,
            friction:0.001
        }
        this.radius = 5
        this.body = Bodies.circle(x, y, 5, options)
        World.add(world, this.body)
    }

    display(){
        fill(0, 0, 255)
        ellipseMode(CENTRE)
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
    }

    update(){
        if(this.body.position.y>700){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 700)})
        }
    }

}