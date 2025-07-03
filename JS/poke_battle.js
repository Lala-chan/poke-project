async function pokelist() {
    
    let pokemonArray = []

    const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=151")
    const responseBody = await response.json()
    pokemonArray = responseBody.results

    const pokemonSelectSx = document.getElementById("pokemonSelectorSx")
    const pokemonSelectDx = document.getElementById("pokemonSelectorDx")

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
}

const hpBarSx = document.getElementById("hpBarSx")
const hpBarDx = document.getElementById("hpBarDx")
 
let hpSx
let maxHpSx 
let actualSx
let atkSx
let spaSx
let defSx
let hpDx
let maxHpDx 
let actualDx
let atkDx
let spaDx
let defDx
let pokemonData = {}

const fightBtn = document.getElementById("fightBtn")


    async function select(pokemonSelect, box, hpBar, side) {


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

        const selectSx = document.getElementById("pokemonSelectorSx")
        const selectDx = document.getElementById("pokemonSelectorDx")

        if (selectSx.value !== "" && selectDx.value !== ""){
            fightBtn.disabled = false
        } else {fightBtn.disabled = true}

        const hpStat = pokemonData.stats[0].base_stat
        const attackStat = pokemonData.stats[1].base_stat
        const spaStat = pokemonData.stats[3].base_stat
        const defStat = pokemonData.stats[2].base_stat

        const hpActual = (hpStat / hpStat) * 100
        hpBar.style.width = hpActual + "%"
        hpBar.style.height = "15px"
        hpBar.style.backgroundColor = "green"
        hpBar.style.display = "none"

        if (side === "sx"){
            hpSx = hpStat
            maxHpSx = hpSx
            actualSx = hpActual
            atkSx = attackStat
            spaSx = spaStat
            defSx = defStat
        } else{
                hpDx = hpStat
                maxHpDx = hpDx
                actualDx = hpActual
                atkDx = attackStat
                spaDx = spaStat
                defDx = defStat
        }
    }

    const pokemonSelectSx = document.getElementById("pokemonSelectorSx")
    const pokemonSelectDx = document.getElementById("pokemonSelectorDx")

    //chiamo la funzione async legata all'evento change del select
    pokemonSelectSx.addEventListener("change", function(event){
        select(pokemonSelectSx, "pokeBoxSx", hpBarSx, "sx")
    })

    pokemonSelectDx.addEventListener("change", function(event){
        select(pokemonSelectDx, "pokeBoxDx", hpBarDx, "dx")
    })



const atkBtnSx = document.getElementById("atkLeft")
const atkBtnDx = document.getElementById("atkRight")

fightBtn.addEventListener("click", function(event){

    atkBtnDx.disabled = true
    atkBtnSx.disabled = false

    hpBarSx.style.display = "block"
    hpBarDx.style.display = "block"

    fightBtn.disabled = true
})

atkBtnSx.addEventListener("click", function(event){
    attack("sx")
})

atkBtnDx.addEventListener("click", function(event){
    attack("dx")
})



function attack(atkSide) {
  const power = 50
  const multiplier = 1
  let damage

  if (atkSide === "sx") {
    damage = Math.floor(0.5 * power * (atkSx / defDx) * multiplier) + 1

    hpDx -= damage
    if (hpDx < 0) hpDx = 0

    actualDx = (hpDx / maxHpDx) * 100
    hpBarDx.style.width = actualDx + "%"

    atkBtnSx.disabled = true
    atkBtnDx.disabled = false
  } else {
    damage = Math.floor(0.5 * power * (atkDx / defSx) * multiplier) + 1

    hpSx -= damage
    if (hpSx < 0) hpSx = 0

    actualSx = (hpSx / maxHpSx) * 100
    hpBarSx.style.width = actualSx + "%"

    atkBtnDx.disabled = true
    atkBtnSx.disabled = false
  }

  // Controllo fine partita
  if (hpSx === 0 || hpDx === 0) {
    atkBtnSx.disabled = true
    atkBtnDx.disabled = true

    const winner = hpSx === 0 ? "Right Pokémon wins!" : "Left Pokémon wins!"
    setTimeout(() => {
      alert(winner + " 🎉")
      resetBattle()
    }, 300)
  }
}


function resetBattle() {
  // reset valori HP e variabili
  hpSx = maxHpSx = actualSx = atkSx = defSx = spaSx = 0;
  hpDx = maxHpDx = actualDx = atkDx = defDx = spaDx = 0;

  // svuoto le immagini
  document.getElementById("pokeBoxSx").innerHTML = "";
  document.getElementById("pokeBoxDx").innerHTML = "";

  // reset delle HP bar
  hpBarSx.style.width = "0%";
  hpBarDx.style.width = "0%";
  hpBarSx.style.display = "none";
  hpBarDx.style.display = "none";

  atkBtnSx.disabled = true;
  atkBtnDx.disabled = true;
  fightBtn.disabled = true;

  document.getElementById("pokemonSelectorSx").value = "";
  document.getElementById("pokemonSelectorDx").value = "";
}



document.addEventListener("DOMContentLoaded", function(){
    pokelist()
})




    

    