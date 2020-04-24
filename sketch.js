var bullet;
var weight,speed;
var wall;
var thickness;
var calc;
function setup() {
  createCanvas(1600,400);
  weight = random(30,52);
  speed = random(223,321);
   bullet = new Bullet(weight,speed);
  bullet.sprite.shapeColor = "white";
  thickness = random(22,83);
   wall = new Wall(thickness);
  wall.sprite.shapeColor = "white";
}

function draw() {
  background("black"); 
  
 if( bullet.sprite.collide(wall.sprite)){
  calc = calculateDamage();
 } 
 if(calc < 5){
   wall.sprite.shapeColor = "green"
 }
 if(calc > 10){
   wall.sprite.shapeColor = "red"
 }
 if(calc > 5 && calc < 10){
   wall.sprite.shapeColor = "yellow"
 }

  drawSprites();
}
function calculateDamage(){
  wall.sprite.damage = (0.5 * bullet.sprite.weight * bullet.sprite.speed * bullet.sprite.speed
    /wall.sprite.thickness * wall.sprite.thickness * wall.sprite.thickness);
    
}
