const loadbtnEl = document.querySelector(".btn-load");
const btnEl = document.querySelector(".button");
const textbtnEl = document.querySelector(".btn-text");

let load = 0;

btnEl.addEventListener("click", () => {
  let int = setInterval(loading, 100);
  textbtnEl.innerText = btnEl.dataset.progress;

  function loading() {
    load++;
    if (load > 99) {
      clearInterval(int);
      loadbtnEl.innerText = "";
      textbtnEl.innerText = btnEl.dataset.complete;
    } else {
      loadbtnEl.innerText = `${load}%`;
    }
    loadbtnEl.style.width = `${load}%`;
  }
});
