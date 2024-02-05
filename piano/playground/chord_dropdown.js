const  chordDropdown = document.createElement('select');
chordDropdown.id = 'chord-dropdown';
let emptyOption = document.createElement('option');
emptyOption.disabled = true;
emptyOption.selected = true;
emptyOption.value = '';
emptyOption.textContent = 'Select chord';
chordDropdown.appendChild(emptyOption);
addChordOptions(chordDropdown);

const chordMenu = document.createElement('section');
chordMenu.id = "chord-menu";

chordDropdown.addEventListener('change', () => {
    const chord = chordDropdown.value;
    if(!chordIncluded(chord)) {
        addNewChord(chord)
    }
    
})

const urlParams = new URLSearchParams(window.location.search);
const logging2 = urlParams.get('logging');
const chordList = urlParams.get('chord');
if(chordList !== null) {
    chords = chordList.split('-');
    chords.forEach(chord => {
        addNewChord(chord)
    })
}




document.body.appendChild(chordMenu);
document.body.appendChild(chordDropdown);

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


async function getChordString(chord) {
    const chordNotes = await retriveChordNotes(chord);
    return `${chord} [ ${chordNotes} ]`
}

function addNewChord(chord) {
    let button = document.createElement('button');
    button.innerHTML = chord;
    button.classList.add('chord-button');
    
    button.addEventListener('click', async () => await playChord(chord));
    button.addEventListener('click', async () => {
        const display = document.getElementById("display");
        const chordString = await getChordString(chord);
        display.value = chordString;
        if(logging2 !== null && logging2 == true) {
            hystory.push(chordString)
            // console.log(hystory);
        }
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