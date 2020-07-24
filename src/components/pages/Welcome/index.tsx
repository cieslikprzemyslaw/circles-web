import React, { useState } from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import { Typography } from "@material-ui/core";
import { useStore, useDispatch } from "store/hooks";
import { TextField } from '@material-ui/core';
import Flex from "components/utils/Flex";
import Button from '@material-ui/core/Button';
import waveAsset from "assets/wave.svg";
import personalInformationImage from "assets/personal.svg";
import { useDispatchCommand } from "api/hooks";
import { AccountChange, AccountInfo } from "api/commands";
import { setCurrentAccount } from "store/actions";
import { useHistory } from "react-router-dom";

type EditableField = "label" | "name" | "surname";

/**
 * Welcome page component.
 */
const Welcome = () => {
    const history = useHistory();
    const translated = useLittera(translations);
    const classes = useStyles();

    const dispatchStore = useDispatch();
    const dispatchCommand = useDispatchCommand();
    const currentAccount = useStore(state => state.currentAccount);

    const [labelField, setLabelField] = useState(currentAccount?.label ?? "");
    const [nameField, setNameField] = useState(currentAccount?.name ?? "");
    const [surnameField, setSurnameField] = useState(currentAccount?.surname ?? "");

    const handleChange = (event: any) => {
        const field = (event?.target?.id ?? "") as EditableField;
        const value = event?.target?.value ?? "";

        switch(field) {
            case "label":
                setLabelField(value)
                break;
            case "name":
                setNameField(value)
                break;
            case "surname":
                setSurnameField(value)
                break;
            // ...
        }
    }

    const handleSubmit = async () => {

        if(labelField && nameField && surnameField) {
            const changeRq = await dispatchCommand(AccountChange, currentAccount?.id || "", { label: labelField, name: nameField, surname: surnameField });

            if(changeRq.status === 204) {
                const account = await dispatchCommand(AccountInfo, currentAccount?.id || "", true);

                if(account.status === 200) {
                    dispatchStore(setCurrentAccount(account.data));
                }

                history.push("/home");
            }
        } else {
            // TODO: Error message and Alert component!
            alert("Implement error handling!");
        }
    }

    return <div>
        <div className={classes.imgContainer}>
            <img className={classes.personalImage} src={personalInformationImage}  alt="PersonalInformation"/>
            <img className={classes.wave} src={waveAsset}  alt="wave"/>
        </div>
            <div className={classes.root}>

            <Typography className={classes.welcomeTitle} variant="h2">{translated.title} {currentAccount?.label}</Typography>
            
            <Typography style={{opacity: "0.7", marginBottom: "35px"}} paragraph>Here you need to provide us with some data about you. Name, Surname etc.</Typography>
            
            <Typography style={{paddingBottom: "16px"}} variant="h4">Personal information</Typography>
            <Flex flexDirection="column" className={classes.inputWrapper}>        
                <TextField style={{ marginBottom: "15px" }} id="label" label="Label" variant="outlined" value={labelField} onChange={handleChange} />
                <TextField style={{ marginBottom: "15px" }} id="name" label="Name" variant="outlined" value={nameField} onChange={handleChange} />
                <TextField style={{ marginBottom: "15px" }} id="surname" label="Surname" variant="outlined" value={surnameField} onChange={handleChange} />
            </Flex>

                <Button style={{color: "white", float: "right", marginBottom: "15px"}} variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
            
        </div>

    </div>
}

export default Welcome;