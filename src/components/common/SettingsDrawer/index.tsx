// Deps scoped imports.
import React, { useEffect } from "react";
import { Drawer, IconButton, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close"
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import { useDispatch, useStore } from "store/hooks";
import { setBackgroundTheme } from "store/actions";
import Flex from "components/utils/Flex";
import { backgroundThemes } from "utils/backgroundThemes";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Settings drawer component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const SettingsDrawer = (props: SettingsDrawerProps) => {
    const [translated] = useLittera(translations);
    const classes = useStyles();

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Drawer open={props.open} anchor="right" onClose={props.onClose} className={classes.drawer} keepMounted>
            <div className={classes.paperDrawer}>
                <Flex alignItems="center" justifyContent="space-between" style={{ marginBottom: "10px" }}>
                    <Typography variant="h4">{translated.title}</Typography>
                    <IconButton onClick={props.onClose}><CloseIcon /></IconButton>
                </Flex>

                <ThemeSettings />
                <VersionSettings />
            </div>
        </Drawer>
    </div>
}

const VersionSettings = () => {

    return <div style={{ margin: "20px 0" }}>
        <Typography variant="h5" gutterBottom>Version</Typography>
        <Typography>{process.env.REACT_APP_VERSION ?? "0.0.0-dev.0"}</Typography>
        <Typography>{process.env.REACT_APP_BUILD_TIME ?? new Date().toDateString()}</Typography>
    </div>
}

const ThemeSettings = () => {
    // @ts-ignore
    const bgTheme = useStore(state => state.preferences?.backgroundTheme);
    const dispatch = useDispatch();

    const setTheme = (index: number) => {

        dispatch(setBackgroundTheme(backgroundThemes[index]))
        localStorage.setItem('background-theme', backgroundThemes[index].id)
    }

    const storageId = localStorage.getItem('background-theme')
    const themeId = backgroundThemes.findIndex(el => el.id === storageId);

    if (bgTheme === null) {
        if (storageId) {
            dispatch(setBackgroundTheme(backgroundThemes[themeId]))
        } else {
            dispatch(setBackgroundTheme(backgroundThemes[0]))
        }
    }

    return <div style={{ margin: "20px 0" }}>
        <Typography variant="h5" gutterBottom>Theme</Typography>

        <Flex flexWrap="wrap">
            {backgroundThemes.map((theme, index) => <ThemePanel key={theme.id} setTheme={() => setTheme(index)} active={(bgTheme?.id?.toString() || storageId) === theme.id} {...theme} />)}
        </Flex>
    </div>
}

const ThemePanel = (props: { id: string, label: string, url: string, setTheme: () => void, active: boolean }) => {

    return <div style={{ margin: "0 5px", cursor: 'pointer' }} onClick={props.setTheme}>
        <div style={{ width: "200px", height: "125px", overflow: "hidden", borderRadius: "8px" }}>
            <img src={`${props.url}200x125`} alt="theme thumbnail" />
        </div>
        <p style={{ marginTop: "5px", fontWeight: props.active ? "bold" : "normal" }}>{props.label}</p>
    </div>
}

// Creates a hook for generating classnames.
// @ts-ignore
const useStyles = makeStyles(styles);

// Props the component accepts.
type SettingsDrawerProps = {
    className?: string;
    style?: React.CSSProperties
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// Time to export! 🚚
export default SettingsDrawer;