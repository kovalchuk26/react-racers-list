import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './common/SubmitButton';
import styles from '../styles/HomePage.css';
import formStyles from '../styles/Forms.css';

export class AdditionRace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serialNumber: null
        }
    }

    componentDidMount() {
        if (sessionStorage.hasOwnProperty('serialNumber')) {
            const valueSerialNumber = sessionStorage.getItem('serialNumber');

            this.setState({
                serialNumber: JSON.parse(valueSerialNumber) + 1
            })
        } else {
            this.setState({
                serialNumber: 100
            })
        }
    }

    // todo: add field error
    handleInput = e => {
        const {addRace} = this.props;
        const inputValue = this.input.value;

        e.preventDefault();

        if (!this.isValidVenue(inputValue)) {
            return;
        }

        sessionStorage.setItem('serialNumber', JSON.stringify(this.state.serialNumber));

        addRace(inputValue, this.state.serialNumber);

        this.input.value = '';
    };

    isValidVenue = value => {
        return value.trim() && value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);
    };

    render() {
        return (
            <div className={styles.section}>
                <form className={formStyles.form}>

                    <div className={formStyles.row}>
                        <div className={formStyles.header}>Create race</div>
                    </div>

                    <div className={formStyles.row}>
                        <div className={formStyles.input}>
                            <input type='text'
                                   className={formStyles.inputField}
                                   required
                                   ref={node => this.input = node}/>
                            <span className={formStyles.inputBar}></span>
                            <label className={formStyles.inputsPlaceholder}>Venue</label>
                        </div>
                    </div>

                    <div className={formStyles.row}>
                        <div className={formStyles.columnsContent}>
                            <div className={formStyles.title}>Serial number:</div>
                        </div>
                        <div className={formStyles.columnsContent}>
                            <div className={formStyles.titlesValue}>{this.state.serialNumber}</div>
                        </div>
                    </div>

                    <div className={formStyles.row}>
                        <SubmitButton active={true}
                                      buttonText='Create Race'
                                      onClick={this.handleInput}/>
                    </div>
                </form>
            </div>
        )
    }
}

AdditionRace.propTypes = {
    addRace: PropTypes.func.isRequired
};
