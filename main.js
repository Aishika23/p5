function preload() {
    
}
function setup() {
    canvas = createCanvas(480, 480);
    canvas.position(535, 190);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 75, 75, 330, 330);
    
}
function take_snapshot() {
    save('jhd');
}
