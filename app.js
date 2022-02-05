const content = document.getElementById("content")
const heroSection = document.querySelector(".hero-section")
const startButton = document.getElementById("start-button")
const playerAmt = document.getElementById("player-amt");
let clickCounter = 0

const getHeroes = () => [
    { name: "Captain America", id: 1},
    { name: "Black Widow", id: 2},
    { name: "Hulk", id: 3},
    { name: "Spider-Man", id: 4},
    { name: "Wolverine", id: 5},
    { name: "Cyclops", id: 6},
    { name: "Nick Fury", id: 7},
    { name: "Deadpool", id: 8},
    { name: "Emma Frost", id: 9},
    { name: "Gambit", id: 10},
    { name: "Hawkeye", id: 11},
    { name: "Rogue", id: 12},
    { name: "Storm", id: 13},
    { name: "Thor", id: 14},
    { name: "Iron Man", id: 15},

]

const randomize = () => {
    const heroData = getHeroes()
    heroData.sort(() => Math.random() - 0.5);
    return heroData;
}

//card holder
const cardHolderGenerator = (playerCount) => {

        
        const heroCardContainer = document.createElement('div')
        heroCardContainer.classList = "hero-card-container"
        heroCardContainer.innerHTML = 
            `
            <h3>Heroes:</h3>
            <div class="hero-section"></div>
            `
        content.append(heroCardContainer)

        heroCardGenerator(playerCount)
        resetPage()

}

//hero html generator
//pass in player amount
const heroCardGenerator = (playerCount) => {
    const heroData = randomize();
    
    let count = playerToNumber(playerCount)
    //parsing through each hero object
    for (let i = 0; i < (count); i++) {
        //grab new element
        const hero = heroData[i]
        console.log(hero)
        const heroSection = document.querySelector(".hero-section")
        //create card element to append
        const card = document.createElement('div');
        //console.log(hero)
        //add card class to each card
        card.classList = 'card';
        //add name attribute, assign name from hero object
        card.setAttribute('name', hero.name)
        card.innerText = hero.name
        //append card
        heroSection.appendChild(card);
    }
}

//translate player count to card number
const playerToNumber = (playerCount) => {
    if (playerCount === '1') {
        return 3
    } else {
        return 5
    }
}

const resetPage = () => {
    const reset = document.createElement('div')
    reset.classList = 'reset'
    reset.innerHTML = `
        <button id='reset-button'>Reset</button>
    `
    content.appendChild(reset)
    const resetButton = document.getElementById('reset-button')
    resetButton.addEventListener('click', (e) => {
        console.log(e.target.parentElement.parentElement)
        const heroCardContainer = document.querySelector(".hero-card-container")
        heroCardContainer.remove()
        reset.remove()
        // document.removeChild(e.target.parentElement.parentElement)
    })
}


startButton.addEventListener('click', (e) => {
    clickCounter++;
    let value = playerAmt.options[playerAmt.selectedIndex].text;
    console.log(e.currentTarget.parentElement)
    cardHolderGenerator(value)
    // heroCardGenerator()
})

