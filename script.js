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



// 1. length describes how long the password can be. 
// 2. charset is used to create a string of applicable characters used for a password. 
// 3. 
// 4. 
// 5. 
// 6. 
// 7.
// 8. 
// 9.
// 10.
// 11.

var generatePassword = function () {
  var passwordLength = prompt ("Password must contain 8-128 characters.");
  var lowerCaseAllowed=  confirm("Do you want lower case letter?");  
  var upperCaseAllowed= confirm ("Do you want upper case letters?");
  var numericCaseAllowed= confirm ("Do you want numbers included?")
  var specialCaseAllowed= confirm ("Do you want special characters?")

    
    var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "123456789";
    var symbols = "!@#$%^&*()=+-";
    
  
}