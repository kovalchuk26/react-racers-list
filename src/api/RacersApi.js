import {API_URL, API_RACERS_ID} from './apiConstants';

class RacersApi {
    static getAllRacers() {
        const request = new Request(`${API_URL}/${API_RACERS_ID}`, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }
}

export default RacersApi