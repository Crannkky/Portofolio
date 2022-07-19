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

  document.getElementById("cost_display").innerHTML = cost + "$";
}

function nextPage() {
  document.getElementById("card-2").classList.remove("hide");
  document.getElementById("card-1").classList.add("hide");
  document.getElementById("previous-btn").classList.remove("hide");
  document.getElementById("next-btn").classList.add("hide");
  document.getElementById("next-btn-2").classList.remove("hide");
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

function nextPage2() {
  document.getElementById("card-2").classList.add("hide");
  document.getElementById("card-3").classList.remove("hide");
  document.getElementById("next-btn-2").classList.add("hide");
  document.getElementById("previous-btn").classList.add("hide");
  document.getElementById("previous-btn-2").classList.remove("hide");
}

function prevPage() {
  document.getElementById("card-2").classList.add("hide");
  document.getElementById("card-1").classList.remove("hide");
  document.getElementById("previous-btn-2").classList.add("hide");
  document.getElementById("previous-btn").classList.add("hide");
  document.getElementById("next-btn-2").classList.add("hide");
  document.getElementById("next-btn").classList.remove("hide");
}

function showTotalValue() {
  const quantity = document.getElementById("quantity").value;

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
  const totalPrice = discTotal * quantity;

  if (total === 0 || discTotal === 0 || isNaN(total) || isNaN(discTotal)) {
    alert("Please enter package details ");
    return null;
  }

  document.getElementById("total_display").innerHTML = discTotal + "$";
  document.getElementById("total_price_display").innerHTML = totalPrice + "$";
}

function prevPage2() {
  document.getElementById("card-2").classList.remove("hide");
  document.getElementById("card-3").classList.add("hide");
  document.getElementById("next-btn-2").classList.remove("hide");
  document.getElementById("previous-btn-2").classList.add("hide");
  document.getElementById("previous-btn").classList.remove("hide");
}

// event.preventDefault();
