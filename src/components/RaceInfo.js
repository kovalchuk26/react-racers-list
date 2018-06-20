import React from 'react';
import PropTypes from 'prop-types';

const RaceInfo = ({racers, racersPositions}) => (
    <div className='table'>
        <div className='table-row table-head'>
            <div className='table-cell'>Racer</div>
            <div className='table-cell'>Position</div>
        </div>
        {racersPositions.map(racer => (
                <div className='table-row'
                     key={racers.find(item => item.fullName === racer.racersName).id}>
                    <div className='table-cell'>{racer.racersName}</div>
                    <div className='table-cell'>{racer.position}</div>
                </div>
            )
        )}
    </div>
);

RaceInfo.propTypes = {
    racers: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired,
    racersPositions: PropTypes.arrayOf(PropTypes.shape({
        racersName: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired
    }))
};

export default RaceInfo