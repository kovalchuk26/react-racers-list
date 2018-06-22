import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../containers/HomePageContainer';
import RacesPage from './RacesPage';
import NavBar from './NavBar';
import '../styles/Main.less';
import '../styles/Forms.less';

const App = () => (
    <Fragment>
        <NavBar />
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/races' component={RacesPage}></Route>
        </Switch>
    </Fragment>
);

export default App