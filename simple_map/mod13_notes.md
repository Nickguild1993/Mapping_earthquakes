# Notes for module 13

## 13.2 - adding the map and such

refer to: https://leafletjs.com/examples/quick-start/

Creat the map object with a center and zoom level.

let map = L.map('mapid').setView([40.7, -94.5], 4);

In the code block above:

We're assigning the variable map to the object L.map(), and we'll instantiate the object with the given string 'mapid'.
The mapid will reference the id tag in our <div> element on the index.html file.
The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

ALTERNATIVE to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows: 

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [
    40.7, -94.5
  ],
  zoom: 4
});

This is useful for when we need to add multiple tile layers, or a background image of map(s)

### Tile layer - still 13.2

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


BREAKDOWN OF ABOVE CODE: 

1. We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
2. The following URLs appear in the parentheses of our tileLayer() method:
- The API URL with a reference to the accessToken
- The OpenStreetMap URL inside the curly braces of our tileLayer() method
3. We add the maxZoom attribute and assign it a value of 18.
4. We add the id attribute and assign it mapbox.streets, which will show the streets on the map.
5. We add the accessToken attribute and assign it the value of our API_KEY.
6. Finally, we call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.
- To change the map's style, change the map id using the list of Mapbox ids below
    mapbox.streets, mabox.light, mapbox.dark etc.

## Adding branches to github

to change branches in the command line, use: git checkout <name of branch>

### notes on creating a branch off of the main branch

Navigate to your repository on your computer.

Make sure you're on the main branch by typing: git branch

If you're not on the main branch, type: git checkout main

Pull the changes from the main branch by typing: git pull

Create a new branch by typing: git checkout -b [name_of_your_new_branch]