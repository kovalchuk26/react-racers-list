import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './common/SubmitButton';

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
            <div className='section'>
                <form className='form-container'>

                    <div className='form-row'>
                        <div className='header'>Create race</div>
                    </div>

                    <div className='form-row'>
                        <div className='input-field__wrapper'>
                            <input type='text'
                                   className='input-field'
                                   required
                                   ref={node => this.input = node}/>
                            <span className="input-bar"></span>
                            <label className='input-field__placeholder'>Venue</label>
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='form-content-column'>
                            <div className='title'>Serial number:</div>
                        </div>
                        <div className='form-content-column'>
                            <div className='title-value title'>{this.state.serialNumber}</div>
                        </div>
                    </div>

                    <div className='form-row'>
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
