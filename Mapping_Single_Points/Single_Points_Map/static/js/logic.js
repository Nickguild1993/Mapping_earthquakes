// Add console.log to check if your code is working.
console.log("working")

// this will either confirm or deny that our logic.js
// file is accessed in the console on Chrome.

// Create the map object with a center (repped as 40.7, -94.5) and zoom level (repped as "4").
// changed to 34.0522, -118.2437 for 13.4.1 to highligh LA
let map = L.map('mapid').setView([34.0522, -118.2437], 14);


// addin a circle to LA // SKILL CHALLENGE! 13.4.2
// .circle() uses  * meters *  for the radius!
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "yellow"
// }).addTo(map);

// Add a circle to the map using circleMarker() instead of circle() like you did above
// ** THE DIFFERENCE BETWEEN THE 2 FUNCTIONS IS THAT CIRCLEMARKER USES PIXELS INSTEAD OF METERS

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "yellow"
}).addTo(map);

// Add a marker to the map for LA, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// skill drill 13.4.1 editing to add in night mode 
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Skill change for 13.4.1 - need to do night mode map , yellow circle with black outline.