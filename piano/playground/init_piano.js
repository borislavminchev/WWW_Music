document.body.appendChild(pianoContainer);

const logs = new URLSearchParams(window.location.search).get('logging');
const user = new URLSearchParams(window.location.search).get('user')
if(logs !== null & logs == true) {
    let exitButton = document.createElement('button');
    exitButton.innerHTML = 'Exit';
    exitButton.addEventListener('click', () => {
        console.log(hystory);
        hystory = [];
        // window.location.replace(`/homepage.html?showHistory=1&user=${user}`)
    })
    document.body.appendChild(exitButton);
}
