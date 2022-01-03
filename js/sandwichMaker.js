//Kick off our IIFE object here... START:
var SandwichMaker = (function() {
    var totalPrice = 0;     // Private variable to store the sandwich PRICE

    // Return the public interface that other code can interact with
    return {
        addTopping: function(toppingPrice) {
            totalPrice += toppingPrice;
            sandwichEl.innerHTML = totalPrice;
            console.log("Currently $",totalPrice);
        }
    };
})();
///////////////////////LOOSE AUGMENTATION///////////////////////
//////  Alternatively we could open and close each IIFE with:
//////  var SandwichMaker = (function(maker) {
//////    STUFF
//////  })(SandwichMaker || {});



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<1 IIFE SandwichMaker is first >>>");
// console.log("<<<2 IIFE bread.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
    // Private variable to store the different bread prices
    var breadPrices= {"Rhye":     2.00,
        "Wheat":    2.75,
        "White":    1.75,
        "JalapenoCheddar":    2.50};

    // Augment the original object with another method
    maker.addBreadPrices = function(thisBread) {
        return breadPrices[thisBread];
    };

    maker.getBreadPrices = function () {
        return breadPrices
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<2 IIFE SandwichMaker is second >>>");
// console.log("<<<3 IIFE meat.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
    // Private variable to store the different meat prices
    var meatPrices= {"Turkey":    2.00,
        "Ham":      2.75,
        "Tuna":     1.75,
        "Bologna":  0.50};

    // Augment the original object with another method
    maker.addMeatPrices = function(thisMeat) {
        return meatPrices[thisMeat];
    };

    maker.getMeatPrices = function () {
        return meatPrices
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<3 IIFE SandwichMaker is third >>>");
// console.log("<<<4 IIFE cheese.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
    // Private variable to store the different cheese prices
    var cheesePrices= {"American":  4.00,
        "Colby":      1.75,
        "Jack":       2.75,
        "Cheddar":    1.50};

    // Augment the original object with another method
    maker.addCheesePrices = function(thisCheese) {
        return cheesePrices[thisCheese];
    };

    maker.getCheesePrices = function () {
        return cheesePrices
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<4 IIFE SandwichMaker is fourth >>>");
// console.log("<<<5 IIFE condiments.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
    // Private variable to store the different condiment prices
    var condimentPrices= {"Ketchup":        1.00,
        "Mayo":           1.75,
        "Mustard":        1.75,
        "SpicyMustard":  1.50};

    // Augment the original object with another method
    maker.addCondimentPrices = function(thisCondiment) {
        return condimentPrices[thisCondiment];
    };

    maker.getCondimentPrices = function () {
        return condimentPrices
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<5 IIFE SandwichMaker is fifth >>>");
// console.log("<<<6 IIFE veggies.js loaded >>>");
// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {
    // Private variable to store the different veggie prices
    var veggiePrices= {"Lettuce":    0.50,
        "Tomato":    1.00,
        "Pickle":    0.25,
        "Sprouts":   4.50};

    // Augment the original object with another method
    maker.addVeggiePrices = function(thisVeggie) {
        return veggiePrices[thisVeggie];
    };

    maker.getVeggiePrices = function () {
        return veggiePrices
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker);



///////////////////////NEW JAVASCRIPT FILE///////////////////////
console.log("<<<6 IIFE SandwichMaker is sixth >>>");
// console.log("<<<7 IIFE DOMhandler.js loaded >>>");

var finalSandwichPrice = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

// Get references to the <select> elements that have all the varied options
var breadChooser = document.getElementById("breads"),
    meatChooser = document.getElementById("meats"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    veggieChooser = document.getElementById("veggies"),
    sandwichEl = document.getElementById("finalSandwichEl"),  //Our Final Sandwich destination on the DOM
    totalEl = document.getElementById("totalEl");

// A <select> element broadcasts a change event (I went with "click"), so you listen for it
// and get the value of the topping from your augmented IIFE
breadChooser.addEventListener("click", function(event) {
    selectedTopping = event.target.id;                      //Get the value chosen from the DOM
    selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"

    if (selectedTopping[0] === "btn"){
        let breads = SandwichMaker.getBreadPrices();          //Returns the object representing our breads and prices
        let breadKey = selectedTopping[1];                    //Represents the bread chosen
        finalSandwichPrice += breads[breadKey];               // Add the topping to the SandwichMaker to increase the total price
        sandwichEl.innerHTML += `+$${breads[breadKey]} for ${selectedTopping[1]}<br>`; //Output to DOM
        totalEl.innerHTML = `$${finalSandwichPrice} current total`;

        console.log("We selected: ",selectedTopping[1], "at $",breads[breadKey]);
        console.log("finalSandwichPrice",finalSandwichPrice );
    }
});

meatChooser.addEventListener("click", function(event) {
    selectedTopping = event.target.id;
    selectedTopping = selectedTopping.split("--");

    if (selectedTopping[0] === "btn"){
        let meats = SandwichMaker.getMeatPrices();
        let meatKey = selectedTopping[1];
        finalSandwichPrice += meats[meatKey];
        sandwichEl.innerHTML += `+$${meats[meatKey]} for ${selectedTopping[1]}<br>`;
        totalEl.innerHTML = `$${finalSandwichPrice} current total`;

        console.log("We selected: ",selectedTopping[1], "at $",meats[meatKey]);
        console.log("finalSandwichPrice",finalSandwichPrice );
    }
});

cheeseChooser.addEventListener("click", function(event) {
    selectedTopping = event.target.id;
    selectedTopping = selectedTopping.split("--");

    if (selectedTopping[0] === "btn"){
        let cheeses = SandwichMaker.getCheesePrices();
        let cheeseKey = selectedTopping[1];
        finalSandwichPrice += cheeses[cheeseKey];
        sandwichEl.innerHTML += `+$${cheeses[cheeseKey]} for ${selectedTopping[1]}<br>`;
        totalEl.innerHTML = `$${finalSandwichPrice} current total`;

        console.log("We selected: ",selectedTopping[1], "at $",cheeses[cheeseKey]);
        console.log("finalSandwichPrice",finalSandwichPrice );
    }
});

condimentChooser.addEventListener("click", function(event) {
    selectedTopping = event.target.id;
    selectedTopping = selectedTopping.split("--");

    if (selectedTopping[0] === "btn"){
        let condiments = SandwichMaker.getCondimentPrices();
        let condimentKey = selectedTopping[1];
        finalSandwichPrice += condiments[condimentKey];
        sandwichEl.innerHTML += `+$${condiments[condimentKey]} for ${selectedTopping[1]}<br>`;
        totalEl.innerHTML = `$${finalSandwichPrice} current total`;

        console.log("We selected: ",selectedTopping[1], "at $",condiments[condimentKey]);
        console.log("finalSandwichPrice",finalSandwichPrice );
    }
});

veggieChooser.addEventListener("click", function(event) {
    selectedTopping = event.target.id;
    selectedTopping = selectedTopping.split("--");

    if (selectedTopping[0] === "btn"){
        let veggies = SandwichMaker.getVeggiePrices();
        let veggieKey = selectedTopping[1];
        finalSandwichPrice += veggies[veggieKey];
        sandwichEl.innerHTML += `+$${veggies[veggieKey]} for ${selectedTopping[1]}<br>`;
        totalEl.innerHTML = `$${finalSandwichPrice} current total`;

        console.log("We selected: ",selectedTopping[1], "at $",veggies[veggieKey]);
        console.log("finalSandwichPrice",finalSandwichPrice );
    }
});

console.log("<<<7 is last... Not IIFE tho >>>");
