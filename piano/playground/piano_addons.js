const piano = document.body.querySelectorAll("#piano-container > button")
const inputField = document.getElementById("display")

piano.forEach(button => {
    button.addEventListener("click", () => {
        inputField.value = button.id.replace("-", "#");
    })
})