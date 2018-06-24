import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/SubmitButton.less';

const SubmitButton = ({active, buttonText, onClick}) => (
    <button className='button'
            onClick={onClick}
            disabled={!active}>

        {buttonText || `OK`}
    </button>
);

SubmitButton.propTypes = {
    active: PropTypes.bool.isRequired,
    buttonText: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default SubmitButton