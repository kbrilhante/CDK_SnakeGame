class Snake {
    constructor () {
        const hb = width / size;
        const vb = height / size;
        this.head = {
            x: floor(hb / 2),
            y: floor(vb / 2)
        }
        this.body = [this.head];
        this.dx = 0;
        this.dy = 0;
    }
    display() {
        push();
        rectMode(CORNER);
        fill("#00FF00");
        for (let i = 0; i < this.body.length; i++) {
            const bodyPart = this.body[i];
            rect(bodyPart.x * size, bodyPart.y * size, size, size);
        }
        pop();
    }
    changeDirection(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
    move() {
        this.head.x += this.dx;
        this.head.y += this.dy;
        this.eat();

        if(this.head.x > 30) {
            this.head.x = 0
        }
        if(this.head.x < 0) {
            this.head.x = 30
        }
        if(this.head.y > 30) {
            this.head.y = 0
        }
        if(this.head.y < 0) {
            this.head.y = 30
        }
    }
    eat() {
        if (this.head.x === food.x && this.head.y === food.y) {
            this.grow();
            food = new Food();
        }
    }
    grow() {
        const bodyPart = {
            x: food.x,
            y: food.y
        }
        this.body.push(bodyPart);
    }
}