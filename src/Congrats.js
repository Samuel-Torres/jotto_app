import React from 'react';

/**
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} 
 */

export default (props) => {
    return (
        <div>
            {props.success ? 
                <div data-test="component-congrats">
                    <span data-test="congrats-message">
                        Congratulations! You guessed the word!
                    </span>
                </div> :
                <div data-test="component-congrats"/> 
            }
        </div>
    )
}