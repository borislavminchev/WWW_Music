//import {isBlackKey} from "./init_piano";

function playNote(durration,volumeValue,millsecFromStart,NoteName){

    setTimeout(() => {

        const audio = new Audio('../../piano-keys/'+NoteName.toLowerCase()+'.ogg');

        audio.currentTime = 0.1;

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
    // audio1.currentTime = 0.1;
    // audio2.currentTime = 0.1;
    // audio3.currentTime = 0.1;

    // setTimeout(() => {
    //     audio1.play();
    //     audio2.play();
    //     audio3.play();
    // }, 1500)


    // setTimeout(() => {
    //     audio1.pause();
    //     audio2.pause();
    //     audio3.pause();
    // }, 1000)



    
    console.log('ok');
}

function playSound2(){

    playNote(1000,1.0,0,'c4');
    playNote(1000,1.0,0,'d-4');
    playNote(1000,1.0,0,'g4');

    playNote(500,1.0,1001,'c4');
    playNote(500,1.0,1500,'d-4');
    playNote(500,1.0,2000,'g4');
    playNote(500,1.0,2500,'d-4');
    playNote(500,1.0,3000,'c4');


    playNote(2000,1.0,4000,'c2');
    playNote(2000,1.0,4000,'c3');
    playNote(2000,1.0,4000,'g3');
    playNote(2000,1.0,4000,'c4');

}

function playSound3(){

    let timePl=295;// time playe
    let br=0;

    // тя не може да обича
    playNote(8.5*timePl,1.0,br*(timePl+5),'a2');//chord
    playNote(8.5*timePl,1.0,br*(timePl+5),'e3');

    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl/2,1.0,br*(timePl+5),'c4');
    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'c4');br++;br++;
    playNote(timePl/2,1.0,br*(timePl+5),'b3');
    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'d4');br++;br++
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;


    // не познава любовта
    playNote(9*timePl,1.0,br*(timePl+5),'a2');//chord
    playNote(9*timePl,1.0,br*(timePl+5),'e3');

    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl/2,1.0,br*(timePl+5),'c4');
    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'e4');br++;br++
    playNote(timePl,1.0,br*(timePl+5),'d4');br++;
    playNote(timePl,1.0,br*(timePl+5),'c4');br++;
    playNote(timePl/2,1.0,br*(timePl+5),'b3');
    playNote(timePl,1.0,br*(timePl+5)+timePl/2,'a3');br++;

    //като ледена кралица 
    playNote(9*timePl,1.0,br*(timePl+5),'g2');//chord
    playNote(9*timePl,1.0,br*(timePl+5),'d3');

    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    playNote(timePl/2,1.0,br*(timePl+5),'b3');
    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'b3');br++;br++
    playNote(timePl/2,1.0,br*(timePl+5),'a3');
    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'c4');br++;br++
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    
    //вледенява в теб страстта
    playNote(3.5*timePl,1.0,br*(timePl+5),'f2');//chord
    playNote(3.5*timePl,1.0,br*(timePl+5),'c3');

    playNote(timePl,1.0,br*(timePl+5),'a3');br++;
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;
    playNote(timePl/2,1.0,br*(timePl+5),'a3');

    playNote(2.5*timePl,1.0,br*(timePl+5),'g2');//chord
    playNote(2.5*timePl,1.0,br*(timePl+5),'d3');

    playNote(timePl+timePl/2,1.0,br*(timePl+5)+timePl/2,'c4');br++;br++;
    playNote(timePl,1.0,br*(timePl+5),'b3');br++;

    playNote(3*timePl,1.0,br*(timePl+5),'a2');//chord
    playNote(3*timePl,1.0,br*(timePl+5),'e3');

    playNote(timePl,1.0,br*(timePl+5),'a3');br++;

}