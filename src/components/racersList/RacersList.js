import React from 'react';
import PropTypes from 'prop-types';
import {Table} from '../common/Table';
import styles from '../../styles/HomePage.css';

export class RacersList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {racers} = this.props;

        return (
            <div className={styles.section}>
                <Table headers={['Racers name', 'Team', 'Total']}
                       rowsData={racers}/>
            </div>
        )
    }
}

RacersList.propTypes = {
    racers: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired
};