import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import RacersList from '../containers/RacersListContainer';
import AdditionRace from '../containers/AdditionRaceContainer';
import RacersPosition from '../containers/RacersPositionContainer';
import TeamsList from '../containers/TeamsListContainer';
import styles from '../styles/HomePage.css';

const HomePage = ({isLoading, error}) => {

    return (
        <Fragment>
            {isLoading ? (<div>Loading...</div>) :
                error ? (<div>{`Error: ${error.message}`}</div>) :
                    (<Fragment>
                            <div className={styles.row}>
                                <RacersList/>
                                <TeamsList/>
                            </div>
                            <div className={styles.row}>
                                <AdditionRace/>
                                <RacersPosition/>
                            </div>
                        </Fragment>
                    )}
        </Fragment>
    )
};

HomePage.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any
};

export default HomePage
