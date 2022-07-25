function transportCost() {
  const weight = parseInt(document.getElementById("weight").value);
  const distance = parseInt(document.getElementById("distance").value);

  let cost = 0;

  // if (distance < 20 && weight < 3500) {
  //   cost = 300;
  // } else if (distance > 10 && distance < 100 && weight < 7500) {
  //   cost = 500;
  // } else if (distance > 100 && distance < 300 && weight < 7500) {
  //   cost = 700;
  // } else if (distance > 300 && distance < 700 && weight < 7500) {
  //   cost = 1000;
  // } else {
  //   cost = 2000 + 0.5 * weight;
  // }

  let buc_1_200 = 59;
  let buc_2_200 = 44;
  let buc_1_400 = 73;
  let buc_2_400 = 58;
  let buc_1_600 = 94;
  let buc_2_600 = 79;
  let buc_1_800 = 116;
  let buc_2_800 = 96;
  let buc_1_1000 = 137;
  let buc_2_1000 = 116;

  if (distance < 40 && weight < 200) {
    cost = buc_1_200;
  } else if (distance <= 40 && weight >= 200 && weight <= 400) {
    cost = buc_1_400;
  } else if (distance <= 40 && weight >= 400 && weight <= 600) {
    cost = buc_1_600;
  } else if (distance <= 40 && weight >= 600 && weight <= 800) {
    cost = buc_1_800;
  } else if (distance <= 40 && weight >= 800 && weight <= 1000) {
    cost = buc_1_1000;
  } else {
    cost = 150;
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

  document.getElementById("total_display").innerHTML =
    discTotal.toFixed(2) + "$";
  document.getElementById("total_price_display").innerHTML =
    totalPrice.toFixed(2) + "$";
}

function prevPage2() {
  document.getElementById("card-2").classList.remove("hide");
  document.getElementById("card-3").classList.add("hide");
  document.getElementById("next-btn-2").classList.remove("hide");
  document.getElementById("previous-btn-2").classList.add("hide");
  document.getElementById("previous-btn").classList.remove("hide");
}

// event.preventDefault();
