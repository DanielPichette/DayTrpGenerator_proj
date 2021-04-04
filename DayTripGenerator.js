"use strict"
//Variables
let ListOfDestinations = [" The Great Wall of China.","Cudahay Wisconsin.","Machu Piccu.", " a graveyard.","Ibiza"];
let formsOftransportation = [" Start the day taking a Private Jet to "," Start the day getting your Personal Driver to take you to", "Begin your day by walking to","wake up and take the bus to ", "Begin the day jetpacking to "];
let formsOfEntertainment = [" You spend the day at a concert Rocking out with some randos you just met.", "unfortunatly Your friends pet fish died and your headed to a funeral. your gonna have to spend the day helping them mourn.", " Your Headed to an all day cooking Class, led by non other than Gordan Ramsy himself!", "You spend the day Clubbing; making sure to hit every bar and dance floor!", "You spend the day mingling with the locals at a giant Street festival!", " You spend the Day sight seeing; making sure to hit up every monument, museam, and gift shop!"];
let foodOptions = ["To End your long day; lucky you gets the royal treatment at a 5 Star Gormet Resturant.", " You finish off your day grabbing some Authentic Street Food to enjoy durning night walk around the town", "OOF!You forget to eat amongst all the excitment of the day! You end the by grabbing a quick Vending Machine snack from the Hotel", "Looks like you over indulged a bit and ran out of money! looks like youll be having Sleep for dinner.", "You cap the night off with good old reliable Mcdonalds. mmm mm mm. im loivin it"]
let initialRandomTrip = [];
let finalTripItinerary = [];

let yes = "yes"
let no = "no"

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
let pagestartup = prompt("Would you like a randomly generated day trip?");

switch(pagestartup){
    case yes:
        console.log("GREAT! Here is what your trip looks like so far.")
        initialRandomTrip.splice(0,1,(randomArrayValue(formsOftransportation)))
        initialRandomTrip.splice(1,1,(randomArrayValue(ListOfDestinations)))
        initialRandomTrip.splice(2,1,(randomArrayValue(formsOfEntertainment)))
        initialRandomTrip.splice(3,1,(randomArrayValue(foodOptions)))
        console.log(initialRandomTrip);
        let initialReaction = prompt("How does that trip look so far? are you content with the selection?");
        switch(initialReaction){
            case yes :
                console.log("Fantastic! Your trip is booked! here is the final trip itinerary! Have a geat time! :D")
                console.log(initialRandomTrip)
                break;
            case no :
                console.log("oh no! Lets go over the trip and decide what we want to change.");
                //Request to change Trip
                let letsChangeTheTransportation = prompt("Do you want to try agan for another random mode of Transportation?");
                console.log("Do you want to try agan for another random mode of Transportation?");
                switch (letsChangeTheTransportation) {
                    case yes :
                        console.log("Can do! We'll Give you another random mode of tansportation.")
                        finalTripItinerary.splice(0,1,(randomArrayValue(formsOftransportation)))
                        break;
                    case no :
                        console.log("Great! we'll keep that mode of transportion")
                        finalTripItinerary.splice(0,1,(initialRandomTrip[0]))
                        break;
                        }
                let letsChangeTheLocation = prompt("Do you want to try agan for another random Location?");
                    console.log("Do you want to try agan for another random location?");
                switch (letsChangeTheLocation) {
                    case yes :
                        console.log("We'll Give you another random destination.")
                        finalTripItinerary.splice(1,1,(randomArrayValue(ListOfDestinations)))
                        break;
                    case no :
                        console.log("Great!well keep the destination")
                        finalTripItinerary.splice(1,1,(ListOfDestinations[1]))
                        break;
                        } 
                let letsChangeActivity = prompt("Do you want to try agan for another random Activity?");
                     console.log("Do you want to try agan for another random Activity?");
                switch (letsChangeActivity) {
                    case yes :
                        console.log("We'll Give you another random activity.");
                        finalTripItinerary.splice(2,1,(randomArrayValue(formsOfEntertainment)))
                        break;
                    case no :
                    console.log("Great!well keep the Activity")
                    finalTripItinerary.splice(2,1,(initialRandomTrip[2]))
                    break;
                    } 
                let letsChangeTheFoodOption = prompt("Do you want to try agan for another random Food Option?");
                console.log("Do you want to try agan for another random FoodOption?");
                switch (letsChangeTheFoodOption) {
                    case yes :
                        finalTripItinerary.splice(3,1,(randomArrayValue(foodOptions)))
                        console.log("Your new and improved trip is");
                        console.log(finalTripItinerary)
                        break;
                    case no :
                        console.log("Great!well keep the Food Option")
                        finalTripItinerary.splice(3,1,(initialRandomTrip[3]))
                        console.log("Your new and improved trip is");
                        console.log(finalTripItinerary)
                        break;
                        }
                let confirmTrip = prompt("Are you happy with the selection and ready to book your trip?")
                console.log("Are you happy with the new selection? Ready to book your trip?")
                switch (confirmTrip){  
                    case yes:
                        console.log(" Fantastic! Your day trip is booked! here is your final trip itinerary")
                        //console.log("Your original trip was");
                        //console.log(initialRandomTrip);
                        console.log("Your new and improved trip is");
                        console.log(finalTripItinerary)
                        console.log("Have a great time! :D")
                        break;
                    case no:
                        let restartPage = prompt("Sorry to hear that you're unsatisfied with the trip option. Would you like to restart the process to get an entirly new trip?");
                        console.log("Sorry to hear that you're unsatisfied with the trip option. Would you like to restart the process to get an entirly new trip?");
                        switch (restartPage) {
                            case yes:
                                location.reload()
                                break;
                            case no :
                                console.log("Sorry We couldnt Help. Be sure to visit again if you ever want to try agan. Have a great day!")
                                break;
                            } 
                    break;
                } 
            break;
        }
    break;
    case no:
        console.log("Come any time you want to generate a random trip! have a great day!");
    }