import React, { useEffect } from 'react';
import logo from "assets/circles-logo.svg";
import useStyles from "./styles";
import Flex from 'components/utils/Flex';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'store/hooks';
import { useStorage } from 'storage/hooks';
import { AccountInfo, AccountLogin } from 'api/commands';
import { setCurrentAccount } from 'store/actions';
import { useDispatchCommand } from 'api/hooks';

const Splash = () => {
    const history = useHistory();
    const state = history.location.state as { initialPath?: string };

    const classes = useStyles();

    const dispatch = useDispatch();
    const dispatchCommand = useDispatchCommand();

    const accountIdToken = useStorage(storage => storage.accountIdToken);
    
    useEffect(() => {
        if(!accountIdToken) {
            history.push("/intro");
            return;
        }
        
        const fn = async () => {
            const accountLogin = await dispatchCommand(AccountLogin, accountIdToken);

            const account_id = accountLogin?.data?.account_id;
            if(account_id) {
                const accountInfo = (await dispatchCommand(AccountInfo, account_id, true, true, true));
                if(accountInfo.status === 200) {
                    dispatch(setCurrentAccount(accountInfo.data));

                    if(accountInfo.data?.flags?.includes("needs_init")) {
                        history.push("/welcome")
                    } else {
                        history.push(state?.initialPath ?? "/home")
                    }
                } else {
                    history.push("/intro")
                }
            } else {
                history.push("/intro")
            }
        }
        fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Flex alignItems="center" justifyContent="center" width="100%" height="100vh">
            <img src={logo} alt="logo" className={classes.logo} />
        </Flex>
}

export default Splash;