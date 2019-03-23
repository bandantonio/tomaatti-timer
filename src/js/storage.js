'use strict';

let storage = (function() {
  let storageData = {
    cycleDuration: 25,
    shortBreakDuration: 5,
    longBreakDuration: 25,
    soundEnabled: true
  };
  
  function pull() {
    if (!localStorage.getItem('tomaatti-timer')) {
      localStorage.setItem('tomaatti-timer', JSON.stringify(storageData));
    }
    return JSON.parse(localStorage.getItem('tomaatti-timer'));
  }
  
  function save(settings) {
    for (let key in settings) {
      if (storageData.hasOwnProperty(key)) {
        storageData[key] = settings[key];
      }
    }
    pushToStorage();
  }
  
  function pushToStorage() {
    localStorage.setItem('tomaatti-timer', JSON.stringify(storageData));
    return pull();
  }

  function getSoundState() {
    return storageData.soundEnabled;
  }

  function saveSoundState(state) {
    storageData.soundEnabled = state;
    pushToStorage();
  }
  
  return {
    pull: pull,
    save: save,
    push: pushToStorage,
    getSoundState: getSoundState,
    saveSoundState: saveSoundState
  }
}());

export default storage;