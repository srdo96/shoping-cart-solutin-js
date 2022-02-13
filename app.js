function updateCase(isIncreasing) {
  const quantityText = document.getElementById("case-quantity");
  const quantity = parseInt(quantityText.value);
  if (isIncreasing) {
    return (quantityText.value = quantity + 1);
  } else if (quantity > 0) {
    return (quantityText.value = quantity - 1);
  } else if (quantity == 0) {
    return (quantityText.value = quantity);
  }
}

// case total price calculation
function caseTotalPrice(quantity) {
  document.getElementById("case-total-price").innerText = quantity * 59;
}

// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
  const quantity = updateCase(true);
  caseTotalPrice(quantity);
});

// case minus button
document.getElementById("case-minus").addEventListener("click", function () {
  const quantity = updateCase(false);
  caseTotalPrice(quantity);
});
