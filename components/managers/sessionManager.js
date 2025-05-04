import { uiManager } from './uiManager.js';
import { authManager } from './authManager.js';
import { dataManager } from './dataManager.js';

export const sessionManager = {
    init: function () {
        $(document).ready(() => {
            this.session.check();
            uiManager.bindEvents();
        });
    },

    session: {
        check: function () {
            const token = localStorage.getItem('JWTToken');
            if (token) {
                console.log('JWT Token found:', token);
                uiManager.toggleAuthUI(true);
                dataManager.getCurriculumList(token);
            } else {
                console.log('No JWT Token found.');
                authManager.logout();
            }
        }
    }
};

