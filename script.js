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
  var passwordLength = prompt ("Password must contain 8-128 characters.");
  var lowerCaseAllowed=  confirm ("Do you want lower case letter?");  
  var upperCaseAllowed= confirm ("Do you want upper case letters?");
  var numericCaseAllowed= confirm ("Do you want numbers included?");
  var specialCaseAllowed= confirm ("Do you want special characters?");
  var newPassword= "";
  
  
  
    // possible usable password characters 
    var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()=+-"
    var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
    var upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "123456789";
    var symbols = "!@#$%^&*()=+-";
   
    //generate password
  
  return Math.random().toString(36).slice(5)

}

  


