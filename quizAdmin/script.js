//Remove when development complete
//helps with the weird situation where vs code forces a refresh because of changes in quizData on form submission.

// window.onbeforeunload = (e) => e.preventDefault();

//remove

let quizForm = document.getElementById("quizForm");
const noOfChoices = 4;

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleForm();
});

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

function handleForm() {
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
    id: "",
    title: question.value,
    choices,
    answer,
  };
  submitQuiz(newQuestion);
}

async function submitQuiz(question) {
  // https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await
  const config = {
    method: "POST",
    body: JSON.stringify(question),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/quiz/`, config);
    const data = await response.json();
    quizForm.reset();
  } catch (e) {
    console.log(e);
    return e;
  }
}
function removeOption(id) {
  document.getElementById(id).parentElement.remove();
}

function submitForm() {
  // const data = {
  //   id: "",
  //   title: "Do you know my  name?",
  //   choices: ["Yes", "hell no", "maybe"],
  //   answer: "hell no",
  // };
  //   fetch(`http://localhost:3000/quiz/`, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-type": "application/json; charset=UTF-8" },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
}
