
// let sliderContainer = document.createElement('section');
// sliderContainer.id = 'mysliderContainer';

// let slider1=document.createElement('input');
// slider1.type = "range";
// slider1.min="0"
// slider1.max="100" 
// slider1.value="80";
// slider1.id="volSlider";
// slider1.class="sliders";
// sliderContainer.appendChild(slider1);
// slider1.insertAdjacentHTML("beforeBegin", "Volume: "+slider1.value+"% ")


// let slider2=document.createElement('input');
// slider2.type = "range";
// slider2.min="0"
// slider2.max="5000" 
// slider2.value="1000";
// slider2.id="noteDurSlider";
// slider2.class="sliders";
// sliderContainer.appendChild(slider2);

// document.body.appendChild(sliderContainer);


// Display teacher button - optional, if you want it uncomment

// let addchordbutt = document.createElement('button');
// addchordbutt.addEventListener('click', () => DisplayTeacher());
// addchordbutt.innerHTML = 'DisplayTeacher button';
// addchordbutt.id='dispt';
// document.body.appendChild(addchordbutt);

let TeachDropdown = document.createElement('select');
TeachDropdown.id = 'teacher-chord-dropdown';
let teacherflag=0;

let emptyOpt = document.createElement('option');
emptyOpt.disabled = true;
emptyOpt.selected = true;
emptyOpt.text = 'Select chord';
emptyOpt.value = 'empty';
TeachDropdown.appendChild(emptyOpt);
document.body.appendChild(TeachDropdown);


TeachDropdown.addEventListener('change', () => {
    closeTeacher()
    DisplayTeacher()
})

// sol.1 - hard code the dropdown
// for(let i=0;i<12;i++){

//     let optionMaj = document.createElement('option');
//     optionMaj.text = pianoTones[i]+'';
//     optionMaj.value = pianoTones[i]+'';
//     TeachDropdown.appendChild(optionMaj);

//     let optionMin = document.createElement('option');
//     optionMin.text = pianoTones[i]+'m';
//     optionMin.value = pianoTones[i]+'m';
//     TeachDropdown.appendChild(optionMin);

//     let option2= document.createElement('option');
//     option2.text = pianoTones[i]+'2';
//     option2.value = pianoTones[i]+'2';
//     TeachDropdown.appendChild(option2);

//     let option4 = document.createElement('option');
//     option4.text = pianoTones[i]+'4';
//     option4.value = pianoTones[i]+'4';
//     TeachDropdown.appendChild(option4);

// }


// sol.2 - read from DB to create the dropdown
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

addChordOptions(TeachDropdown);


async function DisplayTeacher(){
    let chord = await retriveChordNotes(TeachDropdown.value)//fetch
    // chord = chord.map(el => el.replace("#", "-"));
    if(teacherflag==0){
        let locContainer = document.createElement('section');

        locContainer.id = 'myLocContainer';

        locContainer.classList.add('teacher-chord-section');

        const button = document.createElement('button');
        button.addEventListener('click', () => closeTeacher());
        button.innerHTML = 'Close';
        button.className='btn0';
        locContainer.appendChild(button);

        let innerContainer = document.createElement('section');
        let chordTitle=document.createElement('h3');
        chordTitle.textContent=TeachDropdown.value+" chord ";

        innerContainer.appendChild(chordTitle);

        chord = chord.map(chord => chord.replace("-", "#"));
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
                            " Има опция и за произволен бас."+
                            " Чекбокса 'Хармония' добавя хармония."
        innerContainer.appendChild(text1);
        
        let btn1=document.createElement('button');
        //chord = chord.map(chord => chord.replace("#", "-"));
        
        btn1.classList.add('demo-button');
        btn1.className='btn';
        btn1.textContent = "( "+chord[0]+", "+chord[1]+", "+chord[2]+" )";
        btn1.addEventListener('click', function() {
            if(checkbox2.checked){
                playDemoChord(chord,checkbox2.checked,OtherBassDropdown.value,checkbox3.checked,0);
            }
            else{
                playDemoChord(chord,checkbox1.checked,BassDropdown.value,checkbox3.checked,0);
            }
        });
        innerContainer.appendChild(btn1);
        let btn2=document.createElement('button');
        btn2.classList.add('demo-button');
        btn2.className='btn';
        btn2.textContent="( "+chord[1]+", "+chord[2]+", "+chord[0]+" )";
        btn2.addEventListener('click', function() {
            if(checkbox2.checked){
                playDemoChord(chord,checkbox2.checked,OtherBassDropdown.value,checkbox3.checked,1);
            }
            else{
                playDemoChord(chord,checkbox1.checked,BassDropdown.value,checkbox3.checked,1);
            }
        });
        innerContainer.appendChild(btn2);
        let btn3=document.createElement('button');
        btn3.classList.add('demo-button');
        btn3.className='btn';
        btn3.textContent="( "+chord[2]+", "+chord[0]+", "+chord[1]+" )";
        btn3.addEventListener('click', function() {
            if(checkbox2.checked){
                playDemoChord(chord,checkbox2.checked,OtherBassDropdown.value,checkbox3.checked,2);
            }
            else{
                playDemoChord(chord,checkbox1.checked,BassDropdown.value,checkbox3.checked,2);
            }
        });
        innerContainer.appendChild(btn3);

        var checkbox1 = document.createElement('input');
        checkbox1.type = 'checkbox';
        checkbox1.id = 'checkbox1';
        checkbox1.checked=false;
        checkbox1.addEventListener('click', () => turnOffOtherCheckbox(checkbox2));

        var labelcheckbox1 = document.createElement('label');
        labelcheckbox1.id="bassL";
        labelcheckbox1.appendChild(checkbox1);
        labelcheckbox1.appendChild(document.createTextNode('Бас'));

        
        innerContainer.appendChild( labelcheckbox1);


        let BassDropdown = document.createElement('select');
        BassDropdown.class = 'myDropdown';
        BassDropdown.id="bassDropdown";
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
        checkbox2.id = 'checkbox2';
        checkbox2.checked=false;
        checkbox2.addEventListener('click',() => turnOffOtherCheckbox(checkbox1));

        var labelcheckbox2 = document.createElement('label');
        labelcheckbox2.id="otherBassL";
        labelcheckbox2.appendChild(checkbox2);
        labelcheckbox2.appendChild(document.createTextNode('Друг Бас'));

        
        innerContainer.appendChild( labelcheckbox2);

        let OtherBassDropdown = document.createElement('select');
        OtherBassDropdown.class = 'myDropdown';
        OtherBassDropdown.id="otherBassDropdown";
        for(let i=0;i<12;i++){

            const option = document.createElement('option');
            option.text = numberToLetterMap[i];
            option.value = numberToLetterMap[i];
            OtherBassDropdown.appendChild(option);

        }
        innerContainer.appendChild(OtherBassDropdown);

        var checkbox3 = document.createElement('input');
        checkbox3.id="harmonyI";
        checkbox3.type = 'checkbox';

        var labelcheckbox3 = document.createElement('label');
        labelcheckbox3.id="harmonyL";
        labelcheckbox3.appendChild(checkbox3);
        labelcheckbox3.appendChild(document.createTextNode('Хармония'));

        
        innerContainer.appendChild( labelcheckbox3);

        locContainer.appendChild(innerContainer);
        document.body.appendChild(locContainer);
        teacherflag=1;
    }
    
}

