const form = document.getElementById("form")
const trainerName = document.getElementById("trainerName")
const email = document.getElementById("email")
const comment = document.getElementById("comment")


form.addEventListener("submit", function(event){
    event.preventDefault()

    const rating = document.querySelector('input[name="rating"]:checked');
    const errorName = document.getElementById("errorName")
    const errorEmail = document.getElementById("errorEmail")
    const errorComment = document.getElementById("errorComment")
    const errorRating = document.getElementById("errorRating")

    errorName.textContent = "" 
    errorEmail.textContent = "" 
    errorComment.textContent = "" 
    errorRating.textContent = ""

    if (trainerName.value.trim() === ""){
        errorName.textContent = "Please tell us who you are!"
    }

    if (email.value.trim() === ""){
        errorEmail.textContent = "We need to know where to contact you back!"
    }

    if (comment.value.trim().length <= 10) {
        errorComment.textContent = "Write at least 10 characters please"
    }

    if (!rating) {
    errorRating.textContent = "Please give us a star rating!"
    }

    if (
        errorName.textContent === "" &&
        errorEmail.textContent === "" &&
        errorComment.textContent === "" &&
        errorRating.textContent === ""
        ) {
        alert("Thanks for your feedback, Trainer! ⚡")
        form.reset() // svuota il form
        }

})