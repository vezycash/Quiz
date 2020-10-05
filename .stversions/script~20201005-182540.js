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
    title:
      "One of the following is not among the world's most consumed vegetable oils.",
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
    title: "Pomo is made from cow ______:",
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
    choices: ["windows", "IOS", "mac book", "android"],
    answer: "android",
  },
  {
    title: "Plants make their food through:",
    choices: ["hydrolysis", "respiration", "transpiration", "photosynthesis"],
    answer: "photosynthesis",
  },
  {
    title: "Before electricity, a popular food preseveration method was:",
    choices: ["grinding", "munching", "salting", "burying"],
    answer: "salting",
  },
  {
    title: "A goat that makes friends with a dog will learn to",
    choices: ["eat bone", "chase its tail", "bark", "eat excreta"],
    answer: "eat excreta",
  },
  {
    title:
      "A video file on your computer is named SUMMER.MP4 - the .MP4 part is called",
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
      "lightening junction",
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
    choices: ["hardware", "peopleware", "middleware", "software"],
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
    title: "The primary component of all known life on Earth is",
    choices: ["water", "carbon", "spirit", "energy"],
    answer: "carbon",
  },
  {
    title: "What would you get if you mixed color yellow with blue?",
    choices: ["brown", "purple", "green", "orange"],
    answer: "green",
  },
  {
    title: "What does sweating do?",
    choices: [
      "cools the body",
      "heats the body",
      "removes dead cells",
      "repairs damaged cells",
    ],
    answer: "cools the body",
  },
  {
    title: "Haemoglbin is responsible for?",
    choices: [
      "maintaining the heart",
      "red color of the blood",
      "figting diseases",
      "boosting immune system",
    ],
    answer: "red color of the blood",
  },
  {
    title: "Digestion starts from the?",
    choices: ["mouth", "stomach", "small intestine", "oesophagus"],
    answer: "mouth",
  },
  {
    title: "Heating and keeping food in air tight containers is called?",
    choices: ["canning", "food preservation", "warming", "cooking"],
    answer: "canning",
  },
  {
    title: "In the Bible, whose vineyard did Ahab covet?",
    choices: ["Nabal", "Naboth", "Naphtali", "Nathan"],
    answer: "Naboth",
  },
  {
    title: "Which Book in the Bible was written by a Doctor?",
    choices: ["Book of acts", "Book of John", "Book of mark", "Book of luke"],
    answer: "Book of luke",
  },
  {
    title: "75% of 1000 is?",
    choices: ["750", "350", "900", "650"],
    answer: "750",
  },
  {
    title: "A Triangle with 3 unequal sides is called?",
    choices: [
      "Scalene triangle",
      "equilateral triangle",
      "obtuse triangle",
      "Isosceles triangle",
    ],
    answer: "Scalene triangle",
  },
  {
    title: "North Africa is mostly covered by a desert called?",
    choices: [
      "Sahara Desert",
      "Arabian Desert",
      "Kalahari Desert",
      "Gobi Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    title: "Which Ocean exist between Australia and Africa?",
    choices: ["Indian Ocean", "Atlantic ocean", "pacific ocean", "Artic ocean"],
    answer: "Indian Ocean",
  },
  {
    title: "The Earth consists of approximately 71%",
    choices: ["forest", "land", "gas", "water"],
    answer: "water",
  },
  {
    title: "Which fish has no brain or heart?",
    choices: ["cat fish", "octopus", "gold fish", "jelly fish"],
    answer: "jelly fish",
  },
  {
    title: " The largest continent by area and population is?",
    choices: ["europe", "africa", "north america", "asia"],
    answer: "asia",
  },
  {
    title: "How many years in 1 century?",
    choices: ["100 years", "10 years", "1000 years", "1 million years"],
    answer: "100 years",
  },
  {
    title: "A Herbivore is",
    choices: [
      "small plant",
      "an animal that eats only plants",
      "a medicinal herb",
      "a chemical used to kill insects",
    ],
    answer: "an animal that eats only plants",
  },
  {
    title: "A Carnivore is",
    choices: [
      "large crab",
      "an animal that eats only plants",
      "a special carnival ore",
      "an animal that only eats meat",
    ],
    answer: "an animal that only eats meat",
  },
  {
    title: "Amphibians live",
    choices: [
      "on land only",
      "on both land and water",
      "on water only",
      "in hot deserts",
    ],
    answer: "on both land and water",
  },
  {
    title: "Circle contains how many degrees",
    choices: ["360 degrees", "180 degrees", "90 degrees", "270 degrees"],
    answer: "360 degrees",
  },
  {
    title: "Which continent has the most countries?",
    choices: ["africa", "asia", "europe", "north america"],
    answer: "africa",
  },
  {
    title: "Earth atmosphere mostly contain which gas?",
    choices: ["nitrogen", "oxygen", "hydrogen", "carbon dioxide"],
    answer: "nitrogen",
  },
  {
    title: "Pour acid on Litmus paper and it turns to color?",
    choices: ["blue green", "yellow", "blue", "red"],
    answer: "red",
  },
  {
    title: "The month of May has how many days?",
    choices: ["31", "30", "28", "29"],
    answer: "31",
  },
  {
    title: "Hexagon has how many sides?",
    choices: ["six", "four", "five", "seven"],
    answer: "six",
  },
  {
    title: "The hottest planet in the solar system is?",
    choices: ["venus", "mars", "jupiter", "saturn"],
    answer: "venus",
  },
  {
    title: "Smallest Ocean in the world?",
    choices: ["artic ocean", "indian ocean", "pacific ocean", "atlantic ocean"],
    answer: "artic ocean",
  },
  {
    title: "The SUN is a?",
    choices: ["star", "planet", "globe", "universe"],
    answer: "star",
  },
  {
    title: "Which planet has the highest number of moons?",
    choices: ["uranus", "venus", "saturn", "jupiter"],
    answer: "jupiter",
  },
  {
    title: "Europe and Africa separated by which sea?",
    choices: ["meditarrian ", "red", "atlantic", "pacific"],
    answer: "meditarrian ",
  },
  {
    title: "Planet closest to the sun?",
    choices: ["mecury", "pluto", "mars", "venus"],
    answer: "mecury",
  },
  {
    title: "What is the smallest prime number?",
    choices: ["2", "1", "3", "0"],
    answer: "2",
  },
  {
    title: " What is the largest ocean on Earth?",
    choices: ["pacific", "atlantic", "indian", "artic"],
    answer: "pacific",
  },
  {
    title: "What is the smallest prime number?",
    choices: ["2", "1", "3", "0"],
    answer: "2",
  },
  {
    title: "The basic unit of all living things is?",
    choices: ["cell", "atom", "molecule", "water"],
    answer: "cell",
  },
  {
    title: "A 90 degree angle is called",
    choices: ["right angle", "obtuse angle", "acute angle", "straight angle"],
    answer: "right angle",
  },
  {
    title: "An angle less than 90 degrees is called?",
    choices: ["right angle", "obtuse angle", "acute angle", "straight angle"],
    answer: "acute angle",
  },
  {
    title:
      "An angle bigger than 90 degrees but less than 180 degrees is called?",
    choices: ["right angle", "obtuse angle", "acute angle", "straight angle"],
    answer: "obtuse angle",
  },
  {
    title: "An angle between 180 and 360 degrees is called?",
    choices: ["reflex angle", "obtuse angle", "acute angle", "straight angle"],
    answer: "reflex angle",
  },
  {
    title: "When the sum of two angles is 90 degrees. They are called",
    choices: [
      "complementary angles",
      "supplementary angles",
      "acute angles",
      "adjacent angles",
    ],
    answer: "complementary angles",
  },
  {
    title: "When the sum of two angles is 180 degrees. They are called",
    choices: [
      "complementary angles",
      "supplementary angles",
      "acute angles",
      "adjacent angles",
    ],
    answer: "supplementary angles",
  },
  {
    title: "A 180 degree angle is called?",
    choices: [
      "straight angle",
      "obtuse angle",
      "acute angle",
      "adjacent angle",
    ],
    answer: "straight angle",
  },
  {
    title:
      "A phrase or word that means exactly or nearly the same as another word or phrase is a",
    choices: ["synonym", "irony", "antonym", "adjective"],
    answer: "synonym",
  },
  {
    title: "Which part of the flower is used to make honey?",
    choices: ["nectar", "pollen grain", "carpel", "petal", "stamen"],
    answer: "nectar",
  },
  {
    title: "In which direction does fan rotate?",
    choices: ["clockwise", "anti-clockwise", "does not matter"],
    answer: "does not matter",
  },
  {
    title: "Which is the longest river in the world?",
    choices: ["nile", "amazon", "niger", "congo", "Mississippi"],
    answer: "nile",
  },
  {
    title: "The biggest island in the world is?",
    choices: ["greenland", "New Guinea", "Borneo", "Madagascar", "Sumatera"],
    answer: "greenland",
  },
  {
    title: "What's the largest sea in the world?",
    choices: [
      "Philippine Sea",
      "Red sea",
      "Coral Sea",
      "Arabian Sea",
      "South China Sea",
    ],
    answer: "Philippine Sea",
  },
  {
    title: "A system or government ruled by women is called a",
    choices: [
      "matriarchy",
      "matriarch",
      "patriarchy",
      "oligarchy",
      "democracy",
    ],
    answer: "matriarchy",
  },
  {
    title: "How many bones does the Human body have.",
    choices: ["206", "216", "207", "217", "214"],
    answer: "206",
  },
  {
    title: "A fortnight has _______ days",
    choices: ["14", "7", "2", "28", "10"],
    answer: "14",
  },
  {
    title: "What was the first animal to go into orbit?",
    choices: ["a guinea pig", "a lab rat", "a monkey", "a dog"],
    answer: "a dog",
  },
  {
    title: "What’s the name of the toy cowboy in Toy Story?",
    choices: ["woody", "buzz lightyear", "rex", "andy"],
    answer: "woody",
  },
  {
    title: "Which two countries share the longest border",
    choices: [
      "united states and canada",
      "united states and mexico",
      "china and india",
      "china and indonesia",
    ],
    answer: "united states and canada",
  },
  {
    title: "The device used to measure the speed of wind is called?",
    choices: ["anemometer", "wind vane", "wind guage", "speedometer"],
    answer: "anemometer",
  },
  {
    title: "How many teeth are there in the adult’s mouth?",
    choices: ["32", "36", "35", "34"],
    answer: "32",
  },
  {
    title: "Which country invented PAPER?",
    choices: ["china", "united states", "england", "egypt"],
    answer: "china",
  },
  {
    title: "Which blood type is known as the universal donor?",
    choices: ["o-negative", "o-positive", "AB+", "AB-"],
    answer: "o-negative",
  },
  {
    title: "Which blood type is known as the universal recipient?",
    choices: ["o-negative", "o-positive", "AB+", "AB-"],
    answer: "AB+",
  },
  {
    title: "Which country owns every Pandas in the world?",
    choices: ["china", "united states", "england", "egypt", "india"],
    answer: "china",
  },
  {
    title: "Which color is the best absorbent?",
    choices: ["black", "white", "purple", "green", "blue"],
    answer: "black",
  },
  {
    title: "Who invented telescope?",
    choices: ["Galileo", "thomas edison", "bill gates", "dr. M.R. Shinka"],
    answer: "Galileo",
  },
  {
    title: "Which is the deadliest snake of the world?",
    choices: ["black mamba", "python", "boa constrictor", "king cobra"],
    answer: "black mamba",
  },
  {
    title: "Which country has the largest area of Land?",
    choices: ["china", "russia", "united states", "india"],
    answer: "russia",
  },
  {
    title: "Which mosquito bites?",
    choices: [
      "female mosquitoes only",
      "male mosquitoes only",
      "both male and female",
    ],
    answer: "female mosquitoes only",
  },
  {
    title: "How many indigenous languages does Nigeria have?",
    choices: [
      "more than 500 languages",
      "about 400 languages",
      "less than 500 languages",
      "less than 200 languages",
    ],
    answer: "more than 500 languages",
  },
];
/* todo:
once I implement local storage, next:
   change questions array to hold 10 questions instead of just the quiz indexes.
   randomize the choices (possible) answer on question array creation too

bad news. I fucked up with git. Was already done with the game. Now I got do it again.
*/
let score = 0;
let questions;
const numberOfQuestion = 10;
let count;
let radios;
let question;
let quizUL = document.getElementById("quiz");
let quizTitle = document.getElementById("quizTitle");
let submitBTN = document.getElementById("submit");
let userChoice = document.querySelector('input[name="userChoice"]');
let scoreBoardElem = document.getElementById("score");
let loadingScreen = document.getElementById("gameLoader");
let gameScreen = document.getElementById("gameOn");

