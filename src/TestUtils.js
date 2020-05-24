import checkPropTypes from 'check-prop-types';
export const findByAttribute = (wrapper, id) => {
    return wrapper.find(`[data-test-id="${id}"]`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}