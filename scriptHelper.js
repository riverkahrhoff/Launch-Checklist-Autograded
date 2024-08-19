// Write your helper functions here!

 require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById('missionTarget').innerHTML = 
    `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {

    if (testInput === "" || testInput === undefined) {
        return "Empty";
    } else if (!isNaN(testInput)) { 
        return "Is a Number";
    } 
        return "Not a Number";
    }




 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

            let validatePilot = validateInput(pilot);
            let validateCopilot = validateInput(copilot);
            let validateFuelLevel = validateInput(fuelLevel);
            let validateCargoMass = validateInput(cargoMass);
            let faultyItems = list;
            let fuelLevelNum = Number(fuelLevel);
            let cargoMassNum = Number(cargoMass);

            if (validatePilot === "Empty" || validateCopilot === "Empty") {
                 return alert("Input for all fields required!");
            } else if (validatePilot === "Is a Number" || validateCopilot === "Is a Number") {
                return alert("Pilot and copilot names should be strings.");
            
            } else if (isNaN(fuelLevelNum) || isNaN(cargoMassNum)) {
                   return alert("Fuel level and cargo mass should be numbers.");
                
                }

              else {
             document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`
             document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`
             faultyItems.style.visibility = 'visible';

            if (fuelLevel < 10000) {
                faultyItems.style.visibility = 'visible';
                document.getElementById('fuelStatus').innerHTML = `Fuel level too low for launch`
                document.getElementById('launchStatus').innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById('launchStatus').style.color = 'red';
            };

             if (fuelLevel >= 10000 && cargoLevel > 10000) {
                faultyItems.style.visibility = 'visible';
                document.getElementById('cargoStatus').innerHTML = `Cargo mass too heavy for launch`;
                document.getElementById('fuelStatus').innerHTML = `Fuel level high enough for launch`
                document.getElementById('launchStatus').innerHTML = 'Shuttle Not Ready for Launch';
                document.getElementById('launchStatus').style.color = 'red';
            };
            if (fuelLevel >= 10000 && cargoLevel <= 10000) {
                faultyItems.style.visibility = 'visible';
                document.getElementById('fuelStatus').innerHTML = `Fuel level high enough for launch`
                document.getElementById('cargoStatus').innerHTML = `Cargo mass low enough for launch`;
                document.getElementById('launchStatus').innerHTML = 'Shuttle is Ready for Launch';
                document.getElementById('launchStatus').style.color = 'green';
            }
        
            }
        };
 
 async function myFetch() {
     let response = await fetch("https://handlers.education.launchcode.org/static/planets.json")
     let planetsReturned = await response.json();
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random()*planets.length)
    return planets[randomPlanet]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;