import { combineReducers } from 'redux';
import races from './races';


const teams = (state = [], action) => {
    return state;
};

const racers = (state = [], action) => {
    return state;
};

export default combineReducers({
    teams,
    racers,
    races
})