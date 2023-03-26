import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedSerializedState = localStorage.getItem(key);

        if (persistedSerializedState) {
            const persistedState = JSON.parse(persistedSerializedState);

            return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};