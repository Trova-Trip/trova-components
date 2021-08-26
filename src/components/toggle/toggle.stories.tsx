import React, { useState, SyntheticEvent } from 'react';

import Toggle from './toggle';

export default {
    title: 'Toggle',
    component: Toggle,
};

export const ActiveToggle = () => <Toggle name="test" value={true} />;

export const ControlledToggleWithLabel = () => {
    const [state, setState] = useState(true);
    return (
        <Toggle
            name="test"
            value={state}
            label="Form header"
            detail="Confirm all bookings"
            onChange={(_: SyntheticEvent, __: string, value: boolean) => {
                setState(value);
            }}
        />
    );
};

export const InactiveToggle = () => (
    <Toggle name="test" label="Form header" detail="Confirm all bookings" />
);

export const DisabledToggle = () => (
    <Toggle
        name="test"
        label="Form header"
        detail="Confirm all bookings"
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const SingleError = () => (
    <Toggle
        name="test"
        error="Toggle should not be selected"
        label="Form header"
        value={false}
    />
);

export const MultipleErrors = () => (
    <Toggle
        name="test"
        error={['Toggle should be selected', 'Input must be numeric']}
        label="Form header"
    />
);
