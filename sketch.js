var car,wall;
function setup() {
  createCanvas(1600, 400);
  speed=random(55,90)
  weight=random(400,1500)
  car=new Car(weight,speed);
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
  car.sprite.collide(wall,calculateDeformation)
  drawSprites();
 
}

function calculateDeformation()
{
	
	var deformation=0.5 * car.weight * car.speed* car.speed/22509;
	if(deformation>180)
	{
		car.sprite.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.sprite.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.sprite.shapeColor=color(0,255,0);
	}
}
