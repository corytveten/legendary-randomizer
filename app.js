const content = document.getElementById("content")
const heroSection = document.querySelector(".hero-section")
const startButton = document.getElementById("start-button")
const playerAmt = document.getElementById("player-amt");
// let clickCounter = 0

const getHeroes = () => [
    { name: "Captain America", id: 1, set: "core"},
    { name: "Black Widow", id: 2, set: "core"},
    { name: "Hulk", id: 3, set: "core"},
    { name: "Spider-Man", id: 4, set: "core"},
    { name: "Wolverine", id: 5, set: "core"},
    { name: "Cyclops", id: 6, set: "core"},
    { name: "Nick Fury", id: 7, set: "core"},
    { name: "Deadpool", id: 8, set: "core"},
    { name: "Emma Frost", id: 9, set: "core"},
    { name: "Gambit", id: 10, set: "core"},
    { name: "Hawkeye", id: 11, set: "core"},
    { name: "Rogue", id: 12, set: "core"},
    { name: "Storm", id: 13, set: "core"},
    { name: "Thor", id: 14, set: "core"},
    { name: "Iron Man", id: 15, set: "core"},
]

const getMasterminds = () => [
    { name: "Magneto", id: 1, set: "core"},
    { name: "Dr. Doom", id: 2, set: "core"},
    { name: "Red Skull", id: 3, set: "core"},
    { name: "Loki", id: 4, set: "core"},
]

const getVillains = () => [
    { name: "Spider-foes", id: 1, set: "core" },
    { name: "Brotherhood", id: 2, set: "core" },
    { name: "Enemies of Asgard", id: 3, set: "core" },
    { name: "HYDRA", id: 4, set: "core" },
    { name: "Masters of Evil", id: 5, set: "core" },
    { name: "Radiation", id: 6, set: "core" },
    { name: "Skrulls", id: 7, set: "core" },
]

const getHenchmen = () => [
    { name: "Doombot Legion", id: 1, set: "core"},
    { name: "Hand Ninjas", id: 2, set: "core"},
    { name: "Savage Land Mutates", id: 3, set: "core"},
    { name: "Sentinel", id: 4, set: "core"},
]

// const randomizeHeroes = () => {
//     const heroData = getHeroes()
//     heroData.sort(() => Math.random() - 0.5);
//     return heroData;
// }

const randomizeMasterminds = () => {
    const mastermindData = getMasterminds()
    mastermindData.sort(() => Math.random() - 0.5);
    return mastermindData[0];
}

const randomize = (cardTypeFunc) => {
    const randomizedData = cardTypeFunc 
    console.log(randomizedData)
    randomizedData.sort(() => Math.random() - 0.5);
    return randomizedData;
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
        // resetPage()

}

//hero html generator
//pass in player amount
const heroCardGenerator = (playerCount) => {
    // const heroData = randomizeHeroes();
    const heroData = randomize(getHeroes())
    
    let count = playerToNumber(playerCount)
    //parsing through each hero object
    for (let i = 0; i < (count); i++) {
        //grab new element
        const hero = heroData[i]
        console.log(hero)
        const heroSection = document.querySelector(".hero-section")
        //create card element to append
        const card = document.createElement('div');
        //add card class to each card
        card.classList = 'card';
        //add name attribute, assign name from hero object
        card.setAttribute('name', hero.name)
        card.innerText = hero.name
        //append card
        heroSection.appendChild(card);
    }
    // const heroSection = document.querySelector(".hero-section")
    const heroCardContainer = document.querySelector(".hero-card-container")
    const masterMind = createMastermindSection()
    const villains = createVillainSection(playerCount)
    // heroSection.append(masterMind)
    heroCardContainer.append(masterMind)
    heroCardContainer.append(villains)
    villainCardGenerator(playerCount)
}

const createMastermindSection = () => {
    const mastermindData = randomizeMasterminds();
    // console.log(mastermindData)
    const mastermindSection = document.createElement('div');
    // mastermindSection.classList = 'card';
    // mastermindSection.setAttribute('name', mastermindData.name)
    // mastermindSection.innerText = mastermindData.name;
    mastermindSection.innerHTML = `
        <h3>Mastermind:</h3>
        <div class='mastermind-section'>
        <div class='card' name='${mastermindData.name}'>${mastermindData.name}</div>
        </div>
    `
    return mastermindSection
}

const createVillainSection = () => {

    const villainSection = document.createElement('div');

    villainSection.innerHTML = `
        <h3>Villains:</h3>
        <div class='villain-section'></div>
    `
    return villainSection
}

const villainCardGenerator = (playerCount) => {
    const villainData = randomize(getVillains());
    let count = playerCountToVillain(playerCount);

    for (let i=0; i < count; i++) {
        const villain = villainData[i];
        console.log(villain)

        const villainSection = document.querySelector('.villain-section')
        const card = document.createElement('div')

        card.classList = 'card'
        card.setAttribute('name', villain.name)
        card.innerText = villain.name

        villainSection.appendChild(card)
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

const playerCountToVillain = (playerCount) => {
    if (playerCount === '1') {
        return 1
    } else if (playerCount === '2') {
        return 2
    } else if (playerCount === '5') {
        return 4
    } else {
        return 3
    }
}

// const resetPage = () => {
//     const reset = document.createElement('div')
//     reset.classList = 'reset'
//     reset.innerHTML = `
//         <button id='reset-button'>Reset</button>
//     `
//     content.appendChild(reset)
//     const resetButton = document.getElementById('reset-button')
//     resetButton.addEventListener('click', (e) => {
//         console.log(e.target.parentElement.parentElement)
//         const heroCardContainer = document.querySelector(".hero-card-container")
//         heroCardContainer.remove()
//         reset.remove()
//         // document.removeChild(e.target.parentElement.parentElement)
//     })
// }


startButton.addEventListener('click', (e) => {
    // clickCounter++;
    let value = playerAmt.options[playerAmt.selectedIndex].text;
    const heroCardContainer = document.querySelector(".hero-card-container")
    if (heroCardContainer) {
        heroCardContainer.remove();

    }
    cardHolderGenerator(value)
    // heroCardGenerator()
})

