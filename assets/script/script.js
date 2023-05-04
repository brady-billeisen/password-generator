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
    alert('The number you entered is either too low or too high in value. Please try again.');
    return "";
  }

  var includesLower = confirm(
    'Would you like to include lowercase letters in your password?'
  );

  var includesUpper = confirm(
    'Would you like to include uppercase letters in your password?'
  );

  var includesNum = confirm(
    'Would you like to include numbers in your password?'
  );

  var includesSpecialChar = confirm(
    'Would you like to include special characters in your password?'
  );

  if (
    !includesLower && 
    !includesUpper && 
    !includesNum && 
    !includesSpecialChar
  ) {
    alert('No requirements selected, please try again.');
    return "";
  }

  while(true) {
    var totalChar = "";

    if (includesLower) {
      totalChar += lowercase;
    }
    if (includesUpper) {
      totalChar += uppercase;
    }
    if (includesNum) {
      totalChar += nums;
    }
    if (includesSpecialChar) {
      totalChar += specialChar
    }

    var password = "";

    for (i = 0; i < numChar; i++) {
      var randomChar = Math.floor(Math.random() * totalChar.length);
      password += totalChar[randomChar];
    }

    var hasLower = false;
    var hasUpper = false;
    var hasNum = false;
    var hasSpecialChar = false;

    for (char of password) {
      if (lowercase.includes(password[char])) {
        hasLower = true;
      }
      if (uppercase.includes(password[char])) {
        hasUpper = true;
      }
      if (nums.includes(password[char])) {
        hasNum = true;
      }
      if (specialChar.includes(password[char])) {
        hasSpecialChar = true;
      }
    }

    if (
      includesLower === hasLower && 
      includesUpper === hasUpper && 
      includesNum === hasNum && 
      includesSpecialChar === hasSpecialChar
    ) {
      break;
    }
  }
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);