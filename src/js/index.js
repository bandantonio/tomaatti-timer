'use strict';

import timer from './timer-controls.js';
import settings from './settings.js';

let application = (function () {
  function init() {
    timer.preset();
    settings.preload();
  }
  
  return {
    init: init,
  }
}());

export default application;

timer.startButton.addEventListener('click', timer.start);
timer.pauseButton.addEventListener('click', timer.pause);
timer.resetButton.addEventListener('click', timer.reset);
document.addEventListener('DOMContentLoaded', application.init);

settings.toggleSettingsPage.addEventListener('click', settings.openSettingsPage);
settings.toggleSoundSetting.addEventListener('click', settings.toggleSound);
settings.saveSettingsButton.addEventListener('click', settings.save);
settings.cancelSettingsButton.addEventListener('click', settings.closeSettingsPage);