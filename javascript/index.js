const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');

let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');

let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');

let splits = document.getElementById('splits');

function printTime() {
    printMinutes();
    printSeconds();
}

function printMinutes() {
    let minuto = chronometer.getMinutes();

    minDec.innerText = chronometer.computeTwoDigitNumber(minuto)[0];
    minUni.innerText = chronometer.computeTwoDigitNumber(minuto)[1];
}

function printSeconds() {
    let segundo = chronometer.getSeconds();

    secDec.innerText = chronometer.computeTwoDigitNumber(segundo)[0];
    secUni.innerText = chronometer.computeTwoDigitNumber(segundo)[1];
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {
    chronometer.stop();

    btnRight.innerText = 'RESET';
    btnRight.setAttribute('class', 'btn reset');

    btnLeft.innerText = 'START';
    btnLeft.setAttribute('class', 'btn start');
}

function setSplitBtn() {
    const li = document.createElement('li');
    splits.appendChild(document.createTextNode(chronometer.split()));
}

function setStartBtn() {
    chronometer.start(printTime);

    btnLeft.innerText = 'STOP';
    btnLeft.setAttribute('class', 'btn stop');

    btnRight.innerText = 'SPLIT';
    btnRight.setAttribute('class', 'btn split');
}

function setResetBtn() {
    chronometer.reset();

    minDec.innerText = '0';
    minUni.innerText = '0';

    secDec.innerText = '0';
    secUni.innerText = '0';
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
    if (btnLeft.innerText === 'START') {
        setStartBtn();
        // btnLeft.classList.toggle('btn.stop');
    } else if (btnLeft.innerText === 'STOP') {
        setStopBtn();
        // btnLeft.classList.toggle('btn.start');
    }
});
// Reset/Split Button
btnRight.addEventListener('click', () => {
    if (btnRight.innerText === 'RESET') {
        setResetBtn();
    } else if (btnRight.innerText === 'SPLIT') {
        setSplitBtn();
    }
});