const audioMap = {
    'C': new Audio('path-to-C-sound.mp3'),
    'D': new Audio('path-to-D-sound.mp3'),
    'E': new Audio('path-to-E-sound.mp3'),
};

const chordMap = {
    'Major_C' : ['C', 'E', 'G'],
    'Major_F' : ['F', 'A', 'C'],
    'Major_G' : ['G', 'B', 'D'],
    'Minor_A' : ['A', 'C', 'E']
}


let chordDropdown = document.getElementById('chord-dropdown');
let chordMenu = document.getElementById('chord-menu');

function getAudio(note) {
    return audioMap[note];
}

function playChord(chord) {
    chord.forEach(note => {
        const audio = getAudio(note);
        console.log('playing audio' + note)
        //audio.play();
    });
}

function createChordButton(chord) {
    let button = document.createElement('button');
    button.classList.add('chord-button');
    button.addEventListener('click', () => playChord(chord));
    return button;
}


function getTones(chord) {
    return chordMap[chord];
}

function addNewChord(chord) {
    let tones = getTones(chord);
    let chordBtn = createChordButton(tones);
    chordBtn.innerHTML = chord;
    
    chordMenu.appendChild(chordBtn);
}


function chordIncluded(chord){
    let addedChords = chordMenu.querySelectorAll('button');
    for(let i = 0; i < addedChords.length; i++) {
        if(addedChords[i].innerHTML === chord) {
            return true;
        }
    }
    return false;
}

chordDropdown.addEventListener('change', () => {
    const chord = chordDropdown.value;
    console.log(chord)
    if(!chordIncluded(chord)) {
        addNewChord(chord)
    }
    
})

