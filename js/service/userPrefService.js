'use strict';

const gAstroFore = generateAstroFore();

function getAstroFore(birthDate) {
    if (birthDate.substring(0, 4) > 2000) return gAstroFore.newFore;
    if (birthDate.substring(0, 4) > 1990) return gAstroFore.curFore;
    return gAstroFore.oldFore;
}

function generateAstroFore() {
    return {
        oldFore: `The year 2020 will be started in Virgo and Aquarius.
        In the yearly horoscope, the lord of the 7th house, Mercury will be present at the center with Saturn.
        Along with that Sun, Ketu, and Jupiter will also be present.
        In the yearly horoscope 2020, know about the condition of these planets and their effects on you.`,
        curFore: `The horoscope 2020 readings for Taurus suggest that at the beginning of the year,
        the ruling planet Venus will be in the 9th house indicating a bright and successful year for you.
        The presence of five planets in the 8th house will give you benefits throughout the year.
        The presence of Mars in the 7th house will present you with marital bliss.`,
        newFore: `Saturn will be present at the 12th house during the start of 2020 and this might weaken your
        luck factor, causing unexpected delays in work. Apart from this you also suffer from Saturn’s movement
        which will last till 24th January.
        After this period is over, you will see things working in your direction. `
    }
}