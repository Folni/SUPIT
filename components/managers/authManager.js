import { uiManager } from './uiManager.js';
import { sessionManager } from './sessionManager.js';
import { ajaxManager } from './ajaxManager.js';

export const authManager = {
    register: function () {
        const username = $('#username').val();
        const password = $('#password').val();

        ajaxManager.post(
            'https://www.fulek.com/data/api/user/register',
            { username, password },
            (response) => {
                if (response.statusCode === 200) {
                    uiManager.showRedirectMessage(
                        '#redirect-message',
                        '#timer',
                        3,
                        'Prijava.html'
                    );
                } else {
                    $('#failure-message').show();
                }
            },
            () => $('#failure-message').show()
        );
    },

    login: function (username, password) {
        ajaxManager.post(
            'https://www.fulek.com/data/api/user/login',
            { username, password },
            (response) => {
                // Ensure the response structure is as expected
                if (response && response.data && response.data.token) {
                    const token = response.data.token;
                    localStorage.setItem('JWTToken', token);
                    uiManager.showRedirectMessage(
                        '#redirect-message2',
                        '#timer2',
                        3,
                        'index.html'
                    );
                    sessionManager.session.check();
                } else {
                    // If token is not found in response, show the failure message
                    $('#failure-message2').text('Invalid login credentials. Please try again.').show();
                }
            },
            (error) => {
                // Log the error for debugging
                console.error('Login request failed:', error);
                // Show failure message for any error during the request
                $('#failure-message2').text('An error occurred. Please try again later.').show();
            }
        );
    },

    logout: function () {
        localStorage.removeItem('JWTToken');
        uiManager.toggleAuthUI(false);
        console.log('User logged out successfully');
    },

    getToken: function () {
        const token = localStorage.getItem('JWTToken');
        if (!token) {
            console.error("No token found! Please log in.");
            return null; // Handle token absence here (e.g., redirect to login)
        }
        return token;
    }
};
