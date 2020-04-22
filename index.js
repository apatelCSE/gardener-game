// 4/22: added game loop

// declare default variables
let flowerCount = 0;
let clickPower = 1;

// declare DOM variables
let flowerCounter = document.getElementById('flower-counter');
let flowerClicker = document.getElementById('flower-clicker');

let refreshFlowerCount = function() {
    flowerCounter.innerHTML = flowerCount;
}

refreshFlowerCount();

// everytime a user clicks the button, number of flowers increases.
flowerClicker.addEventListener("click", function() {
    flowerCount = flowerCount + clickPower;
    refreshFlowerCount();
})

/********************************

          SHED

********************************/

// set default values
let clickPowerPriceAmount = 5;
let clickPowerLevelNumber = 1;

// declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

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

/********************************

          GNOMES

********************************/

// set default values
let gnomePower = 50;
let gnomePriceAmount = 500;
let gnomeLevelNumber = 0;
let gnomeAuto = false;

// declare DOM variables
let buyGnome = document.getElementById('buy-gnome');
let gnomePrice = document.getElementById('gnome-price');
let gnomeLevel = document.getElementById('gnome-level');
let gnomeMultiple = document.getElementById('gnome-multiple');

// buy a gnome
buyGnome.addEventListener("click", function() {
    // make sure there are enough flowers, subtract flowers from price
    if (flowerCount >= gnomePriceAmount) {
        // subtract cookies from price of item
        flowerCount -= gnomePriceAmount;
        refreshFlowerCount();

        // upgrade power level
        gnomeLevelNumber++;

        // update price
        gnomePriceAmount = Math.ceil(gnomePriceAmount * 1.5);

        // update gnome power
        gnomePower += 10;

        // turn autoGnome on
        autoGnome = true;
        autoGnomeStart();

        // refresh shop item
        refreshGnome();
    }
})


let autoGnomeStart = function() {
    let gnomeInt = window.setInterval(function () {
        flowerCount += gnomePower;
        refreshFlowerCount();
    }, 1000);
}


let refreshGnome = function() {
    gnomeLevel.innerHTML = gnomeLevelNumber;
    gnomePrice.innerHTML = gnomePriceAmount;
    gnomeMultiple.innerHTML = gnomePower - 10;
}