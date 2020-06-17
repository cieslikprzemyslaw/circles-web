import React, { useEffect, useRef } from 'react';
import logo from "assets/circles-logo.svg";
//import translations from "./trans";
import useStyles from "./styles";
//import {useLittera} from "react-littera"
import Flex from 'components/utils/Flex';
import { useHistory } from 'react-router-dom';
import { useStore, useDispatch } from 'store/hooks';
import { useStorage } from 'storage/hooks';
import { AccountInfo } from 'api/commands';
import { useCommand } from 'api/hooks';
import { useForkedState } from 'utils/hooks/general';
import { isLoaded } from 'api/utils';
import { setCurrentAccount } from 'store/actions';

const Splash = () => {
    const history = useHistory();
    const classes = useStyles();
    //const [translated] = useLittera(translations);

    const dispatch = useDispatch();
    const timeoutRef = useRef<any>();

    const currentAccount = useStore(state => state.currentAccount);
    const currentAccountId = useStorage(storage => storage.currentAccountId);

    const accountRq = useCommand(AccountInfo, currentAccountId);
    const [account] = useForkedState(rq => isLoaded(rq) ? rq.data : null, accountRq);

    console.log("Current Account =>", currentAccount)
    console.log("Current Account Id =>", currentAccountId)
    console.log(history.location.pathname)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            history.push("/intro");
        }, 5000);

        return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(account && !currentAccount) {
            dispatch(setCurrentAccount(account));
            clearTimeout(timeoutRef.current);
            history.push("/home")
        }
    }, [account, dispatch, currentAccount, history]);

    return <Flex alignItems="center" justifyContent="center" width="100%" height="100vh">
            <img src={logo} alt="logo" className={classes.logo} />
        </Flex>
}

export default Splash;