function turnOffOtherCheckbox(otherCheckbox) {
    otherCheckbox.checked = false;
}



function closeTeacher(){

    let sectionToRemove = document.getElementById('myLocContainer');

    if (sectionToRemove) {
      sectionToRemove.remove();
    }
    teacherflag=0;

}

const letterToNumberMap = {
    'C': 0,'C#': 1,'D': 2,'D#': 3,'E': 4,'F': 5,    
    'F#': 6,'G': 7,'G#': 8,'A': 9,'A#': 10,'B': 11
  };
  const numberToLetterMap = {
    0: 'C',1: 'C#',2: 'D',3: 'D#',4: 'E',5: 'F',    
    6: 'F#',7: 'G',8: 'G#',9: 'A',10: 'A#',11: 'B'
  };

function compareLetters(letter1, letter2) {
    const number1 = letterToNumberMap[letter1];
    const number2 = letterToNumberMap[letter2];
    return number1<number2;
}

function playDemoChord(chord,bass,begg_bass,harmony,inversion){// (array notes,bool,note,bool,mode)

    let note0,note1,note2,other=-1;
    if (compareLetters(chord[0],chord[1])&&compareLetters(chord[1],chord[2])){
        note0=0;note1=1;note2=2;other=0;
    }
    if (compareLetters(chord[2],chord[0])&&compareLetters(chord[0],chord[1])){
        note0=2;note1=0;note2=1;other=1;
    }
    if (compareLetters(chord[1],chord[2])&&compareLetters(chord[2],chord[0])){
        note0=1;note1=2;note2=0;other=2;
    }
    //console.log("inversion-"+inversion+" other-"+other);
    //console.log("note0="+note0+" note1="+note1+" note2="+note2);
    invother=6+inversion-other;
    if(other==1){
        invother--;
    }
    if(other==2){
        invother--;
        invother--;
    }
    //invother=inversion;
    if(invother%3==0){
        playNote(chord[note0]+'4',4000,0.8,0);
        playNote(chord[note1]+'4',4000,0.8,0);
        playNote(chord[note2]+'4',4000,0.8,0);        
    }
    if(invother%3==1){
        playNote(chord[note1]+'4',4000,0.8,0);
        playNote(chord[note2]+'4',4000,0.8,0);
        playNote(chord[note0]+'5',4000,0.8,0);
    }
    if(invother%3==2){
        playNote(chord[note2]+'4',4000,0.8,0);
        playNote(chord[note0]+'5',4000,0.8,0);
        playNote(chord[note1]+'5',4000,0.8,0);
    }

    if(bass){
        playNote(begg_bass+'2',4000,0.8,0);
        playNote(begg_bass+'3',4000,0.8,0);
    }

    if(harmony){
        playNote(chord[note0]+'5',3000,0.8,2000);
        playNote(chord[note1]+'5',2800,0.8,2200);
        playNote(chord[note2]+'5',2600,0.8,2400);
        playNote(chord[note0]+'6',2400,0.8,2600);
        playNote(chord[note1]+'6',2200,0.8,2800);
        playNote(chord[note2]+'6',2000,0.8,3000);
        playNote(chord[note0]+'7',1800,0.8,3200);

    }
}

