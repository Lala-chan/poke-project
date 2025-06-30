const tabContent = document.getElementsByClassName("tabcontent")

function openCharacter(event, id_tab){
    const active = document.getElementsByClassName("active")
    active[0].classList.remove("active")

    const tab = document.getElementById(id_tab)
    tab.classList.add("active")



    const clicked = document.getElementsByClassName("clicked")
    clicked[0].classList.remove("clicked")

    event.target.classList.add("clicked")

}

