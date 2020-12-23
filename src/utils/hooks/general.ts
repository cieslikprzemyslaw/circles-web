import { useState, useRef, useEffect, useCallback } from "react";
import { useStore } from "store/hooks";
import { useHistory } from "react-router-dom";

export const useForkedState = <T extends any[], R>(fn: (...args: T) => R, ...args: T) => {
    const ref = useRef(null as unknown as [R, (value: R) => void]);
    const signal = useSignal();

    if(ref.current === null) {
        const value: R = fn(...args);
        const setState = (val: R) => { ref.current[0] = val; signal(); }

        ref.current = [ value, setState ];
    }

    useEffect(() => { 
        const value = fn(...args);

        if(ref.current[0] !== value) 
            ref.current[1](value); 
    }, [fn, args]);

    return ref.current;
}

/**
 * Redirect to page if condition met
 * @param path for redirect
 * @param condition
 */
export const useRestrictedPage = (condition: boolean, path: string = "/home" ) => {
    const history = useHistory();
    useEffect(() => {
        if (condition) 
            history.push(path)
        
    }, [condition, path, history]);
}

/**
 * Redirect to page if current account is active
 * @param path for redirect
 */
export const useRestrictedPageForCurrentAccount = (path: string = "/home") => {
    const currentAccount = useStore(state => state.currentAccount);
    useRestrictedPage(!!currentAccount, path)
}



export const useSignal = () => {
    const [, updateState] = useState();
    // @ts-ignore
    return useCallback(() => updateState({}), []);
}
