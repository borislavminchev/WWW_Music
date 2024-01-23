const  chordDropdown = document.createElement('select');
chordDropdown.id = 'chord-dropdown';
addChordOptions(chordDropdown);
const chordMenu = document.createElement('section', {id: 'chord-menu'});
document.body.appendChild(chordMenu);
document.body.appendChild(chordDropdown);



chordDropdown.addEventListener('change', () => {
    const chord = chordDropdown.value;
    if(!chordIncluded(chord)) {
        addNewChord(chord)
    }
    
})

async function loadChords() {
    const arr = await fetch("../../db/piano_chords.php", {
        method: 'GET',
    });

    return arr.json();
}

function createChordOption(chord) {
    let chordOption = document.createElement('option');
    chordOption.value = chord;
    chordOption.text = chord; 
    return chordOption;
}

async function addChordOptions(container) {
    const chords = await loadChords();
    chords.forEach( chord => {
        container.appendChild(createChordOption(chord));
    });
}

function createChordButton(chord) {
    let button = document.createElement('button');
    button.classList.add('chord-button');
    button.addEventListener('click', () => playChord(chord));
    return button;
}




function addNewChord(chord) {
    let button = document.createElement('button');
    button.innerHTML = chord;
    button.classList.add('chord-button');
    
    button.addEventListener('click', async () => await playChord(chord));
    button.addEventListener('click', async () => {
        const display = document.getElementById("display");
        const chordNotes = await retriveChordNotes(chord);
        display.value = `${chord} [ ${chordNotes} ]`
    })
    
    chordMenu.appendChild(button);
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



