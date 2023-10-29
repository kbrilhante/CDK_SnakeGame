class Snake {
    constructor() {
        const hb = width / size;
        const vb = height / size;
        this.head = {
            x: floor(hb / 2),
            y: floor(vb / 2)
        }
        this.tail = [];
        this.dx = 0;
        this.dy = 0;
    }
    display() {
        push();
        rectMode(CORNER);
        fill("#00FF00");
        rect(this.head.x * size, this.head.y * size, size, size);
        for (let i = 0; i < this.tail.length; i++) {
            const tailPart = this.tail[i];
            rect(tailPart.x * size, tailPart.y * size, size, size);
        }
        pop();
    }
    changeDirection(dx, dy) {
        if (this.dx === 0 || dx === 0) {
            this.dx = dx;
        }
        if (this.dy === 0 || dy === 0) {
            this.dy = dy;
        }
    }
    move() {
        const lp = {
            x: this.head.x,
            y: this.head.y
        }

        this.head.x += this.dx;
        this.head.y += this.dy;

        this.eat();
        for (let i = this.tail.length - 1; i >= 0; i--) {
            if (i === 0) {
                this.tail[i] = lp;
            } else {
                this.tail[i] = this.tail[i - 1];
            }
        }

        // if (this.head.x > 30) {
        //     this.head.x = 0
        // }
        // if (this.head.x < 0) {
        //     this.head.x = 30
        // }
        // if (this.head.y > 30) {
        //     this.head.y = 0
        // }
        // if (this.head.y < 0) {
        //     this.head.y = 30
        // }
    }
    eat() {
        if (this.head.x === food.x && this.head.y === food.y) {
            this.grow();
            food = new Food();
        }
    }
    grow() {
        const tailPart = {
            x: food.x,
            y: food.y
        }
        this.tail.push(tailPart);
    }
    collided() {
        for (let i = 0; i < this.tail.length; i++) {
            if (this.head.x === this.tail[i].x && this.head.y === this.tail[i].y) {
                return true;
            }
        }
        const hb = width / size;
        const vb = height / size;
        if (this.head.x >= hb || this.head.x < 0) {
            return true;
        }
        if (this.head.y >= vb || this.head.y < 0) {
            return true;
        }
        return false;
    }
}