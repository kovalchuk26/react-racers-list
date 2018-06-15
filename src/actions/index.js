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

export const loadData = () => dispatch => {
    dispatch(setLoadingFlag(true));

    return Promise.all([
        RacersApi.getAllRacers(),
        RacesApi.getAllRaces(),
        TeamsApi.getAllTeams()
    ]).then(data => {
        dispatch(loadRacersSuccess(data[0].result));
        dispatch(loadRacesSuccess(data[1].result));
        dispatch(loadTeamsSuccess(data[2].result));
        dispatch(setLoadingFlag(false));
    }).catch(error => {
        dispatch(dataLoadingFailure(error));
        dispatch(setLoadingFlag(false));
        throw(error);
    })
};

export const updateRaces = () => (dispatch, getState) => {
    const updatedRaces = [...getState().races];
    const updatedData = Object.assign({}, {
        result: updatedRaces
    });

    dispatch(setLoadingFlag(true));

    return RacesApi.updateRaces(JSON.stringify(updatedData)).then(data => {
        dispatch(loadRacesSuccess(data.result));
        dispatch(setLoadingFlag(false));
    })
        .catch(error => {
            dispatch(dataLoadingFailure(error));
            dispatch(setLoadingFlag(false));
            throw(error);
        })
};


export const addRace = (venue, serialNumber) => ({
    type: types.ADD_RACE,
    payload: {
        id: nextRaceId,
        venue,
        serialNumber
    }
});

export const setRacersPosition = (racersPositions) => ({
    type: types.SET_RACERS_POSITION,
    payload: {
        racersPositions
    }
});
