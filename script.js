//fields and button//
const toggleButton = document.querySelector("#toggle-button");
const passwordFirstField = document.querySelector("#password1");
const passwordSecondField = document.querySelector("#password2");

//check lists//
const passwordsAreEqual = document.querySelector("#passwords-are-equal")
const lowerCaseLetters = document.querySelector("#lower-case-letters")
const upperCaseLetters = document.querySelector("#upper-case-letters")
const containsNumbersl = document.querySelector("#contains-numbers")
const atLeast10charactersLong = document.querySelector("#at-least-10-characters-long")
const passwords = document.querySelector("#passwords")

//for show and hide passwords//
toggleButton.addEventListener("click", function () {
    //for first password field//
    if (password1.type === "password") {
      password1.type = "text";
      toggleButton.innerText = "Hide Passwords";
    } else {
      password1.type = "password";
      toggleButton.innerText = "Show Passwords";
    }
    //for second password field//
    if (password2.type === "password") {
        password2.type = "text";
        toggleButton.innerText = "Hide Passwords";
      } else {
        password2.type = "password";
        toggleButton.innerText = "Show Passwords";
      }

  });

//Equal//
function equal () {
  if(passwordFirstField.value == passwordSecondField.value) {
    passwordsAreEqual.innerText = "✅";
  } else {
    passwordsAreEqual.innerText = "❌";
  }
}
passwords.addEventListener("input", equal) 

//Lower Case//
function lower () {
  if (/[a-z]/.test(passwordFirstField.value)) {
    lowerCaseLetters.innerText = "✅";
  } else {
    lowerCaseLetters.innerText = "❌";
  }
}
passwords.addEventListener("input", lower)
//Long//
function long() {
  if (passwordFirstField.value.length >= 10) {
    atLeast10charactersLong.innerText = "✅";
  } else {
    atLeast10charactersLong.innerText = "❌";
  }
}
passwords.addEventListener("input",long)
  

