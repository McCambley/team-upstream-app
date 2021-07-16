const toggleButton = document.querySelector(".input");
const priceBasic = document.querySelector(".card__price_type_basic");
const pricePremium = document.querySelector(".card__price_type_premium");
const buttonBasic = document.querySelector(".card__button_type_basic");
const buttonPremium = document.querySelector(".card__button_type_premium");
const sponsorMessage = document.querySelector(".sponsor__message-text");
const popupCloseButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup")
const popupImage = document.querySelector(".popup__image");
const popupAbout = document.querySelector(".popup__description_type_about");
const popupHelp = document.querySelector(".popup__description_type_help");
const animalCard = document.querySelectorAll(".animal");
const rhinoCard = document.getElementById("rhino");
const tigerCard = document.getElementById("tiger");
const elephantCard = document.getElementById("elephant");
const orangutanCard = document.getElementById("orangutan");
const turtleCard = document.getElementById("turtle");
const leopardCard = document.getElementById("leopard");
const animalNamesArray = ["Colin", "Jake", "Denise", "Jellybean", "Spicy", "Marbles", "Doc Ock", "Ian", "Stubby", "Violence", "Britney", "Chris Pratt", "Bridget Jones", "James Cordon"];


const rhino = {
    image: "./images/javan-rhinoceros.jpeg",
    about: "Once the most widespread of Asian rhinos, Javan rhinos are now listed as critically endangered. With only one known population in the wild, it is one of the world's rarest large mammals. There are between 58 and 68 in the wild, with none living in captivity. The rhinos are often poached for their horns, although loss of habitat, especially resulting from the Vietnam War, has also contributed to their decline.The only population of Javan rhinos can be found in Ujung Kulon National Park on the south-western tip of Java, Indonesia. The only other population, in Vietnam, was wiped out in 2010.",
    help: "Across Africa, rhinos are fighting for survival. Endangered Rhino Conservation (ERC) was established to support private rhino owners and NGOs on the front line.  ERC is committed to making a genuine contribution to combat the war on rhinos and increase the population.  We are laser focused on ensuring the protection and survival of rhinos under the threat of extinction.",
};
const tiger = {
    image: "./images/tiger.jpeg",
    about: "At the beginning of the 20th century, there were 100,000 tigers in the world. Today, this number is estimated to have dwindled to around 3,900 in the wild. Tigers need large areas of habitat, but living in some of the most densely populated places on Earth has placed them in locations that have caused significant conflict with humans. Habitat destruction and fragmentation has had the most significant effects on the tigers' habitats, and poaching is one of their biggest threats. India is the best country to see tigers in the wild, but you can also spot tigers in Bangladesh, China, Sumatra, Siberia and Nepal.",
    help: "We are working globally to provide a unified, focused and co-ordinated programme for conservation initiatives in the wild to stop tiger poaching, put an end to the trade in tiger products, and ensure the survival of the species. Born Free’s initiatives work in central India and Thailand to tackle the poaching crisis, safeguard tiger habitats, and find ways for communities and wildlife to live together peacefully in the remaining strongholds for wild tigers. With your generous support we can increase our efforts, expand into new areas and work more widely to counter the causes of this crisis across Asia."
};
const elephant = {
    image: "./images/asian-elephant.jpeg",
    about: "Asian elephants have been considered an endangered species since 1986, as their population has decreased by at least 50% over the last 75 years or so. There are fewer than 50,000 remaining in the wild. Fragmentation, deforestation and an increasing human population are destroying the elephants' habitat and decreasing the space available for them to live in. The Sri Lankan, Indian and Sumatran Asian elephants can of course be found in their countries of name and other mainland Asian countries.However, the best opportunity to see Asian elephants is at The Gathering, a natural assembly of up to 300 elephants coming to the shores of the Minneriya Tank in Sri Lanka's Minneriya National Park during August to bathe and drink. It is the largest congregation of Asian elephants in the world.",
    help: "Save the Elephants (STE) works to secure a future for elephants. Specializing in elephant research, they provide scientific insights into elephant behavior, intelligence, and long-distance movements and apply them to the challenges of elephant survival. High tech tracking and other tools help STE work towards a harmonious coexistence between humans and elephants. "
};
const orangutan = {
    image: "./images/orang-utan.jpeg",
    about: "Once widespread, the orangutan has been considered critically endangered since 2000, and is one of the world's most endangered primates. A century ago, more than 230,000 orangutans lived in our world, but their numbers have now dropped by around half. Logging, forest fires, fragmentation, and especially the removal of tropical forests for palm oil, all critically threaten the orangutan's survival. Hunting and illegal pet trade have also dwindled numbers. Over 104,000 Bornean orangutans still live in the wild, and can be found in both Malaysian and Indonesian Borneo. There are just 14,000 Sumatran orangutans left, naturally living on the Indonesian island of Sumatra. The rarest of all is the newly-discovered Tapanuli species, with just 800 left in the wild. If you're lucky, you'll also be able to spot Tapanuli orangutans in the Batang Toru eco-system of Sumatra's north. As of late 2019, their habitat is under serious threat by the build of a controversial new hydropower plant, near the Batang Toru River.",
    help: "Save the Orangutan has entered into a strategic partnership with Borneo Orangutan Survival Foundation (BOSF), the largest player in Indonesia when it comes to orangutan conservation. Together we focus broad efforts to protect the critically endangered Bornean orangutan population. We help the many displaced and orphaned orangutans, and we protect the remaining wild orangutan populations and their natural habitats."
};
const turtle = {
    image: "./images/sea-turtle.jpeg",
    about: "In between 26,000 and 43,000 female sea turtles nest annually; a dramatic decline from the estimated 115,000 in 1980. Young turtles are incredibly vulnerable and sadly, very few make it to adulthood. Birds and small mammals often dig up turtle nests in order to eat the eggs. Once they've hatched, birds and crustaceans pick them off before they can make it to the sea, and fish, squid and octopuses often prey on them if they do manage to make it into the water. The prime nesting spots for the turtles are in Suriname, French Guiana, Grand Anse beach in Saint Lucia, Turtle Beach in Tobago, Guyana's Shell Beach and Gabon. The Mayumba National Park beaches in Gabon host the largest nesting population on the African continent. April is the time to visit, when around 30,000 turtles descend on the park's beaches to lay their eggs.",
    help: "WWF works with local communities to reduce turtle consumption of leatherback turtles and eggs. Our efforts help create awareness of the threats leatherbacks face and communicate the importance of protecting them. We also train and equip local rangers to protect turtles from poaching and patrol nesting beaches. In the Coral Triangle, we support community efforts to protect leatherback nest sites and launch ecotourism businesses."
};
const leopard = {
    image: "./images/snow-leopard.jpeg",
    about: "The wild snow leopard population is estimated to be between 4,080 to 6,590. They're found in 12 countries in Central Asia: China, Bhutan, Nepal, India, Pakistan, Afghanistan, Tajikistan, Uzbekistan, Kyrgyzstan, Kazakhstan, Russia, and Mongolia. The species is threatened by herders who kill snow leopards to prevent them from preying on their livestock. Poachers, and a significant decrease in the leopards' wild prey, are also an issue. Snow leopards can be spotted in Mongolia's Gobi Gurvansaikhan National Park, the Himalayan mountains of Bhutan's Jigme Dorji National Park and Phoksundo Lake between Upper and Lower Dolpo in western Nepal's Shey-Phoksundo National Park. The leopards also descend from the high valleys of Ladakh in February, in India's Hemis National Park, in search of prey.",
    help: "Snow Leopard Conservancy (SLC) engages local people and builds on their traditional beliefs to create harmony between people and the endangered snow leopard. Its creative programs serve as a model for community-based conservation and bolster the snow leopard’s chances for survival."
};



