var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers   = "1234567890";
var specialChars = "!\#$%&'*+-:;<=>?@[/]^{}|~`.,\\";

var passwordLength;
var useLowerCase;
var useUpperCase;
var useNumbers;
var useSpecialChars;

function displayValue(val){
    document.getElementById("textInput").value = val;
    }

function validateInput(){
    var password ="";
    passwordLength = document.forms["myForm"]["rangeInput"].value;
    console.log("Password length" +passwordLength);

    var switch1State=document.getElementById("switch1").checked;
    // console.log(switch1State);

    if(switch1State){
        password += lowerCase;
    }

    var switch2State=document.getElementById("switch2").checked;
    // console.log(switch2State);
    
    if(switch2State){
        password+= upperCase;
    }

    var switch3State=document.getElementById("switch3").checked;
    // console.log(switch3State);

    if(switch3State){
        password+= numbers;
    }

    var switch4State=document.getElementById("switch4").checked;
    // console.log(switch4State);

    if(switch4State){
    password += specialChars;
    }

    // console.log("passwordValue Before loop" +password);

    if(password === ""){
         document.getElementById("message").innerHTML = "Please select a Character Type!!!";   
   
    }else{  
        document.getElementById("message").innerHTML = "";
        generatePassword(password);
        return password;        
    }
}

function generatePassword(password){
        var generatedPassword = "";
        for(var j = 0; j<passwordLength;j++){
        generatedPassword += password[Math.floor(Math.random() * password.length)];   
        }
        return generatedPassword;
}

// Write password to the #password input
function writePassword() {
    var passwordValue =  validateInput();
    if(typeof passwordValue !== 'undefined'){
        var password = generatePassword(passwordValue);  
        var passwordText = document.querySelector("#password");
        passwordText.value = password;    
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
