import React, { useState } from "react";
import { StoreContext, IState, INITIAL_STATE } from "./context";


type StoreProviderProps = {
    children: JSX.Element;
    initialState?: IState
}

/**
 * React component providing Store context.
 */
const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const [value, setValue] = useState<IState>(initialState ?? INITIAL_STATE);

    return <StoreContext.Provider value={[value, setValue]}>
        {children}
    </StoreContext.Provider>
}

export default StoreProvider;