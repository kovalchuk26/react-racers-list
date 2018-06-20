import React, {Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import RacesList from '../containers/RacesListContainer';
import RaceInfo from '../containers/RaceInfoContainer'

const RacesPage = () => (
    <Fragment>
        <Switch>
            <Route exact path='/races' component={RacesList}/>
            <Route path='/races/:id' component={RaceInfo}/>
        </Switch>
    </Fragment>
);

export default RacesPage