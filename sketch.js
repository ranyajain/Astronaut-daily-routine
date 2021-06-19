var bg;
var bath, brush, drink, eat, gym, move, sleep;
var astronaut;

function preload() {
  bg = loadImage("Astronaut's daily routine/iss.png");
  bath = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png");
  brush = loadAnimation("Astronaut's daily routine/brush.png");
  drink = loadAnimation("Astronaut's daily routine/drink1.png","Astronaut's daily routine/drink2.png");
  eat = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat.png");
  gym = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png","Astronaut's daily routine/gym11.png","Astronaut's daily routine/gym12.png");
  move = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png");
  sleep = loadAnimation("Astronaut's daily routine/sleep.png");
}

function setup() {
createCanvas(600,500);
astronaut = createSprite(300,230);
astronaut.addAnimation("sleep", sleep);
astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  textSize(20);

  fill("white");
  text("Instructions: ", 20,35);
  textSize(15);
  text("Up Arrow = Brushing", 20,55);
  text("Down Arrow = Gym", 20,70);
  text("Left Arrow = Eating", 20,85);
  text("Right Arrow = Bathing", 20,100);
  text("M Key = Moving", 20,115);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
 
  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}