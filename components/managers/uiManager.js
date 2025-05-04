import { authManager } from './authManager.js';

export const uiManager = {
    bindEvents: function () {
        $('#register-btn').on('click', () => authManager.register());
        $('#login-btn').on('click', () => {
            const username = $('#username').val();
            const password = $('#password').val();
            authManager.login(username, password);
        });
        $('#logout-btn').on('click', () => authManager.logout());
    },

    showRedirectMessage: function (message, timerSelector, seconds, redirectUrl) {
        $(message).show();
        let countdown = seconds;
        const countdownInterval = setInterval(() => {
            countdown--;
            $(timerSelector).text(countdown);
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                window.location.href = redirectUrl;
            }
        }, 1000);
    },

    toggleAuthUI: function (isLoggedIn) {
        if (isLoggedIn) {
            $('#login-link').hide();
            $('#logout-btn').show();
            $('#Nastavniplan').show();
            $('#NastavniplanIcon').show();
        } else {
            $('#login-link').show();
            $('#logout-btn').hide();
            $('#Nastavniplan').hide();
            $('#NastavniplanIcon').hide();
        }
    }
};
