//import {isBlackKey} from "./init_piano";

function playNote(NoteName,durration,volumeValue,millsecFromStart){

    setTimeout(() => {

        const audio = new Audio('../../piano-keys/'+NoteName.toLowerCase()+'.ogg');

        audio.currentTime = 0.05;

        audio.volume = parseFloat(volumeValue);

        audio.play();
        let keybord=document.getElementsByClassName('piano-section')[0];
        
        let searchId = NoteName.toUpperCase()
        
        let locButton = keybord.querySelector('#'+searchId);
        const old = locButton.style.backgroundColor; 
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


function playSound1() {

    let volValue=0.5;

    const audio1 = new Audio('../../piano-keys/c4.ogg');
    const audio2 = new Audio('../../piano-keys/e4.ogg');
    const audio3 = new Audio('../../piano-keys/g4.ogg');

    audio1.currentTime = 0.1;
    audio2.currentTime = 0.1;
    audio3.currentTime = 0.1;

    // audio1.volume = parseFloat(volValue);
    // audio2.volume = parseFloat(volValue);
    // audio3.volume = parseFloat(volValue);

    setTimeout(() => {
        console.log('first timeout');
        audio1.play();
        audio2.play();
        audio3.play();
    }, 100)

    

    setTimeout(() => {
        console.log('first timeout');
        audio1.pause();
        audio.currentTime = 0.1;
        audio2.pause();
        audio.currentTime = 0.1;
        audio3.pause();
        audio.currentTime = 0.1;
    }, 1000)

    setTimeout(() => {console.log('second timeout');},2000)

    setTimeout(() => {
        console.log('third timeout');
        audio1.play();
        audio2.play();
        audio3.play();
        audio1.pause();
        audio.currentTime = 0.1;
        audio2.pause();
        audio.currentTime = 0.1;
        audio3.pause();
        audio.currentTime = 0.1;
    }, 1500)
  
    console.log('ok');
}

function playSound2(){

    playNote('c4',1000,1.0,0);
    playNote('d-4',1000,1.0,0);
    playNote('g4',1000,1.0,0);

    playNote('c4',500,1.0,1001);
    playNote('d-4',500,1.0,1500);
    playNote('g4',500,1.0,2000);
    playNote('d-4',500,1.0,2500);
    playNote('c4',500,1.0,3000);


    playNote('c2',2000,1.0,4000);
    playNote('c3',2000,1.0,4000);
    playNote('g3',2000,1.0,4000);
    playNote('c4',2000,1.0,4000);

}

function playSound3(){

    let timePl=295;// time playe
    let br=0;

    // тя не може да обича
    playNote('a2',8.5*timePl,1.0,br*(timePl+5));//chord
    playNote('e3',8.5*timePl,1.0,br*(timePl+5));

    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl/2,1.0,br*(timePl+5));
    playNote('c4',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++;
    playNote('b3',timePl/2,1.0,br*(timePl+5));
    playNote('d4',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++
    playNote('c4',timePl,1.0,br*(timePl+5));br++;


    // не познава любовта
    playNote('a2',9*timePl,1.0,br*(timePl+5));//chord
    playNote('e3',9*timePl,1.0,br*(timePl+5));

    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl/2,1.0,br*(timePl+5));
    playNote('e4',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++
    playNote('d4',timePl,1.0,br*(timePl+5));br++;
    playNote('c4',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl/2,1.0,br*(timePl+5));
    playNote('a3',timePl,1.0,br*(timePl+5)+timePl/2);br++;

    //като ледена кралица 
    playNote('g2',9*timePl,1.0,br*(timePl+5));//chord
    playNote('d3',9*timePl,1.0,br*(timePl+5));

    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl/2,1.0,br*(timePl+5));
    playNote('b3',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++
    playNote('a3',timePl/2,1.0,br*(timePl+5));
    playNote('c4',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++
    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    
    //вледенява в теб страстта
    playNote('f2',3.5*timePl,1.0,br*(timePl+5));//chord
    playNote('c3',3.5*timePl,1.0,br*(timePl+5));

    playNote('a3',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    playNote('b3',timePl,1.0,br*(timePl+5));br++;
    playNote('a3',timePl/2,1.0,br*(timePl+5));

    playNote('g2',2.5*timePl,1.0,br*(timePl+5));//chord
    playNote('d3',2.5*timePl,1.0,br*(timePl+5));

    playNote('c4',timePl+timePl/2,1.0,br*(timePl+5)+timePl/2);br++;br++;
    playNote('b3',timePl,1.0,br*(timePl+5));br++;

    playNote('a2',3*timePl,1.0,br*(timePl+5));//chord
    playNote('e3',3*timePl,1.0,br*(timePl+5));

    playNote('a3',timePl,1.0,br*(timePl+5));br++;

}