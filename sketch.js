const size = 20;
let canvas, snake, food;
let gameStart, gameOver;

function preload() {}

function setup() {
    canvas = createCanvas(600, 600);
    frameRate(5);

    gameStart = false;
    gameOver = false;

    snake = new Snake();
    food = new Food();
}

function draw() {
    background(0);
    if (mouseIsPressed) {
        drawGrid(); //temporary thing to make us debug better
    }

    food.display();
    if (gameStart && !gameOver) {
        snake.move();
    }
    snake.display();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        gameStart = true;
        snake.changeDirection(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        gameStart = true;
        snake.changeDirection(1, 0);
    } else if (keyCode === UP_ARROW) {
        gameStart = true;
        snake.changeDirection(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        gameStart = true;
        snake.changeDirection(0, 1);
    } 
}

function drawGrid() {
    push();
    strokeWeight(1);
    stroke(255);
    for (let i = 0; i < width; i+=size) {
        line(i, 0, i, height);
    }
    for (let i = 0; i < height; i+=size) {
        line(0, i, width, i);
    }
    pop();
}