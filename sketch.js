const size = 20;
let canvas, snake, food;
let gameStart, gameOver;

function setup() {
    canvas = createCanvas(600, 600);
    frameRate(5);
    noCursor();

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
    if (gameStart && !gameOver) {
        snake.move();
        if (snake.collided()) {
            gameOver = true;
        }
    }
    snake.display();
    food.display();

    displayMessages();
}

function keyPressed() {
    if (!gameOver) {
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
    } else {
        if (keyCode === ENTER) {
            gameStart = false;
            gameOver = false;
            snake = new Snake();
            food = new Food();
        }
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

function displayMessages() {
    let message = "";
    if (!gameStart && !gameOver) {
        message = "Press an arrow key to start . . .";
    }
    if (gameOver) {
        message = "Game Over\nPress Enter to try again . . ."
    }
    push();
    fill(255);
    textFont("Impact");
    textSize(40);
    textAlign(CENTER, CENTER);
    text(message, width / 2, height / 4);
    pop();
}