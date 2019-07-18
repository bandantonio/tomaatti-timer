'use strict';

import * as controls from './controls.js';
import * as settings from './settings.js';

function initiateTimer() {
  settings.preloadStoredSettings();
}

controls.startButton.addEventListener('click', controls.startTimer);
controls.pauseButton.addEventListener('click', controls.pauseTimer);
controls.resetButton.addEventListener('click', controls.resetTimer);
document.addEventListener('DOMContentLoaded', initiateTimer);

settings.toggleSettingsPageIcon.addEventListener('click', settings.openSettingsPage);
settings.toggleSoundSettingIcon.addEventListener('click', settings.toggleSound);
settings.saveSettingsButton.addEventListener('click', settings.saveSettings);
settings.cancelSettingsButton.addEventListener('click', settings.closeSettingsPage);