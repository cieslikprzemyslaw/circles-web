import React, { useEffect } from "react";
import useStyles from "./styles";
import { useCommand } from "api/hooks";
import { AccountList } from "api/commands";
import { useForkedState } from "utils/hooks/general";
import { isLoaded } from "api/utils";
import { IAccount } from "types";
import { CircularProgress, Avatar, Typography, Icon } from "@material-ui/core";
import { useStore } from "store/hooks";
import Flex from "components/utils/Flex";

type AccountPickerProps = {
    onChange: React.Dispatch<React.SetStateAction<string[]>> | React.Dispatch<React.SetStateAction<string>>;
    value: string | string[]
    multiple?: boolean;
    style?: any;
    disabled?: boolean;
}

/**
 * 
 * describe this function...
 */
const AccountPicker = (props: AccountPickerProps) => {
    const classes = useStyles();

    const currentAccount = useStore(state => state.currentAccount);

    const accountsRq = useCommand(AccountList, currentAccount?.contacts?.map(contact => contact.account_id));
    const [accounts] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountsRq)

    useEffect(() => {
        // @ts-ignore
        props.onChange((prevValue: any) => ([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (account_id: string) => {
        if(props.disabled) return;

        // TODO: Ugly code, refactor that!!
        // @ts-ignore
        props.onChange((value: any) => {
            if(props.multiple && Array.isArray(value)) {
                let arr = [...value];

                if(arr.includes(account_id)) arr.splice(value.indexOf(account_id), 1);
                else arr.push(account_id);
    
                return [...arr];
            } else {
                return value === account_id ? "" : account_id;
            }
        });
    }

    if(!accounts) return <Flex width="100%" height="60px" alignItems="center" justifyContent="center"><CircularProgress /></Flex>

    return <div className={classes.root} style={props.style}>
        {
            accounts.map((account: IAccount) =>
                <SingleAccount key={account.id} account={account} onClick={(account_id) => handleChange(account_id)} selected={props.value.includes(account.id)} /> )
        }
    </div>
}

/**
 * 
 * Describe this function...
 */
const SingleAccount = ({ account, onClick, selected }: { account: IAccount, onClick: (account_id: string) => void, selected: boolean }) => {

    const handleClick = () => {
        onClick(account.id);
    }

    return <Flex style={{paddingTop: "12px", cursor: "pointer"}} onClick={handleClick} justifyContent="flex-start" alignItems="center">
            <Avatar 
                style={{width: "54px", height: "54px", backgroundColor: selected ? "green" : "initial"}} 
                alt={account.label}  
                src={selected ? undefined : account.avatar_url }>
                    {selected ? <Icon>check</Icon> : account.label}
                </Avatar>

            <div style={{margin: "0 0 0 20px"}}>
                <Typography style={{margin: "0"}} variant="h6">{account.label}</Typography>
                <Typography style={{margin: "0", opacity: ".6"}}>{account.email}</Typography>
            </div>
        </Flex>
}

export default AccountPicker;