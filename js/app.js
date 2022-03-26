function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    strokeWeight(70);
    if(mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}