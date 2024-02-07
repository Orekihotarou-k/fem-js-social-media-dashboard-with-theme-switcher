// select elements
const themeToggleButton = document.querySelector(".toggle-button")
const cardLight = document.querySelectorAll(".card")
const textLight = document.querySelectorAll(".number")
const body = document.querySelector("body")


// add eventlistener to the toggle button 
themeToggleButton.addEventListener("click", () => {
    changeBackground()
})

// function to change card background
function changeBackground() {
    if(themeToggleButton.classList.contains("active")) {
        themeToggleButton.classList.remove("active")
        body.classList.remove("active")
    } else {
        themeToggleButton.classList.add("active")
        body.classList.add("active")
    }


    for (let i = 0; i < cardLight.length; i++) {
        const e = cardLight[i]
        if (e.classList.contains("card-bg-dark")) {
            e.classList.remove("card-bg-dark")
        } else {
            e.classList.add("card-bg-dark")
        }
    }

    for (let j = 0; j < textLight.length; j++) {
        const t = textLight[j]
        if (t.classList.contains("text-dark")) {
            t.classList.remove("text-dark")
        } else {
            t.classList.add("text-dark")
        }
    }
}
