import * as types from './actionTypes';
import RacersApi from '../api/RacersApi';
import RacesApi from '../api/RacesApi';
import TeamsApi from '../api/TeamsApi';
import uuid from 'uuid';

const nextRaceId = uuid.v4();

export const loadRacersSuccess = (racers) => ({
    type: types.LOAD_RACERS_SUCCESS,
    payload: {
        racers
    }
});

export const loadRacesSuccess = (races) => ({
    type: types.LOAD_RACES_SUCCESS,
    payload: {
        races
    }
});

export const loadTeamsSuccess = (teams) => ({
    type: types.LOAD_TEAMS_SUCCESS,
    payload: {
        teams
    }
});

export const setLoadingFlag = (isLoading) => ({
    type: types.SET_DATA_LOADING_FLAG,
    payload: {
        isLoading
    }
});

export const dataLoadingFailure = (error) => ({
    type: types.DATA_LOADING_FAILURE,
    payload: {
        error
    }
});

const shouldNotFetchData = (state) => {
    return state.teams.length && state.racers.length && state.races.length;
};

const fetchRasers = () => {
    return RacersApi.getAllRacers();
};

const fetchRaces = () => {
    return RacesApi.getAllRaces();
};

const fetchTeams = () => {
    return TeamsApi.getAllTeams();
};

export const loadData = () => (dispatch, getState) => {
    if (shouldNotFetchData(getState())) {
        return Promise.resolve();
    }

    dispatch(setLoadingFlag(true));

    return Promise.all([
        fetchRasers(),
        fetchRaces(),
        fetchTeams()
    ]).then(data => {
        dispatch(loadRacersSuccess(data[0].result));
        dispatch(loadRacesSuccess(data[1].result));
        dispatch(loadTeamsSuccess(data[2].result));
        dispatch(setLoadingFlag(false));
        sessionStorage.setItem('state', JSON.stringify(getState()));
    }, error => {
        dispatch(dataLoadingFailure(error));
        dispatch(setLoadingFlag(false));
    })
};

export const updateRaces = (updatedRaces) => (dispatch, getState) => {
    const updatedData = Object.assign({}, {
        result: updatedRaces
    });

    dispatch(setLoadingFlag(true));

    return RacesApi.updateRaces(JSON.stringify(updatedData)).then(data => {
        dispatch(loadRacesSuccess(data.result));
        dispatch(setLoadingFlag(false));
        sessionStorage.setItem('state', JSON.stringify(getState()));
    }, error => {
        dispatch(dataLoadingFailure(error));
        dispatch(setLoadingFlag(false));
    })
};

export const addRace = (venue, serialNumber) => (dispatch, getState) => {
    const currentRaces = [...getState().races];
    const updatedRaces = [
        ...currentRaces,
        {
            serialNumber,
            venue,
            id: nextRaceId,
            racersPositions: [
                ...currentRaces[currentRaces.length - 1].racersPositions.map(racer => ({
                    ...racer,
                    position: ''

                }))
            ]
        }];

    dispatch(updateRaces(updatedRaces));
};

export const setRacersPosition = (racersPositions) => (dispatch, getState) => {
    const currentRaces = [...getState().races];
    const lastRace = currentRaces[currentRaces.length - 1];
    const updatedRaces = [
        ...currentRaces.slice(0, -1),
        {
            serialNumber: lastRace.serialNumber,
            venue: lastRace.venue,
            id: lastRace.id,
            racersPositions
        }

    ];

    dispatch(updateRaces(updatedRaces));
};

