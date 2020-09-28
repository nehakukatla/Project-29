const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var shelf1,shelf2,polygon,constraint,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(100,350,20);
    shelf1 = new Ground(400,500,200,20);
    shelf2 = new Ground(650,300,200,20);
    //slingshot = new Slingshot(this.polygon,{x:100,y:350});
    //shelf 1, level 1
    box1 = new Box(340,450,40,40);
    box2 = new Box(380,450,40,40);
    box3 = new Box(420,450,40,40);
    box4 = new Box(460,450,40,40);
    //shelf 1, level 2
    box5 = new Box(360,410,40,40);
    box6 = new Box(400,410,40,40);
    box7 = new Box(440,410,40,40);
    //shelf 1, level 3
    box8 = new Box(380,370,40,40);
    box9 = new Box(420,370,40,40);
    //shelf 1, level 4
    box10 = new Box(400,330,40,40);

    //shelf 2, level 1
    box11 = new Box(590,250,40,40);
    box12 = new Box(630,250,40,40);
    box13 = new Box(670,250,40,40);
    box14 = new Box(710,250,40,40);
    //shelf 2, level 2
    box15 = new Box(610,210,40,40);
    box16 = new Box(650,210,40,40);
    box17 = new Box(690,210,40,40);
    //shelf 2, level 3
    box18 = new Box(630,170,40,40);
    box19 = new Box(670,170,40,40);
    //shelf 2, level 4
    box20 = new Box(650,130,40,40);
}

function draw(){
    background(0);
    shelf1.display();
    shelf2.display();
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
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    polygon.display();
    Engine.update(engine);
}