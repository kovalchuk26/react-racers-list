import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const RacesListRow = ({venue, racesCount, serialNumber, id}) => (
    <div className='table-row'>
        <div className='table-cell'><Link
            to={`/races/${id}`}>{venue}</Link></div>
        <div className='table-cell'>{racesCount}</div>
        <div className='table-cell'>{serialNumber}</div>
    </div>
);

RacesListRow.propTypes = {
    venue: PropTypes.string.isRequired,
    serialNumber: PropTypes.number.isRequired,
    racesCount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export default RacesListRow
