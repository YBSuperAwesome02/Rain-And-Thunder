const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var drops=[]
var thunder=0
var maxdrops=100

function preload(){
  thunder1=loadImage("proc41images\images\thunderbolt\th.png")
  thunder2=loadImage("proc41images\images\thunderbolt\thu.png")
  thunder3=loadImage("proc41images\images\thunderbolt\thun.png")
  thunder4=loadImage("proc41images\images\thunderbolt\thund.png")
}

function setup(){
    engine=Engine.create()
    world=Engine.world
    createCanvas(400, 700)

    umbrella = new Umbrella(150, 500)
    if(frameCount%150==0){
        for(var i=0; i<maxdrops; i++){
            drops.push(new Droplet(random(0, 400), random(0, 700)))
        }
    }
    
}

function draw(){
    background(0,0,0)
    Engine.update(engine)

    rand=Math.round(random(1, 4))
    if(frameCount%80==0){
        thunder=frameCount
        thunders = createSprite(random(10, 370), random(10, 370), 10, 10)
        switch(rand){
            case 1: thunders.addImage(thunder1)
            break;
            case 2: thunders.addImage(thunder2)
            break;
            case 3: thunders.addImage(thunder3)
            break;
            case 4: thunders.addImage(thunder4)
            break;
            default:break
        }
    
        thunders.scale=random(0.3, 0.6)

    }

    if(thunder+10==frameCount&&thunders){
        thunders.destroy()
    }

    umbrella.display()

    for(var i=0; i<maxdrops; i++){
        drops[i].display()
        drops[i].update()
    }

}   

