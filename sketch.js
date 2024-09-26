function setup() {
    createCanvas(windowWidth, windowHeight);
    //frameRate(4);
    background(0);
    console.log("hola");
    rectMode(CENTER);
}

function draw(){
    background(random(30, 90), random(20,255),0);
    fill (mouseY, 90, 20);
    circle(mouseX + 50, mouseY - 50, mouseX);
    //La sgiuiente linea da color al cuadrado
    fill(200, 90, 30)
    rect(mouseX,mouseY,100,100);
}