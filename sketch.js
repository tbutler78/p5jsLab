// either setup() or draw() required to to load p5

// setup() runs once, for initial setup or if program doesn't need a code loop
function setup(){
    // get started with a canvas & a line
    createCanvas(640, 480);
    line(15, 25, 70, 90);
}

// draw() runs repeatedly, use for animation
function draw(){


    if(mouseIsPressed) {
        fill(0)
    } else {
        fill(255);
    }

    ellipse(mouseX, mouseY, 80, 80);
}

