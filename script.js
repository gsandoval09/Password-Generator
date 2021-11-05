// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var newPassword = "";
  var charPool= "";


  var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()=+-";

  if (passwordLength < 8 || passwordLength > 128){
    return "";
  }
  if (lowerCaseAllowed){
    charPool += lowerAlpha;
  }
  if (upperCaseAllowed){
    charPool += upperAlpha;
  }
  if (numericCaseAllowed){
    charPool += numbers;
  }
  if (specialCaseAllowed){
    charPool += symbols;
  }
  
  for ( let i=0; i < passwordLength; i++){
    newPassword += charPool.charAt(Math.floor(Math.random()*charPool.length));
  }
  console.log(newPassword);
  return newPassword;
}




