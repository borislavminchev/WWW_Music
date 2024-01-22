

let TeachDropdown = document.createElement('select');
TeachDropdown.id = 'teacher-chord-dropdown';

let emptyOpt = document.createElement('option');
emptyOpt.text = '';
emptyOpt.value = 'empty';
TeachDropdown.appendChild(emptyOpt);

for(let i=0;i<12;i++){

    let optionMaj = document.createElement('option');
    optionMaj.text = pianoTones[i]+'';
    optionMaj.value = pianoTones[i]+'';;
    TeachDropdown.appendChild(optionMaj);

    let optionMin = document.createElement('option');
    optionMin.text = pianoTones[i]+'m';
    optionMin.value = pianoTones[i]+'m';;
    TeachDropdown.appendChild(optionMin);

}


function DisplayTeacher(chord){

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
        innerContainer.appendChild(btn1);
        let btn2=document.createElement('button');
        btn2.classList.add('demo-button');
        btn2.textContent="( "+chord[1]+", "+chord[2]+", "+chord[0]+" )";
        innerContainer.appendChild(btn2);
        let btn3=document.createElement('button');
        btn3.classList.add('demo-button');
        btn3.textContent="( "+chord[2]+", "+chord[0]+", "+chord[1]+" )";
        innerContainer.appendChild(btn3);

        // var checkbox1 = document.createElement('input');
        // checkbox1.type = 'checkbox';

        // var labelcheckbox1 = document.createElement('label');
        // labelcheckbox1.htmlFor = 'myCheckbox';
        // labelcheckbox1.appendChild(document.createTextNode('Бас'));

        // // Append the checkbox and label to the body or another element
        // document.body.appendChild(checkbox);
        // document.body.appendChild(label);



        





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

function playDemoChord(chord,begg_chord,bass,begg_bass,highPitch){// (array notes,note,bool,note,bool)


}