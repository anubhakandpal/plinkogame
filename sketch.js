const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var poles1;
var poles2;
var poles3;
var poles4;
var plinkos;
var particals;
 var particals=[];
  var plinkos=[];


function setup() {
  createCanvas(750,480);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground (400,480,900,20);
  poles1= new Poles (150,410,10,350);
  poles2= new Poles (300,410,10,350);
  poles3= new Poles (450,410,10,350);
  poles4= new Poles (600,410,10,350);
 
  for (var i = 40; i <=width; i=i+50) {
  	plinkos.push(new Plinko(i,75))
  	console.log("loop")
  }
  for (var i = 15; i <=width; i=i+50) {
  	plinkos.push(new Plinko(i,175))
  	console.log("second loop")



  }

}


function draw() {
  Engine.update(engine);
  background("yellow"); 
  ground.display();
  poles1.display();
  poles2.display();
  poles3.display();
  poles4.display();

 
for (var i = 0; i < plinkos.length; i++) { 
	
	plinkos[i].display(); 

}

   if(frameCount%60===0){
     particals.push(new Particals(random(width/2-40, width/2+70), 10,10));
     console.log("hello")
   }

    for (var i = 0; i < particals.length; i++) {
   
     particals[i].display();
   }
  

  drawSprites();
}
