
var ants;
var res = 800;

function setup() {
    createCanvas(res, res + 100);
    ants = new LangtonsAnt(100, 60);
    // ants.changeBehavior("RLLLR"); // RLLLR - kinda square after 130k steps
}

function draw() {
    ants.move();
    ants.statistics();
}