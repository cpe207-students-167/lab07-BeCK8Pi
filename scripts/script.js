// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passw = document.querySelector("#password-input");
const conpassw = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const reset = document.querySelector("#reset");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
}

passw.onkeyup = () => {
  passw.classList.remove("is-valid");
  passw.classList.remove("is-invalid");
}
conpassw.onkeyup = () => {
  conpassw.classList.remove("is-valid");
  conpassw.classList.remove("is-invalid");
}

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPassOk = false;
  isConPassOk = false;

  // validate first name
  if (firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  }
  else{
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if(validateEmail(emailInput.value)){
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }
  else{
    emailInput.classList.add("is-invalid")
  }

  // validate password
  if(passw.value.length >= 6){
    passw.classList.add("is-valid");
    isPassOk = true;
  }
  else{
    passw.classList.add("is-invalid");
  }

  // validate confirm password
  if(conpassw.value === passw.value && isPassOk){
    conpassw.classList.add("is-valid");
    isConPassOk = true;
  }
  else{
    conpassw.classList.add("is-invalid");
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPassOk && isConPassOk) alert("Registered successfully");
};

// add callback function for Reset button.
reset.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passw.value = "";
  conpassw.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  passw.classList.remove("is-valid");
  passw.classList.remove("is-invalid");
  conpassw.classList.remove("is-valid");
  conpassw.classList.remove("is-invalid");
}
