import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByAttribute } from '../TestUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{
        guessedWord: 'mango',
        letterMatchCount: 3
    }]
}

const renderComponent = (props={}, state=null) => {
    const propsSetUp = {
        ...defaultProps,
        ...props
    }
    const wrapper = shallow(<GuessesWords {...propsSetUp} />)
    if (state) {
        wrapper.setState(state)
    }
    return wrapper;
}



test('proptypes does not throw error', () => {
    checkProps(GuessedWords, defaultProps)
})

describe(("test guessed words when there are no guessed words"),() => {
    let wrapper;
    beforeEach(() => {
        wrapper = renderComponent({ guessedWords: [] })
    });

    test('renders without error', () => {
        const component = findByAttribute(wrapper, 'guessed-words-component-id')
        expect(component.length).toBe(1)
    });

    test('renders instruction to guess words', () => {
        const guessPrompt = findByAttribute(wrapper, 'guess-instructions-element-id')
        expect(guessPrompt.text().length).not.toBe(0)
    });
})
