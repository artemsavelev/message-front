export default {
    requestData(url, method) {
        const options = {
            method: method,
            headers: new Headers({
                    'Content-type': 'application/json',
                },
            ),
        };
        return fetch(url, options);

    },

    responseData(url, method, data) {
        const options = {
            method: method,
            headers: new Headers({
                    'Content-type': 'application/json',
                },
            ),
            body: JSON.stringify(data)
        };
        return fetch(url, options);

    },

}