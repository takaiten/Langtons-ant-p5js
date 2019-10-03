let ants;

function setup() {
    createCanvas(window.innerHeight + 100, window.innerHeight);

    ants = new LangtonsAnt(50, window.innerHeight - 100, 1, 'RL');
    ants.changeColors(0, 'red');
    ants.drawSequence();
}

function draw() {
    ants.move();
    ants.statistics();
}