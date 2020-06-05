// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var possUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var possLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","q","r","s","t","u","v","w","x","y","z"];

// var lowerCase = false;
// var upperCase = false;

var passLen = prompt("Please enter the length of the password, any number between 8 and 128");

if(passLen<8 && passLen >128){
    alert("Please enter between 8 and 128");
} else{
  console.log(passLen);
}

var useLowerCase = confirm("Can I include lowercase in your password?");

var useUpperCase = confirm("Can I include uppercase in your password?");

var randomLowerCase = "";
var randomUpperCase = "";
    if(useLowerCase===true && useUpperCase===true){
      console.log(passLen);
      var a = Math.round(passLen/2);
      console.log("a value " +a);

      for(var j = 0; j<a;j++){
      var b = Math.floor(Math.random() * possLowerCase.length);
      console.log(b);
      randomLowerCase=  randomLowerCase + possLowerCase[b];
      var c = Math.floor(Math.random() * possUpperCase.length);
      randomUpperCase = randomUpperCase + possUpperCase[c];
      
       }
    }

    var passWordVal = randomLowerCase + randomUpperCase ;
    console.log("passWordVal" +passWordVal);
    var finalPassword = passWordVal;
      //  if((passLen%2)!==0){
      //   finalPassword = passWordVal-1;
      //  }
    
    
    console.log(randomLowerCase);
    console.log(randomUpperCase);
    console.log(finalPassword);
    return(finalPassword);
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
