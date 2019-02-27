
var ants;
var res = 800;

function setup() {
    createCanvas(res, res + 100);
    ants = new LangtonsAnt(40, 60, 'LRLLL');
    ants.changeColors('blue');
    ants.changeColors('red');
    ants.changeColors('yellow');
    ants.changeColors('magenta');
    ants.changeColors('gray');
    // ants.changeBehavior("RLLLR"); // RLLLR - kinda square after 130k steps
}

function draw() {
    ants.move();
    ants.statistics();
}