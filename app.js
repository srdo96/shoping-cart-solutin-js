/* --------------------
    common functions 
--------------------- */

function updateProductNum(isIncreasing, elementID) {
  const quantityText = document.getElementById(elementID);
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
function productTotalPrice(elementID, quantity, unitPrice) {
  document.getElementById(elementID).innerText = quantity * unitPrice;
}

/* ----------------------------------------
   handal phone increas and decreas event 
----------------------------------------- */

// phone plus button
document.getElementById("phone-plus").addEventListener("click", function () {
  const quantity = updateProductNum(true, "phone-quantity");
  productTotalPrice("phone-total-price", quantity, 1219);
});
// phone minus button
document.getElementById("phone-minus").addEventListener("click", function () {
  const quantity = updateProductNum(false, "phone-quantity");
  productTotalPrice("phone-total-price", quantity, 1219);
});

/* ----------------------------------------
   handal case increas and decreas event 
----------------------------------------- */

// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
  const quantity = updateProductNum(true, "case-quantity");
  productTotalPrice("case-total-price", quantity, 59);
});

// case minus button
document.getElementById("case-minus").addEventListener("click", function () {
  const quantity = updateProductNum(false, "case-quantity");
  productTotalPrice("case-total-price", quantity, 59);
});
