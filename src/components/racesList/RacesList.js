import React from 'react';
import PropTypes from 'prop-types';
import {Table} from '../common/Table';

export class RacesList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {races} = this.props;

        return (
            <Table headers={['Venue', 'Races Count', 'Serial Number']}
                   rowsData={races}
                   firstCellAsLink={true}/>
        )
    }
}

RacesList.propTypes = {
    races: PropTypes.arrayOf(PropTypes.shape({
        venue: PropTypes.string.isRequired,
        serialNumber: PropTypes.number.isRequired,
        racesCount: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired
};