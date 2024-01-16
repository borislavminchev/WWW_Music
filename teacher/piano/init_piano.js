function isBlackKey(index) {
    const pattern = [0,1,0,1,0,0,1,0,1,0,1,0];
    const normalizedIndex = (index % pattern.length + pattern.length) % pattern.length;
    return pattern[normalizedIndex] === 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('../../25405__tedagame__88-piano-keys-long-reverb/448613__tedagame__e4.ogg');
    const pianoTones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    function playSound() {
      audio.currentTime = 0;
      audio.play();
    }

    const pianoKeys = 88;
    const startingKey = 'A'
    const startingIndex = pianoTones.indexOf(startingKey);
    const pianoContainer = document.createElement('section');
    pianoContainer.classList.add('piano-section')

    for (let i = startingIndex; i < pianoKeys + startingIndex; i++) {
      const button = document.createElement('button');
      button.innerHTML = `${pianoTones[i%pianoTones.length]}`
      button.addEventListener('click', playSound);
      button.classList.add(isBlackKey(i) ? 'black-key' : 'white-key');
      pianoContainer.appendChild(button);
    }

    document.body.appendChild(pianoContainer);
});