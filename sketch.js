
var ants;
var res = 800;

function setup() {
    createCanvas(res, res + 100);
    ants = new LangtonsAnt(50, 30);
    // ants.changeColors('blue', 'red', 'yellow', 'magenta', 'gray');
    ants.changeColors('black', 'red');

    // ants.changeBehavior("RLLLR"); // RLLLR - kinda square after 130k steps
}

function draw() {
    ants.move();
    ants.statistics();
}