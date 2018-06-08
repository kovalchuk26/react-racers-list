import React from 'react';
import RacersList from '../containers/RacersListContainer';
import AdditionRace from '../containers/AdditionRaceContainer';
import RacersPosition from '../containers/RacersPositionContainer';

const App = () => (
    <div>
        <RacersList />
        <AdditionRace />
        <RacersPosition />
    </div>
);

export default App;