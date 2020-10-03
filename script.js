const quiz = [
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
  {
    title: "The country with the largest population is",
    choices: ["India", "China", "America", "Brazil"],
    answer: "China",
  },
  {
    title: "One of the following organisms is very beneficial to the soil?",
    choices: ["Manure", "bettles", "nematodes", "earth worms"],
    answer: "earth worms",
  },
  {
    title: "Which element has an atomic mass of 12",
    choices: ["hydrogen", "nitrogen", "carbon", "oxygen"],
    answer: "carbon",
  },
  {
    title:
      "On 27th May 1967, three of the following states were carved out from Northern Nigeria - EXCEPT.",
    choices: ["Kwara", "Kano", "kaduna", "kebbi"],
    answer: "kebbi",
  },
  {
    title:
      "The first state to be created from Eastern Region, Nigeria on 27 May, 1967  is?",
    choices: ["Rivers State", "Imo State", "Anambra State", "enugu state"],
    answer: "Rivers State",
  },
  {
    title: "Which animal is a descendant of dinosaurs?",
    choices: ["chicken", "pig", "cat", "dog"],
    answer: "chicken",
  },
  {
    title: "Butter is made from:",
    choices: ["milk", "lard", "vegetable oil", "raspian fruit"],
    answer: "milk",
  },
  {
    title: "One of the following is not among the consumed vegetable oils.",
    choices: ["corn oil", "palm oil", "sunflower oil", "cashew oil"],
    answer: "cashew oil",
  },
  {
    title: "Egg shells are made from?",
    choices: ["calcium", "magnesium", "sodium", "phosphorus"],
    answer: "calcium",
  },
  {
    title: "Primary colors are ",
    choices: [
      "red, blue, yellow",
      "red, blue, green",
      "red, green, purple",
      "red, white, black",
    ],
    answer: "red, blue, yellow",
  },
  {
    title: "A shape with 5 sides is called?",
    choices: ["pentagon", "cuboid", "hexagon", "pentagon"],
    answer: "pentagon",
  },
  {
    title: "PC stands for",
    choices: [
      "personal computer",
      "personal chip",
      "public computer",
      "program code",
    ],
    answer: "personal computer",
  },
  {
    title:
      "A malicious code that spreads through a network by itself is caled a?",
    choices: ["virus", "root kit", "trojan", "worm"],
    answer: "worm",
  },
  {
    title:
      "Ancient greeks defeated the city of ____  by giving them a giant wooden statue containing soldiers?",
    choices: ["sparta", "Patras", "rome", "trojan"],
    answer: "trojan",
  },
  {
    title: "One of the following is not a god of thunder.",
    choices: ["loki", "thor", "sango", "amadioha"],
    answer: "loki",
  },
  {
    title:
      "____ are materials that don't allow heat or electricity to flow through readily",
    choices: ["insulators", "conductors", "diodes", "resistors"],
    answer: "insulators",
  },
  {
    title: "One of the following is an excellent insulator",
    choices: ["gold", "copper", "pure water", "silver"],
    answer: "pure water",
  },
  {
    title: "One of the following cannot be used to store electricity",
    choices: ["capacitor", "battery", "cellulite", "salt"],
    answer: "cellulite",
  },
  {
    title: "The following are input devices except:",
    choices: ["mouse", "touch screen", "speaker", "stylus"],
    answer: "speaker",
  },
  {
    title: "The following are top 10 programming languages except",
    choices: ["python", "java", "javascript", "scala"],
    answer: "scala",
  },
  {
    title:
      "Excreta of farm animals can be used to produce all of the following except",
    choices: ["methane", "electricity", "manure", "roughage"],
    answer: "roughage",
  },
  {
    title: "What part of cows is Pomo is made from:",
    choices: ["intestine", "oesophagus", "skin", "stomach"],
    answer: "skin",
  },
  {
    title:
      "In sensible countries, the animal part used to make pomo, is used for:",
    choices: ["spare parts", "door", "beef", "leather"],
    answer: "leather",
  },
  {
    title: "The favorite food of king cobras is:",
    choices: ["fish", "mice", "snakes", "frogs"],
    answer: "snakes",
  },
  {
    title: "The most used operating system is:",
    choices: ["windows", "ios", "mac book", "android"],
    answer: "android",
  },
  {
    title: "Plants make their food through:",
    choices: ["hydrolysis", "respiration", "transpiration", "photosynthesis"],
    answer: "photosynthesis",
  },
  {
    title:
      "Before electricity food one common method of food preservation was:",
    choices: ["grinding", "munching", "salting", "burying"],
    answer: "salting",
  },
  {
    title: "A goat that makes friends with a dog will learn to",
    choices: ["eat bone", "chase its tail", "bark", "eat excreta"],
    answer: "eat excreta",
  },
  {
    title: "A file has the name sumer.mp4 - the .MP4 part is called",
    choices: ["file clip", "file partition", "file extension", "file name"],
    answer: "file extension",
  },
  {
    title: "_____ produce the oxygen we breathe",
    choices: ["animals", "micro organisms", "plants", "science"],
    answer: "plants",
  },
  {
    title: "A device that produces electricity from moving air is called",
    choices: ["solar panel", "generator", "wind mill", "wind turbine"],
    answer: "wind turbine",
  },
  {
    title:
      "The device used to protect buildings from lightening strikes is called",
    choices: [
      "lightening protector",
      "lightening sphere",
      "lightening conductor",
      "lightening rod",
    ],
    answer: "lightening rod",
  },
  {
    title: "Corn can be used to make the following except",
    choices: ["bitumen", "bio plastic", "flour", "ethanol"],
    answer: "bitumen",
  },
  {
    title: "The part of the computer that can be touched is called",
    choices: ["hardware", "people ware", "middle ware", "software"],
    answer: "hardware",
  },
  {
    title:
      "The data that the CPU needs for calculations is temporarily kept in the",
    choices: ["CPU", "hard disk", "RAM", "ROM"],
    answer: "RAM",
  },
  {
    title: "The best place to hide a tree is in the",
    choices: ["village", "barracks", "bush", "forest"],
    answer: "forest",
  },
  {
    title: "Phone numbers is to phones as ______ is to internet",
    choices: ["url", "domain name", "website", "ip address"],
    answer: "ip address",
  },
  {
    title: "Human beings are made of 70%",
    choices: ["meat", "bone", "water", "fat"],
    answer: "water",
  },
  {
    title: "The basis of life is",
    choices: ["water", "carbon", "spirit", "energy"],
    answer: "carbon",
  },
];
/* todo:
once I implement local storage, next:
   change questions array to hold 10 questions instead of just the quiz indexes.
   randomize the choices (possible) answer on question array creation too

for now --- marking answers, pass question how?
*/
let score = 0;
let questions;
const numberOfQuestion = 10;
let count;
let quizUL = document.getElementById("quiz");
let quizTitle = document.getElementById("quizTitle");
let submitBTN = document.getElementById("submit");
let userChoice = document.querySelector('input[name="userChoice"]');
let radios;
let question;
let scoreBoardElem = document.getElementById("score");
let quizInprogress = false;

