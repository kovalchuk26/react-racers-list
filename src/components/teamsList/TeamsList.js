import React from 'react';
import PropTypes from 'prop-types';
import TeamsListRow from './TeamsListRow';

export class TeamsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {teams} = this.props;

        return (
            <div className='table table-right'>
                <div className='table-row table-head'>
                    <div className='table-cell'>Team</div>
                    <div className='table-cell'>Total</div>

                </div>
                {teams.sort((a, b) => b.totalPoints - a.totalPoints).map(team =>
                    <TeamsListRow
                        key={team.id}
                        {...team}
                    />
                )}
            </div>
        )
    }
}

TeamsList.propTypes = {
    teams: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        totalPoints: PropTypes.number.isRequired
    }).isRequired).isRequired
};