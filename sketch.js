//Create variables here
var dog,happyDog,foodS,foodStock;
var database; 
var dogImg;


function preload()
{
//load images here

dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");


}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
  
  database = firebase.database(); 

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

 
  
}


function draw() {  
  
  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(happyDog);
  }



  drawSprites();
  //add styles here
  text("FoodStock: "+foodS,350,20)
  textSize(10)
  fill("white")
  noStroke()
}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
