const heroSection = document.querySelector(".heroSection")

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

//hero html generator
const heroGenerator = () => {
    const heroData = randomize();
    heroSection.innerHTML += `
        <ul>
            <li>${heroData[0].name}</li>
            <li>${heroData[1].name}</li>
            <li>${heroData[2].name}</li>
        </ul>
    `
}

heroGenerator()
