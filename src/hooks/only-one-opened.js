import { useState } from 'react';


export function useOnlyOneOpened() {
    const [openedItem, selectNewItem] = useState(null);

    const isItemOpened = itemId => itemId === openedItem;

    function toggleOpenItem(itemId) {
        return (event) => {
            if (event) {
                event.preventDefault();
            }

            selectNewItem(isItemOpened(itemId) ? null : itemId);
        };
    }

    return { toggleOpenItem, isItemOpened };
}
