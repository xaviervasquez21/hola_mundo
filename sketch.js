function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    frameRate(60);
    background(0);
    console.log("hola");
    rectMode(CENTER);
}

function draw(){
    background(random(30, 90), random(20,255),0,10);

    //no relleno solo coloco el no
    //strokeWeight(5);
    //noFill();
    //stroke(255, 0, 0);
    //circle(mouseX + 50, mouseY - 50, mouseX);
    
    //La sgiuiente linea da color al cuadrado
    //strokeWeight(1);
    //stroke(255, 0, 0);
    //fill(200, 90, 30);
    //rect(mouseX,mouseY,100,100);

    // Draw the triangle.
    fill(228, 0, 224);
    noStroke();
    rotateY(frameCount * 0.10);
    triangle(mouseX, mouseY, 30, 40, 50, 80);
}