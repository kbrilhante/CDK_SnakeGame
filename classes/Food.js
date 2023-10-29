class Food {
    constructor () {
        this.newPosition();
    }
    display() {
        push();
        rectMode(CORNER);
        fill("#FF0000");
        rect(this.x * size, this.y * size, size, size);
        pop();
    }
    newPosition() {
        const hb = width / size;
        const vb = height / size;
        this.x = floor(random(hb));
        this.y = floor(random(vb));
        if (this.x === snake.head.x && this.y === snake.head.y) {
            this.newPosition();
        }
    }
}