var numOfSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var squares = document.getElementsByClassName("square");
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var resetBtn = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init() {
    messageDisplay.textContent = "Please select a color block.";
    // mode buttons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            modeButtons[3].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numOfSquares = 3;
            } else if (this.textContent === "Medium") {
                numOfSquares = 6;
            } else if (this.textContent === "Hard") {
                numOfSquares = 9;
            } else {
                numOfSquares = 12;
            }
            reset();
        });
    }
    // squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var squareColor = this.style.backgroundColor;
            if (squareColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(squareColor);
                resetBtn.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again.";
            }
        });
    }
    reset();
}


resetBtn.addEventListener("click", function(){
    reset();
});

function reset() {
    colors = generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New Colors?"
    messageDisplay.textContent = "Please select a color block.";
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor() {
    var randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

function generateRandomColors(num) {
    var colors = [];
    for (var i = 0; i < num; i++) {
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}