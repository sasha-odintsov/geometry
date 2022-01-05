// function showResultInDomKvadrat() { 
//     const x = document.getElementById('dlinaStoroniKvadrata').value;
//     document.getElementById('ploschadKvadrata').innerHTML = calcSquareArea(x);
// };

let showResultInDomKvadrat = () => document.getElementById('ploschadKvadrata').innerHTML = calcSquareArea(document.getElementById('dlinaStoroniKvadrata').value);

// function showResultInDomPriamougolnika() {
//     const x = document.getElementById('pervayaStoronaPriamougolnika').value;
//     const y = document.getElementById('drugayaStoronaPriamougolnika').value;
//     document.getElementById('ploschadPriamougolnika').innerHTML = calcArea(x, y);
// };

let showResultInDomPriamougolnika = () => document.getElementById('ploschadPriamougolnika').innerHTML = calcArea(document.getElementById('pervayaStoronaPriamougolnika').value, document.getElementById('drugayaStoronaPriamougolnika').value);

// function showResultInDomParalelograma() {
//     const x = document.getElementById('dlinaStoronyParalelograma').value;
//     const y = document.getElementById('dlinaVisotyParalelograma').value;
//     document.getElementById('ploschadParalelograma').innerHTML = calcArea(x, y);
// };

let showResultInDomParalelograma = () => document.getElementById('ploschadParalelograma').innerHTML = calcArea(document.getElementById('dlinaStoronyParalelograma').value, document.getElementById('dlinaVisotyParalelograma').value);

// function showResultInDomRomba() {
//     const x = document.getElementById('dlinaStoronyRomba').value;
//     const y = document.getElementById('dlinaVisotyRomba').value;
//     document.getElementById('ploschadRomba').innerHTML = calcArea(x, y);
// };

let showResultInDomRomba = () => document.getElementById('ploschadRomba').innerHTML = calcArea(document.getElementById('dlinaStoronyRomba').value, document.getElementById('dlinaVisotyRomba').value)