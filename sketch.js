var trex, trexCorrendo, solo, soloImg, soloInvisivel, nuvemImg;

function preload(){
  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  trex = createSprite(50,160, 20,50);
  trex.addAnimation("correndo", trexCorrendo);
  trex.scale = 0.5;

  solo = createSprite(300,180,600,20);
  solo.addImage(soloImg);
  solo.velocityX = -2;

  soloInvisivel = createSprite(200,190,400,10);
  soloInvisivel.visible = false;
}

function draw(){
  background("white");

  console.log(random(1, 100));

  if(keyDown("space") && trex.y >= 150){
    trex.velocityY = -10;
  }
  trex.velocityY += 0.5;

  trex.collide(soloInvisivel);

  if(solo.x <0){
    solo.x = width/2;
  }
  gerarNuvens();
  drawSprites();
}

function gerarNuvens(){
  if(frameCount % 60 == 0){ 
    var nuvem = createSprite(600, 100, 40, 10);
    nuvem.velocityX = -3;
    nuvem.y = Math.round(random(10,100));
    nuvem.addImage(nuvemImg);
    //nuvem.scale = 0.5;
}
}