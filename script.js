// Assignment code here
var capLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowLetter = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "1234567890"; 
var special = "-=!@#$%^;:&*()_+`~,<.>/'\"\\|?"; 

function generatePassword() {

  // defines the length of the password as well as allows the options of character type to be selected and stores it into the specs variable
  let passLength = document.getElementById("pass-length").value; 
  let passSpecs = document.querySelectorAll('input[name=specs]:checked');
  let specs = [];
  passSpecs.forEach((checkbox) => {  
      specs.push(checkbox.value);
  });


    var output = '';
    var location = new Array();
    var characters = new Array();
  for (var i = 0; i < passLength; i++) {
          
      // choose a type of character from the available selection (UPPER, lower, number, special)
      const positionType = specs[Math.floor(Math.random() * specs.length)];      
      
      // if statements to run based on the chosen character type
      if (positionType == 'capital') {
      output = Math.floor(Math.random() * capLetter.length);
      location[i]=output;
      characters[i]=capLetter.charAt(output);
    } 

    if (positionType == 'lower') {
      output = Math.floor(Math.random() * lowLetter.length);
      location[i]=output;
      characters[i]=lowLetter.charAt(output);
    } 

    if (positionType == 'numbers') {
      output = Math.floor(Math.random() * numbers.length);
      location[i]=output;
      characters[i]=numbers.charAt(output);
    } 

    if (positionType == 'special') {
      output = Math.floor(Math.random() * special.length);
      location[i]=output;
      characters[i]=special.charAt(output);
    }  
} 

// combine and output the text when the "Generate Password" button is clicked.
let text = characters.join('');
return text;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);