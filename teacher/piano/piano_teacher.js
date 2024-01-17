
function playNote(noteLocation,durration,volumeValue,millsecFromStart){

    setTimeout(() => {
        const audio = new Audio(noteLocation);
        audio.currentTime = 0.1;
        audio.volume = parseFloat(volumeValue);

        audio.play();

        setTimeout(() => {
            audio.pause();
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

    playNote('../../piano-keys/c4.ogg',1000,1.0,0);
    playNote('../../piano-keys/e4.ogg',1000,1.0,0);
    playNote('../../piano-keys/g4.ogg',1000,1.0,0);

    playNote('../../piano-keys/c4.ogg',500,1.0,1000);
    playNote('../../piano-keys/e4.ogg',500,1.0,1500);
    playNote('../../piano-keys/g4.ogg',500,1.0,2000);
    playNote('../../piano-keys/e4.ogg',500,1.0,2500);
    playNote('../../piano-keys/c4.ogg',500,1.0,3000);

    playNote('../../piano-keys/c3.ogg',2000,1.0,4000);
    playNote('../../piano-keys/g3.ogg',2000,1.0,4000);
    playNote('../../piano-keys/c4.ogg',2000,1.0,4000);

}