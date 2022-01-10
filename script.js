const toggleButton = document.querySelector("#toggle-button");
const passwordFirstField = document.querySelector("#password1");
const passwordSecondField = document.querySelector("#password2");


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




  

