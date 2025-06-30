const slider = document.querySelector(".slider")
const review = document.getElementsByClassName("review")

let currentIndex = 0

const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

update()

nextBtn.addEventListener("click", () => {
if (currentIndex < review.length -1) {
    currentIndex++
    update()
    }
})

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0 ){
        currentIndex--
        update()
    }
})

function update () {
slider.style.transform = "translateY(" + (-250 * currentIndex) + "px)"

nextBtn.disabled = currentIndex === review.length -1
prevBtn.disabled = currentIndex === 0
}
