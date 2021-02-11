var backImg;
var score=0;
var gamestate="instrution1"
var level1 = 1;
var instrution2 = 2;
var instrution3 = 5;
var youwin = 6;
var end = 0;
var level2=3;
var level3 = 4;
var bullets=130
var life=5;
var life2=5;

function preload(){
backImg=loadImage("back/ground.png");
roadImg1=loadImage("back/road.png");
roadImg2=loadImage("back/road2.png");
tintImg=loadImage("player/tint.png")

playerImg=loadImage("player/player.png");
playerImg2=loadImage("player/player2.png");
playerImg3=loadImage("player/player3.png");
playerImg4=loadImage("player/player4.png");
playerCar=loadImage("player/playerC.png");
aimImg=loadImage("player/aim.png");

housesImg=loadImage("back/houses.png");
housesImg2=loadImage("back/houses2.png");
tImg=loadImage("back/track.png");
trainImg=loadImage("back/train.png");
zombieImg=loadImage("image/zombie.png");
bulletImg=loadImage("image/bullet.png");
leftImg=loadImage("image/left.png");
rightImg=loadImage("image/right.png");
upImg=loadImage("image/up.png");
downImg=loadImage("image/down.png");
song=loadSound("song.mp3");
shootImg=loadImage("player/shoot.png");
over=loadImage("image/over.png");
medImg=loadImage("image/medKit.png");
fire=loadSound("sound/fire.mp3");
ammoImg=loadImage("image/ammo.png");
manImg=loadImage("image/man.png");
music=loadSound("sound/music.mp3");
in1Img=loadImage("image/instrution1.png");
in2Img=loadImage("image/instrution2.png");
in3Img=loadImage("image/instrution3.png");
n1Img=loadImage("image/next.png");
win=loadImage("image/win.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  


  back=createSprite(windowWidth/2,windowHeight/2-1400);
  back.addImage(backImg);
  back.scale=7.5;

  back2=createSprite(windowWidth/2,windowHeight/2-5000);
  back2.addImage(backImg);
  back2.scale=6.9;

  back3=createSprite(windowWidth/2,windowHeight/2-360*20-1400);
  back3.addImage(backImg);
  back3.scale=7.5;


//createing  the road

r1 = new Road(windowWidth/2,windowHeight/2);
r2 = new Road(windowWidth/2-6,windowHeight/2-100*10+30);
r3 = new Road(windowWidth/2-11,windowHeight/2-100*20+40);
r4 = new Road(windowWidth/2-17,windowHeight/2-100*30+50);
r5 = new Road(windowWidth/2-23,windowHeight/2-3900);
r6 = new Road(windowWidth/2-29,windowHeight/2-4900+20);
r7 = new Road(windowWidth/2-26,windowHeight/2-5900+40);
r8 = new Road(windowWidth/2-31,windowHeight/2-6900+60);
r9 = new Road(windowWidth/2-37,windowHeight/2-7900+80);
r10 = new Road(windowWidth/2-42,windowHeight/2-8900+100);
r11 = new Road(windowWidth/2-46,windowHeight/2-9900+120);

//createing  houses

h1 = new House1(windowWidth/2-530,windowHeight/2-200);
h2 = new House2(windowWidth/2+430,windowHeight/2-200);
h3 = new House1(windowWidth/2-530,windowHeight/2-2000);
h4 = new House2(windowWidth/2+430,windowHeight/2-2000);
h5 = new House1(windowWidth/2-530,windowHeight/2-3850);
h6 = new House2(windowWidth/2+430,windowHeight/2-3850);
h7 = new House1(windowWidth/2-530,windowHeight/2-5650);
h8 = new House2(windowWidth/2+430,windowHeight/2-5650);
h9 = new House1(windowWidth/2-530,windowHeight/2-7550);
h10 = new House2(windowWidth/2+430,windowHeight/2-7550);
h11 = new House1(windowWidth/2-530,windowHeight/2-9150);
h12 = new House2(windowWidth/2+430,windowHeight/2-9150);

// track and train

t1=createSprite(windowWidth/2,windowHeight/2-1000);
t1.addImage(tImg);
t1.scale=1.8;

t2=createSprite(windowWidth/2,windowHeight/2-500*6+150);
t2.addImage(tImg);
t2.scale=1.8;

t3=createSprite(windowWidth/2,windowHeight/2-4700);
t3.addImage(tImg);
t3.scale=1.8;

t4=createSprite(windowWidth/2,windowHeight/2-6550);
t4.addImage(tImg);
t4.scale=1.8;

train=createSprite(windowWidth/2-400,windowHeight/2-1125);
train.addImage(trainImg);
train.scale=1.0;

train2=createSprite(windowWidth/2-400,windowHeight/2-500*6-8);
train2.addImage(trainImg);
train2.scale=1.0;

train3=createSprite(windowWidth/2-400,windowHeight/2-4840);
train3.addImage(trainImg);
train3.scale=1.0;

train4=createSprite(windowWidth/2-400,windowHeight/2-6670);
train4.addImage(trainImg);
train4.scale=1.0;

//ammo

ammo1=createSprite(windowWidth/2,windowHeight/2-2300);
ammo1.addImage(ammoImg);
ammo1.scale=0.2;

ammo2=createSprite(windowWidth/2,windowHeight/2-4300);
ammo2.addImage(ammoImg);
ammo2.scale=0.2;

ammo3=createSprite(windowWidth/2,windowHeight/2-6300);
ammo3.addImage(ammoImg);
ammo3.scale=0.2;




//createing  player

car=createSprite(windowWidth/2,windowHeight/2+200);
car.addImage(playerCar);
car.scale=0.5;
//car.velocityY=-19

player=createSprite(windowWidth/2,windowHeight/2+200);
player.addImage(playerImg);
player.scale=0.5;

aim = createSprite(0,0);
aim.addImage(aimImg);
aim.scale=0.1



//create  invisible wall

wall=createSprite(windowWidth/2-200,windowHeight/2-200*9,5,4000);
wall.visible=false;

wall2=createSprite(windowWidth/2+200,windowHeight/2-200*9,5,4000);
wall2.visible=false;

wall3=createSprite(windowWidth/2-140,windowHeight/2-1100,5,170);
wall3.visible=false;

wall4=createSprite(windowWidth/2-140,windowHeight/2-500*6+30,5,170);
wall4.visible=false;

wall5=createSprite(windowWidth/2,windowHeight/2+350,400,5);
wall5.visible=false;

wall6=createSprite(windowWidth/2-200,windowHeight/2-400*9,5,2000);
wall6.visible=false;

wall7=createSprite(windowWidth/2+200,windowHeight/2-400*9,5,2000);
wall7.visible=false;

wall8=createSprite(windowWidth/2-25,windowHeight/2-600*9+40,450,20);
wall8.shapeColor="lightyellow";

wall9=createSprite(windowWidth/2+180,windowHeight/2-900*7,5,4800);
wall9.visible=false;

wall10=createSprite(windowWidth/2-210,windowHeight/2-900*7,5,4800);
wall10.visible=false;

wall11=createSprite(windowWidth/2-150,windowHeight/2-900*7-330,5,200);
wall11.visible=false;

wall12=createSprite(windowWidth/2,windowHeight/2-1000*7-2130,400,5);
wall12.visible=false;


shoot=createSprite(windowWidth/2,windowHeight/2);
 shoot.addImage(shootImg);
  shoot.scale=0.1;
  shoot.x=car.x+500;

  tint=createSprite(windowWidth/2,windowHeight/2);
  tint.addImage(tintImg);
  tint.scale=0.3;
   tint.x=shoot.x;
  

   health=createSprite(windowWidth/2+500,0,100,20);
    health.shapeColor="red";
    health.tint = "rgba(255, 255, 255, 0.5)";



left=createSprite(windowWidth/2-520,windowHeight/2);
left.addImage(leftImg);
 left.scale=0.2;

 right=createSprite(windowWidth/2-420,windowHeight/2);
 right.addImage( rightImg);
 right.scale=0.2;

 up=createSprite(windowWidth/2-420,windowHeight/2);
 up.addImage(upImg);
  up.scale=0.2;
 
  down=createSprite(windowWidth/2-520,windowHeight/2);
  down.addImage( downImg);
  down.scale=0.2;



//man
man1 = createSprite(windowWidth/2-50,windowHeight/2);
man1.addImage(manImg);
man1.scale=0.6;

man2 = createSprite(windowWidth/2+50,windowHeight/2);
man2.addImage(manImg);
man2.scale=0.6;

// extra

//music.loop();


car.depth=wall11.depth+6;
player.depth=wall11.depth+6;




zombieGroup = new Group();
bulletGroup = new Group();
bulletGroup2 = new Group();
bulletGroup3 = new Group();
bulletGroup4 = new Group();

in1 = createSprite(windowWidth/2,windowHeight/2);
in1.addImage(in1Img);
in1.scale=2.1;

n1 = createSprite(windowWidth/2+400,windowHeight/2+100);
n1.addImage(n1Img);
n1.scale=0.4;

}

function draw() { 
  background(0);
  drawSprites();
 
  if(keyDown("space")){
    //gamestate=youwin;
  }
  
r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
r6.display();
r7.display();
r8.display();
r9.display();
r10.display();
r11.display();

h1.display();
h2.display();
h3.display();
h4.display();
h5.display();
h6.display();
h7.display();
h8.display();
h9.display();
h10.display();
h11.display();
h12.display();



if(gamestate === "instrution1"){
back.visible=false;
back2.visible=false;
back3.visible=false;

health.visible=false;

 if(mousePressedOver(n1)){
   gamestate=level1
 }

}



else if(gamestate === level1){

  in1.visible=false;
n1.visible=false;

  back.visible=true;
  back2.visible=true;
  back3.visible=true;

  health.visible=true;

player.visible=false;

man1.visible=false;
man2.visible=false;

ammo1.visible=false;
ammo2.visible=false;
ammo3.visible=false;

// move the player

  if (keyDown(RIGHT_ARROW)) {
    car.x=car.x+10;
    
     }
       
   if (keyDown(LEFT_ARROW)) {
    car.x=car.x-10;  
   
     } 
     

     if (keyDown(UP_ARROW)) {
      car.y=car.y-30;  
     
       } 
  
       if (keyDown(DOWN_ARROW)) {
        car.y=car.y+30;  
      
         } 


         if (keyDown("space") && frameCount % 5 === 0) {
        Bullet();
         
           } 


if(mousePressedOver(left)){
  car.x=car.x-10;  
}

if(mousePressedOver(right)){
  car.x=car.x+10;  
}

if(mousePressedOver(up)){
  car.y=car.y-20;  
}

if(mousePressedOver(down)){
  car.y=car.y+20;  
}


  // add camera to player
 
 if(car.y<windowHeight/2+300 && car.y>windowHeight/2-9240){
  camera.y=car.y-180;
 }
  
 car.collide(wall);
 car.collide(wall2);
 car.collide(wall3);
 car.collide(wall4);
 car.collide(wall5);
 car.collide(wall6);
 car.collide(wall7);
 car.collide(wall9);
 car.collide(wall10);
 car.collide(wall11);
 
//spawnZombies

  if (frameCount % 30 === 0 ) {
     zombie = createSprite(600,120,40,10);
   zombie.x = Math.round(random(windowWidth/2-100,windowWidth/2+100));
     zombie.y = car.y-700
    zombie.addImage(zombieImg);
    zombie.scale = 0.3;
   zombie.velocityY = 3;
    zombie.lifetime=500;
    zombieGroup.add(zombie);
  }

 
  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup.get(i).isTouching(bulletGroup)){
      zombieGroup.get(i).destroy();
      bulletGroup.destroyEach();
    score=score+1;
   
    }
  }





for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(car)){
    zombieGroup.get(i).destroy();
  score=score+1;
health.width=health.width-10;
  }
}

