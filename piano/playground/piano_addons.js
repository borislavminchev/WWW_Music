const piano = document.body.querySelectorAll("#piano-container > button")
const inputField = document.getElementById("display")

piano.forEach(button => {
    button.addEventListener("click", () => {
        inputField.value = button.id.replace("-", "#");
    })
})


const logging = new URLSearchParams(window.location.search).get('logging');
if(logging !== null && logging == true) {
    const playHistory = [];
    piano.forEach(button => {
        button.addEventListener("click", () => {
            hystory.push(button.id.replace("-", "#"));
            // console.log(hystory)
        });
    });
}