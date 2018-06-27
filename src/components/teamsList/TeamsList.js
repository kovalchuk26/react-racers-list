import React from 'react';
import PropTypes from 'prop-types';
import {Table} from '../common/Table';
import styles from '../../styles/HomePage.css';

export class TeamsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {teams} = this.props;

        return (
            <div className={styles.section}>
                <Table headers={['Team', 'Total']} rowsData={teams}/>
            </div>
        )
    }
}

TeamsList.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        totalPoints: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired
};