const form = document.getElementById("form")


const trainerName = document.getElementById("trainerName")
const email = document.getElementById("email")
const password = document.getElementById("password")



form.addEventListener("submit", function(event){
    event.preventDefault();

    const errorName = document.getElementById("errorName")
    const errorEmail = document.getElementById("errorEmail")
    const errorPsw = document.getElementById("errorPsw")

    errorName.textContent = "" 
    errorEmail.textContent = "" 
    errorPsw.textContent = "" 



    if (trainerName.value.trim() === ""){
        errorName.textContent = "Don't forget to put your name!";
    }

    if (email.value.trim() === ""){
        errorEmail.textContent = "Don't forget to put your email!"
    }

    if (password.value.trim() === "") {
       errorPsw.textContent = "Please write a valid password!"
    }else if (password.length <= 8) {
       errorPsw.textContent = "You're password is too short!"
    }

    if (
        errorName.textContent === "" &&
        errorEmail.textContent === "" &&
        errorPsw.textContent === "" 
    ){window.location.href = "poke_homepage.html"
    }
})

