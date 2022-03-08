import { Dispatch, SetStateAction, useEffect, useState } from "react";
import storage from "local-storage-fallback";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const storageValue = window.localStorage.getItem(key);
        if (storageValue !== null) {
            setState(JSON.parse(storageValue));
        }
    }, [key]);

    useEffect(() => {
        storage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
