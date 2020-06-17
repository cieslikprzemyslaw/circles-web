import React from "react";
import { IAccount } from "types";

export interface IState {
    currentAccount?: IAccount;
}

export const INITIAL_STATE: IState = Object.freeze({
    currentAccount: undefined,
})

/**
 * Our holy Store!
 */
export const StoreContext = React.createContext<[IState, React.Dispatch<React.SetStateAction<IState>>]>([INITIAL_STATE, () => {}]);