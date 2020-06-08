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


function validateInput(){
    var password ="";
    // passwordLength = prompt("Please enter the length of the password, any number between 8 and 128");
    // console.log(passwordLength);
    passwordLength = document.forms["myForm"]["vol"].value;
    console.log("Password length" +passwordLength);

    // if(passwordLength < 8 || passwordLength > 128){
    //     alert("Please enter any number between 8 and 128");
    //     console.log(passwordLength);
    //     return validateInput();
    // }

    // var checkBox = document.getElementById("switch1");
    // var text = document.getElementById("text");
    // var y = text.checked();
    // console.log("Use Lower Case" +checkBox.style.display);

    var switch1State=document.getElementById("switch1").checked;
    console.log(switch1State);

    var switch2State=document.getElementById("switch2").checked;
    console.log(switch2State);

    var switch3State=document.getElementById("switch3").checked;
    console.log(switch3State);

    var switch4State=document.getElementById("switch4").checked;
    console.log(switch4State);


    // var switchStatus = false;
    // document.getElementById("switch1").addEventListener('change', function() {
    //     if (this.checked) {
    //       console.log("power on");
    //     } else {
    //       if (!confirm("This will shutdown power! Are you sure?")) {
    //         this.checked = true;
    //       }
    //     };
    //   });


    // useLowerCase = confirm("Can I include lowercase in your password?");
    if(switch1State){
    password += lowerCase;
    }

    // useUpperCase = confirm("Can I include uppercase in your password?");
    if(switch2State){
    password+= upperCase;
    }

    // useNumbers = confirm("Can I include numbers in your password?");
    // console.log("use numbers" +useNumbers);
    if(switch3State){
    password+= numbers;
    }

    // useSpecialChars = confirm("Can I include special characters in your password?");
    if(switch4State){
    password += specialChars;
    }

    console.log("passwordValue Before loop" +password);

    if(password === ""){
         // alert("Please select a Character Type for your password!!!");
         document.getElementById("message").innerHTML = "Please select a Character Type!!!";
        
   
    }else{  
        document.getElementById("message").innerHTML = "";
        console.log("Inside else condition");    
        generatePassword(password);
        return password;      
       
    }

}

function generatePassword(password){
          console.log("Inside Generated Password");
          var generatedPassword = "";
          console.log(passwordLength);
          for(var j = 0; j<passwordLength;j++){
              console.log("Inside for loop" +password);
          generatedPassword += password[Math.floor(Math.random() * password.length)];
          
          console.log("New Password value" +generatedPassword);

        }
        return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var passwordValue =  validateInput();
  console.log("Password Value :" +passwordValue); 
    if(typeof passwordValue !== 'undefined'){
    var password = generatePassword(passwordValue);  
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