textSize(30);
fill("black")
text("zombie Killed : "+score,windowWidth/2-620,car.y-450)


shoot.y=car.y;
tint.y=car.y-500;
health.y=tint.y+60;
left.y=car.y+20;
right.y=car.y+20;
down.y=car.y-70;
up.y=car.y-70;


if(mousePressedOver(shoot) && frameCount % 10 === 0){
  Bullet();
}


if(health.width ===10){
  gamestate=end;
  
  }

  textSize(100);
  fill("yellow");
  text(" level Complete",windowWidth/2-340,windowHeight/2-9000)


  if(car.isTouching(wall12)){
   gamestate=instrution2;
   health.width==100;
 }



}// level1 end

else if(gamestate === instrution2){
  back.visible=false;
  back2.visible=false;
  back3.visible=false;
  
  health.visible=false;
  
  in1.x=windowWidth/2;
  in1.y=windowHeight/2-9300;

in1.scale=2.4;

in1.visible=true;

  in1.addImage(in2Img);

n1.visible=true;

n1.x=windowWidth/2+500;
n1.y=windowHeight/2-9070;

   if(mousePressedOver(n1)){
     gamestate=level2;
     health.width=100;
   }
  
car.destroy();
tint.destroy();

shoot.visible=false;

left.visible=false;
right.visible=false;
up.visible=false;
down.visible=false;

zombieGroup.destroyEach();

  }

