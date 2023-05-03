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
    return "";
  }

  var includeLower = confirm(
    'Would you like to include lowercase letters in your password?'
  );

  var includeUpper = confirm(
    'Would you like to include uppercase letters in your password?'
  );

  var includeNum = confirm(
    'Would you like to include numbers in your password?'
  );

  var includeSpecialChar = confirm(
    'Would you like to include special characters in your password?'
  );

  if (
    includeLower === false &&
    includeUpper === false &&
    includeNum === false &&
    includeSpecialChar === false
  ) {
    alert('No requirements selected');
  }

  var totalChar = "";
  var password = "";

  if (includeLower === true) {
    totalChar += lowercase;
  }
  if (includeUpper === true) {
    totalChar += uppercase;
  }
  if (includeNum === true) {
    totalChar += nums;
  }
  if (includeSpecialChar === true) {
    totalChar += specialChar;
  }

  while (true) {
    for (var i = 0; i < numChar; i++) {
      var randomChar = Math.floor(Math.random() * totalChar.length);
      password += totalChar[randomChar];
    }

    if (password.length !== numChar) {
      password = password.slice(0, numChar)
    }

    var hasLowerLetter = false;
    var hasUpperLetter = false;
    var hasNum = false;
    var hasSpecialChar = false;

    for (i = 0; i < password.length; i++) {
      if (lowercase.includes(password[i])) {
        hasLowerLetter = true;
      } 
      if (uppercase.includes(password[i])) {
        hasUpperLetter = true;
      }
      if (nums.includes(password[i])) {
        hasNum = true;
      }
      if (specialChar.includes(password[i])) {
        hasSpecialChar = true;
      }
    }

    if (
      (!includeLower || hasLowerLetter) &&
      (!includeUpper || hasUpperLetter) &&
      (!includeNum || hasNum) &&
      (!includeSpecialChar || hasSpecialChar)
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