function initializeQuiz() {
  //reset quiz, pick random 10 questions.
  //Change it later to call this through a button click.
  //Will do this when I store quiz progress in local storage
  score = 0;
  count = 0;
  quizInprogress = true;
  questions = randomizeQuestion(numberOfQuestion, quiz.length);
}

function disableBTN() {
  submitBTN.disabled =
    document.querySelector('input[name="userChoice"]:checked') === null
      ? true
      : false;
}
function quizController() {
  submitBTN.onclick = markAnswer;
  if (!quizInprogress) initializeQuiz(); //only call if quiz is not in progress
  let quizIndex = questions[count];
  question = quiz[quizIndex];
  renderQuestion();
  count += 1;
}
function radioEvents() {
  radios = document.querySelectorAll('input[name="userChoice"]');
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", disableBTN);
  }
} // radioEvents end

function renderQuestion() {
  quizTitle.textContent = question.title;
  const choices = shuffle(question.choices);
  quizUL.innerHTML = "";
  for (let i = 0; i < choices.length; i++) {
    //create list items, radio and label from current question
    quizUL.innerHTML += `<li>
    <input type="radio" name="userChoice" id="${i}" value="${choices[i]}" />
    <label class="label" for="${i}">${capitalize(choices[i])}</label>
  </li>`;
  }
  submitBTN.textContent = "Submit";
  disableBTN(); //enables button when user makes a selection
  radioEvents(); //add event listener to all radio buttons to enable button when user selects an option
} //renderQuestion end

function markAnswer() {
  let userAnswer = document.querySelector('input[name="userChoice"]:checked')
    .value;
  const user = { right: "" };

  user.right = userAnswer === question.answer ? true : false;
  score = user.right ? (score += 1) : score;
  disableInput(user, userAnswer);

  scoreBoardElem.textContent = score;
  submitBTN.textContent = "Next Question";
  // submitBTN.onclick = renderQuestion;
  submitBTN.onclick = quizController;

  console.log("markanswer");
} //markAnswer end

function disableInput(user, userAnswer) {
  let userRadio; //the radio button user clicks
  let correctRadio; //radio button with the right answer;

  radios.forEach((element) => {
    element.disabled = true; //disable all radio buttons after user submits
    element.parentElement.style.pointerEvents = "none"; //remove hand cursor from each list item
    if (element.value.match(userAnswer)) userRadio = element.id; //get the id of the radio button the user selected
  });

  radios.forEach((element) => {
    if (element.value.match(question.answer)) correctRadio = element.id;
  });

  if (user.right) {
    document.getElementById(userRadio).parentElement.classList.add("right");
  } else {
    document.getElementById(userRadio).parentElement.classList.add("wrong");
    document.getElementById(correctRadio).parentElement.classList.add("right");
  }
} //disableInput end

function randomizeQuestion(numberOfQuestion, quizLength) {
  //numberOfQuestion is the number of questions to generate
  let list = [];
  let num;

  while (list.length < numberOfQuestion) {
    num = Math.floor(Math.random() * quizLength);
    if (!list.includes(num)) list.push(num);
  }
  return list;
} //randomizeQuestion end

//For shuffling the quiz answers
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

//Capitalize each quiz answer
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

quizController();
