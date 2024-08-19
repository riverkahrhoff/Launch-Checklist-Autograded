// Write your JavaScript code here!

//const {formSubmission} = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    })

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function(result) {
            listedPlanets = result;
            console.log(listedPlanets);
            return listedPlanets;
        })
        .then(function() {
            console.log(listedPlanets);
            let selectedPlanet = pickPlanet(listedPlanets);
            addDestinationInfo(
                document, 
                selectedPlanet.name, 
                selectedPlanet.diameter, 
                selectedPlanet.star, 
                selectedPlanet.distance, 
                selectedPlanet.moons, 
                selectedPlanet.image
            );
        })
   });