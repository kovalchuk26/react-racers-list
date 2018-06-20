import React from 'react';
import PropTypes from 'prop-types';
import RacesListRow from './RacesListRow';

export class RacesList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {races} = this.props;

        return (
            <div className='table'>
                <div className='table-row table-head'>
                    <div className='table-cell'>Venue</div>
                    <div className='table-cell'>Races count</div>
                    <div className='table-cell'>Serial number</div>

                </div>
                {races.map(race =>
                    <RacesListRow
                        key={race.id}
                        {...race}
                    />
                )}
            </div>
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