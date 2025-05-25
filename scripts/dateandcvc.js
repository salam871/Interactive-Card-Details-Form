const cardExpDate = document.getElementById("exp-date");
const cardCVC = document.getElementById("cvc");
const frontCardDate = document.querySelector(
  ".card-details .name-and-date .date"
);
const backCardCVC = document.querySelector(".cvc");

// Card expiry date functionality
cardExpDate.addEventListener("keyup", function (e) {
  const monthInput = document.getElementById("exp-month");
  const yearInput = document.getElementById("exp-year");

  if (monthInput.value === "" && yearInput.value === "") {
    frontCardDate.textContent = "09/00";
    return; // Exit the function early
  }

  const isMonthValid =
    monthInput.value.length === 2 && /^\d{2}$/.test(monthInput.value);
  const isYearValid =
    yearInput.value.length === 2 && /^\d{2}$/.test(yearInput.value);

  const isValidMonthNumber =
    isMonthValid &&
    parseInt(monthInput.value) >= 1 &&
    parseInt(monthInput.value) <= 12;

  if (isValidMonthNumber && isYearValid) {
    frontCardDate.textContent = `${monthInput.value}/${yearInput.value}`;
  } else {
    frontCardDate.textContent = "09/00";
  }
});

// Card CVC functionality
cardCVC.addEventListener("keyup", function (e) {
  backCardCVC.textContent =
    cardCVC.checkValidity() && e.target.value !== "" ? e.target.value : "000";
});
