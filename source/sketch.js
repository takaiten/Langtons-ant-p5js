let ants;

function setup() {
    // const res = window.innerHeight - 100;
    createCanvas(window.innerHeight + 100, window.innerHeight);
    // ants = new LangtonsAnt(50, 60, 'LLRLR');
    // ants.changeColors('blue', 'red', 'yellow', 'magenta', 'gray');

    ants = new LangtonsAnt(50, window.innerHeight - 100, 60, 'RLLLRLLL');
    ants.drawSequence();
    // ants.changeBehavior("RLLLR"); // RLLLR - kinda square after 130k steps
}

function draw() {
    ants.move();
    ants.statistics();
}