# Notes for module 13

13.2 - adding the map and such

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