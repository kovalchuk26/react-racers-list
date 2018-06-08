import {ADD_RACE} from '../constants/AdditionRace';
import {SET_RACERS_POSITION} from '../constants/RacerPositionSettings';

let nextRaceId = 777;

export const addRace = (venue, serialNumber) => ({
    type: ADD_RACE,
    payload: {
        id: nextRaceId++,
        venue,
        serialNumber
    }
});

export const setRacersPosition = (racersPositions) => ({
   type: SET_RACERS_POSITION,
   payload: {
       racersPositions
   }
});
