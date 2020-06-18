import { IAccount } from "types";

/**
 * Set current account.
 * @param payload Account info.
 * @see api/commans/AccountInfo
 */
export const setCurrentAccount = (payload: IAccount | null) => {
    return ({ type: "SET_CURRENT_ACCOUNT", payload });
}