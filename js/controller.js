'use strict';


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
    elSlogan.innerHTML = `<p>${astroForecast}</p>`;
}

function renderAstro(birthDate) {
    const astroForecast = getAstroFore(birthDate);
    saveToStorage('astro-fore', astroForecast);
}

function renderAge(value) {
    const elAge = document.querySelector('.user-age-render');
    elAge.innerText = value;
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }