async function pokelist() {
    
    let pokemonArray = []

    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151")
    const responseBody = await response.json()
    pokemonArray = responseBody.results

    let pokemonSelectSx = document.getElementById("pokemonSelectorSx")
    let pokemonSelectDx = document.getElementById("pokemonSelectorDx")

    const emptyOption1 = document.createElement("option")
    emptyOption1.value = ""
    emptyOption1.text = ""
    
    const emptyOption2 = document.createElement("option")
    emptyOption2.value = ""
    emptyOption2.text = ""

    pokemonSelectSx.appendChild(emptyOption1)
    pokemonSelectDx.appendChild(emptyOption2)

    for (let i = 0; i < pokemonArray.length; i++) {


        const pokemonName = pokemonArray[i].name 
        const pokemonUrl = pokemonArray[i].url

        const option = document.createElement("option")
       
        option.text = pokemonName //pusho nella mia option i nomi da displayare nel select
        option.value = pokemonUrl
        pokemonSelectSx.add(option)
    }

    for (let i = 0; i < pokemonArray.length; i++) {


        const pokemonName = pokemonArray[i].name 
        const pokemonUrl = pokemonArray[i].url

        const option = document.createElement("option")
        
        option.text = pokemonName //pusho nella mia option i nomi da displayare nel select
        option.value = pokemonUrl
        pokemonSelectDx.add(option)
    }

    
    //chiamo la funzione async legata all'evento change del select
    pokemonSelectSx.addEventListener("change", function(event){
        select(pokemonSelectSx, "pokeBoxSx")
    })
    pokemonSelectDx.addEventListener("change", function(event){
        select(pokemonSelectDx, "pokeBoxDx")
    })

    
}


//funzione legata al change select che mi crea un'img del pokemon selezionato e ne riproduce il suono
async function select(pokemonSelect, box) {


    const pokeBox = document.getElementById(box)
    pokeBox.innerHTML = ""

    const pokemonResponse = await fetch (pokemonSelect.value)
    pokemonData = await pokemonResponse.json()

    const pokeImg = document.createElement("img")
    pokeImg.src = pokemonData.sprites.front_default
    pokeImg.alt = pokemonData.name

    pokeBox.appendChild(pokeImg)

    const cry = new Audio(pokemonData.cries.latest)
    cry.play()

    const fightBtn = document.getElementById("fightBtn")
    const selectSx = document.getElementById("pokemonSelectorSx")
    const selectDx = document.getElementById("pokemonSelectorDx")

    if (selectSx.value !== "" && selectDx.value !== ""){
        fightBtn.disabled = false
    } else {fightBtn.disabled = true}

}

document.addEventListener("DOMContentLoaded", function(){
pokelist()
})
