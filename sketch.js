
var ants;
var res = 800;

function setup() {
    createCanvas(res + 200, res + 100);
    // ants = new LangtonsAnt(50, 60, 'LLRLR');
    // ants.changeColors('blue', 'red', 'yellow', 'magenta', 'gray');

    ants = new LangtonsAnt(50, 60, 'RLLLRLLL');
    ants.drawSequence();
    // ants.changeBehavior("RLLLR"); // RLLLR - kinda square after 130k steps
}

function draw() {
    // setTimeout(ants.move(), 10000);
    ants.move();
    ants.statistics();
}