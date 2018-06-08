import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import '../styles/Forms.css';

export class AdditionRace extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            serialNumber: 100
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

        addRace(inputValue, this.state.serialNumber);

        this.setState({
            serialNumber: ++this.state.serialNumber
        });

        this.input.value = '';
    };

    isValidVenue = value => {
        return value.trim() && value.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);
    };

    render() {
        return (
            <div className='form-right'>
                <div className='header'>Create race</div>
                <form>
                    <div className='input-field__wrapper'>
                        <input type='text'
                               className='input-field'
                               required
                               ref={node => this.input = node}/>
                        <span className="input-highlight"></span>
                        <span className="input-bar"></span>
                        <label className='input-field__placeholder'>Venue</label>
                    </div>
                    <div className='title-wrapper'>
                        <div className='title'>Serial number:</div>
                        <div className='title-value title'>{this.state.serialNumber}</div>
                    </div>
                </form>

                <SubmitButton active={true}
                              buttonText='Create Race'
                              onClick={this.handleInput}/>
            </div>
        )
    }
}

AdditionRace.propTypes = {
    addRace: PropTypes.func.isRequired
};
