import { AccountInfo } from "api/commands";
import { useCommand } from "api/hooks";
import { isLoaded } from "api/utils";
import React from "react";
import { useStore } from "store/hooks";
import { ensureArray } from "utils/general";
import { useForkedState } from "utils/hooks/general";
import useStyles from "./styles";

type AccountFavContactsProps = {

}

const AccountFavContacts = (props: AccountFavContactsProps) => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount ?? null);


    return <div className={classes.root}>
        {
            ensureArray(currentAccount?.friends)
                .filter(c => c.favorite)
                .map(c => <AccountContactBadge {...c} />)
        }
    </div>
}

type AccountContactBadgeProps = {
    account_id: string;
    favorite: boolean;
    last_contacted?: string;
}

const AccountContactBadge = (props: AccountContactBadgeProps) => {
    const classes = useStyles();
    const accountRq = useCommand(AccountInfo, props.account_id);
    const [account] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountRq);

    if (!account) return null; // TODO: Add loader...

    return <img className={classes.image} src={account.avatar_url} alt="avatar" />
}

export default AccountFavContacts