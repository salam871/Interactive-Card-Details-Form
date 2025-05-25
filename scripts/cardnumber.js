const cardNumberInput = document.getElementById("card-number");
const frontCardNumber = document.querySelector(".card-details .number");

// Card Number Functionality
cardNumberInput.addEventListener("keyup", function (e) {
  // Strip all non-digits
  let value = e.target.value.replace(/\D/g, "");

  // Add space every 4 digits (max 16 digits)
  let formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ").substring(0, 19);

  // Update input
  e.target.value = formatted;

  //Apply the fully entered card number to the front card
  frontCardNumber.textContent =
    cardNumberInput.checkValidity() && e.target.value.trim() !== ""
      ? e.target.value
      : "0000 0000 0000 0000";
});
