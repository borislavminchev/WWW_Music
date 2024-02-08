document.body.appendChild(pianoContainer);

const logs = new URLSearchParams(window.location.search).get('logging');
const user = new URLSearchParams(window.location.search).get('user')
if(logs !== null & logs == true) {
    let exitButton = document.createElement('button');
    exitButton.innerHTML = 'Exit';
    exitButton.id = 'exit-button';
    exitButton.addEventListener('click', () => {
        const redirectURL = new URLSearchParams(window.location.search).get('redirectURL')
        resultString = hystory.join("-").split("#").join("%23").split(" ").join("");
        
        window.location.href = `${redirectURL}?result=${resultString}`;
        hystory = [];
        
    })
    document.body.appendChild(exitButton);
}
