function showResultInDomKvadrat() { 
    const x = document.getElementById('dlinaStoroniKvadrata').value;
    document.getElementById('ploschadKvadrata').innerHTML = calcSquareArea(x);
};

function showResultInDomPriamougolnika() { 
    const x = document.getElementById('pervayaStoronaPriamougolnika').value;
    const y = document.getElementById('drugayaStoronaPriamougolnika').value;
    document.getElementById('ploschadPriamougolnika').innerHTML = calcArea(x, y);
};

function showResultInDomParalelograma() { 
    const x = document.getElementById('dlinaStoronyParalelograma').value;
    const y = document.getElementById('dlinaVisotyParalelograma').value;
    document.getElementById('ploschadParalelograma').innerHTML = calcArea(x, y);
};

function showResultInDomRomba() { 
    const x = document.getElementById('dlinaStoronyRomba').value;
    const y = document.getElementById('dlinaVisotyRomba').value;
    document.getElementById('ploschadRomba').innerHTML = calcArea(x, y);
};
