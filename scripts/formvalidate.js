document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const completedSection = document.getElementById("completed");
  const continueBtn = document.querySelector(".btn");

  // Initially hide the completed section
  completedSection.style.display = "none";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset all error messages and styles
    resetErrorStates();

    // Validate each field (only checking for blank fields)
    const isNameValid = validateNotEmpty("cardholder-name", "blank-name");
    const isNumberValid = validateNotEmpty("card-number", "blank-number");
    const isDateValid = validateDateFields();
    const isCvcValid = validateNotEmpty("cvc", "cvc-error");

    // If all validations pass
    if (isNameValid && isNumberValid && isDateValid && isCvcValid) {
      form.style.display = "none";
      completedSection.style.display = "flex";
    }
  });

  // Continue button to reset the form
  continueBtn.addEventListener("click", function () {
    form.style.display = "flex";
    completedSection.style.display = "none";
    form.reset();
  });

  function resetErrorStates() {
    // Hide all error messages
    document
      .querySelectorAll('[id$="-error"], [id^="blank-"]')
      .forEach((el) => {
        el.style.display = "none";
      });

    // Reset input borders
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = "";
    });
  }

  function validateNotEmpty(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (input.value.trim() === "") {
      error.style.display = "block";
      error.textContent = "Cannot be blank";
      input.style.borderColor = "hsl(0, 100%, 66%)";
      return false;
    }
    return true;
  }

  function validateDateFields() {
    const monthInput = document.getElementById("exp-month");
    const yearInput = document.getElementById("exp-year");
    const dateError = document.getElementById("date-error");
    let isValid = true;

    if (monthInput.value.trim() === "" || yearInput.value.trim() === "") {
      dateError.style.display = "block";
      dateError.textContent = "Cannot be blank";
      monthInput.style.borderColor = "hsl(0, 100%, 66%)";
      yearInput.style.borderColor = "hsl(0, 100%, 66%)";
      isValid = false;
    }

    return isValid;
  }
});
