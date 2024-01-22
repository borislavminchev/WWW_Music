

let TeachDropdown = document.createElement('select');
TeachDropdown.id = 'teacher-chord-dropdown';

let emptyOpt = document.createElement('option');
emptyOpt.text = '';
emptyOpt.value = 'empty';
TeachDropdown.appendChild(emptyOpt);

for(let i=0;i<12;i++){

    let optionMaj = document.createElement('option');
    optionMaj.text = pianoTones[i]+'';
    optionMaj.value = pianoTones[i]+'';
    TeachDropdown.appendChild(optionMaj);

    let optionMin = document.createElement('option');
    optionMin.text = pianoTones[i]+'m';
    optionMin.value = pianoTones[i]+'m';
    TeachDropdown.appendChild(optionMin);

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

async function DisplayTeacher(){
    let chord =await retriveChordNotes(TeachDropdown.value)//fetch
    
    if(teacherflag==0){
        let locContainer = document.createElement('section');

        locContainer.id = 'myLocContainer';

        locContainer.classList.add('teacher-chord-section');

        const button = document.createElement('button');
        button.addEventListener('click', () => closeTeacher());
        button.innerHTML = 'Close';
        locContainer.appendChild(button);

        let innerContainer = document.createElement('section');
        let chordTitle=document.createElement('h3');
        chordTitle.textContent=TeachDropdown.value+' chord';

        innerContainer.appendChild(chordTitle);


        let text0=document.createElement('p');
        text0.textContent="Това е акорда ' "+TeachDropdown.value+" '. Той може да се изсвири по 3 различни начина: "+"( "+
                    chord[0]+", "+chord[1]+", "+chord[2]+" ), ( "+
                    chord[1]+", "+chord[2]+", "+chord[0]+" ), ( "+
                    chord[2]+", "+chord[0]+", "+chord[1]+" ), където първия тон от всяка тройка е най-ниския.";
        innerContainer.appendChild(text0);

        let text1=document.createElement('p');
        text1.textContent="Следващите три бутона изсвирват на пианото акорда по избрания от вас начин."+
                            " Чекбокса 'Бас' добавя бас като може да се избере и какъв да бъде той."+
                            " Най-често се свири бас съвпадащ с акорда."+
                            " Чекбокса 'Хармония' добавя хармония."
        innerContainer.appendChild(text1);
        
        let btn1=document.createElement('button');
        btn1.classList.add('demo-button');
        btn1.textContent = "( "+chord[0]+", "+chord[1]+", "+chord[2]+" )";
        btn1.addEventListener('click', () => playDemoChord(chord,chord[0],checkbox1.checked,BassDropdown.value,checkbox2.checked,0));
        innerContainer.appendChild(btn1);
        let btn2=document.createElement('button');
        btn2.classList.add('demo-button');
        btn2.textContent="( "+chord[1]+", "+chord[2]+", "+chord[0]+" )";
        btn2.addEventListener('click', () => playDemoChord(chord,chord[1],checkbox1.checked,BassDropdown.value,checkbox2.checked,1));
        innerContainer.appendChild(btn2);
        let btn3=document.createElement('button');
        btn3.classList.add('demo-button');
        btn3.textContent="( "+chord[2]+", "+chord[0]+", "+chord[1]+" )";
        btn3.addEventListener('click', () => playDemoChord(chord,chord[2],checkbox1.checked,BassDropdown.value,checkbox2.checked,2));
        innerContainer.appendChild(btn3);

        var checkbox1 = document.createElement('input');
        checkbox1.type = 'checkbox';

        var labelcheckbox1 = document.createElement('label');
        labelcheckbox1.appendChild(document.createTextNode('Бас'));

        innerContainer.appendChild(checkbox1);
        innerContainer.appendChild( labelcheckbox1);


        let BassDropdown = document.createElement('select');
        BassDropdown.id = 'bass-chord-dropdown';
        let option0 = document.createElement('option');
        option0.text = chord[0];
        option0.value = chord[0];
        BassDropdown.appendChild(option0);
        let option1 = document.createElement('option');
        option1.text = chord[1];
        option1.value = chord[1];
        BassDropdown.appendChild(option1);
        let option2 = document.createElement('option');
        option2.text = chord[2];
        option2.value = chord[2];
        BassDropdown.appendChild(option2);
        innerContainer.appendChild(BassDropdown);

        var checkbox2 = document.createElement('input');
        checkbox2.type = 'checkbox';

        var labelcheckbox2 = document.createElement('label');
        labelcheckbox2.appendChild(document.createTextNode('Хармония'));

        innerContainer.appendChild(checkbox2);
        innerContainer.appendChild( labelcheckbox2);

        locContainer.appendChild(innerContainer);
        document.body.appendChild(locContainer);
        teacherflag=1;
    }
    
}

function closeTeacher(){

    let sectionToRemove = document.getElementById('myLocContainer');

    if (sectionToRemove) {
      sectionToRemove.remove();
    }
    teacherflag=0;

}

function playDemoChord(chord,begg_chord,bass,begg_bass,harmony,inversion){// (array notes,note,bool,note,bool)

    //generic
    //playNote('e3',8.5*timePl,1.0,br*(timePl+5));
    if(inversion==0){
        playNote(chord[0]+'4',4000,0.8,0);
        playNote(chord[1]+'4',4000,0.8,0);
        playNote(chord[2]+'4',4000,0.8,0);
    }
    if(inversion==1){
        playNote(chord[1]+'4',4000,0.8,0);
        playNote(chord[2]+'4',4000,0.8,0);
        playNote(chord[0]+'5',4000,0.8,0);

    }
    if(inversion==2){
        playNote(chord[2]+'4',4000,0.8,0);
        playNote(chord[0]+'5',4000,0.8,0);
        playNote(chord[1]+'5',4000,0.8,0);
    }


    if(bass){
        playNote(begg_bass+'2',4000,0.8,0);
        playNote(begg_bass+'3',4000,0.8,0);
    }

    if(harmony){
        playNote(chord[0]+'5',3000,0.8,2000);
        playNote(chord[1]+'5',2800,0.8,2200);
        playNote(chord[2]+'5',2600,0.8,2400);
        playNote(chord[0]+'6',2400,0.8,2600);
        playNote(chord[1]+'6',2200,0.8,2800);
        playNote(chord[2]+'6',2000,0.8,3000);
        playNote(chord[0]+'7',1800,0.8,3200);

    }

}