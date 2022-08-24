const submit = document.getElementById("submit")
const main = document.getElementById("main")
const active = document.getElementById("active")
const rating = document.getElementById("rating")


const btns = document.querySelectorAll("#btn1, #btn2, #btn3, #btn4, #btn5")


// DISPLAY OFF
submit.addEventListener("click", () => {
    main.style.display ="none"
})


// RATING
for(let btn of btns) {
    btn.addEventListener("click", () => {
        rating.textContent = btn.textContent
    })
}
