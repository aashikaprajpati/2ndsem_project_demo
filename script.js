// ------------------- Timer -------------------
let totalSeconds = 1800; // 30 minutes

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `00:${mins}:${secs}`;
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  if (totalSeconds > 0) {
    totalSeconds--;
    timerElement.textContent = formatTime(totalSeconds);
  } else {
    clearInterval(timerInterval);
    timerElement.textContent = "00:00:00";
    alert("Time's up!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// ---------------- Affirmation ----------------
const affirmations = [
  "You are capable of amazing things.",
  "Stay strong, stay positive.",
  "One step at a time, one goal at a time.",
  "Focus on progress, not perfection.",
  "You got this!"
];

function showAffirmation() {
  const random = Math.floor(Math.random() * affirmations.length);
  alert(affirmations[random]);
}
function triggerFileUpload(index) {
  const fileInputs = document.querySelectorAll('.file-input');
  if (fileInputs[index]) {
    fileInputs[index].click();
  }
}

function handleFileUpload(event, index) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById(`fileName${index}`).textContent = `Uploaded: ${file.name}`;
  }
}
