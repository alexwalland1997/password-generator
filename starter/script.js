// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//iniate variable password and set all requirements to false
let password = "";
let requirements = [false,false,false,false];
let opsChosen = 0;


// iniate slider so value can be update when changed and for length of password
let slider = document.getElementById("range");
let characters = document.getElementById("length");
characters.innerHTML = slider.value;

//set length to current value of slider
let length = slider.value;


// Function for getting a random element from an array
function getRandom(arr) {
  //select which character from whichever array is passed in is added to password
  let j = Math.floor(Math.random() * arr.length);
  password += arr[j];
}

// Function to generate password with user input
function generatePassword() {
  //loop until its reached length and randomise which character should be added to password
  while (password.length < length){
    let a = Math.floor(Math.random() * 4);
    switch (a) {
      case 0:
        if (requirements[0] == true) {
        getRandom(lowerCasedCharacters);
        }
        break;
      case 1:
        if (requirements[1] == true) {
        getRandom(upperCasedCharacters);
        }
        break;
      case 2:
        if (requirements[2] == true) {
        getRandom(numericCharacters);
        }
        break;
      case 3:
        if (requirements[3] == true) {
        getRandom(specialCharacters);
        }
        break;
    }
  }
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //set length to slider value
  length = slider.value;
  //check no of options chosen 
  requirements.forEach(checkRequirements);
  if (opsChosen > 1) {
    generatePassword();
    document.getElementById("check").style.color = 'black';
  } else 
  {
    document.getElementById("check").style.color = 'red';
  }
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  //reset password and ops chosen
  password = "";
  opsChosen = 0;
}

// Add event listener to generate button and generate password
generateBtn.addEventListener("click", writePassword);

//update length 
slider.oninput = function() {
  characters.innerHTML = this.value;
}

//update requirements when checkbox is clicked 
function updateRequirements() {
  let lCheckBox = document.getElementById("lCharacter");
  let uCheckBox = document.getElementById("uCharacter");
  let nCheckBox = document.getElementById("numbers");
  let sCheckBox = document.getElementById("special");

  requirements[0] = lCheckBox.checked;
  requirements[1] = uCheckBox.checked;
  requirements[2] = nCheckBox.checked;
  requirements[3] = sCheckBox.checked;
}

//check requirements are met by finding out how many have been chosen
function checkRequirements(requirement) {
  if (requirement == true) {
    opsChosen++;
  }
}