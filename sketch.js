var runner, prize;
var malImg, spindalImg;
var laser1, laser2, laser3, laser4;

var edges;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,
wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,
wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53

function preload() {
  malImg = loadImage("mal1.png");
  spindalImg = loadImage("spindal.png");

}

function setup() {
  createCanvas(800,400,200,200);
 runner = createSprite(50,360,10,10);
 runner.addAnimation("mal1.png",malImg,);
 runner.scale = 0.03;

 edges = createEdgeSprites();


 prize = createSprite(50,40,30,30);
 prize.addAnimation("spindal.png",spindalImg);
 prize.scale = 0.02;

wall1 = createSprite(5,360,10,70);
wall2 = createSprite(45,330,80,10);
wall3 = createSprite(45,390,70,10);
wall4 = createSprite(425,200,750,10);
wall5 = createSprite(120,330,70,10);
wall6 = createSprite(190,330,70,10);
wall7 = createSprite(220,330,10,70);
wall8 = createSprite(295,380,10,70);
wall9 = createSprite(255,300,70,10);
wall10 = createSprite(325,300,70,10);
wall11 = createSprite(395,300,70,10);
wall12 = createSprite(465,300,70,10);
wall13 = createSprite(445,380,10,70);
wall14 = createSprite(545,350,100,10);
wall15 = createSprite(500,320,10,70);
wall16 = createSprite(500,270,10,70);
wall17 = createSprite(670,350,200,10);
wall18 = createSprite(645,255,10,100);
wall19 = createSprite(755,290,100,10);
wall20 = createSprite(545,240,10,70);
wall21 = createSprite(90,250,10,70);
wall22 = createSprite(410,230,10,70);
wall23 = createSprite(330,230,10,50);
wall24 = createSprite(365,300,10,100);
wall25 = createSprite(215,250,100,10);
wall26 = createSprite(130,300,10,70);
wall26 = createSprite(190,200,70,10);

wall27 = createSprite(5,40,10,70);
wall28 = createSprite(45,70,80,10);
wall29 = createSprite(45,10,70,10);
wall30 = createSprite(425,200,750,10);
wall31 = createSprite(120,70,70,10);
wall32 = createSprite(190,70,70,10);
wall33 = createSprite(220,70,10,70);
wall34 = createSprite(295,20,10,70);
wall35 = createSprite(255,100,70,10);
wall36 = createSprite(325,100,70,10);
//wall37 = createSprite(395,10,70,10);
wall38 = createSprite(465,100,70,10);
wall39 = createSprite(445,20,10,70);
wall40 = createSprite(545,50,100,10);
wall41 = createSprite(500,80,10,70);
wall42 = createSprite(500,30,10,70);
wall43 = createSprite(670,50,200,10);
wall44 = createSprite(645,145,10,100);
wall45 = createSprite(755,90,100,10);
wall46 = createSprite(545,160,10,70);
wall47 = createSprite(90,180,10,100);
wall48 = createSprite(410,170,10,70);
wall49 = createSprite(330,170,10,70);
wall50 = createSprite(365,100,10,100);
wall51 = createSprite(215,150,100,10);
wall52 = createSprite(130,100,10,70);
wall53 = createSprite(190,200,70,10);

}

function draw() {
  background("lightblue");

  if (keyDown("left")){
    runner.x = runner.x-5;
  }
  if (keyDown("right")){
    runner.x = runner.x+5;
  }
  if(keyDown("down")){
    runner.y = runner.y+5;
  }
  if(keyDown("up")){
    runner.y = runner.y-5;
  }
  

runner.bounceOff(edges)
runner.bounceOff(wall1);
runner.bounceOff(wall2);
runner.bounceOff(wall3);
runner.bounceOff(wall4);
runner.bounceOff(wall5);
runner.bounceOff(wall6);
runner.bounceOff(wall7);
runner.bounceOff(wall8);
runner.bounceOff(wall9);
runner.bounceOff(wall10);
runner.bounceOff(wall11);
runner.bounceOff(wall12);
runner.bounceOff(wall13);
runner.bounceOff(wall14);
runner.bounceOff(wall15);
runner.bounceOff(wall16);
runner.bounceOff(wall17);
runner.bounceOff(wall18);
runner.bounceOff(wall19);
runner.bounceOff(wall20);
runner.bounceOff(wall21);
runner.bounceOff(wall22);
runner.bounceOff(wall23);
runner.bounceOff(wall24);
runner.bounceOff(wall25);
runner.bounceOff(wall26);
runner.bounceOff(wall27);
runner.bounceOff(wall28);
runner.bounceOff(wall29);
runner.bounceOff(wall30);
runner.bounceOff(wall31);
runner.bounceOff(wall32);
runner.bounceOff(wall33);
runner.bounceOff(wall34)
runner.bounceOff(wall35);
runner.bounceOff(wall36);
//runner.bounceOff(wall37);
runner.bounceOff(wall38);
runner.bounceOff(wall39);
runner.bounceOff(wall40);
runner.bounceOff(wall41);
runner.bounceOff(wall42);
runner.bounceOff(wall43);
runner.bounceOff(wall44);
runner.bounceOff(wall45);
runner.bounceOff(wall46);
runner.bounceOff(wall47);
runner.bounceOff(wall48);
runner.bounceOff(wall49);
runner.bounceOff(wall50);
runner.bounceOff(wall51);
runner.bounceOff(wall52);
runner.bounceOff(wall53);

  runner.display();
  drawSprites();
}