var generateBtn = document.querySelector("#generate");

// All the variables are initialized
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers   = "1234567890";
var specialChars = "!\#$%&'*+-:;<=>?@[/]^{}|~`.,\\";

var passwordLength;

// function displayValue(val) is for displaying the value of the slider upon scrolling
function displayValue(val){
    document.getElementById("textInput").value = val;
}

// validateInput function is for getting the input and produce all possible password combinations
function validateInput(){
    var password ="";
    passwordLength = document.forms["myForm"]["rangeInput"].value;
 
    // Getting the state of the toggler switch
    // if(true) then get its corresponding character type values
    var switch1State=document.getElementById("switch1").checked; 
    if(switch1State){
        password += lowerCase;
    }

    var switch2State=document.getElementById("switch2").checked;  
    if(switch2State){
        password+= upperCase;
    }

    var switch3State=document.getElementById("switch3").checked;
    if(switch3State){
        password+= numbers;
    }

    var switch4State=document.getElementById("switch4").checked;
    if(switch4State){
    password += specialChars;
    }

    // If not selected any character type then this error message is shown
    if(password === ""){
         document.getElementById("message").innerHTML = "Please select a Character Type!!!";   
   
    }else{  
        document.getElementById("message").innerHTML = "";
        generatePassword(password);
        return password;        
    }
}

// The password is generated in the password length value provided
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
