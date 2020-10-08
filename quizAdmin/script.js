let quiz = [
  {
    title: "What's Earth's biggest satellite?",
    choices: [
      "Moon",
      "Spitzer Space Telescope",
      "Aryabhata",
      "James Webb Space Telescope",
    ],
    answer: "Moon",
  },
];

let quizForm = document.getElementById("quizForm");
const noOfChoices = 4;
document.forms.quizForm.addEventListener("submit", handleForm);

let question = document.getElementById("question");
let answersDIV = document.getElementById("answersDIV");

let choices = [];
let answer;
let answerRadio = quizForm.querySelectorAll("input[name=answer]");
let choiceInputs = answersDIV.querySelectorAll('input[type="text"]');
let display = document.getElementById("display");
// noOfChoices.forEach(
//   (i) =>
//     `
// <label class="option">
// <span>${i}</span>
// <input type="text" placeholder="Enter answer" required tabindex="2" id="${i}"/>
// <label class="radio">
//   <input type="radio" name="answer" id="" value="${i}" />
// </label>
// </label>
// `
// );

function handleForm(e) {
  e.preventDefault();
  choices = [];

  answerRadio.forEach(
    (radio) => (answer = radio.checked ? radio.value : answer)
  ); //get the radio selected radio button

  answer = document.getElementById(answer).value;

  choiceInputs.forEach((input) => {
    if (answer !== input.value) {
      choices = [...choices, input.value];
    }
  }); //Assumes all input[type=text] have values. Assigns all options that aren't the right answer to the choices array.

  let newQuestion = {
    title: question.value,
    choices,
    answer,
  };

  quiz.push(newQuestion);
  display.textContent = JSON.stringify(quiz, null, 2);

  //   quiz.forEach((el) => (display.textContent += el));
}
function removeOption(id) {
  document.getElementById(String(id)).parentElement = "";
}
