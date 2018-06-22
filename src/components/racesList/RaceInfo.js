import React from 'react';
import PropTypes from 'prop-types';
import {Table} from '../common/Table';

const RaceInfo = ({racersPositions}) => (
    <Table headers={['Racer', 'Position']}
           rowsData={racersPositions}/>

);

RaceInfo.propTypes = {
    racersPositions: PropTypes.arrayOf(PropTypes.shape({
        racersName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        position: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired
        ]).isRequired
    }))
};

export default RaceInfo