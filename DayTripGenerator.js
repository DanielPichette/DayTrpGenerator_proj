"use strict"
/*
//Requirements
(5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each function should do just one thing!
(5 points): As a user, I want a destination to be randomly selected for my day trip.
(5 points): As a developer, I want to make at least three commits.
(5 points): As a user, I want a restaurant to be randomly selected for my day trip.
(5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
(5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.

(15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of transportation, and/or form of entertainment if I don’t like one or more of those things.
(10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the random selections.
(10 points): As a user, I want to display my completed trip in the console.
*/


//Variables
let ListOfDestinations = ["Great Wall of China","Cudahay Wisconsin","Machu Piccu", "Antarctica","Ibiza"];
let formsOftransportation = ["Private Jet","Personal Driver", "walking","bus", "jetpack"];
let formsOfEntertainment = ["concert", "Funeral", "Cooking Class", "Clubbing", "Street Fair", "sight seeing"];
let foodOptions = ["5 Star Gormet Resturant", "Authentic Street Food", "Vending Machine snack", "Sleep", "Mcdonalds"]
let finalTripItinerary = [];

//ranndom selection tool//

function randomArrayValue(array) {
    let randomValue = Math.floor(Math.random() * array.length);
    return array[randomValue]
}

//choosing another random selection
function redoEntireTrip(){
    console.log(randomArrayValue(formsOftransportation))
    console.log(randomArrayValue(ListOfDestinations))
    console.log(randomArrayValue(formsOfEntertainment))
    console.log(randomArrayValue(foodOptions))

}
function differentDestination(){
    console.log(randomArrayValue(ListOfDestinations))
}
function differentFoodOption(){
    console.log(randomArrayValue(foodOptions))
}

function differentEntertainment (){
    console.log(randomArrayValue(formsOfEntertainment))
}

function differentTransportation (){
    console.log(randomArrayValue(formsOftransportation))
}



//Reselecting a selection



//Page Opening
let pagestartup = prompt("would you like a randomly generated day trip?");

if (pagestartup === "yes"){
    console.log("GREAT! here is what your trip looks like so far.")
    console.log(randomArrayValue(formsOftransportation)) + console.log(randomArrayValue(ListOfDestinations)) + console.log(randomArrayValue(formsOfEntertainment)) + console.log(randomArrayValue(foodOptions));
}

let initialReaction = prompt("how does that trip look so far? good?");

if(initialReaction === "yes" || "great" || "good!"){
    console.log("fantastic! here is the final trip itinerary! Have a geat time! :D");
}
else if(initialReaction === "no" || "bad"){
    console.log(initialReaction)
    console.log("oh no! what would you like to change about the trip?");
    console.log("The Transportation?");
    console.log("The location?");
    console.log("The Activitie?");
    console.log("The Food?");

}
