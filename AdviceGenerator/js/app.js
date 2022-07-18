document.addEventListener("click", function (event) {
  if (!event.target.matches(".btn")) return;
  fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
    .then((response) => response.json())
    .then((data) => renderAdvice(data));
});
function renderAdvice(data) {
  const advice = document.querySelector(".advice");
  const id = document.querySelector(".advice-id");
  advice.innerText = data.slip.advice;
  id.innerText = "Advice #" + data.slip.id;
}
