import { useContext, useRef, useMemo } from "react"
import { StoreContext, IState } from "./context";
import { reduceState } from "./reducer";

/**
 * Access Store variables.
 * @param stateFn Callback providing Store state.
 * @example const myValue = useStore(state => state.myValue);
 */
export const useStore = <T>(stateFn: (state: IState) => T) => {
    const context = useContext(StoreContext);

    return useMemo(() => stateFn(context[0]), [context, stateFn]);
}

export type StoreAction<T=any> = { type: string, payload?: T }

/**
 * Returns dispatch method for Store.
 * @example 
 * const dispatch = useDispatch();
 * ...
 * dispatch({ type: "ACTION_NAME", payload: "changes" });
 */
export const useDispatch = () => {
    const context = useContext(StoreContext);

    const ref = useRef(<T=any>(action: StoreAction<T>) => {
        console.log("📁", action.type, "=>", action.payload);
        reduceState(context[1], action)
    });

    return ref.current;
}