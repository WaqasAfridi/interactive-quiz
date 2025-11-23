import { Questions } from "./questions.js";

// index of Questions array
let questionIndex = 0;

function resetUserInteractivity() {
  Questions.forEach((Ques, index) => {
    Ques.userChoice = "";
    Ques.options.forEach((opt, i) => {
      document.querySelector(`.option${i}-btn`).classList.remove("selected");
      if (
        Questions[questionIndex].userChoice ===
        document.querySelector(`.option${i}`).innerText
      ) {
        document.querySelector(`.option${i}-btn`).classList.add("selected");
      }
    });
  });
}

function changeSelectedOption() {
  for (let i = 0; i < 4; i++) {
    document.querySelector(`.option${i}-btn`).classList.remove("selected");
    if (
      Questions[questionIndex].userChoice ===
      document.querySelector(`.option${i}`).innerText
    ) {
      document.querySelector(`.option${i}-btn`).classList.add("selected");
    }
  }
}

function renderQuiz() {
  // Question Content
  const questionText = `Q${questionIndex + 1}: ${
    Questions[questionIndex].question
  }`;
  const questionElem = document.querySelector(".question");
  questionElem.innerText = questionText;

  // Options Interactivity
  Questions[questionIndex].options.forEach((option, index) => {
    // Option buttons Content
    const optionContent = document.querySelector(`.option${index}`);
    optionContent.innerText = option;

    // Option event listener
    const optionBtn = document.querySelector(`.option${index}-btn`);

    optionBtn.addEventListener("click", () => {
      let userChoice = optionContent.innerText;
      Questions[questionIndex].userChoice = userChoice;
      changeSelectedOption();
      renderProgressline();
    });
  });
}

function currentDate() {
  return new dayjs().format("DD-MMM-YYYY");
}
function currentTime() {
  return new dayjs().format("hh:mm A");
}

function AnsweredofTotal() {
  let answeredCount = 0;
  Questions.forEach((Ques, ind) => {
    if (Ques.userChoice !== "") {
      answeredCount++;
    }
  });
  return `${answeredCount} / ${Questions.length}`;
}

function correctlyAnswered() {
  let correctAnsweredCount = 0;
  Questions.forEach((Ques, ind) => {
    if (Ques.userChoice === Ques.answer) {
      correctAnsweredCount++;
    }
  });
  return `${correctAnsweredCount} / ${Questions.length}`;
}

function acurracyPercentage() {
  let correctAnsweredCount = 0;
  Questions.forEach((Ques, ind) => {
    if (Ques.userChoice === Ques.answer) {
      correctAnsweredCount++;
    }
  });
  return `${Math.round((correctAnsweredCount / Questions.length) * 100)}%`;
}

function countAnswered() {
  let answered = 0;
  Questions.forEach((Ques) => {
    if (Ques.userChoice != "") {
      answered++;
    }
  });
  return answered;
}
function renderProgressline() {
  let answered = countAnswered();
  const progressLine = document.querySelector(".progress-fill");
  const progressText = document.querySelector(".progress-text");
  let progressPercentage = Math.round((answered / Questions.length) * 99.6);
  progressLine.style.width = `${progressPercentage}%`;
  progressText.innerText = `${answered} / ${Questions.length}`;
  if (progressPercentage < 45) {
    progressText.style.color = "green";
  } else {
    progressText.style.color = "yellow";
  }
}
// Quiz Footer Buttons
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");

function viewAndHideQuizButtons(){
  if (questionIndex == 0){
    previousBtn.style.display = 'none';
  }else{
    previousBtn.style.display = 'block';
  }

  if (questionIndex == Questions.length-1){
    nextBtn.style.display = 'none';
  }else{
    nextBtn.style.display = 'block';
  }
} 

// Quiz Footer Buttons interactivity
previousBtn.addEventListener("click", () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuiz();
    changeSelectedOption();
    renderProgressline();
    viewAndHideQuizButtons()
  }
});

nextBtn.addEventListener("click", () => {
  if (questionIndex < Questions.length - 1) {
    questionIndex++;
    renderQuiz();
    changeSelectedOption();
    renderProgressline();
    viewAndHideQuizButtons()
  }
});

submitBtn.addEventListener("click", () => {
  document.querySelector(".result-box").style.display = "block";
  document.querySelector(".quiz-box").style.display = "none";
  renderResultBox();
});

function renderOptions() {
  Questions.forEach((Ques, number) => {
    Ques.options.forEach((Opt, ind) => {
      const resultOption = document.querySelector(
        `.MCQ-${number}-option${ind}`
      );
      resultOption.innerText = Opt;
    });
  });
}

function renderFeedbackMessages() {
  Questions.forEach((Ques, number) => {
    const feedbackMessageIncorrect = document.querySelector(
      `.MCQ-${number}-feedback-message-incorrect`
    );
    const feedbackMessageEmpty = document.querySelector(
      `.MCQ-${number}-feedback-message-empty`
    );
    feedbackMessageEmpty.innerText = Ques.feedback;
    feedbackMessageIncorrect.innerText = Ques.feedback;
  });
}

