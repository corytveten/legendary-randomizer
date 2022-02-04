const content = document.getElementById("content")
const heroSection = document.querySelector(".hero-section")
const startButton = document.getElementById("start-button")

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
const cardHolderGenerator = () => {
    console.log('cardholdergenerator')
    content.innerHTML= 
    `
    <h3>Heroes:</h3>
    <div class="hero-section"></div>
    `
    heroCardGenerator()
}
//hero html generator
const heroCardGenerator = () => {
    const heroData = randomize();
    heroData.forEach(hero => {
        const card = document.createElement('div');
        console.log(hero)
        card.classList = 'card';

        card.setAttribute('name', hero.name)
        card.innerText = hero.name
        heroSection.appendChild(card);
    })
}

startButton.addEventListener('click', (e) => {
    console.log('click')
    cardHolderGenerator()
    // heroCardGenerator()
})

