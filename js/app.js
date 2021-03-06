const content = document.getElementById("content")
const heroSection = document.querySelector(".hero-section");
const startButton = document.getElementById("start-button");
const playerAmt = document.getElementById("player-amt");
const collections = document.querySelector(".collections");
// let clickCounter = 0



const randomizeMasterminds = (mmGroup) => {
    const mastermindData = mmGroup;
    mastermindData.sort(() => Math.random() - 0.5);
    return mastermindData[0];
}

const randomizeScheme = () => {
    const schemeData = getScheme();
    schemeData.sort(() => Math.random() - 0.5)
    return schemeData[0];
}

const randomize = (cardTypeFunc) => {
    const randomizedData = cardTypeFunc 
    console.log(randomizedData)
    randomizedData.sort(() => Math.random() - 0.5);
    return randomizedData;
}

//run through hero array and select elements that match selected collection
const pullDataBySelectedCollection = (collectionArr) => {
    console.log(collectionArr)
    const rawHeroData = getHeroes();
    let groupedHeroesByCollection = [];
    collectionArr.forEach(collection => {
        rawHeroData.forEach(heroObj => {
            if (heroObj.set === collection) {
                groupedHeroesByCollection.push(heroObj)
            }
        })
        // groupedHeroesByCollection += filteredHero
    })

    // rawHeroData.forEach((collectionArr))

    console.log(groupedHeroesByCollection)


    return groupedHeroesByCollection
    // return groupedHeroesByCollection
}

const pullMMDataBySelectedCollection = (collectionArr) => {
    console.log(collectionArr)
    const rawMMData = getMasterminds();
    let groupedMMByCollection = [];
    collectionArr.forEach(collection => {
        rawMMData.forEach(mmObj => {
            if (mmObj.set === collection) {
                groupedMMByCollection.push(mmObj)
            }
        })
        // groupedHeroesByCollection += filteredHero
    })

    // rawHeroData.forEach((collectionArr))

    console.log(groupedMMByCollection)


    return groupedMMByCollection
    // return groupedHeroesByCollection
}

//card holder, containing all generated info
//passing in number of players and array of selected collections
const cardHolderGenerator = (playerCount, collectionArr) => {
        const heroCardContainer = document.createElement('div')
        heroCardContainer.classList = "hero-card-container"
        heroCardContainer.innerHTML = 
            `
            <h3>Heroes:</h3>
            <div class="hero-section"></div>
            `
        content.append(heroCardContainer)

        heroCardGenerator(playerCount, collectionArr)
        // resetPage()

}

//hero html generator
//pass in player amount
const heroCardGenerator = (playerCount, collectionArr) => {
    // const heroData = randomizeHeroes();

    if (collectionArr.length === 0) {
        alert("Please select a collection")
    } else {
        console.log(collectionArr)
        const heroGroup = pullDataBySelectedCollection(collectionArr)
        // pullDataBySelectedCollection(collectionArr)
        // const heroData = randomize(getHeroes())
        const heroData = randomize(heroGroup)
        console.log(heroData)
    
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
    const masterMind = createMastermindSection(collectionArr)
    const villains = createVillainSection(playerCount)
    const henchmen = createHenchmenSection(playerCount);
    const bystanders = createBystandersSection(playerCount)
    const scheme = createSchemeSection()
    // heroSection.append(masterMind)
    heroCardContainer.append(masterMind);
    heroCardContainer.append(villains);
    villainCardGenerator(playerCount);
    heroCardContainer.append(henchmen)
    henchmenCardGenerator(playerCount);
    heroCardContainer.append(scheme);
    heroCardContainer.append(bystanders);
}
}

const createMastermindSection = (collectionArr) => {
    const sortedMastermind = pullMMDataBySelectedCollection(collectionArr);
    const mastermindData = randomizeMasterminds(sortedMastermind);
    console.log(mastermindData)
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

const createHenchmenSection = (playerCount) => {

    const henchmenSection = document.createElement('div');

    if (playerCount == 1) {
        henchmenSection.innerHTML = `
        <h3>Three Henchmen Cards:</h3>
        <div class='henchmen-section'></div>
    `
    } else {
        henchmenSection.innerHTML = `
            <h3>Henchmen:</h3>
            <div class='henchmen-section'></div>
        `
    }
    return henchmenSection
}

const henchmenCardGenerator = (playerCount) => {
    const henchmenData = randomize(getHenchmen());
    let count = playerCountToHenchmen(playerCount);

    for (let i=0; i < count; i++) {
        const henchmen = henchmenData[i];
        console.log(henchmen)

        const henchmenSection = document.querySelector('.henchmen-section')
        const card = document.createElement('div')

        card.classList = 'card'
        card.setAttribute('name', henchmen.name)
        card.innerText = henchmen.name

        henchmenSection.appendChild(card)
    }
}

const createSchemeSection = () => {
    const schemeData = randomizeScheme();
    const schemeSection = document.createElement('div');

    schemeSection.innerHTML = `
        <h3>Scheme:</h3>
        <div class='scheme-section'>
        <div class='card' name='${schemeData.name}'>${schemeData.name}</div>
        </div>
    `
    return schemeSection
}

const createBystandersSection = (playerCount) => {
    const bystandersSection = document.createElement('div')
    let count = playerCountToBystanders(playerCount)

    bystandersSection.innerHTML = `
        <h3>Bystanders: ${count}</h3>
    `
    return bystandersSection
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

const playerCountToHenchmen = (playerCount) => {
    if (playerCount < 4) {
        return 1
    } else {
        return 2
    }
}

const playerCountToBystanders = (playerCount) => {
    let bystanderAmt;
    switch(playerCount) {
        case '1':
            bystanderAmt = 1;
            break;
        case '2':
            bystanderAmt = 2;
            break;
        case '5':
            bystanderAmt = 12;
            break;
        default:
            bystanderAmt = 8;
    }
    return bystanderAmt
}


startButton.addEventListener('click', (e) => {
    // variable for number of players
    let value = playerAmt.options[playerAmt.selectedIndex].text;
    // variable for selected collections
    let collectionChoices = document.querySelectorAll('input[name="collection"]:checked');
    let collectionValues = [];
    collectionChoices.forEach((checkbox) => {
        collectionValues.push(checkbox.value)
    });

    const heroCardContainer = document.querySelector(".hero-card-container")
    if (heroCardContainer) {
        heroCardContainer.remove();

    }
    cardHolderGenerator(value, collectionValues)
    // heroCardGenerator()
})

