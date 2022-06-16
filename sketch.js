var bgimg,bg
var balloonimg,bln
var obtop1img,obtop2img
var obstop,obstopgroup
var r
var obsbottom1img,obsbottom2img,obsbottom3img
function preload(){
bgimg = loadImage("assets/bg.png")
obtop1img = loadImage("assets/obsTop1.png")
obtop2img = loadImage("assets/obsTop2.png")
obsbottom1img =loadImage("assets/obsBottom1.png") 
obsbottom2img =loadImage("assets/obsBottom2.png")
obsbottom3img =loadImage("assets/obsBottom3.png")
balloonimg = loadAnimation("assets/balloon1.png","assets/balloon2.png",
"assets/balloon3.png")
}

function setup(){
  bg = createSprite(165,485,3,3)
  bg.addImage("backg",bgimg)
  bg.scale=1.5
  
  bln=createSprite(100,200,20,30)
  bln.addAnimation("balloon",balloonimg)
  bln.scale=0.2

  obstopgroup = new Group()
}
function draw(){
  background("black")
  if(keyDown("space")){
    bln.velocityY=-5
  }  
  bln.velocityY=bln.velocityY+2
  if(obstopgroup.isTouching(bln)){
   bln.destroy();
  }

  spawnobstop()
  drawSprites()
 
}   
  
function spawnobstop(){
  if(frameCount%80==0){
    obstop = createSprite(400,50,40,20)
    obstop.velocityX = -4;
    obstop.scale=0.1;
    obstop.y=Math.round(random(10,100))
    r = Math.round(random(1,2))
    switch(r){
  case 1:obstop.addImage(obtop1img)
  break;
  case 2:obstop.addImage(obtop2img)
  break;
  default:break
    }
    obstop.lifetime=130  
    bln.depth = bln.depth+1         
    obstopgroup.add(obstop)
    
  }



}


