import {RacesList} from '../components/racesList/RacesList';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    races: state.races.map(race => ({
        venue: race.venue,
        serialNumber: race.serialNumber,
        racesCount: race.racersPositions.length,
        id: race.id
    }))
});

export default connect(mapStateToProps, null)(RacesList)
