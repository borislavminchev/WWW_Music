function playSound() {

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

    audio1.play();
    audio2.play();
    audio3.play();

    setTimeout(() => {
        audio1.pause();
        audio2.pause();
        audio3.pause();
    }, 1000)

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