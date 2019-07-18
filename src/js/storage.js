'use strict';

let storageData = {
  cycleDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 25,
  soundEnabled: true
};

function pullSettingsFromStorage() {
  if (!localStorage.getItem('tomaatti-timer')) {
    localStorage.setItem('tomaatti-timer', JSON.stringify(storageData));
  }
  return JSON.parse(localStorage.getItem('tomaatti-timer'));
}

function saveSettings(settings) {
  for (let key in settings) {
    if (storageData.hasOwnProperty(key)) {
      storageData[key] = settings[key];
    }
  }
  pushSettingsToStorage();
}

function pushSettingsToStorage() {
  localStorage.setItem('tomaatti-timer', JSON.stringify(storageData));
  return pullSettingsFromStorage();
}

function getCycleDuration() {
  return storageData.cycleDuration;
}

function getSoundState() {
  return storageData.soundEnabled;
}

function saveSoundState(state) {
  storageData.soundEnabled = state;
  pushSettingsToStorage();
}

export {
  pullSettingsFromStorage,
  saveSettings,
  pushSettingsToStorage,
  getCycleDuration,
  getSoundState,
  saveSoundState,
};