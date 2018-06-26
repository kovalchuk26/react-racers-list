import RaceInfo from '../components/racesList/RaceInfo'
import {connect} from 'react-redux';

const setRacersIds = (racers, racersPositions) => {
    return racersPositions.map(racer => {
        return {
            ...racer,
            id: racers.find(item => item.fullName === racer.racersName).id,
            position: racer.position || '-'
        }
    }) || []
};

const getNeededRacersPositions = (races, id) => {
    return races.find(race => id === race.id).racersPositions;
};

const mapStateToProps = (state, ownProps) => ({
    racersPositions: setRacersIds(
        state.racers,
        getNeededRacersPositions(state.races, ownProps.match.params.id)
    )
});

export default connect(mapStateToProps, null)(RaceInfo)

