import {TeamsList} from '../components/TeamsList';
import {scoreRatio} from '../constants/scoreRatio';
import {connect} from 'react-redux';

function setTeamsPoints(teams, racers, races) {
    const teamsPoints = calculateTeamsTotal(teams, racers, races);

    const racersWithTotalPoints = teams.map(team => ({
        ...team,
        totalPoints: teamsPoints[team.name]
    }));

    return racersWithTotalPoints;
}

function racersBindToTeam(racers) {
  let racersTeams = {};

  racers.forEach(racer => {
      racersTeams[racer.fullName] = racer.team;
  });

  return racersTeams;
}

function setInitialTeamsPoints(teams) {
    let teamsPoints = {};

    teams.forEach(team => {
        teamsPoints[team.name] = 0;
    });

    return teamsPoints;
}

function calculateTeamsTotal(teams, racers, races) {
    const racersTeams = racersBindToTeam(racers);
    let teamsPoints = setInitialTeamsPoints(teams);


    races.forEach(race => {
        race.racersPositions.forEach(item => {
            const racersTeam = racersTeams[item.racersName];
            const racersPoints = scoreRatio.hasOwnProperty(item.position)
                    ? scoreRatio[item.position]
                    : 0;

            teamsPoints[racersTeam] += racersPoints;
        })
    });

    return teamsPoints;
}

const mapStateToProps = state => ({
    teams: setTeamsPoints(state.teams, state.racers, state.races)
});

export default connect(
    mapStateToProps,
    null
)(TeamsList)