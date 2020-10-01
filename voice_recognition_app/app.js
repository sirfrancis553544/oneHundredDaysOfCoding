const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

greetings = [
  "Im good you little piece of shit",
  "Doing good my guy",
  "leave me alone",
];
const weather = ["weather is fine", "Stay out of the sun"];

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Voice is activated, speak now");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = "Can you repeat that";
    
  if (message.includes("how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
