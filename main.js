class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.organisms = [];
    }

    start() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.update();
    }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw();
        requestAnimationFrame(() => this.update());
    }

    draw() {
        this.context.fillStyle = 'green';
        this.context.fillRect(50, 50, 100, 100);
    }
}

window.onload = () => {
    const game = new Game();
    game.start();
};
