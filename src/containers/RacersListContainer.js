import {RacersList} from '../components/racersList/RacersList';
import {scoreRatio} from '../constants/scoreRatio';
import {connect} from 'react-redux';

function setRacersPoints(racers, races) {
    const racersWithTotalPoints = racers.map(racer => ({
        ...racer,
        totalPoints: calculateRacersTotal(racer.fullName, races)
    }));

    return racersWithTotalPoints;
};

function calculateRacersTotal(racerName, races) {
    let totalPoints = 0;

    races.forEach(race => {
        race.racersPositions.forEach(item => {
            if (item.racersName === racerName) {
                totalPoints = scoreRatio.hasOwnProperty(item.position)
                    ? totalPoints + scoreRatio[item.position]
                    : totalPoints;
            }
        })
    });

    return totalPoints;
};

const mapStateToProps = state => ({
    racers: setRacersPoints(state.racers, state.races).sort((a, b) => b.totalPoints - a.totalPoints)
});

export default connect(
    mapStateToProps,
    null
)(RacersList)