else if (gamestate === end){
 background(over);

 train.destroy();
 train2.destroy();
 train3.destroy();
 train4.destroy();
 tint.destroy();
 t1.destroy();
 t2.destroy();
 t3.destroy();
 t4.destroy();
 
 wall.destroy();
 wall2.destroy();
 wall3.destroy();
 wall4.destroy();
 wall5.destroy();
 wall6.destroy();
 wall7.destroy();
 wall8.destroy();
 wall9.destroy();
 wall10.destroy();
 wall11.destroy();
 car.destroy();

 player.destroy();


player.velocityY=0;



}//end



else if (gamestate === level2){
 

  shoot.visible=true;

  left.visible=true;
  right.visible=true;
  up.visible=true;
  down.visible=true;

health.visible=true;

  back.visible=true;
  back2.visible=true;
  back3.visible=true;
  
  player.collide(wall);
  player.collide(wall2);
  player.collide(wall3);
  player.collide(wall4);
player.collide(wall5);
  player.collide(wall6);
  player.collide(wall7);
  player.collide(wall9);
  player.collide(wall10);
  player.collide(wall11);

 

  player.visible=true;
  health.visible=true;

shoot.y=player.y;
left.y=player.y+20;
right.y=player.y+20;
down.y=player.y-70;
up.y=player.y-70;
health.y=player.y-460;

if (keyDown("space") && frameCount % 5 === 0 && bullets>0) {
  Bullet2();
   
     } 

     if (keyDown(RIGHT_ARROW)) {
      player.x=player.x+10; 
      
       }
         
     if (keyDown(LEFT_ARROW)) {
      player.x=player.x-10; 
     
       } 
       
  
       if (keyDown(UP_ARROW)) {
        player.y=player.y-10; 
       
         } 
    
         if (keyDown(DOWN_ARROW)) {
          player.y=player.y+10; 
           } 


if(mousePressedOver(up)){
  player.y=player.y-10; 
 
}

if(mousePressedOver(down)){
  player.y=player.y+10; 

}

if(mousePressedOver(left)){
  player.x=player.x-10; 

}

if(mousePressedOver(right)){
  player.x=player.x+10; 
 
}

if(player.y<windowHeight/2+300 && player.y>windowHeight/2-9240){
  camera.y=player.y-180;
 }

textSize(30);
fill("black")
text("Ammo : "+bullets,windowWidth/2-570,player.y-460)

 if(mousePressedOver(shoot) && frameCount % 10 === 0){
  Bullet2();
}

if (frameCount % 30 === 0 ) {
  zombie = createSprite(600,120,40,10);
zombie.x = Math.round(random(windowWidth/2-100,windowWidth/2+100));
  zombie.y = player.y-700
 zombie.addImage(zombieImg);
 zombie.scale = 0.3;
zombie.velocityY = 3;
 zombie.lifetime=500;

zombieGroup.add(zombie);
}


for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(bulletGroup2)){
  bulletGroup2.destroyEach();
    zombieGroup.get(i).destroy();
  score=score+1;
   
  }
}

