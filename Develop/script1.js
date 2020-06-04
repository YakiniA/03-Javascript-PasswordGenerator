// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var possUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var possLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","q","r","s","t","u","v","w","x","y","z"];

var lowerCase = false;
var upperCase = false;

var passLen = prompt("Please enter the length of the password, any number between 8 and 128");

if(passLen<8 && passLen >128){
    alert("Please enter between 8 and 128");
} else{
  console.log(passLen);
}

var useLowerCase = confirm("Can I include lowercase in your password?");

// if(useLowerCase){
//     lowerCase = true;
// }

var useUpperCase = confirm("Can I include uppercase in your password?");

// if(useUpperCase){
//   upperCase = true;
// }


var randomLowerCase = "";
var randomUpperCase = "";
var random = "";
var value="";
   
      if((useLowerCase === true) && (useUpperCase === true)){
    //   console.log("Inside loop");

      for(var j = 0; j<passLen;j++){
        //   console.log("Inside for loop");
      var b = Math.floor(Math.random() * 27);
      var c = Math.floor(Math.random() * 27);
      value += possLowerCase[b] + possUpperCase[c];
    //   console.log("Value" +value);
    //   random += value;
      
       }
       return value;
      }

    // if(useUpperCase){

    //     for(var k = 0; k<passLen;k++){
    //     var c = Math.floor(Math.random() * 27);
    //     randomUpperCase = randomUpperCase + possUpperCase[c];
    // }
//}

    // console.log(randomLowerCase);
    // console.log(randomUpperCase);
    // var passWordVal = randomLowerCase + randomUpperCase ;
    
    // var finalPassword = passWordVal.split(1,passLen);
    var finalPassword= random.split(1,passLen);
    // console.log(finalPassword);
    
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
