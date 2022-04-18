var startBtn = document.getElementById("con");
startBtn.addEventListener("click", askNextQuestion);
var answerAElment = document.getElementById("buttonA");
var answerBElment = document.getElementById("buttonB");
var answerCElment = document.getElementById("buttonC");
var answerDElment = document.getElementById("buttonD");
var questionElement = document.getElementById("quest");
var infoList = document.getElementById("info-list");
var infoTitle = document.getElementById("info-title");

var correctAnswer = "";
var highscore = 0;
var timeRemainingElement = document.getElementById("timeRemaining");

quest.style.display = "none";
buttonA.style.display = "none";
buttonB.style.display = "none";
buttonC.style.display = "none";
buttonD.style.display = "none";

var questions = [
  {
    question: "What does H.T.M.L stand for ?  1/4",
    answerA: "Hyper Text Markup Language",
    answerB: "Hyper Texture Makeup Log",
    answerC: "Ham Toast Mayo Lettuce",
    answerD: "Home Tool Maintainace Logic",
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "What does C.S.S stand for ?  2/4",
    answerA: "Curb Side Sandwhices ",
    answerB: "Converse Sneakers and Slides",
    answerC: "Cascading Style Sheets",
    answerD: "Case Styled Shoes",
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What is Java Script ?  3/4",
    answerA: "The coffee menu",
    answerB: "Code that we use to put color the page ",
    answerC: "Something from history class",
    answerD: "interactions that we put on the page",
    correctAnswer: "interactions that we put on the page",
  },
  {
    question: "Why do we use C.S.S ?  4/4",
    answerA: "Cascading Styled Sheets",
    answerB: "To make things look pretty",
    answerC: "What even is C.S.S. ?",
    answerD: "To make things interactive with the user",
    correctAnswer: "To make things look pretty",
    
  },
];

function endGame() {
  alert("Quiz is Done");
  alert("you got " + highscore + " out of 4 questions");
  alert("you finished with " + secondsLeft + " seconds left")
  console.log('gameover');
  reloadPage();
}
var secondsLeft = 120;

function startTimer() {
  timerInterval = setInterval(function () {
      secondsLeft--;
      if (secondsLeft <= 0) {
          endGame();
      }
      document.getElementById('timer').textContent = 'Timer: ' + secondsLeft;
      console.log('interval running', secondsLeft);
  }, 1000);

}

var questionIndex = 0;
function askNextQuestion() {
  if (questionIndex >= questions.length) {
    endGame();
  } else {
    questionElement.textContent = questions[questionIndex].question;
    answerAElment.textContent = questions[questionIndex].answerA;
    answerBElment.textContent = questions[questionIndex].answerB;
    answerCElment.textContent = questions[questionIndex].answerC;
    answerDElment.textContent = questions[questionIndex].answerD;
  }
 
}

answerAElment.addEventListener("click", function (event) {
  //   event.preventDeafault();
  console.log("Answer A has been clicked");
  var userGuess = event.target.textContent
  console.log(questions[questionIndex].correctAnswer)
  if (questions[questionIndex].correctAnswer === userGuess) {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
    secondsLeft -=20;
  }
  questionIndex++
  askNextQuestion();
});
answerBElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer B has been clicked");
  var userGuess = event.target.textContent
  if (questions[questionIndex].correctAnswer === userGuess) {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
    secondsLeft -=20;
  }
  questionIndex++
  askNextQuestion();
});
answerCElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer C has been clicked");
  var userGuess = event.target.textContent
  if (questions[questionIndex].correctAnswer === userGuess) {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
    secondsLeft -=20;
  }
  questionIndex++
  askNextQuestion();
});
answerDElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer D has been clicked");
  var userGuess = event.target.textContent
  if (questions[questionIndex].correctAnswer === userGuess) {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
    secondsLeft -=20;
  }
  questionIndex++
  askNextQuestion();
 
});

function startGame() {
  document.getElementById("con").classList.toggle("hide");
  document.getElementById("info-list").classList.toggle("hide");
  askNextQuestion();
}
function reloadPage(){
  window.location.reload();
}
startBtn.addEventListener("click", function (event) {
  infoList.style.display = "none";
  infoTitle.style.display = "none";
  quest.style.display = "block";
  buttonA.style.display = "block";
  buttonB.style.display = "block";
  buttonC.style.display = "block";
  buttonD.style.display = "block";

  console.log("con");
  startGame();
  askNextQuestion();
  startTimer();
});

startGame();
 
