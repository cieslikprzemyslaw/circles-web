import React, { useEffect } from 'react';
import logo from "assets/circles-logo.svg";
import useStyles from "./styles";
import Flex from 'components/utils/Flex';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'store/hooks';
import { useStorage } from 'storage/hooks';
import { AccountInfo, AccountLogin } from 'api/commands';
import { useCommand } from 'api/hooks';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from 'api/utils';
import { setCurrentAccount } from 'store/actions';
import { useDispatchCommand } from 'api/methods';

const Splash = () => {
    const history = useHistory();
    const classes = useStyles();

    const dispatch = useDispatch();
    const dispatchCommand = useDispatchCommand();

    const accountIdToken = useStorage(storage => storage.accountIdToken);

    // TODO: Prevent execution of AccountLogin if accountIdToken is null or undefined.
    const accountIdRq = useCommand(AccountLogin, accountIdToken);
    const [account_id] = useForkedState(rq => { if(isLoaded(rq) && rq?.status === 404) history.push("/intro"); return isLoaded(rq) ? rq?.data?.account_id ?? null : null }, accountIdRq);

    useEffect(() => {
        if(!accountIdToken) {
            history.push("/intro");
            return;
        }

        const fn = async () => {
            if(account_id) {
                const accountInfo = (await dispatchCommand(AccountInfo, account_id, true));
                if(accountInfo.status === 200) {
                    dispatch(setCurrentAccount(accountInfo.data));

                    if(accountInfo.data?.flags?.includes("needs_init")) {
                        history.push("/welcome")
                    } else {
                        history.push("/home")
                    }
                } else {
                    history.push("/intro")
                }
            }
        }
        fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account_id]);

    return <Flex alignItems="center" justifyContent="center" width="100%" height="100vh">
            <img src={logo} alt="logo" className={classes.logo} />
        </Flex>
}

export default Splash;