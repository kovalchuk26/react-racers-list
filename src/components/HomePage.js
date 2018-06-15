import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import RacersList from '../containers/RacersListContainer';
import AdditionRace from '../containers/AdditionRaceContainer';
import RacersPosition from '../containers/RacersPositionContainer';
import TeamsList from '../containers/TeamsListContainer';

const HomePage = ({isLoading, error}) => {

    return (
        <div>
            {isLoading ? (<div>Loading...</div>) :
                error ? (<div>Error</div>) :
                    (<Fragment>
                            <RacersList/>
                            <TeamsList/>
                            <AdditionRace/>
                            <RacersPosition/>
                        </Fragment>
                    )}
        </div>
    )
};

HomePage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any
};

export default HomePage
