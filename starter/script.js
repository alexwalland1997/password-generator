// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//
let password = "";
let length;

// Function for getting a random element from an array
function getRandom(arr) {
  //select which character from whichever array is passed in is added to password
  let j = Math.floor(Math.random()*arr.length);
  password += arr[j];

}

// Function to generate password with user input
function generatePassword() {
  //loop until its reached length and randomise which character should be added to password
  for (let i=0; i < length; i++) {
    let a = Math.floor(Math.random()*4);
    console.log(a);
    switch (a) {
      case 0:
        getRandom(lowerCasedCharacters);
        break;
      case 1:
        getRandom(upperCasedCharacters);
        break;
      case 2:
        getRandom(numericCharacters);
        break;
      case 3:
        getRandom(specialCharacters);
        break;  
    } 
  }
}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  length = 8;
  generatePassword();
  let passwordText = document.querySelector('#password');
  console.log(password);
  passwordText.value = password;
  password = "";
}

// Add event listener to generate button and generate password
generateBtn.addEventListener('click', writePassword);