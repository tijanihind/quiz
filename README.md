# JavaScript Quiz Application

This repository contains a JavaScript quiz application that allows users to answer multiple-choice questions, tracks their score, and displays the remaining time. It includes various functions to manage the quiz, such as starting the quiz, displaying questions, checking answers, handling the timer, ending the quiz, and saving/displaying the highest score.

## Code Annotations

Here are some comments regarding the code:

- The code utilizes `addEventListener` to bind click events to the start button and submit event to the score form.
- The `loadHighestScore` function retrieves the highest score from local storage or returns `null` if not found.
- The `saveHighestScore` function saves the highest score to local storage.
- The `displayHighestScore` function displays the highest score on the page.
- The `startQuiz` function resets the quiz, hides the start button, displays the quiz container, starts the timer, and shows the first question.
- The `resetQuiz` function resets the quiz variables, hides the game over container, displays the quiz container, clears the question and choices, sets the timer to default, and resets the initials input value.
- The `startTimer` function sets an interval to decrement the time remaining by 1 second until it reaches 0, updating the timer container. If the time runs out, it stops the timer and ends the quiz.
- The `showQuestion` function dynamically displays the current question and its choices by creating buttons for each choice and appending them to the choices container.
- The `checkAnswer` function compares the selected answer with the correct answer for the current question, updates the score or deducts time accordingly, and advances to the next question or ends the quiz if there are no more questions or time runs out.
- The `endQuiz` function stops the timer, hides the quiz container, shows the game over container, sets the timer to 0, and checks if the score is higher than the previous highest score. If so, it prompts a message and saves the new highest score.
- The `saveScore` function handles the submission of the user's initials for saving the score. It prevents the default form submission, retrieves the initials, saves the score and initials, displays the highest score, resets the quiz, and shows the start button.

The quiz can be accessed [here](https://tijanihind.github.io/quiz/).
  
**Note:** The code assumes the presence of HTML elements with specific IDs (`quiz-container`, `question-container`, `choices-container`, `start-btn`, `timer-container`, `game-over-container`, `score-form`, `initials`, `highest-score-container`) that are not included in the provided code snippet.

The `displayHighestScore(highestScore)` function is called at the end to display the highest score when the page loads.

The code also includes a `console.log(highestScore)` statement, which logs the highest score object to the console.

## Screenshots

![Screenshot 1](/Image20230629232104.png)
![Screenshot 2](/Image20230629232117.png)
![Screenshot 2](/Image20230629232121.png)
