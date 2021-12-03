// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = [];
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
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
  var passwordLength = prompt("Password must contain 8-128 characters.");
  var lowerCaseAllowed = confirm("Do you want lower case letter?");
  var upperCaseAllowed = confirm("Do you want upper case letters?");
  var numericCaseAllowed = confirm("Do you want numbers included?");
  var specialCaseAllowed = confirm("Do you want special characters?");

  var passwordOptions = { passwordLength: passwordLength, lowerCaseAllowed: lowerCaseAllowed, upperCaseAllowed: upperCaseAllowed, numericCaseAllowed: numericCaseAllowed, specialCaseAllowed: specialCaseAllowed };
  return passwordOptions;
}
  function createPassword(){
    const options = generatePassword()
  

  if (passwordLength < 8 || passwordLength > 128){
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
  
  for ( let i=0; i < passwordLength; i++){
    newPassword += charPool.charAt(Math.floor(Math.random()*charPool.length));
  }
  console.log(newPassword);
  return newPassword;

}



