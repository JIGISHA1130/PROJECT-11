var ship,shipimage,sea,seaimage

function preload(){
// Load the image and audio files....
  
  shipimage =
    loadAnimation("ship-1.png","ship-2.png")
  
  seaimage =
    loadImage("sea.png")
  redlight=loadAnimation("ship-3.png","ship-4.png")
} 

function setup(){
  createCanvas(400,400);
  
    sea = createSprite (200,200,400,400)
  sea.addImage("sea",seaimage)
  sea.scale=0.3
  
  ship=createSprite(200,200,400,20)
  ship.addAnimation("ship",shipimage)
  ship.addAnimation("light",redlight)
  ship.scale=0.2
  
 
  
}

function draw() {
  background("blue");
 sea.velocityX=-5
  
 drawSprites()
    if (sea.x < 0){
    sea.x=200
    }
    
  if(keyWentDown("space")){
    ship.changeAnimation("light",redlight)
  }
  else if(keyWentUp("space")){
    ship.changeAnimation("ship",shipimage)
  }
  
                                
  

}

