
var amplitude=100;
var angle = 0;

function setup(){
    createCanvas(600,300);
}

function draw(){
    background("yellow");
    translate(width/2,height/2);

    var y= amplitude*sin((angle));
    fill("blue");
    stroke(2);
    line(0,0,0,y);
    ellipse(0,y,40,40);
    angle=angle+0.08;

}