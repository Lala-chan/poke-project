async function pokelist(params) {

    let pokemonArray = []

    try{
    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151")
    const responseBody = await response.json()
    pokemonArray = responseBody.results
    } catch (error) {
        console.error("Error:", error)
        return
    }
    

    const pokeContainer = document.getElementById("pokemonList")

    for(let i = 0; i < pokemonArray.length; i++) {

        let pokemonData = {}

        try{const pokemonUrl = pokemonArray[i].url
        const pokemonResponse = await fetch (pokemonUrl)
        pokemonData = await pokemonResponse.json()
        } catch (error) {
            console.error("Error:", error)
            return
        }

        const card = document.createElement("div")
        card.classList.add("pokemon-card")
        pokeContainer.appendChild(card)

        const pokemonHeading = document.createElement("h2")
        pokemonHeading.textContent = pokemonData.name
        pokemonHeading.classList.add("pokemon-heading")

        function makeImg (){
            const img = document.createElement("img")
            img.src = pokemonData.sprites.front_default
            img.alt = pokemonData.name
            img.height = 175
            img.width = 175

            return img
        }
        
        const pokemonImg = makeImg()

        card.appendChild(pokemonHeading)
        card.appendChild(pokemonImg)
 

        const dialog = document.createElement("dialog")
        const dialogDiv = document.createElement("div")
        const dialogImg = makeImg()
        const cry = new Audio(pokemonData.cries.latest)
        const cryButton = document.createElement("button")
        cryButton.textContent = "Hear me"

        cryButton.addEventListener("click", function(){
            cry.play()
        })


        const dialogTitle = document.createElement("h1")
        dialogTitle.textContent = pokemonData.name
        card.appendChild(dialog)
        dialog.appendChild(dialogDiv) 
        dialogDiv.appendChild(dialogTitle)
        dialogDiv.appendChild(dialogImg)
        dialogDiv.appendChild(cryButton)
        

        const closingButton = document.createElement("button")
        closingButton.textContent ="Close"
        dialog.appendChild(closingButton)
        

        card.addEventListener("click", function() {
            dialog.showModal()
        })
    
        closingButton.addEventListener("click", function(event) {
            event.stopPropagation()
            dialog.close()
        })


       for (let j = 0; j < pokemonData.stats.length; j++){
        const stat = pokemonData.stats[j]

        const statName = stat.stat.name
        const statValue = stat.base_stat

        const statParag = document.createElement("p")
        statParag.textContent = statName + ": " + statValue
        dialogDiv.appendChild(statParag)
       }

        for (let k = 0; k < pokemonData.types.length; k++){
        const type = pokemonData.types[k]

        const typeParag = document.createElement("p")
        typeParag.textContent = "Type: " + type.type.name
        dialogDiv.appendChild(typeParag)
       }


    }
}

document.addEventListener("DOMContentLoaded", function(){
pokelist()
})
