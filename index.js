// declare default variables
let flowerCount = 0;
let clickPower = 1;
let clickPowerPriceAmount = 5;
let clickPowerLevelNumber = 1;

// declare DOM variables
let flowerCounter = document.getElementById('flower-counter');
let flowerClicker = document.getElementById('flower-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

let refreshFlowerCount = function() {
    flowerCounter.innerHTML = flowerCount;
}

refreshFlowerCount();

// everytime a user clicks the button, number of flowers increases.
flowerClicker.addEventListener("click", function() {
    flowerCount = flowerCount + clickPower;
    refreshFlowerCount();
})

// click power listener
buyClickPower.addEventListener("click", function() {
    if (flowerCount >= clickPowerPriceAmount) {
        console.log("Item successfully bought.");

        // subtract flowers from the price of the item
        flowerCount -= clickPowerPriceAmount;
        refreshFlowerCount();

        // upgrade power level
        clickPowerLevelNumber++;

        // update click price
        clickPowerPriceAmount = Math.ceil(clickPowerPriceAmount * 1.5);

        //update click power
        clickPower++;

        //refresh shop item
        refreshPowerClick();
    } else {
        console.log("You don't have enough flowers!");
    }
})


let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}