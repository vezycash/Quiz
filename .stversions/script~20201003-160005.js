const quiz = [
  {
    question: "What's Earth's biggest satellite?",
    choices: [
      "Moon",
      "Spitzer Space Telescope",
      "Aryabhata",
      "James Webb Space Telescope",
    ],
    answer: "Moon",
  },
  {
    question: "The country with the largest population is",
    choices: ["India", "China", "America", "Brazil"],
    answer: "China",
  },
  {
    question: "One of the following organisms is very beneficial to the soil?",
    choices: ["Manure", "bettles", "nematodes", "earth worms"],
    answer: "earth worms",
  },
  {
    question: "Which element has an atomic mass of 12",
    choices: ["hydrogen", "nitrogen", "carbon", "oxygen"],
    answer: "carbon",
  },
  {
    question:
      "On 27th May 1967, three of the following states were carved out from Northern Nigeria - EXCEPT.",
    choices: ["Kwara", "Kano", "kaduna", "kebbi"],
    answer: "kebbi",
  },
  {
    question:
      "The first state to be created from Eastern Region, Nigeria on 27 May, 1967  is?",
    choices: ["Rivers State", "Imo State", "Anambra State", "enugu state"],
    answer: "Rivers State",
  },
  {
    question: "Which animal is a descendant of dinosaurs?",
    choices: ["chicken", "pig", "cat", "dog"],
    answer: "chicken",
  },
  {
    question: "Butter is made from:",
    choices: ["milk", "lard", "vegetable oil", "raspian fruit"],
    answer: "milk",
  },
  {
    question: "One of the following is not among the consumed vegetable oils.",
    choices: ["corn oil", "palm oil", "sunflower oil", "cashew oil"],
    answer: "cashew oil",
  },
  {
    question: "Egg shells are made from?",
    choices: ["calcium", "magnesium", "sodium", "phosphorus"],
    answer: "calcium",
  },
  {
    question: "Primary colors are ",
    choices: [
      "red, blue, yellow",
      "red, blue, green",
      "red, green, purple",
      "red, white, black",
    ],
    answer: "red, blue, yellow",
  },
  {
    question: "A shape with 5 sides is called?",
    choices: ["pentagon", "cuboid", "hexagon", "pentagon"],
    answer: "pentagon",
  },
  {
    question: "PC stands for",
    choices: [
      "personal computer",
      "personal chip",
      "public computer",
      "program code",
    ],
    answer: "personal computer",
  },
  {
    question:
      "A malicious code that spreads through a network by itself is caled a?",
    choices: ["virus", "root kit", "trojan", "worm"],
    answer: "worm",
  },
  {
    question:
      "Ancient greeks defeated the city of ____  by giving them a giant wooden statue containing soldiers?",
    choices: ["sparta", "Patras", "rome", "trojan"],
    answer: "trojan",
  },
  {
    question: "One of the following is not a god of thunder.",
    choices: ["loki", "thor", "sango", "amadioha"],
    answer: "loki",
  },
  {
    question:
      "____ are materials that don't allow heat or electricity to flow through readily",
    choices: ["insulators", "conductors", "diodes", "resistors"],
    answer: "insulators",
  },
  {
    question: "One of the following is an excellent insulator",
    choices: ["gold", "copper", "pure water", "silver"],
    answer: "pure water",
  },
  {
    question: "One of the following cannot be used to store electricity",
    choices: ["capacitor", "battery", "cellulite", "salt"],
    answer: "cellulite",
  },
  {
    question: "The following are input devices except:",
    choices: ["mouse", "touch screen", "speaker", "stylus"],
    answer: "speaker",
  },
  {
    question: "The following are top 10 programming languages except",
    choices: ["python", "java", "javascript", "scala"],
    answer: "scala",
  },
  {
    question:
      "Excreta of farm animals can be used to produce all of the following except",
    choices: ["methane", "electricity", "manure", "roughage"],
    answer: "roughage",
  },
  {
    question: "What part of cows is Pomo is made from:",
    choices: ["intestine", "oesophagus", "skin", "stomach"],
    answer: "skin",
  },
  {
    question:
      "In sensible countries, the animal part used to make pomo, is used for:",
    choices: ["spare parts", "door", "beef", "leather"],
    answer: "leather",
  },
  {
    question: "The favorite food of king cobras is:",
    choices: ["fish", "mice", "snakes", "frogs"],
    answer: "snakes",
  },
  {
    question: "The most used operating system is:",
    choices: ["windows", "ios", "mac book", "android"],
    answer: "android",
  },
  {
    question: "Plants make their food through:",
    choices: ["hydrolysis", "respiration", "transpiration", "photosynthesis"],
    answer: "photosynthesis",
  },
  {
    question:
      "Before electricity food one common method of food preservation was:",
    choices: ["grinding", "munching", "salting", "burying"],
    answer: "salting",
  },
  {
    question: "A goat that makes friends with a dog will learn to",
    choices: ["eat bone", "chase its tail", "bark", "eat excreta"],
    answer: "eat excreta",
  },
  {
    question: "A file has the name sumer.mp4 - the .MP4 part is called",
    choices: ["file clip", "file partition", "file extension", "file name"],
    answer: "file extension",
  },
  {
    question: "_____ produce the oxygen we breathe",
    choices: ["animals", "micro organisms", "plants", "science"],
    answer: "plants",
  },
  {
    question: "A device that produces electricity from moving air is called",
    choices: ["solar panel", "generator", "wind mill", "wind turbine"],
    answer: "wind turbine",
  },
  {
    question:
      "The device used to protect buildings from ligtening strikes is called",
    choices: [
      "lightening protector",
      "lightening sphere",
      "ligtening conductor",
      "lightening rod",
    ],
    answer: "lightening rod",
  },
  {
    question: "Corn can be used to make the following except",
    choices: ["bitumen", "bio plastic", "flour", "ethanol"],
    answer: "bitumen",
  },
  {
    question: "The part of the computer that can be touched is called",
    choices: ["hardware", "people ware", "middle ware", "software"],
    answer: "hardware",
  },
  {
    question:
      "The data that the CPU needs for calculations is temporarily kept in the",
    choices: ["CPU", "hard disk", "RAM", "ROM"],
    answer: "RAM",
  },
  {
    question: "The best place to hide a tree is in the",
    choices: ["village", "barracks", "bush", "forest"],
    answer: "forrest",
  },
  {
    question: "Phone numbers is to phones as ______ is to internet",
    choices: ["url", "domain name", "website", "ip address"],
    answer: "ip address",
  },
  {
    question: "Human beings are made of 70%",
    choices: ["meat", "bone", "water", "fat"],
    answer: "water",
  },
  {
    question: "The basis of life is",
    choices: ["water", "carbon", "spirit", "energy"],
    answer: "carbon",
  },
];

