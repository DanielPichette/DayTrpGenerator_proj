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
let initialRandomTrip = [];
let finalTripItinerary = [];

let yes = "yes" || "great" || "good" | "fantastic"
let no = "no" || "bad" || "awful" | "terrible"

//ranndom selection tool//
function randomArrayValue(array) {
    let randomValue = Math.floor(Math.random() * array.length);
    return array[randomValue]
}


//variable tools for choosing another random selection
let redoEntireTrip= randomArrayValue(formsOftransportation)+ 
randomArrayValue(ListOfDestinations)+
randomArrayValue(formsOfEntertainment)+
randomArrayValue(foodOptions);

let differentDestination =  randomArrayValue(ListOfDestinations) 

let differentFoodOption = randomArrayValue(foodOptions)

let differentEntertainment = randomArrayValue(formsOfEntertainment)

let differentTransportation = randomArrayValue(formsOftransportation)


//Page Opening
let pagestartup = prompt("would you like a randomly generated day trip?");

switch(pagestartup){
    case yes:
    console.log("GREAT! here is what your trip looks like so far.")
    initialRandomTrip.splice(0,1,(randomArrayValue(formsOftransportation)))
    initialRandomTrip.splice(1,1,(randomArrayValue(ListOfDestinations)))
    initialRandomTrip.splice(2,1,(randomArrayValue(formsOfEntertainment)))
    initialRandomTrip.splice(3,1,(randomArrayValue(foodOptions)))
    console.log(initialRandomTrip);
    break;
}

let initialReaction = prompt("how does that trip look so far? good?");

switch(initialReaction){
    case yes :
        console.log("fantastic! here is the final trip itinerary! Have a geat time! :D")
        console.log(initialRandomTrip)
        break;
    case no :
        console.log("oh no! lets go over the trip and decide what we want to change.");
        //Request to change Trip
        let letsChangeTheTransportation = prompt("do you want to change the transportation")
        console.log("do you want to change the mode of Transportation?")
            switch (letsChangeTheTransportation) {
                case (letsChangeTheTransportation === yes) :
                finalTripItinerary.splice(0,1,(randomArrayValue(formsOftransportation)))
                break;
                case "no" :
                console.log("Great!well keep that mode of transportion")
                finalTripItinerary.splice(0,1,(initialRandomTrip[0]))
                break;
                let letsChangeTheTransportation = prompt("do you want to change the transportation")
                console.log("do you want to change the mode of Transportation?")
                    switch (letsChangeTheTransportation) {
                        case (letsChangeTheTransportation === yes) :
                        finalTripItinerary.splice(0,1,(randomArrayValue(formsOftransportation)))
                        break;
                        case "no" :
                        console.log("Great!well keep that mode of transportion")
                        finalTripItinerary.splice(0,1,(initialRandomTrip[0]))
                        break;
    }

    console.log(" here is your final trip itinerary")
    console.log(finalTripItinerary)
    break;
}

