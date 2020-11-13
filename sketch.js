const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;







function setup(){
    var canvas = createCanvas(1200,800);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,800,1200,20);
box1=new Box(400,795,70,70);
box2=new Box(480,795,70,70);
box3=new Box(480,735,70,70);
box4=new Box(400,735,70,70);
box5=new Box(480,675,70,70);
box6=new Box(400,675,70,70);
box7=new Box(480,615,70,70);
box8=new Box(400,615,70,70);
box9=new Box(480,520,70,70);
box10=new Box(400,520,70,70);
box11=new Box(480,460,70,70);
ball1=new Ball(700,400,80,80);
rope=new Slingshot(ball1.body,{x:650,y:200})
}
function draw()
{background("azure")
    Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
ball1.display();
rope.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})


}