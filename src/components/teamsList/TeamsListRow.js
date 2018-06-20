import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/RacersList.less';

const TeamsListRow = ({name, totalPoints}) => (
    <div className='table-row'>
        <div className='table-cell'>{name}</div>
        <div className='table-cell'>{totalPoints}</div>
    </div>
);

TeamsListRow.propTypes = {
    name: PropTypes.string.isRequired,
    totalPoints: PropTypes.number.isRequired
};

export default TeamsListRow
