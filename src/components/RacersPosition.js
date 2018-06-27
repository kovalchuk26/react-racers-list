import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './common/SubmitButton';
import styles from '../styles/HomePage.css';
import formStyles from '../styles/Forms.css';

export class RacersPosition extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.createState(props.lastRace.racersPositions);
    }

    createState(racersPositions) {
        const reducedRacers = racersPositions.reduce((currentState, racer) => {
            return Object.assign(currentState, {
                [racer.racersName]: racer.position.toString()
            });
        }, {});

        return Object.assign({}, reducedRacers, {
            selectedRacer: racersPositions[0].racersName

        });
    }

    componentWillReceiveProps(nextProps) {
        const newReducedRacers = this.createState(nextProps.lastRace.racersPositions);
        const newState = Object.assign({}, newReducedRacers, {
            selectedRacer: this.state.selectedRacer
        });

        this.setState(newState);
    }

    submit = () => {
        const {setRacersPosition} = this.props;

        setRacersPosition(this.createActionPayload());
    };

    createActionPayload() {
        let racersPositions = [];

        for (let racer in this.state) {
            if (racer !== 'selectedRacer') {
                racersPositions.push({
                    racersName: racer,
                    position: this.state[racer]
                })
            }
        }

        return racersPositions;
    }

    handleSelectChange = event => {
        const target = event.target;
        const value = target.value;

        this.setState({
            selectedRacer: value
        })
    };

    handleInputChange = event => {
        const target = event.target;
        const inputValue = target.value;
        const validValue = this.isValidPosition(inputValue)
            ? inputValue
            : '';

        this.setState(prevState => ({
            [prevState.selectedRacer]: validValue
        }))
    };

    isValidPosition = value => {
        return value.trim() && value.match(/^[1-9]\d*$/);
    };

    render() {
        const {racers, lastRace} = this.props;

        return (
            <div className={styles.section}>
                <form className={formStyles.form}>

                    <div className={formStyles.row}>
                        <div className={formStyles.header}>Set racers positions</div>
                    </div>

                    <div className={formStyles.columns}>

                        <div className={formStyles.column}>
                            <div className={formStyles.row}>
                                <div className={formStyles.columnsContent}>
                                    <div className={formStyles.title}>Races venue:</div>
                                </div>
                                <div className={formStyles.columnsContent}>
                                    <div className={formStyles.titlesValue}>{lastRace.venue}</div>
                                </div>
                            </div>

                            <div className={formStyles.row}>
                                <div className={formStyles.columnsContent}>
                                    <div className={formStyles.title}>Serial number:</div>
                                </div>
                                <div className={formStyles.columnsContent}>
                                    <div className={formStyles.titlesValue}>{lastRace.serialNumber}</div>
                                </div>
                            </div>
                        </div>

                        <div className={formStyles.column}>
                            <div className={formStyles.selectInRow}>
                                <div className={formStyles.columnsContent}>
                                    <div className={formStyles.title}>Racer:</div>
                                </div>

                                <div className={formStyles.columnsContent}>

                                    <div className={formStyles.select}>
                                        <select
                                            className={formStyles.selectField}
                                            name="racersName"
                                            id=""
                                            value={this.state.selectedRacer}
                                            onChange={this.handleSelectChange}>
                                            {racers.map(racer => {
                                                return <option key={racer.id}>{racer.fullName}</option>
                                            })}
                                        </select>
                                    </div>

                                </div>

                            </div>

                            <div className={formStyles.row}>
                                <div className={formStyles.input}>
                                    <input name='racersPosition'
                                           className={formStyles.inputField}
                                           type="text"
                                           required
                                           value={this.state[this.state.selectedRacer]}
                                           onChange={this.handleInputChange}/>
                                    <span className={formStyles.inputBar}></span>
                                    <label className={formStyles.inputsPlaceholder}>Position</label>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={formStyles.row}>
                        <SubmitButton active={true}
                                      buttonText='Set Positions'
                                      onClick={this.submit}/>
                    </div>
                </form>
            </div>
        )
    }
}

RacersPosition.propTypes = {
    racers: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string.isRequired,
        team: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired).isRequired,
    lastRace: PropTypes.shape({
        serialNumber: PropTypes.number.isRequired,
        venue: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        racersPositions: PropTypes.arrayOf(PropTypes.shape({
            racersName: PropTypes.string.isRequired,
            position: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]).isRequired
        })).isRequired
    }),
    setRacersPosition: PropTypes.func.isRequired
};