'use strict';

import * as controls from './controls.js';
import * as breaks from './breaks.js';
import * as settings from './settings.js';

let timerID;
let ticking = true;

/**
* Launches a countdown with the passed number of milliseconds
* @param {number} milliseconds - the number of milliseconds to start countdown with
* @returns {Promise}
*/
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

/**
* Convert minutes to milliseconds
* @param {number} minutes - number of minutes to convert
* @returns {number}       - the number of milliseconds in the passed value
*/
function minutesToMilliseconds(minutes) {
  if (arguments.length === 0) {
    throw Error("Please pass a parameter to the function");
  } else if (typeof minutes !== 'number') {
    throw Error("The passed value should be a number");
  } else if (Math.sign(minutes) === -1) {
    throw Error("The passed value cannon be negavive");
  }
  return minutes * 60000;
}

/**
* Return the current ID of the countdown timer
* @returns {number} - id of the countdown timer
*/
function getTimeoutID() {
  return timerID;
}

/**
* Return the current state of ticking sound
* @returns {boolean} - the current state of ticking sound
*/
function getTickingState() {
  return ticking;
}

/**
* Enable or disable ticking sound
* @param {boolean} state - whether enable or disable ticking sound
* @returns {boolean}     - state of ticking sound that was set
*/
function enableTicking(state) {
  if (arguments.length === 0) {
    throw Error("Please pass a parameter to the function");
  } else if (typeof state !== 'boolean' ) {
    throw Error("The passed value is not boolean");
  }
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