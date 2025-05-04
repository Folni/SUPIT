export const ajaxManager = {
    post: function (url, data, successCallback, errorCallback) {
        $.ajax({
            url,
            type: 'POST',
            contentType: 'application/json',  
            data: JSON.stringify(data),
            success: successCallback,
            error: errorCallback,
        });
    },
    get: function (url, token, successCallback, errorCallback) {
        $.ajax({
            url,
            type: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            success: successCallback,
            error: errorCallback,
        });
    },
};

