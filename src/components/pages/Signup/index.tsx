import React, { useState } from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Button, TextField, Typography, Fab, Icon, Backdrop, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Flex from "components/utils/Flex";
import signImage from "assets/celebration.svg";
import waveAsset from "assets/wave.svg";
import { signUpWithCredentials } from "api/auth";
import { Alert, AlertTitle } from '@material-ui/lab';
import { useStorageSetter } from "storage/hooks";

// TODO: Translations...?

/**
 * Login page component.
 */
const Signup = () => {
    const history = useHistory();
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const storageSetter = useStorageSetter();

    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrorMsg("");
        setIsLoading(true)

        if (!isLoading) {
            const email = emailInput;
            const password = passwordInput;
            const confirmPassword = confirmPasswordInput;

            if (confirmPassword !== password) {
                setErrorMsg("Passwords are not identical.");
                setIsLoading(false);
                return;
            }

            if (password.length < 13) {
                setErrorMsg("Password is too short.");
                setIsLoading(false);
                return;
            }

            signUpWithCredentials(email, password).then(async (result: any) => {
                console.log("Result =>", result);

                /*const acc = await dispatchCommand(AccountCreate, { email: emailInput, password: passwordInput });
                console.log("Account Data =>", acc);
                if(acc.status === 200) {
                    storageSetter("currentAccountId", acc.data.account_id);
                    
                    console.log("All success! Fuck yea!");
                    history.push("/welcome");
                } else if(acc.status === 404) {
                    // TODO: Account not found!
                    setErrorMsg("Account not found!");
                }*/
                result?.user?.uid && storageSetter("accountIdToken", result.user.uid)

                history.push("/welcome");

            }).catch(err => {
                setErrorMsg(err.message);
                setIsLoading(false);
            });
        }
    }

    const handleInputChange = (inputName: string) => (event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // @ts-ignore
        const newValue = event?.target?.value ?? "";
        if (!isLoading) {
            if (inputName === "email") setEmailInput(newValue);
            if (inputName === "password") setPasswordInput(newValue);
            if (inputName === "password-confirm") setConfirmPasswordInput(newValue);
        }

    }

    const handleBack = () => {
        history.push("/login");
    }

    return <div style={{ width: "100%" }}>

        <div className={classes.imgContainer}>
            <img className={classes.signImage} src={signImage} alt="signImage" />
            <img className={classes.wave} src={waveAsset} alt="" />
        </div>


        <Flex justifyContent="center" width="100%" className={classes.root}>
            <div className={classes.container}>
                <Typography variant="h3" paragraph>
                    {translated.title}
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Flex className={classes.inputWrapper} flexDirection="column">
                        <TextField style={{ marginBottom: "15px" }} id="email-input" value={emailInput} onChange={handleInputChange("email")} type="email" label="E-mail" variant="outlined" />
                        <TextField style={{ marginBottom: "15px" }} id="password-input" value={passwordInput} onChange={handleInputChange("password")} type="password" label="Password" variant="outlined" />
                        <TextField style={{ marginBottom: "15px" }} id="confirm-password-input" value={confirmPasswordInput} onChange={handleInputChange("password-confirm")} type="password" label="Confirm password" variant="outlined" />
                    </Flex>

                    {errorMsg && <Alert style={{ margin: "10px 0" }} severity="error">
                        <AlertTitle>Upps...</AlertTitle>
                        {errorMsg}
                    </Alert>}

                    <Flex justifyContent="space-between">
                        <Button onClick={handleBack} color="primary" type="button">Login</Button>
                        <Fab color="primary" aria-label="add" type="submit">
                            <Icon style={{ color: "white" }}>keyboard_arrow_right</Icon>
                        </Fab>
                    </Flex>

                </form>
            </div>
        </Flex>
        <Flex className={classes.footerWrapper} alignItems="center" justifyContent="flex-end" height="42px">
            <Typography align="right"></Typography>
        </Flex>
        {!isLoading ? null :
            <Backdrop open={true} style={{ zIndex: 5 }}>
                <CircularProgress color="primary" />
            </Backdrop>}

    </div>
}

export default Signup;