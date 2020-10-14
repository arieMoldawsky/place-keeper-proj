'use strict';


function onInit() {
    renderSavedList();
}

function setPrefs(ev) {
    ev.preventDefault();
    const bgColor = document.querySelector('[name=bg-color]').value;
    const txtColor = document.querySelector('[name=txt-color]').value;
    const dateOfBirth = document.querySelector('[name=birth-date]').value;

    renderAstro(dateOfBirth);

    saveToStorage('bgc', bgColor);
    saveToStorage('txtc', txtColor);
}

function initPrefs() {
    const homeHeader = document.querySelector('.home-header');
    homeHeader.style.backgroundColor = getFromStorage('bgc');
    homeHeader.style.color = getFromStorage('txtc');
    const elSlogan = document.querySelector('.slogan');
    const astroForecast = getFromStorage('astro-fore');
    if (astroForecast) elSlogan.innerHTML = `<p style="text-align: justify">${astroForecast}</p>`;
}

function renderAstro(birthDate) {
    const astroForecast = getAstroFore(birthDate);
    saveToStorage('astro-fore', astroForecast);
}

function renderAge(value) {
    const elAge = document.querySelector('.user-age-render');
    elAge.innerText = value;
}

function initMap(lat = 29.5577, lng = 34.9519) {
    getFromStorage('savedPlaces');
    var locationCoords = { lat, lng };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 8, center: locationCoords });
    var marker = new google.maps.Marker({ position: locationCoords, map: map, draggable: true });
    map.addListener("click", (e) => {
        placeMarkerAndPanTo(e.latLng, map);
    });

}

function onMyLocation() {
    getPosition();
}

function placeMarkerAndPanTo(latLng, map) {
    const savedPlaces = getSavedPlaces();
    var locationName = prompt('Insert the location\'s name.');
    var time = getTime();
    var id = makeId();
    if (locationName) {
        new google.maps.Marker({
            position: latLng,
            map: map,
        });
        map.panTo(latLng);
        savedPlaces.push({ locationName, latLng, time, id });
        saveToStorage('savedPlaces', savedPlaces);
        renderSavedList();
    } else return
}

function renderSavedList() {
    let elPlacelistTable = document.querySelector('.placelist-table-body')
    const savedPlaces = getSavedPlaces();
    var strHtml = savedPlaces.map(place => {
        return `<tr>
            <td>${place.id}</td>
            <td>${place.locationName}</td>
            <td>${place.time}</td>
            <td><button onclick="removePlace('${place.id}')">remove</button></td>
        </tr>`
    })
    strHtml = strHtml.join('');
    elPlacelistTable.innerHTML = strHtml;
}

function removePlace(id) {
    const placeIdx = findPlaceIdxById(id);
    let savedPlaces = getSavedPlaces();
    savedPlaces.splice(placeIdx, 1);
    saveToStorage('savedPlaces', savedPlaces);
    renderSavedList();
}