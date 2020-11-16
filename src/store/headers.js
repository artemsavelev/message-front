export default {
    // метод получения данных с бекэнда
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

    // метод для добавления записи
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
    }

}