class Umbrella{
    constructor(x, y){
        var options={
            isStatic:true
        }
        this.r=50
        this.umbrella=Bodies.circle(x, y, 50, options)
        this.image=loadImage("proc41images\images\Walking Frame\walking_2.png")
        World.add(world, this.umbrella)
    }

    display(){
        imageMode(CENTRE)
        image(this.umbrella.position.x, this.umbrella.position.y+70, 300, 300)    }

}