import React from 'react';
import PropTypes from 'prop-types';
import RacersListRow from './RacersListRow';
import '../../styles/RacersList.less';

export class RacersList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {racers} = this.props;

        return (
            <div className='table table-left'>
                <div className='table-row table-head'>
                    <div className='table-cell'>Racers name</div>
                    <div className='table-cell'>Team</div>
                    <div className='table-cell'>Total</div>

                </div>
                {racers.sort((a, b) => b.totalPoints - a.totalPoints).map(racer =>
                    <RacersListRow
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
        id: PropTypes.string.isRequired
    }).isRequired).isRequired
};