let isMonthly = true;

function togglePrices() {
    if (isMonthly) {
        priceBasic.textContent = "5.99";
        pricePremium.textContent = "19.99";
        isMonthly = !isMonthly;
    } else {
        priceBasic.textContent = "59.99";
        pricePremium.textContent = "199.99";
        isMonthly = !isMonthly;
    }
}


function openPopup() {
    popup.classList.add('popup_active');
    document.addEventListener("keyup", handleEscClose);
}

function closePopup() {
    popup.classList.remove('popup_active')
    document.removeEventListener("keyup", handleEscClose);
}

function handleEscClose(evt) {
    if (evt.key === "Escape") {
        closePopup();
    };
}


function resetPopup() {
    sponsorMessage.textContent = "";
    buttonBasic.disabled = false;
    buttonPremium.disabled = false;
}

animalCard.forEach(animalCard => {
    animalCard.addEventListener('click', () => {
        openPopup();
    });
    animalCard.addEventListener('click', () => {
        if (animalCard === rhinoCard) {
            popupImage.src = rhino.image;
            popupAbout.textContent = rhino.about;
            popupHelp.textContent = rhino.help;
        } else if (animalCard === tigerCard) {
            popupImage.src = tiger.image;
            popupAbout.textContent = tiger.about;
            popupHelp.textContent = tiger.help;
        } else if (animalCard === elephantCard) {
            popupImage.src = elephant.image;
            popupAbout.textContent = elephant.about;
            popupHelp.textContent = elephant.help;
        } else if (animalCard === orangutanCard) {
            popupImage.src = orangutan.image;
            popupAbout.textContent = orangutan.about;
            popupHelp.textContent = orangutan.help;
        } else if (animalCard === turtleCard) {
            popupImage.src = turtle.image;
            popupAbout.textContent = turtle.about;
            popupHelp.textContent = turtle.help;
        } else if (animalCard === leopardCard) {
            popupImage.src = leopard.image;
            popupAbout.textContent = leopard.about;
            popupHelp.textContent = leopard.help;
        } 
    });
})

toggleButton.addEventListener('click', togglePrices);
togglePrices();


buttonBasic.addEventListener('click', () => {
    let randomName = animalNamesArray[Math.floor(Math.random() * animalNamesArray.length)];
    sponsorMessage.textContent = `Congratulations! You've become a sponsor for this animal! Your animal's name is ${randomName}!`
    buttonBasic.disabled = true;
    buttonPremium.disabled = true;
})

buttonPremium.addEventListener('click', () => {
    let randomName = animalNamesArray[Math.floor(Math.random() * animalNamesArray.length)];
    sponsorMessage.textContent = `Congratulations! You've become a premium sponsor for this animal! Your animal's name is ${randomName}!`
    buttonBasic.disabled = true;
    buttonPremium.disabled = true;
})

popupCloseButton.addEventListener('click', () => {
    closePopup();
    resetPopup();
})

popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_active') || evt.target.classList.contains('popup__close-button')) {
        closePopup();
    }
});