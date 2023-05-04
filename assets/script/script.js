// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // establishing variables for all possible characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nums = "01234566789";
  var specialChar = "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";

  // establishing a variable equal to the total characters they'd like to have
  var numChar = prompt(
    'Please enter how long you would like your password. It must be 8-128 characters'
  );

  // making conditional to make sure their input meets the criteria
  if (numChar >= 8 && numChar <= 128) {
  } else {
    alert('The number you entered is either too low or too high in value. Please try again.');
    return "";
  }

  // establishing variables for the character type criteria
  // and using conditional to make sure they selected at least one
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

  // set up a while loop so that if the core of the function isn't true,
  // it will start the loop over and regenerate until the core is true, then it will break
  while(true) {
    // establishing a variable for the total characters selected by the user
    // and set up conditionals to check which ones were selected and then add them to the variable
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

    // establishing a variable for the password, and then a for loop that will
    // grab a random character and add it into the variable
    var password = "";

    for (i = 0; i < numChar; i++) {
      var randomChar = Math.floor(Math.random() * totalChar.length);
      password += totalChar[randomChar];
    }

    // establishing variables equal to false and
    // creating a for loop to make sure the password meets all selected criteria
    // then conditionals so if it contains the criteria selected, the variable will be switched to true
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

    // final conditional to make sure the includes variables and the has variables
    // are equal to each other like they're supposed to be
    // if they are, then the while loop breaks
    // if they aren't then it will start the loop over and generate a new password until everything is true
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