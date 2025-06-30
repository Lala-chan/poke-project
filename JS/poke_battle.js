async function pokelist() {
    
    let pokemonArray = []

    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151")
    const responseBody = await response.json()
    pokemonArray = responseBody.results

    let pokemonSelectSx = document.getElementById("pokemonSelectorSx")
    let pokemonSelectDx = document.getElementById("pokemonSelectorDx")

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


    pokemonSelectSx.addEventListener("change", async function(event){
        
        const pokemonResponse = await fetch (pokemonSelectSx.value)
        const pokemonData = await pokemonResponse.json()

        const pokeLeft = document.getElementById("pokeLeft")
        pokeLeft.style.backgroundImage = pokemonData.sprites.front_default
        //invece di creare il background creo un div dove creo un'immagine poi appendi tutto
        console.log(pokemonData)
    })


}

document.addEventListener("DOMContentLoaded", function(){
pokelist()
})
