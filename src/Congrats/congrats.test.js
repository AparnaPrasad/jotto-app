import React from 'react';
import { findByAttribute, checkProps } from '../TestUtils';
import { shallow } from 'enzyme';
import Congrats from './Congrats';

const defaultProps = {
    success: true
}

const renderComponent = (props = {}, state = null) => {
    const setupProps = {
        ...defaultProps,
        ...props
    }

    const wrapper = shallow(<Congrats {...setupProps} />);
    if (state) {
        wrapper.setState(state)
    }
    return wrapper;
}

describe('should render the component and all of its elements', () => {
    it('should render the component without error', () => {
        const wrapper = renderComponent({ success: true });
        const congratsComponent = findByAttribute(wrapper, 'congrats-component-id');
        expect(congratsComponent.length).toBe(1)
    })

    it('should render success text when success prop is true', () => {
        const wrapper = renderComponent({success: true});
        const congratsComponent = findByAttribute(wrapper, 'success-display-element-id');
        expect(congratsComponent.length).toBe(1)
    })

    it('should not render success text when success prop is true', () => {
        const wrapper = renderComponent({ success: false });
        const congratsComponent = findByAttribute(wrapper, 'success-display-element-id');
        expect(congratsComponent.length).toBe(0)
    })

    test('does not throw warning with expected props', () => {
        const expectedProps = { success: false };
        checkProps(Congrats, expectedProps);
    })
})