// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers   = "1234567890";
var specialChars = "!\#$%&'*+-:;<=>?@[/]^{}|~`.,\\";

var passwordLength = prompt("Please enter the length of the password, any number between 8 and 128");

if(passwordLength <8 || passwordLength >128){
    alert("Please enter between 8 and 128");
    console.log(passwordLength);
    generatePassword();
} else{
  console.log(passwordLength);
}

var password ="";

var useLowerCase = confirm("Can I include lowercase in your password?");
if(useLowerCase){
  password += lowerCase;
}

var useUpperCase = confirm("Can I include uppercase in your password?");

if(useUpperCase){
  password+= upperCase;
}

var useNumbers = confirm("Can I include numbers in your password?");
console.log("use numbers" +useNumbers);
if(useNumbers){
  password+= numbers;
}

var useSpecialChars = confirm("Can I include special characters in your password?");
if(useSpecialChars){
  password += specialChars;
}

console.log("passwordValue Before loop" +password);

if(password === ""){
  alert("Please select either LowerCase/ UpperCase/ Numbers/ Special Characters for your password");
  generatePassword();
}

      var generatedPassword = "";
          for(var j = 0; j<passwordLength;j++){
          console.log("Password Value" +password);
          generatedPassword += password[Math.floor(Math.random() * password.length)];
          console.log("New Password value" +generatedPassword);

        }
        return(generatedPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
