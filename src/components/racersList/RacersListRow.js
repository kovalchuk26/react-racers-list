import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/RacersList.less';

const RacersListRow = ({fullName, team, totalPoints}) => (
    <div className='table-row'>
        <div className='table-cell'>{fullName}</div>
        <div className='table-cell'>{team}</div>
        <div className='table-cell'>{totalPoints}</div>
    </div>
);

RacersListRow.propTypes = {
    fullName: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    totalPoints: PropTypes.number.isRequired
};

export default RacersListRow
