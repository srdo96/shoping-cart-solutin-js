function updateCase(isIncreasing) {
  const quantityText = document.getElementById("case-quantity");
  const quantity = parseInt(quantityText.value);
  if (isIncreasing) {
    quantityText.value = quantity + 1;
  } else if (quantity > 0) {
    quantityText.value = quantity - 1;
  }
}

// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
  updateCase(true);
});

// case minus button
document.getElementById("case-minus").addEventListener("click", function () {
  updateCase(false);
});
