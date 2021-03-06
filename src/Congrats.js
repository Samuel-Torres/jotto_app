import React from 'react';
import PropTypes from 'prop-types';

/**
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} 
 */

const Congrats = (props) => {
    return (
        <div>
            {props.success ? 
                <div data-test="component-congrats" className="alert alert-success">
                    <span data-test="congrats-message">
                        Congratulations! You guessed the word!
                    </span>
                </div> :
                <div data-test="component-congrats"/> 
            }
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;