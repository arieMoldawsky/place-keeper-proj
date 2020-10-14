'use strict';

var gSavedPlaces = createSavedPlaces();

function getPosition() {
    if (!navigator.geolocation) return alert("HTML5 Geolocation is not supported in your browser.");
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(position) {
    initMap(position.coords.latitude, position.coords.longitude);
}

function getSavedPlaces() {
    return gSavedPlaces;
}

function createSavedPlaces() {
    if(getFromStorage('savedPlaces')) return getFromStorage('savedPlaces');
    var emptyArr = [];
    return emptyArr;
}

function findPlaceIdxById(id) {
    var idx = gSavedPlaces.findIndex(place => place.id === id);
    return idx;
}