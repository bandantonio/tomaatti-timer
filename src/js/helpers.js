'use strict';

import * as controls from './controls.js';
import * as breaks from './breaks.js';
import * as settings from './settings.js';

let timerID;
let ticking = true;

function countdown(milliseconds) {
  let tickingSound = new Audio('./src/assets/audio/ticking.mp3');
  
  settings.disableSettingsPage(true);
  let breakState = breaks.getBreakState();
  let minutes = ('0' + Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((milliseconds % (1000 * 60)) / 1000)).slice(-2);
  
  controls.minutesSelector.innerHTML = String(minutes);
  controls.secondsSelector.innerHTML = String(seconds);
  controls.setTimerOnPause(milliseconds);
  
  milliseconds -= 1000;
  
  if (ticking) {
    tickingSound.load();
    tickingSound.play();
  }
  
  timerID = setTimeout(countdown, 1000, milliseconds, ticking);
  
  if (milliseconds < 0 && !breakState) {
    return new Promise(function(resolve) {
      clearTimeout(timerID);
      setTimeout(function() {
        breaks.breakStarted(ticking);
        resolve();
      }, 1000);
    });
  } else if (milliseconds < 0 && breakState) {
    return new Promise(function(resolve) {
      clearTimeout(timerID);
      setTimeout(function() {
        breaks.breakFinished(ticking);
        resolve();
      }, 1000);
    });
  }
}  

function minutesToMilliseconds(minutes) {
  return minutes * 60000;
}

function getTimeoutID() {
  return timerID;
}

function getTickingState() {
  return ticking;
}

function enableTicking(state) {
  ticking = state;
  return ticking;
}

export { 
  countdown,
  minutesToMilliseconds,
  getTimeoutID,
  getTickingState,
  enableTicking
};