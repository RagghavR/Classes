var speed = 3

function setup() 
{
  createCanvas(400, 400);
  Box1 = new Box(100,100,10,10)
  Box2 = new Box(200,200,10,10)

}

function draw() 
{
  background(220);
  speed = speed + 0.2
  Box1.display()
  Box2.display()
  Box1.velocity(speed)
}

