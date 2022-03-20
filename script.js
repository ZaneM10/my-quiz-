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
    answerB: "wfwfwfwf",
    answerC: "ewfwffwf",
    answerD: "jfbwfjb",
    correctAnswer: "A",
  },
  {
    question: "What does C.S.S stand for ?  2/4",
    answerA: "jbv;dvbs",
    answerB: "wfwfwfwf",
    answerC: "Cascading Style Sheets",
    answerD: "jfbwfjb",
    correctAnswer: "C",
  },
  {
    question: "What is Java Script ?  3/4",
    answerA: ";lmf;n;gng ",
    answerB: "wfwfwfwf",
    answerC: "ewfwffwf",
    answerD: "interactions that we put on the page",
    correctAnswer: "D",
  },
  {
    question: "Why do we use C.S.S ?  4/4",
    answerA: "flj3ngig",
    answerB: "To make things look pretty",
    answerC: "ewfwffwf",
    answerD: "jfbwfjb",
    correctAnswer: "B",
  },
];

function endGame() {
  alert("Quiz is Done");
  alert("your hightscore is " + highscore + " is");
  console.log('gameover')
}
var secondsLeft = 60;

function startTimer() {
  var countdown = setInterval(function startTimer() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      endGame();
    } else {
      document.getElementById("time");
    }
  }, 1000);
  console.log(secondsLeft)
  endGame();
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
  questionIndex++;
}

answerAElment.addEventListener("click", function (event) {
  //   event.preventDeafault();
  console.log("Answer A has been clicked");

  if (questions[questionIndex].correctAnswer === "A") {
    alert("Correct");
    highscore + 250;
  } else {
    alert("Incorrect");
  }
  askNextQuestion();
});
answerBElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer B has been clicked");

  if (questions[questionIndex].correctAnswer === "B") {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
  }
  askNextQuestion();
});
answerCElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer C has been clicked");

  if (questions[questionIndex].correctAnswer === "C") {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
  }
  askNextQuestion();
});
answerDElment.addEventListener("click", function (event) {
  // event.preventDeafault();
  console.log("Answer D has been clicked");

  if (questions[questionIndex].correctAnswer === "D") {
    alert("Correct");
    highscore ++;
  } else {
    alert("Incorrect");
  }
  askNextQuestion();
});

function startGame() {
  document.getElementById("con").classList.toggle("hide");
  document.getElementById("info-list").classList.toggle("hide");
  preventDeafault();
  startTimer();
  askNextQuestion();
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
});

startGame();
startTimer();
