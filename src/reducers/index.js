import * as actionTypes from '../actions/actionTypes';
import {combineReducers} from 'redux';
import initialState from '../store/initialState';

const teams = (state = initialState.teams, action) => {
    switch (action.type) {
        case actionTypes.LOAD_TEAMS_SUCCESS:
            return action.payload.teams;

        default:
            return state;
    }
};

const racers = (state = initialState.racers, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RACERS_SUCCESS:
            return action.payload.racers;

        default:
            return state;
    }
};

const races = (state = initialState.races, action) => {
    switch (action.type) {
        case actionTypes.LOAD_RACES_SUCCESS:
            return action.payload.races;

        default:
            return state;
    }
};

const isLoading = (state = initialState.isLoading, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA_LOADING_FLAG:
            return action.payload.isLoading;

        default:
            return state;
    }
};

const loadingError = (state = initialState.loadingError, action) => {
  switch (action.type) {
      case actionTypes.DATA_LOADING_FAILURE:
          return action.payload.error;

      default:
          return state;
  }
};

export default combineReducers({
    teams,
    racers,
    races,
    isLoading,
    loadingError
})