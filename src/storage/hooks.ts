import { IStorage, setLocalStorageValue } from "./storage";
import React, { useRef } from "react";
import { useSignal } from "utils/hooks/general";

/**
 * Access Local Storage variables.
 * @param storageFn Callback providing Local Storage state.
 * @example const myValue = useStorage(storage => storage.myValue);
 */
export const useStorage = <T>(storageFn: (storage: IStorage) => T) => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return React.useCallback(() => storageFn(localStorage as IStorage), [localStorage]);
}

/**
 * Returns local storage value setter.
 * @example
 * const storageSetter = useStorageSetter();
 * ...
 * storageSetter("currentAccountId", "tester");
 */
export const useStorageSetter = () => {
    const signal = useSignal();
    const ref = useRef((key: keyof IStorage, value: string) => {
        
        setLocalStorageValue(key, value);
        signal();
    });

    return ref.current;
}