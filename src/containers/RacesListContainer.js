import {RacesList} from '../components/racesList/RacesList';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    races: state.races.map(race => ({
        venue: race.venue,
        racesCount: race.racersPositions.length,
        serialNumber: race.serialNumber,
        id: race.id
    }))
});

export default connect(mapStateToProps, null)(RacesList)
