const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');

const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds()
}

function printMinutes() {
  let min = chronometer.getMinutes();
  let min2Var = chronometer.computeTwoDigitNumber(min)

  minDecElement.innerText = min2Var.charAt(0)
  minUniElement.innerText = min2Var.charAt(1)
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  let sec2Var = chronometer.computeTwoDigitNumber(sec)

  secDecElement.innerText = sec2Var.charAt(0)
  secUniElement.innerText = sec2Var.charAt(1)
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  btnLeftElement.classList.toggle("start");
  btnLeftElement.classList.toggle("stop");

  btnRightElement.classList.toggle("split");
  btnRightElement.classList.toggle("reset");

  if(btnLeftElement.classList.contains("start")){
    btnLeftElement.innerText ="START"
    btnRightElement.innerText ="RESET"
    chronometer.stop()
  }else {
    btnLeftElement.innerText = "STOP"
    btnRightElement.innerText ="SPLIT"
    chronometer.start(printTime) 
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  

  if(btnLeftElement.classList.contains("start")){
    btnLeftElement.innerText ="START"
    btnRightElement.innerText ="RESET"
    chronometer.stop()
  }else {
    btnLeftElement.innerText = "STOP"
    btnRightElement.innerText ="SPLIT"
    chronometer.start(printTime) 
  }
});
