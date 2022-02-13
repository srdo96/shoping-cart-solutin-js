/* --------------------
    common functions 
--------------------- */

function updateProduct(productName, unitPrice, isIncreasing) {
  const quantityText = document.getElementById(productName + "-quantity");
  const priceText = document.getElementById(productName + "-total-price");
  let quantity = parseInt(quantityText.value);
  if (isIncreasing) {
    quantity = quantity + 1;
    quantityText.value = quantity;
    priceText.innerText = quantity * unitPrice;
  } else if (quantity > 0) {
    quantity = quantity - 1;
    quantityText.value = quantity;
    priceText.innerText = quantity * unitPrice;
  } else if (quantity == 0) {
    quantityText.value = quantity;
    priceText.innerText = quantity * unitPrice;
  }
  calculateTotal();
}

function getInputValue(productName) {
  const input = document.getElementById(productName + "-total-price").innerText;
  return input;
}

// calculate subtotal
function calculateTotal() {
  const phoneTotal = getInputValue("phone");
  const caseTotal = getInputValue("case");
  const subTotal = parseInt(caseTotal) + parseInt(phoneTotal);
  document.getElementById("subtotal").innerText = subTotal;
  const tax = subTotal / 10; //10% tax;
  document.getElementById("tax-amount").innerText = tax;
  const total = subTotal + tax;
  document.getElementById("total-price").innerText = total;
}

/* ----------------------------------------
   handal phone increas and decreas event 
----------------------------------------- */

// phone plus button
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});
// phone minus button
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});

/* ----------------------------------------
   handal case increas and decreas event 
----------------------------------------- */

// case plus button
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 59, true);
});

// case minus button
document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct("case", 59, false);
});
