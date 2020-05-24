import React from 'react';
import PropTypes from 'prop-types';
const Congrats = ({ success }) => {
    if (success) {
        return (<div data-test-id='congrats-component-id'>
            <div data-test-id='success-display-element-id'>
                Congrats! You guess the word right!
            </div>
        </div>)
    }
    return <div data-test-id='congrats-component-id'>
    </div>
    
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;