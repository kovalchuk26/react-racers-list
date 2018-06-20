import {connect} from 'react-redux';
import {RacersPosition} from '../components/RacersPosition';
import {setRacersPosition} from '../actions';

const mapStateToProps = state => ({
    racers: state.racers,
    lastRace: state.races[state.races.length - 1]
});

const mapDispatchToProps = dispatch => ({
    setRacersPosition: (racersPositions) => dispatch(setRacersPosition(racersPositions))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RacersPosition)