for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(player)){
  zombieGroup.get(i).destroy();
 health.width=health.width-10;
   }
}



ammo1.visible=true;
ammo2.visible=true;
ammo3.visible=true;

in1.visible=false;
n1.visible=false;

if(player.isTouching(ammo1)){
  bullets=bullets+120
  ammo1.destroy();
}

if(player.isTouching(ammo2)){
  bullets=bullets+120
  ammo2.destroy();
}
 
if(player.isTouching(ammo3)){
  bullets=bullets+150
  ammo3.destroy();
}

if(player.isTouching(wall12)){
  gamestate=instrution3;
player.y=windowHeight/2+200
health.width=100;
}
  
man1.visible=false;
man2.visible=false;


if(health.width ===10){
  gamestate=end;
  
  }

}// level2

else if(gamestate === instrution3){
  back.visible=false;
  back2.visible=false;
  back3.visible=false;
  
  health.visible=false;

  shoot.visible=false;

  left.visible=false;
  right.visible=false;
  up.visible=false;
  down.visible=false;
  
  zombieGroup.destroyEach();

  in1.x=windowWidth/2;
  in1.y=windowHeight/2-9300;

in1.scale=2.4;

in1.visible=true;

  in1.addImage(in3Img);

n1.visible=true;


if(mousePressedOver(n1)){
  gamestate=level3;
  health.width=100;
}

}//instrution3 end

