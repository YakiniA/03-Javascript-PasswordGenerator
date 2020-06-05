// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var possUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var possLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","q","r","s","t","u","v","w","x","y","z"];
var possNumbers = [1,2,3,4,5,6,7,8,9,0];
var possSpecialChars = ["!","\"","#","$","%","&","'","(",")","*","+","-",".",":",";","<","=",">","?","@","[","\\","/","]","^","-","{","}","|","~"];
// var lowerCase = false;
// var upperCase = false;

var passLen = prompt("Please enter the length of the password, any number between 8 and 128");

if(passLen<8 || passLen >128){
    alert("Please enter between 8 and 128");
    generatePassword();
} else{
  console.log(passLen);
}

var pass ="";

var useLowerCase = confirm("Can I include lowercase in your password?");
if(useLowerCase){
  pass += possLowerCase;
  
}

var useUpperCase = confirm("Can I include uppercase in your password?");

if(useUpperCase){
  pass+= possUpperCase;
}

var useNumbers = confirm("Can I include numbers in your password?");
if(useNumbers){
  pass+= possNumbers;
}

var useSpecialChars = confirm("Can I include special characters in your password?");
if(useSpecialChars){
  pass += possSpecialChars;
}

console.log("passValue Before loop" +pass);

// var randomLowerCase = "";
// var randomUpperCase = "";
//     if(useLowerCase===true && useUpperCase===true){
//       console.log(passLen);
//       var a = Math.round(passLen/2);
//       console.log("a value " +a);
      var newPass = "";
      for(var j = 0; j<passLen;j++){
      console.log("Pass Value" +pass);
      var b = Math.floor(Math.random() * pass.length);
      newPass += pass[b];
      console.log("New Password value" +newPass);
     }
     
     return(newPass);
    }

    // var passWordVal = randomLowerCase + randomUpperCase ;
    // console.log("passWordVal" +passWordVal);
    // var finalPassword = passWordVal;
      //  if((passLen%2)!==0){
      //   finalPassword = passWordVal-1;
      //  }
    
    
    // console.log(randomLowerCase);
    // console.log(randomUpperCase);
    // console.log(finalPassword);
    
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
