const nameInput = document.getElementById("cardholder-name");
const nameError = document.getElementById("name-error");
const frontCardName = document.querySelector(
  ".card-details .name-and-date .full-name"
);

nameInput.addEventListener("input", function () {
  const fullName = this.value.trim();

  // Validation - requires at least first + last name (2+ letters each)
  const isValid = /^[a-zA-Z]{2,}(?:\s+[a-zA-Z]{2,})+$/.test(fullName);

  if (isValid) {
    // Format as "John Doe" (capitalized)
    const formattedName = fullName
      .split(" ")
      .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
      .join(" ");

    frontCardName.textContent = formattedName;
  } else {
    // Revert to default if invalid or empty
    frontCardName.textContent = "john doe";
  }

  nameError.style.display = isValid ? "none" : "flex";
});
