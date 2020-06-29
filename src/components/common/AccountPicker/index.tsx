import React from "react";
import useStyles from "./styles";
import { useCommand } from "api/hooks";
import { AccountInfo } from "api/commands";
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { TContact } from "types";
import { CircularProgress } from "@material-ui/core";
import { useStore } from "store/hooks";

type AccountPickerProps = {
    onChange: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<string>>;
    value: string | string[]
    multiple?: boolean;
}

const AccountPicker = (props: AccountPickerProps) => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    const handleChange = (account_id: string) => () => {
        // @ts-ignore
        props.onChange && props.onChange((value) => {
            if(props.multiple && Array.isArray(value)) {
                if(value.includes(account_id)) return [...value].splice(value.indexOf(account_id), 1);
                return [...value, account_id];
            } else {
                return value === account_id ? "" : account_id;
            }
        });
    }

    if(!currentAccount?.contacts) return <CircularProgress />

    return <div className={classes.root}>
        {
            currentAccount?.contacts?.map((contact: TContact) => 
                <SingleAccount key={contact.account_id} contact={contact} onClick={handleChange(contact.account_id)} selected={props.value.includes(contact.account_id)} />)
        }
    </div>
}

const SingleAccount = ({ contact, onClick, selected }: { contact: TContact, onClick: () => void, selected: boolean }) => {
    const accountRq = useCommand(AccountInfo, contact.account_id);
    const [account] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountRq)

    if(!account) return <div style={{fontSize: "24px"}}>Loading...</div>;

    return <div onClick={onClick} style={{color: selected ? "#449ee2" : "black", cursor: "pointer", fontSize: "24px"}}>{account.label}</div>
}

export default AccountPicker;