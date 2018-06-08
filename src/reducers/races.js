import {ADD_RACE} from '../constants/AdditionRace';
import {SET_RACERS_POSITION} from '../constants/RacerPositionSettings';

const races = (state = [], action) => {
    switch (action.type) {
        case ADD_RACE:
            return [
                ...state,
                {
                    serialNumber: action.payload.serialNumber,
                    venue: action.payload.venue,
                    id: action.payload.id,
                    racersPositions: [
                        ...state[state.length - 1].racersPositions.map(racer => {
                            return {
                                ...racer,
                                position: ''
                            }
                        })
                    ]
                }

            ];

        case SET_RACERS_POSITION:
            return [
                ...state.slice(0, -1),
                {
                    serialNumber: state[state.length - 1].serialNumber,
                    venue: state[state.length - 1].venue,
                    id: state[state.length - 1].id,
                    racersPositions: action.payload.racersPositions
                }

            ];

        default:
            return state;
    }
};

export default races