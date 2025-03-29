const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const charCount = document.getElementById("total-char");
const wordCount = document.getElementById("total-word");
const paraCount = document.getElementById("total-para");
const inputData = document.getElementById("input-data");
const startBtn = document.getElementById("start-btn");
const stopBnt = document.getElementById("stop-btn");

let timer;
let totalSeconds = 0;

function updateTimerDisplay() {
  let hrs = Math.floor(totalSeconds / 3600);
  let mins = Math.floor((totalSeconds % 3600) / 60);
  let secs = totalSeconds % 60;
  hour.textContent = `H: ${hrs.toString().padStart(2, "0")}`;
  minute.textContent = `M: ${mins.toString().padStart(2, "0")}`;
  second.textContent = `S: ${secs.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (!timer) {
    timer = setInterval(() => {
      totalSeconds++;
      updateTimerDisplay();
    }, 1000);
  }
});

stopBnt.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

inputData.addEventListener("keypress", () => {
  const inputValue = inputData.value;

  charCount.textContent = `Character: ${inputValue.length} |`;

  const words = inputValue
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  wordCount.textContent = `Word: ${words.length} |`;

  const paragraphs = inputValue
    .trim()
    .split(/\n+/)
    .filter((para) => para.length > 0);
  paraCount.textContent = `Paragraph: ${paragraphs.length}`;
});
