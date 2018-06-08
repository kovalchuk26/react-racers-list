import React from 'react';
import PropTypes from 'prop-types';
import RacerInfo from './RacerInfo';
import '../styles/RacersList.css';

export class RacersList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {racers} = this.props;

        return (
            <div className='table'>
                <div className='table-row table-head'>
                    <div className='table-cell'>Racers name</div>
                    <div className='table-cell'>Team</div>
                    <div className='table-cell'>Total</div>

                </div>
                {racers.sort((a, b) => b.totalPoints - a.totalPoints).map(racer =>
                    <RacerInfo
                        key={racer.id}
                        {...racer}
                    />
                )}
            </div>
        )
    }
}

RacersList.propTypes = {
    racers: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired).isRequired
};