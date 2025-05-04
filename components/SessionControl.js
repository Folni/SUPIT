import { sessionManager } from './managers/sessionManager.js';
import { searchManager } from './managers/searchManager.js';

$(document).ready(() => {
    sessionManager.init();
    searchManager.initialize();
});
