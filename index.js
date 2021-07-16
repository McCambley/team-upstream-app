const toggleButton = document.querySelector(".input");
const priceBasic = document.querySelector(".card__price_type_basic");
const pricePremium = document.querySelector(".card__price_type_premium");
const buttonBasic = document.querySelector(".card__button_type_basic");
const buttonPremium = document.querySelector(".card__button_type_premium");
const sponsorMessage = document.querySelector(".sponsor__message-text");


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

toggleButton.addEventListener('click', togglePrices);
togglePrices();

buttonBasic.addEventListener('click', () => {
    sponsorMessage.textContent = `Congratulations! You've become a monthly sponsor for this animal! Your animal's name is ${randomName}!`
    buttonBasic.disabled = true;
    buttonPremium.disabled = true;
})

buttonPremium.addEventListener('click', () => {
    sponsorMessage.textContent = `Congratulations! You've become an annual sponsor for this animal! Your animal's name is ${randomName}!`
    buttonBasic.disabled = true;
    buttonPremium.disabled = true;
})

const animalNamesArray = ["Colin", "Jake", "Denise", "Jellybean", "Lady", "Lucinda", "Doc Ock", "Ian", "Stubby", "Violence", "Iceman", "Chris Pratt", "Bridget", "James Cordon"]

let randomName = animalNamesArray[Math.floor(Math.random()*animalNamesArray.length)];