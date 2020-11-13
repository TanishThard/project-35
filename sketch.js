var dog,dogImage,dogImage2;
var score=0;
var database;
var foodS,foodStock;

function preload(){
dogImage=loadImage("images/dogImg.png");
dogImage2=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
createCanvas(500,500);
dog = createSprite(250,300,20,20);
dog.addImage(dogImage);
dog.scale=0.2;  
foodStock=database.ref('Food');
foodStock.on("value",readStock);

}
 
function draw() {  
  background("green");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImage2);
  }
  textSize(10);
  fill("black");
  text("Note:Press Up Arrow Key To Feed Drago Milk! ",100,30);
  text("Food Remaining:"+foodS,350,40);
 

  drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}

