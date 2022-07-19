event.preventDefault();

function transportCost() {
  const weight = parseInt(document.getElementById("weight").value);
  const distance = parseInt(document.getElementById("distance").value);

  let cost = 0;

  if (distance < 20 && weight < 3500) {
    cost = 300;
  } else if (distance > 10 && distance < 100 && weight < 7500) {
    cost = 500;
  } else if (distance > 100 && distance < 300 && weight < 7500) {
    cost = 700;
  } else if (distance > 300 && distance < 700 && weight < 7500) {
    cost = 1000;
  } else {
    cost = 2000 + 0.5 * weight;
  }

  let display_cost = parseInt(
    (document.getElementById("cost_display").innerHTML = cost + "$")
  );
}

function priceCalc() {
  const exw = parseInt(document.getElementById("exw").value);
  const vendor = parseInt(document.getElementById("vendor").value);
  let disc = 0;

  if (vendor == 1001) {
    disc = 0.1;
  } else if (vendor == 1002) {
    disc = 0.2;
  } else if (vendor == 1003) {
    disc = 0.3;
  } else {
    disc = 0;
  }

  const margin = exw * 0.5;

  const sellingPrice = +exw + +margin;

  const discountValue = sellingPrice * disc;

  const finalPrice = sellingPrice - discountValue;

  document.getElementById("display-cost").innerText = finalPrice + "$";
}

function showTotalValue() {
  const quantity = document.getElementById("quantity").value;

  // div elements DO NOT HAVE a .value attribute
  const cost = parseInt(document.getElementById("cost_display").innerText);
  const finalPrice = parseInt(
    document.getElementById("display-cost").innerText
  );

  let extra = 0;

  if (quantity > 100) {
    extra = 0.1;
  } else if (quantity > 200) {
    extra = 0.2;
  } else {
    extra = 0;
  }

  const total = cost / quantity + finalPrice;
  const discTotal = total - total * extra;

  if (total === 0 || discTotal === 0 || isNaN(total) || isNaN(discTotal)) {
    alert("Please enter package details ");
    return null;
  }

  document.getElementById("total_display").innerHTML = discTotal + "$";
}
