function isBlackKey(index) {
    const pattern = [0,1,0,1,0,0,1,0,1,0,1,0];
    const normalizedIndex = index % pattern.length;
    return pattern[normalizedIndex] === 1;
}

const audio = new Audio('../../piano-keys/e4.ogg');

const pianoTones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
function playSound() {
    audio.currentTime = 0;
    audio.play();
}

const pianoKeys = 88;
const startingKey = 'A'
let currentGama = 0;
const startingIndex = pianoTones.indexOf(startingKey);
const pianoContainer = document.createElement('section');
pianoContainer.classList.add('piano-section')

for (let i = startingIndex; i < pianoKeys + startingIndex; i++) {
    const button = document.createElement('button');
    const currentNote =pianoTones[i%pianoTones.length];
    button.id=`${currentNote}${currentGama}`
    button.innerHTML = `${currentNote}`
    if(currentNote == "B") {
        currentGama++;
    }
    button.addEventListener('click', playSound);
    button.classList.add(isBlackKey(i) ? 'black-key' : 'white-key');
    pianoContainer.appendChild(button);
}

document.body.appendChild(pianoContainer);


