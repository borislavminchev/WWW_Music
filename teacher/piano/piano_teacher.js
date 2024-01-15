function playSound() {
    // const response1 = await fetch('C:/Users/Bobby/Downloads/25405__tedagame__88-piano-keys-long-reverb/448613__tedagame__e4.ogg');
    // const buffer1 = await response1.arrayBuffer();

    // const response2 = await fetch('C:/Users/Bobby/Downloads/25405__tedagame__88-piano-keys-long-reverb/448592__tedagame__g4.ogg');
    // const buffer2 = await response2.arrayBuffer();

    // const response3 = await fetch('C:/Users/Bobby/Downloads/25405__tedagame__88-piano-keys-long-reverb/448536__tedagame__b4.ogg');
    // const buffer3 = await response2.arrayBuffer();

    const audio1 = new Audio('../../25405__tedagame__88-piano-keys-long-reverb/448613__tedagame__e4.ogg');
    const audio2 = new Audio('../../25405__tedagame__88-piano-keys-long-reverb/448592__tedagame__g4.ogg');
    const audio3 = new Audio('../../25405__tedagame__88-piano-keys-long-reverb/448536__tedagame__b4.ogg');

    audio1.currentTime = 0.1;
    audio2.currentTime = 0.1;
    audio3.currentTime = 0.1;

    audio1.play();
    audio2.play();
    audio3.play();

    setTimeout(() => {
        audio1.pause();
        audio2.pause();
        audio3.pause();
    }, 1000)
    
    console.log('ok');
}