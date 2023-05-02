// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE HERE
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "01234566789";
  var specialChar = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";

  var numChar = prompt(
    'Please enter how long you would like your password. It must be 8-128 characters'
  );

  if (numChar >= 8 && numChar <= 128) {
  } else {
    alert('The number you entered is either too low or too high in value. Please try again');
    return ""
  }

  var lowQuestion = confirm(
    'Would you like lowercase letters in your password?'
  );

  var upQuestion = confirm(
    'Would you like uppercase letters in your password?'
  );

  var numQuestion = confirm(
    'Would you like numbers in your password?'
  );

  var specQuestion = confirm(
    'Would you like special characters in your password?'
  );

  if (
    lowQuestion === false &&
    upQuestion === false &&
    numQuestion === false &&
    specQuestion === false
  ) {
    alert('No requirements selected');
  }

  var totalChar = "";
  var randomPassword = "";

  if (lowQuestion === true) {
    totalChar += lowercase;
  }
  if (upQuestion === true) {
    totalChar += uppercase;
  }
  if (numQuestion === true) {
    totalChar += nums;
  }
  if (specQuestion === true) {
    totalChar += specialChar;
  }
  for (var i = 0; i < numChar; i++) {
    var randomChar = Math.floor(Math.random() * totalChar.length);
    randomPassword += totalChar[randomChar]
  }

  console.log(randomPassword);

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);