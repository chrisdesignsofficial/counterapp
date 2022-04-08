let value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
let body = document.body
let count = 0

btns.forEach((items) => {
    items.addEventListener("click", (e) => {
        let target = e.currentTarget.classList
        if (target.contains("decrease")) {
            count--
            value.textContent = count
        } else if (target.contains("increase")) {
            count++
            value.textContent = count
        } else {
            count = 0
            value.textContent = count
        }


        if (count < 0) {
            value.style.color = "red"
            body.style.backgroundColor = "pink"
        } else  if (count > 0) {
            value.style.color = "green"
            body.style.backgroundColor = "lightgreen"
        }   else  {
            value.style.color = "black"
            body.style.backgroundColor = "white"
        }
    })



})