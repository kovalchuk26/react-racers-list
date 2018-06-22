import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import RacersList from '../containers/RacersListContainer';
import AdditionRace from '../containers/AdditionRaceContainer';
import RacersPosition from '../containers/RacersPositionContainer';
import TeamsList from '../containers/TeamsListContainer';
import '../styles/HomePage.less';

const HomePage = ({isLoading, error}) => {

    return (
        <div>
            {isLoading ? (<div>Loading...</div>) :
                error ? (<div>{`Error: ${error.message}`}</div>) :
                    (<Fragment>
                            <div className='row-container'>
                                <RacersList/>
                                <TeamsList/>
                            </div>
                            <div className='row-container'>
                                <AdditionRace/>
                                <RacersPosition/>
                            </div>
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
