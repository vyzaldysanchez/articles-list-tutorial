import { useState } from 'react';

export function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);

    function toggleValue(event) {
        if (event) {
            event.preventDefault();
        }

        setValue(!value);
    }

    return [value, toggleValue];
}
