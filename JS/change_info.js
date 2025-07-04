const form = document.getElementById("form")


const trainerName = document.getElementById("trainerName")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const newPassword = document.getElementById("newPassword")
const confPassword = document.getElementById("confPassword")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const errorNickname = document.getElementById("errorNickname")
    const errorName = document.getElementById("errorName")
    const errorSurname = document.getElementById("errorSurname")
    const errorEmail = document.getElementById("errorEmail")
    const errorPsw = document.getElementById("errorPsw")
    const errorNewPsw = document.getElementById("errorNewPsw")
    const errorConfPsw = document.getElementById("errorConfPsw")
    
    errorNickname.textContent = ""
    errorName.textContent = "" 
    errorSurname.textContent = ""
    errorEmail.textContent = "" 
    errorPsw.textContent = "" 
    errorNewPsw.textContent = ""
    errorConfPsw.textContent = ""

    const existingResponse = document.querySelector(".response");
    if (existingResponse) {
        existingResponse.remove();
    }

    if (trainerName.value.trim() === ""){
        errorNickname.textContent = "This nickname is invalid!";
    }

     if (firstName.value.trim() === ""){
        errorName.textContent = "This name is invalid!";
    }

     if (lastName.value.trim() === ""){
        errorSurname.textContent = "This surname is invalid!";
    }

    if (email.value.trim() === ""){
        errorEmail.textContent = "Please use a valid email"
    }

    if (password.value.trim() === "") {
       errorPsw.textContent = "Please write a valid password!"
    }else if (password.value.length < 8) {
       errorPsw.textContent = "You're password is too short!"
    }

    if (newPassword.value.trim() === "") {
        errorNewPsw.textContent = "Please write a new password!"
    }else if (newPassword.value.length < 8) {
        errorNewPsw.textContent = "Your new password is too short!"}

    if (confPassword.value.trim() === "") {
        errorConfPsw.textContent = "Please confirm your new password!"
    }else if (confPassword.value !== newPassword.value) {
        errorConfPsw.textContent = "The new password and the confirmation do not match!"}


    if (
        errorNickname.textContent === "" &&
        errorName.textContent === "" &&
        errorSurname.textContent === "" &&
        errorEmail.textContent === "" &&
        errorPsw.textContent === "" &&
        errorNewPsw.textContent === "" &&
        errorConfPsw.textContent === ""
    ){
        const response = document.createElement("div")
        response.textContent ="Well done " + trainerName.value + ", you profile has been updated successfully!"
        response.classList.add("response")
        form.appendChild(response)
        
    }   
})

