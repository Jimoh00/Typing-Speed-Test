const displayText = document.querySelector(".display-text");
const inputField = document.getElementById("input");
const resultSection = document.querySelector(".result");


const sentences = [
    "The quick brown fox jump the lazy dog",
    "How many wood can a wood chuck chuck if a wood chuck could chuck wood",
    "Crazy Frederick bought many very exquisite opal jewels.",
    "Jinxed wizards pluck ivy from the big quilt.",
    "How vexingly quick daft zebras jump!"
]

function getSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

const currentSentence = getSentence();
displayText.textContent = currentSentence;

let timeStarted = false;
let startTime;

function calculateAccuracy(typed, target) {
    let correct = 0;

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === target[i]) {
            correct++;
        }
    }

    return Math.floor((correct / target.length) * 100);
}


inputField.addEventListener("input", () => {
    const inputValue = inputField.value;

    if(!timeStarted) {
        timeStarted = true;
        startTime = Date.now();
    }

    // Remove the duplicate calculateAccuracy function here

    if (inputValue.length >= currentSentence.length) { // Changed this line
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; 

        const characters = currentSentence.length;
        const minutes = timeTaken / 60;
        const wpm = Math.round((characters / 5) / minutes);
        const accuracy = calculateAccuracy(inputValue, currentSentence);

        // Display results
        resultSection.style.opacity = 1;
        resultSection.style.visibility = "visible";

        document.getElementById("accuracy").textContent = accuracy + "%";
        document.getElementById("wpm").textContent = wpm + " WPM";
        document.getElementById("time").textContent = timeTaken.toFixed(2) + "s";
    }
})

const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
    resultSection.style.opacity = 0;
    resultSection.style.visibility = "hidden";
});