function highlightSelectedOptions() {
  Questions.forEach((Ques, number) => {
    Ques.options.forEach((Opt, ind) => {
      if (Opt === Ques.userChoice) {
        const userSelectedOption = document.querySelector(
          `.MCQ-${number}-option${ind}`
        );
        userSelectedOption.classList.add("result-option-selected");
      }
    });
  });
}

function chooseFeedbackNotification() {
  Questions.forEach((Ques, number) => {
    let isCorrect = false;
    let isEmpty = false;
    let isIncorrect = false;

    if (Ques.userChoice === Ques.answer) {
      isCorrect = true;
    }
    if (Ques.userChoice === "") {
      isEmpty = true;
    }
    if (Ques.userChoice !== Ques.answer) {
      isIncorrect = true;
    }

    if (isCorrect) {
      document.querySelector(`.correct-notification-${number}`).style.display =
        "block";
      document.querySelector(
        `.incorrect-notification-${number}`
      ).style.display = "none";
      document.querySelector(`.empty-notification-${number}`).style.display =
        "none";
    } else if (isEmpty) {
      document.querySelector(`.correct-notification-${number}`).style.display =
        "none";
      document.querySelector(
        `.incorrect-notification-${number}`
      ).style.display = "none";
      document.querySelector(`.empty-notification-${number}`).style.display =
        "block";
    } else if (isIncorrect) {
      document.querySelector(`.correct-notification-${number}`).style.display =
        "none";
      document.querySelector(
        `.incorrect-notification-${number}`
      ).style.display = "block";
      document.querySelector(`.empty-notification-${number}`).style.display =
        "none";
    }
  });
}

function renderResultBox() {
  document.querySelector(".date-data").innerText = currentDate();
  document.querySelector(".time-data").innerText = currentTime();
  document.querySelector(".answered-data").innerText = AnsweredofTotal();
  document.querySelector(".correctly-answered-data").innerText =
    correctlyAnswered();
  document.querySelector(".accuracy-percentage").innerText =
    acurracyPercentage();
  document.querySelector(".accuracy").style.background = `conic-gradient(
    green 0%,
    green ${acurracyPercentage()},
    rgb(232, 232, 232) ${acurracyPercentage()},
    rgb(232, 232, 232) 100%
  )`;

  let questionBoxHTML = "";

  Questions.forEach((MCQ, index) => {
    questionBoxHTML += `<div class="questionBox">
                            <div class="result-question">
                                ${index + 1}. ${MCQ.question}
                            </div>
                            <div class="result-options MCQ-${index}-options">
                                <div class="result-option MCQ-${index}-option0"></div>
                                <div class="result-option MCQ-${index}-option1"></div>
                                <div class="result-option MCQ-${index}-option2"></div>
                                <div class="result-option MCQ-${index}-option3"></link></div>
                            </div>
                            <hr>
                            <div class="result-feedback">
                                <div class="feedback-notification">
                                    <div class="correct-notification correct-notification-${index}"><i class="fas fa-check-circle"></i> Correct</div>
                                    <div class="incorrect-notification incorrect-notification-${index}"><i class="fa-solid fa-circle-xmark"></i> Incorrect: <span class="feedback-message MCQ-${index}-feedback-message-incorrect"></span></div>
                                    <div class="empty-notification empty-notification-${index}"><i class="fa-solid fa-circle-question"></i> Not Selected: <span class="feedback-message MCQ-${index}-feedback-message-empty"></span></div>
                                </div>
                                
                            </div>
                        </div>`;
  });

  const questionContainer = document.querySelector(".question-container");
  questionContainer.innerHTML = questionBoxHTML;
  renderOptions();
  renderFeedbackMessages();
  highlightSelectedOptions();
  chooseFeedbackNotification();
}

const startQuizBtn = document.querySelector(".start-quiz");
startQuizBtn.addEventListener("click", () => {
  document.querySelector(".landing-page").style.display = "none";
  document.querySelector(".quiz-box").style.display = "flex";
  renderQuiz();
  renderProgressline();
  viewAndHideQuizButtons()
});

const homeBtn = document.querySelector(".home-btn");
homeBtn.addEventListener("click", () => {
  questionIndex = 0;
  renderQuiz();
  resetUserInteractivity();
  renderProgressline();
  document.querySelector(".result-box").style.display = "none";
  document.querySelector(".landing-page").style.display = "flex";
});

const restartQuizBtn = document.querySelector(".restart-quiz");
restartQuizBtn.addEventListener("click", () => {
  questionIndex = 0;
  renderQuiz();
  resetUserInteractivity();
  renderProgressline();
  viewAndHideQuizButtons()
  document.querySelector(".result-box").style.display = "none";
  document.querySelector(".quiz-box").style.display = "flex";
});
