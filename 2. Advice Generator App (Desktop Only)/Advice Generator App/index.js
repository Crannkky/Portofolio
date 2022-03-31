document.addEventListener("click", function (event) {
  if (!event.target.matches(".dice_image")) return;
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => renderAdvice(data));
});
function renderAdvice(data) {
  const advice = document.querySelector(".text_advice");
  const id = document.querySelector(".advice_id");
  advice.innerText = data.slip.advice;
  id.innerText = "Advice #" + data.slip.id;
}
