import RaceInfo from '../components/RaceInfo'
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    racers: state.racers.map(racer => ({
        fullName: racer.fullName,
        id: racer.id
    })),
    racersPositions: state.races.find(race => ownProps.match.params.id === race.id).racersPositions || []
});

export default connect(mapStateToProps, null)(RaceInfo)

