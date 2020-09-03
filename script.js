// Creator: Nathan A
// Description: Its Just Plinko
// Creation Date: 7/31/2020
// Update Date:
// module aliases
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.getElementById('can'),
    engine: engine
});
// create flanges
const fOptions = {
    isStatic: true,
}
const flanges = [
    //row one
    Bodies.polygon(45,150,3,20,fOptions),
    Bodies.polygon(100,250,3,20,fOptions),
    Bodies.polygon(60,350,3,20,fOptions),
    Bodies.polygon(100,450,3,20,fOptions),
    //row two
    Bodies.polygon(150,150,3,20,fOptions),
    Bodies.polygon(200,250,3,20,fOptions),
    Bodies.polygon(150,350,3,20,fOptions),
    Bodies.polygon(200,450,3,20,fOptions),
    //row three
    Bodies.polygon(250,150,3,20,fOptions),
    Bodies.polygon(300,250,3,20,fOptions),
    Bodies.polygon(250,350,3,20,fOptions),
    Bodies.polygon(300,450,3,20,fOptions),
    //row four
    Bodies.polygon(350,150,3,20,fOptions),
    Bodies.polygon(400,250,3,20,fOptions),
    Bodies.polygon(350,350,3,20,fOptions),
    Bodies.polygon(400,450,3,20,fOptions),
    //row five
    Bodies.polygon(450,150,3,20,fOptions),
    Bodies.polygon(500,250,3,20,fOptions),
    Bodies.polygon(450,350,3,20,fOptions),
    Bodies.polygon(500,450,3,20,fOptions),
    //row six
    Bodies.polygon(550,150,3,20,fOptions),
    Bodies.polygon(600,250,3,20,fOptions),
    Bodies.polygon(550,350,3,20,fOptions),
    Bodies.polygon(600,450,3,20,fOptions),
    //row seven
    Bodies.polygon(650,150,3,20,fOptions),
    Bodies.polygon(700,250,3,20,fOptions),
    Bodies.polygon(650,350,3,20,fOptions),
    Bodies.polygon(700,450,3,20,fOptions),
    //row 8
    Bodies.polygon(755,150,3,20,fOptions),
    Bodies.polygon(740,350,3,20,fOptions),
];
for (i = 0; i < flanges.length; i++){
    World.add(engine.world,[flanges[i]])
    Body.setAngle(flanges[i], 16.23)
}
//create catches
const cOptions = {
    isStatic:true
}
const catches = [
    Bodies.rectangle(40,560,2,40,cOptions)
];
xasx = 82;
for (v = 0; v < 20; v++){
    catches.push(Bodies.rectangle(xasx,560,2,40,cOptions))
    World.add(engine.world,[catches[v]])
    xasx = xasx + 45;
}
// create disk
let disk = [];
let count = 0;
const dOptions = {
    friction: .2,
    restitution:1
}
function addD() {
    disk.push(Bodies.circle(event.offsetX ,event.offsetY, 20,dOptions ))
    World.add(engine.world,[disk[count]])
    count++
}
// create ground sky and walls
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
const leftWall = Bodies.rectangle(0, 305,2 , 810, { isStatic: true });
const righttWall = Bodies.rectangle(800, 305,2 , 810, { isStatic: true });
const sky = Bodies.rectangle(400, 0,810,2, { isStatic: true });
// add all of the bodies to the world
World.add(engine.world, [sky,righttWall,leftWall,ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
