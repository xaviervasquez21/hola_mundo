function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    background(0);
    console.log("hola");
    rectMode(CENTER);
}

function draw(){
    background(0, 0, random (0, 50)); //Sin transparencia el fondo

    //no relleno solo coloco el no
    strokeWeight(3);
    noFill();
    stroke(random(0, 255), random(0, 255), random(0, 255));
    circle(mouseX, mouseY, mouseX);
    
    //La sgiuiente linea da color al cuadrado
    //strokeWeight(2);
    //stroke(0, 0, 0);

    //Primer Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX,mouseY, 15, 40);

    //Segundo Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX, mouseY +5 , 45, 10);

    //Tercer Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX -18, mouseY +10 , 10, 15);

    //Cuarto Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX +18, mouseY +10 , 10, 15);

    //Quinto Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX -15, mouseY -2, 5, 5);

    //Sexto Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX +15, mouseY -2, 5, 5);

    //Séptimoo Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX, mouseY -22, 5, 5);

    //Octavo Cuadrado Nave Espacial
    noStroke();
    fill(25, 207, 225);
    rect(mouseX, mouseY +22, 5, 5);

    //Noveno Cuadrado Nave Espacial
    noStroke();
    fill(255, 255, 255);
    rect(mouseX, mouseY -8, 5, 15);

    // Draw the triangle.
    //fill(228, 0, 224);
    //stroke(0, 0, 0);
    //strokeWeight(3);
    //rotateY(frameCount * 0.10);
    //triangle(0, 0, 0, -50, 50, 0);

    //fill(228, 0, 224);
    //stroke(0, 0, 0);
    //strokeWeight(3);
    //rotateY(frameCount * 0.10);
    //triangle(-50, 0, -1, -50, -1, 0);
}