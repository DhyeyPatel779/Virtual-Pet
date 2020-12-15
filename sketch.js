//Create variables here
var dog,happyDog;
var database; 
var dogImg;

var foodStock;
var foodS=0;

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
  background(46,139,87);
  if(keyWentDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  console.log(foodS)

  textSize(20)
  fill("white")
  stroke("black")
  text("FoodStock: "+foodS,350,20)

  drawSprites();
  //add styles here


}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
    if(x<=0){
       x=0;
       }
       else{
          x=x-1;
       }
    database.ref('/').update({
    Food:x
  })
}
