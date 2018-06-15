import {API_URL, API_TEAMS_ID} from './apiConstants';

class TeamsApi {
    static getAllTeams() {
        const request = new Request(`${API_URL}/${API_TEAMS_ID}`, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json()
        }).catch(error => {
            return error
        });
    }
}

export default TeamsApi