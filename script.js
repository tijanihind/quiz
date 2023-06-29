// Define your quiz questions and answers as an array of objects
const quizQuestions = [
    {
      question: "Question 1",
      choices: ["Answer 1", "Answer 2", "Answer 3"],
      correctAnswer: 0
    },
    {
      question: "Question 2",
      choices: ["Answer 1", "Answer 2", "Answer 3"],
      correctAnswer: 1
    },
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  const startButton = document.getElementById("start-btn");
  const timerContainer = document.getElementById("timer-container");
  const gameOverContainer = document.getElementById("game-over-container");
  const scoreForm = document.getElementById("score-form");
  const initialsInput = document.getElementById("initials");
  
  let currentQuestionIndex = 0;
  let timer;
  let timeRemaining = 20; // Adjust as needed
  let score = 0;
  
  startButton.addEventListener("click", startQuiz);
  scoreForm.addEventListener("submit", saveScore);
  
  function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    timerContainer.textContent = "Time: " + timeRemaining;
    startTimer();
    showQuestion();
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
  }
    if (choiceIndex === currentQuestion.correctAnswer) {
      score++;
   }
  