function initializeQuiz() {
  score = 0;
  count = 0;
  scoreBoardElem.textContent = "0";
  questions = randomizeQuestion(numberOfQuestion, quiz.length);
  loadingScreen.style.display = "none";
  gameScreen.style.display = "flex";
  quizController();
} // end initializeQuiz

function disableBTN() {
  submitBTN.disabled =
    document.querySelector('input[name="userChoice"]:checked') === null
      ? true
      : false;
} //end disableBTN

function quizController() {
  submitBTN.onclick = markAnswer;
  let quizIndex = questions[count];
  question = quiz[quizIndex];
  count >= numberOfQuestion ? gameOver() : renderQuestion();
  count += 1;
} //end quizController

function radioEvents() {
  radios = document.querySelectorAll('input[name="userChoice"]');
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", disableBTN);
  }
} // end radioEvents

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
  submitBTN.onclick = quizController;
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
function gameOver() {
  //todo: either i create a separate game over screen or mod the loading screen. Eitherway, gots to download stuff and sleep. Continue tomorrow.
  gameScreen.style.display = "none";
  showGameOverScreen(score);
} //gameOver end

function showGameOverScreen(score) {
  const loseRemark = [
    "You suck",
    "Unbelievable",
    "Jesus christ!",
    "Go and sleep",
    "Too bad",
    "LMAO",
    "Disappointing",
    "OMG!",
    "LOL!",
    "Ridiculous",
    "Are you kidding me?",
    "Play again",
    "Yuck!",
    "Shame",
  ];
  const winRemark = [
    "Awesome",
    "Good Job",
    "Keep it up",
    "Nice",
    "Sweet",
    "Wow!",
    "Wonderful",
    "You rock",
    "Wow!",
    "Good, Play again",
    "Great",
  ];
  loadingScreen.style.display = "flex";
  let messageEl = document.getElementById("messageEl");
  let loaderTitle = document.getElementById("loaderTitle");
  let win = score > 5 ? true : false;
  let scoreColor = win ? "blue" : "red";
  let textShadow = win
    ? `1px 1px 2px ${scoreColor}`
    : `1px 1px 2px ${scoreColor}`;
  const randRemark = (arr) => arr[~~(Math.random() * arr.length)];
  loaderTitle.innerText = "Game over";
  let scoreMsg = `<p>You scored ${score} / ${numberOfQuestion}</p>`;
  let remark = win ? randRemark(winRemark) : randRemark(loseRemark);
  remark = `<p style="color: ${scoreColor}">${remark}</p>`;
  messageEl.style.textShadow = textShadow;
  messageEl.innerHTML = scoreMsg + remark;
}
//For shuffling the quiz answers
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());

//Capitalize each quiz answer
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
