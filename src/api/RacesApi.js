import {API_URL, API_RACES_ID} from './apiConstants';

class RacesApi {
    static getAllRaces() {
        const request = new Request(`${API_URL}/${API_RACES_ID}`, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json()
        });
    }

    static updateRaces(data, urlId = `${API_URL}/${API_RACES_ID}`) {
        const request = new Request(urlId, {
            method: 'PUT',
            body: data,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        return fetch(request).then(response => {
            return response.json()
        });
    }
}

export default RacesApi