else if(gamestate === level3){
 
player.collide(train);
player.collide(train2);
player.collide(train3);
player.collide(train4);

player.collide(wall);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall9);
player.collide(wall10);
player.collide(wall11);

  car.destroy();
 
  man1.visible=true;
  man2.visible=true;


  player.visible=true;
  health.visible=true;

shoot.y=player.y;
left.y=player.y+20;
right.y=player.y+20;
down.y=player.y-70;
up.y=player.y-70;
health.y=player.y-470;

if (keyDown("space") && frameCount % 5 === 0) {
  Bullet2();
   
     } 

     if (keyDown(RIGHT_ARROW)) {
      player.x=player.x+10; 
      
       }
         
     if (keyDown(LEFT_ARROW)) {
      player.x=player.x-10; 
     
       } 
       
  
       if (keyDown(UP_ARROW)) {
        player.y=player.y-10; 
       
         } 
    
         if (keyDown(DOWN_ARROW)) {
          player.y=player.y+10; 
           } 


if(mousePressedOver(up)){
  player.y=player.y-10; 
 
}

if(mousePressedOver(down)){
  player.y=player.y+10; 

}

if(mousePressedOver(left)){
  player.x=player.x-10; 

}

if(mousePressedOver(right)){
  player.x=player.x+10; 
 
}

if(player.y<windowHeight/2+300 && player.y>windowHeight/2-9240){
  camera.y=player.y-180;
 }



 if(mousePressedOver(shoot) && frameCount % 10 === 0){
  Bullet2();
}

