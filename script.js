// Model

const app = document.getElementById("app");

let points = 0;
let number1 = randomNumber(1, 10);
let number2 = randomNumber(1, 10);
let ans = getCorrectSymbol(number1, number2);

// View

function updateView(submit = false) {
    app.innerHTML = /*html*/ `
        <div class="image-container">
            <img src="equal.png" alt="Crocodile" class="crocodile">
        </div>
        <div class="points">Points: ${points}</div>
        <div class="form-container">
            <div class="number">${number1}</div>
            <input type="text" id="user-input" maxlength="1" class="input" onsubmit="submitAnswer()">
            <div class="number">${number2}</div>
        </div>
        <div class="button-container">
            <button onclick="submitAnswer()">Submit</button>
            <button onclick="resetGame()">Reset</button>
        </div>
    `;
    addEventListener();
    document.getElementById("user-input").focus();
    document.getElementById("user-input").select();
}

updateView();

// Controller

function checkCrocodile() {
    inputElement === ans ? points++ : points--;
    generateNewNumbers();
    updateView(submit = true);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getCorrectSymbol(x, y) {
    if (x > y) {
        return ">";
    } else if (x < y) {
        return "<";
    } else {
        return "=";
    }
}

function generateNewNumbers() {
    number1 = randomNumber(1, 10);
    number2 = randomNumber(1, 10);
    ans = getCorrectSymbol(number1, number2);
}

function resetGame() {
    points = 0;
    generateNewNumbers();
    updateView();
}

function submitAnswer() {
    let userInput = document.getElementById("user-input").value;
    if (userInput === "") return;
    userInput === ans ? points++ : points--;
    generateNewNumbers();
    updateView();
}

function addEventListener() {
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") submitAnswer();
    });
}