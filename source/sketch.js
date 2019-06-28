let ants;

function setup() {
    createCanvas(window.innerHeight + 100, window.innerHeight);

    ants = new LangtonsAnt(50, window.innerHeight - 100, 60, 'RLLLRLLL');
    ants.drawSequence();
}

function draw() {
    ants.move();
    ants.statistics();
}