if (frameCount % 8 === 0 ) {
  zombie = createSprite(600,120,40,10);
zombie.x = Math.round(random(windowWidth/2-100,windowWidth/2+100));
  zombie.y = player.y-700
 zombie.addImage(zombieImg);
 zombie.scale = 0.3;
zombie.velocityY = 3;
 zombie.lifetime=500;

zombieGroup.add(zombie);
}


for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(bulletGroup2)){
  bulletGroup2.destroyEach();
    zombieGroup.get(i).destroy();
  score=score+1;
   
  }
}

for(var i = 0; i < zombieGroup.length; i++){
  if(zombieGroup.get(i).isTouching(player)){
  zombieGroup.get(i).destroy();
 health.width=health.width-10;
   }
}

ammo1.destroy();
ammo2.destroy();
ammo3.destroy();





if (frameCount % 10 === 0 && life>4 ){
  bullet = createSprite(0,0);
  bullet.x=man1.x;
  bullet.y=man1.y;
bullet.addImage(bulletImg);
bullet.scale=0.055;
bullet.velocityY=-45
bullet.lifetime = 200;
//fire.play();

bulletGroup3.add(bullet);
  }

  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup.get(i).isTouching(bulletGroup3)){
    zombieGroup.get(i).destroy();
  bulletGroup3.destroyEach();
     }
  }
 
  
man2.x=player.x+50;
man2.y=player.y;

if (frameCount % 10 === 0 && life2>4){
  bullet = createSprite(0,0);
  bullet.x=man2.x;
  bullet.y=man2.y;
bullet.addImage(bulletImg);
bullet.scale=0.055;
bullet.velocityY=-45
bullet.lifetime = 200;
//fire.play();

bulletGroup4.add(bullet);
  }

  for(var i = 0; i < zombieGroup.length; i++){
    if(zombieGroup.get(i).isTouching(bulletGroup4)){
    zombieGroup.get(i).destroy();
  bulletGroup4.destroyEach();
     }
  }

  man1.x=player.x-50;
man1.y=player.y;


if(zombieGroup.isTouching(man1)){
  man1.destroy();
  life=life-1;
}

if(zombieGroup.isTouching(man2)){
  man2.destroy();
  life2=life2-1;
}

if(health.width===10){
  gamestate=end;
}

shoot.visible=true;

  left.visible=true;
  right.visible=true;
  up.visible=true;
  down.visible=true;

  in1.visible=false;
n1.visible=false;

  back.visible=true;
  back2.visible=true;
  back3.visible=true;

  if(player.isTouching(wall12)){
    gamestate=youwin;
  }

}//level3 end

else if(gamestate === youwin){
  back.destroy();
  back2.destroy();
  back3.destroy();

player.destroy();
shoot.destroy();
left.destroy();
right.destroy();
up.destroy();
down.destroy();

man1.destroy();
man2.destroy();

zombieGroup.destroyEach();
health.destroy();

wall.destroy();
wall2.destroy();
wall3.destroy();
wall4.destroy();
wall5.destroy();
wall6.destroy();
wall7.destroy();
wall8.destroy();
wall9.destroy();
wall10.destroy();
wall11.destroy();
wall12.destroy();

in1.visible=true;
in1.addImage(win);
in1.scale=3.3;

}

}//funtion draw end


function Bullet(){
  if (frameCount % 1 === 0 ){
  bullet = createSprite(0,0);
  bullet.x=car.x;
  bullet.y=car.y;
bullet.addImage(bulletImg);
bullet.scale=0.055;
bullet.velocityY=-45
bullet.lifetime = 200;
fire.play();

bulletGroup.add(bullet);
  }
}

function Bullet2(){
  if (frameCount % 1 === 0 ){
  bullet = createSprite(0,0);
  bullet.x=player.x+3;
  bullet.y=player.y-20;
bullet.addImage(bulletImg);
fire.play();

bullets=bullets-1

bullet.scale=0.055;
bullet.velocityY=-45
bullet.lifetime = 200;

bulletGroup2.add(bullet);
  }
}