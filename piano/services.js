const pianoTones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

let hystory = [];

function isBlackKey(index) {
    const pattern = [0,1,0,1,0,0,1,0,1,0,1,0];
    const normalizedIndex = index % pattern.length;
    return pattern[normalizedIndex] === 1;
}

async function getNoteAudio(note) {

    let path = await fetch("../../db/piano_notes.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "note": note.replace("-", "#")
        })
    })
   
    path = await path.json();
    
    return new Audio(path);
}

async function retriveChordNotes(chord) {
    
    const arr = await fetch("../../db/piano_chords.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "chord": chord
        })
    })
    

    return arr.json();
}

async function retriveSongNotes(song){

    const arr = await fetch("../../db/piano_songs.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "song": song
        })
    })


    return arr.json();
}

async function playSong(song,m,v){
    // "m" is a speed multiplier
    const s= await retriveSongNotes(song);
    console.log(s);

    s.forEach(note =>{
        console.log(note);
        console.log(note["note_name"]);

        playNote(note["note_name"],note['duration']/m,(note['volume']/100.0)*(v/100),note["at_time_played"]/m);
        //console.log("hey");
    })

}

async function playNote(NoteName,durration,volumeValue,millsecFromStart){
    

    setTimeout(async () => {
        
        const audio = await getNoteAudio(NoteName);

        audio.currentTime = 0.1;

        audio.volume = parseFloat(volumeValue);

        audio.play();
        let keybord=document.getElementsByClassName('piano-section')[0];
        
        let searchId = NoteName.toUpperCase()
        
        let locButton = keybord.querySelector('#'+searchId.replace("#", "-"));
        //const old = locButton.style.backgroundColor; 
        locButton.style.backgroundColor = 'red';

        setTimeout(() => {

            locButton.style.backgroundColor = locButton.classList == 'black-key'?'black':'white';

        }, durration/2)

        setTimeout(() => {
            audio.pause();
            
            //console.log('op')
        }, durration)

        
    }, millsecFromStart)
}

function pauseAllAudio() {
    const audioElements = document.querySelectorAll('audio');
    console.log(audioElements.length);
    var s=audioElements.length;
    for (let i = 0; i < s; i++) {
      if (!audioElements[i].paused) {
        audioElements[i].pause();
        //console.log("hey");
      }
    }
}

async function playChord(chord, gama=4) {
    let notes = await retriveChordNotes(chord);
    
    notes.forEach(note => {
        
        playNote(note+gama,1000,1.0,0);// durration, volume, start, note
    });
}

function playSound(NoteName) {
    //console.log("../../piano-keys/"+NoteName.toLowerCase()+".ogg");
    playNote(NoteName,1000,1.0,0);

}


const pianoKeys = 88;
const startingKey = 'A'
let currentGama = 0;
const startingIndex = pianoTones.indexOf(startingKey);
const pianoContainer = document.createElement('section');
pianoContainer.id = 'piano-container';
pianoContainer.classList.add('piano-section');

for (let i = startingIndex; i < pianoKeys + startingIndex; i++) {
    const button = document.createElement('button');

    const currentNote = pianoTones[i%pianoTones.length];

    button.id=`${currentNote.replace("#", "-")}${currentGama}`

    button.innerHTML = `${currentNote}`
    if(currentNote == "B") {
        currentGama++;
    }
    button.addEventListener('click', () => playSound(button.id));
    button.classList.add(isBlackKey(i) ? 'black-key' : 'white-key');
    pianoContainer.appendChild(button);
}

