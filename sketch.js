var dog;
var dogImg1,dogImg2;
var food = 10;
var rect;

function preload(){
dogImg1 = loadImage("images/dog1.png");
dogImg2 = loadImage("images/dog2.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,420,50,100);
  dog.addImage(dogImg1)
  
  
}


function draw() {  
background("green")
noStroke();
textSize(35)
fill("white")
text("Food remaining : " + food, width-550, 200);

noStroke();
textSize(35)
fill("white")
text("Virtual pet game ",width-540, 50);

if(food === -5){
  dog.addImage(dogImg2) 
  rect = createSprite(520,200,550,50);
  rect.shapeColor = "green"
  noStroke();
textSize(35)
fill("white")
text("Happy dog", width-490, 250);
}

drawSprites(); 
}

function keyPressed(){
  if(keyCode === 32){
      food = food-5
  }
}



