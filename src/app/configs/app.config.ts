import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
  minYearForReports: 2005,
  maxYearForReports: 2030,
  apiUrl: 'https://localhost:44337/api/',
  hostname: window.location.hostname === 'localhost' ? '/ValueTrack' : ''
};

function getHostName() {
    return window.location.hostname === 'localhost' ? '/ValueTrack' : '';
}
