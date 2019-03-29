'use strict';

import timers from './timer-controls.js';
import breaks from './breaks.js';
import settings from './settings.js';

let helpers = (function () {
  let timerID;
  let ticking = true;
  let tickingSound = new Audio('./src/assets/audio/ticking.mp3');
  
  let countdown = function (milliseconds) {
    settings.disableSettingsPage(true);
    let breakState = breaks.getBreakState();
    let minutes = ('0' + Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    let seconds = ('0' + Math.floor((milliseconds % (1000 * 60)) / 1000)).slice(-2);
    
    timers.minutesSelector.innerHTML = String(minutes);
    timers.secondsSelector.innerHTML = String(seconds);
    timers.setTimeOnPause(milliseconds);

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
          resolve(breaks.started());
        }, 1000);
      });
    } else if (milliseconds < 0 && breakState) {
      return new Promise(function(resolve) {
        clearTimeout(timerID);
        setTimeout(function() {
          breaks.finished();
          resolve();
        }, 1000);
      });
    }
  }
  
  let minutesToMilliseconds = function(minutes) {
    return minutes * 1000;
  }

  let getTimeoutID = function() {
    return timerID;
  }
  
  function getTickingState() {
    return ticking;
  }
  
  function enableTicking(state) {
    ticking = state;
    return ticking;
  }
  
  return {
    countdown: countdown,
    minToMsec: minutesToMilliseconds,
    getTimeoutID: getTimeoutID,
    getTickingState: getTickingState,
    enableTicking: enableTicking
  }
}());

export default helpers;