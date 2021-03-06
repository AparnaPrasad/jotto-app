import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    return <div data-test-id='guessed-words-component-id'>

    </div>
} 

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired ,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}
export default GuessedWords;