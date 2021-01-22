import { IAccount } from "types";
import config from "config/config";
import { AccountInfo } from "api/commands";
import { Client } from "api/client";

const HOST_URL = config.host_url;
const cli = new Client(HOST_URL);

/**
 * Set current account.
 * @param payload Account info.
 * @see api/commands/AccountInfo
 */
export const setCurrentAccount = (payload: IAccount | null) => {
    return ({ type: "SET_CURRENT_ACCOUNT", payload });
}

/**
 * Update current account.
 * @param payload account_id
 * @see api/commands/AccountInfo
 */
export const updateCurrentAccount = async (account_id: string) => {
    const rq = await cli.execute(new AccountInfo(account_id, true, true, true))

    const payload: IAccount = rq.data;

    return ({ type: "SET_CURRENT_ACCOUNT", payload });
}

/**
 * Set background theme.
 * @param theme 
 */
export const setBackgroundTheme = (theme: { id: string, url: string, label: string }) => {
    return ({ type: "SET_BACKGROUND_THEME", payload: theme });
}