let score = 0;
let questions;
const numberOfQuestion = 10;
let count;
let quizUL = document.getElementById("quiz");
let quizTitle = document.getElementById("quizTitle");
let submitBTN = document.getElementById("submit");
let userChoice = document.querySelector('input[name="userChoice"]:checked');

submitBTN.addEventListener("input", btnController);

function initializeQuiz() {
  score = 0;
  count = 0;
  questions = randomizeQuestion(numberOfQuestion, quiz.length);
}

function btnController() {
  submitBTN.disabled = true;
}
function quizController() {
  initializeQuiz();
  btnController();
  let current = questions[count];
  renderQuestion(current);
}

function renderQuestion(index) {
  quizTitle.textContent = quiz[index].question;
  const choices = shuffle(quiz[index].choices);
  quizUL.innerHTML = "";
  for (let i = 0; i < choices.length; i++) {
    quizUL.innerHTML += `<li>
    <input type="radio" name="userChoice" id="${i}" value="${choices[i]}" />
    <label class="label" for="${i}">${capitalize(choices[i])}</label>
  </li>`;
  }
}

function randomizeQuestion(numberOfQuestion, quizLength) {
  //numberOfQuestion is the number of questions to generate
  let list = [];
  let num;

  while (list.length < numberOfQuestion) {
    num = Math.floor(Math.random() * quizLength);
    if (!list.includes(num)) list.push(num);
  }
  return list;
}

//For shuffling the quiz answers
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

//Capitalize each quiz answer
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

quizController();
