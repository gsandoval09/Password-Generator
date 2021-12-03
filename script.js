// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = [];
// charPool and everything else below, gives us different characters the password generator is going to choose from
var charPool= [];
var possibleCharacters = [];
var lowerAlpha = [
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
    'z'];
var upperAlpha = [
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
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['@',
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
'.'];

// Prompts are shown as soon as generate button icon is clicked, giving user the specifications of their password
var generatePassword = function () {
  var passwordLength = parseInt(prompt("Password must contain 8-128 characters."), 10);
  var lowerCaseAllowed = confirm("Do you want lower case letter?");
  var upperCaseAllowed = confirm("Do you want upper case letters?");
  var numericCaseAllowed = confirm("Do you want numbers included?");
  var specialCaseAllowed = confirm("Do you want special characters?");

  var passwordOptions = { passwordLength: passwordLength, lowerCaseAllowed: lowerCaseAllowed, upperCaseAllowed: upperCaseAllowed, numericCaseAllowed: numericCaseAllowed, specialCaseAllowed: specialCaseAllowed };
  return passwordOptions;
}
// function generates a random array of characters
  function getRandom(arr){
    var randomIndex= (Math.floor(Math.random()*arr.length));
    var randomElement = arr[randomIndex]
    return randomElement
  }
  function createPassword(){
    const options = generatePassword()
  
// Returns back ability to recieve different generated passwords based on users input
  if (options.passwordLength < 8 || options.passwordLength > 128){
    return "";
  }
  if (options.lowerCaseAllowed){
    possibleCharacters = possibleCharacters.concat(lowerAlpha);
  }
  if (options.upperCaseAllowed){
     possibleCharacters = possibleCharacters.concat(upperAlpha);
  }
  if (options.numericCaseAllowed){
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (options.specialCaseAllowed){
    possibleCharacters = possibleCharacters.concat(symbols);
  }
  
  for ( let i=0; i < options.passwordLength; i++){
    var randomCharacter = getRandom(possibleCharacters)
    newPassword.push(randomCharacter);

  }
  // console.log(newPassword);
  return newPassword.join("")
}
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


