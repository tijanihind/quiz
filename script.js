const quizQuestions = [{
    question: "What is the correct JavaScript syntax to change the content of the following HTML element? <p id='demo'>This is a demonstration.</p>",
    choices: ["document.getElement('p').innerHTML = 'Hello World!'';", "document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "#demo.innerHTML = 'Hello World!';"],
    correctAnswer: 2
},
{
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["False", "True"],
    correctAnswer: 0
},
{
    question: "How do you create a function in JavaScript?",
    choices: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
    correctAnswer: 2
},
{
    question: "How do you call a function named 'myFunction'?",
    choices: ["call function myFunction()", "myFunction()", "call myFunction()"],
    correctAnswer: 1
},
{
    question: "How to write an IF statement in JavaScript?",
    choices: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
    correctAnswer: 2
},
{
    question: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5"],
    correctAnswer: 1
},
];

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const startButton = document.getElementById("start-btn");
const timerContainer = document.getElementById("timer-container");
const gameOverContainer = document.getElementById("game-over-container");
const scoreForm = document.getElementById("score-form");
const initialsInput = document.getElementById("initials");
const highestScoreContainer = document.getElementById("highest-score-container");

let currentQuestionIndex = 0;
let timer;
let timeRemaining = 60; // Adjust as needed
let score = 0;
let highestScore = loadHighestScore();

startButton.addEventListener("click", startQuiz);
scoreForm.addEventListener("submit", saveScore);

function loadHighestScore() {
const storedScore = localStorage.getItem("highestScore");
return storedScore ? JSON.parse(storedScore) : null;
}

function saveHighestScore(scoreData) {
localStorage.setItem("highestScore", JSON.stringify(scoreData));
}

function displayHighestScore(highestScore) {
if (highestScore) {
    highestScoreContainer.textContent = `Highest Score: ${highestScore.initials} - ${highestScore.score}`;
} else {
    highestScoreContainer.textContent = "No previous highest score recorded.";
}
}

function startQuiz() {
resetQuiz();
startButton.style.display = "none";
quizContainer.style.display = "block";
timerContainer.textContent = "Time: " + timeRemaining;
startTimer();
showQuestion();
}

function resetQuiz() {
currentQuestionIndex = 0;
score = 0;
timeRemaining = 60;
gameOverContainer.style.display = "none";
quizContainer.style.display = "block";
startButton.style.display = "inline-block";
questionContainer.textContent = "";
choicesContainer.innerHTML = "";
timerContainer.textContent = "";
initialsInput.value = "";
}

function startTimer() {
timer = setInterval(function() {
    timeRemaining--;
    timerContainer.textContent = "Time: " + timeRemaining;

    if (timeRemaining <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}, 1000);
}

function showQuestion() {
const currentQuestion = quizQuestions[currentQuestionIndex];
questionContainer.textContent = currentQuestion.question;
choicesContainer.innerHTML = "";

currentQuestion.choices.forEach(function(choice, index) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function() {
        checkAnswer(index);
    });
    choicesContainer.appendChild(choiceButton);
});
}

function checkAnswer(choiceIndex) {
const currentQuestion = quizQuestions[currentQuestionIndex];

if (choiceIndex === currentQuestion.correctAnswer) {
    score++;
} else {
    timeRemaining -= 5; // Deduct 5 seconds for incorrect answer
    if (timeRemaining < 0) {
        timeRemaining = 0; // Ensure the timer doesn't go negative
    }
}

currentQuestionIndex++;

if (currentQuestionIndex >= quizQuestions.length || timeRemaining <= 0) {
    endQuiz();
} else {
    showQuestion();
}
}

function endQuiz() {
clearInterval(timer);
quizContainer.style.display = "none";
gameOverContainer.style.display = "block";
timerContainer.textContent = "Time: 0";

if (score > (highestScore ? highestScore.score : 0)) {
    const initials = initialsInput.value.trim();
    highestScore = { score, initials };
    saveHighestScore(highestScore);
    alert("Congratulations! You've achieved a new highest score.");
}
}

function saveScore(event) {
event.preventDefault();
const initials = initialsInput.value.trim();
if (initials !== "") {
    // Implement logic to save the score and initials
    // For example, you can send an HTTP request to a server
    // with the score and initials data
    // Here, we'll just display the score and initials in the console
    console.log("Score:", score);
    console.log("Initials:", initials);

    highestScore = { score, initials };
    saveHighestScore(highestScore);
    displayHighestScore(highestScore);

    resetQuiz();
    startButton.style.display = "inline-block";
}
}

displayHighestScore(highestScore);