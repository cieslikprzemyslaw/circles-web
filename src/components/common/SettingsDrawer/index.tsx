// Deps scoped imports.
import React, { useState } from "react";
import { Drawer, IconButton, makeStyles } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings"
import CloseIcon from "@material-ui/icons/Close"
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import Flex from "components/utils/Flex";
import { backgroundThemes } from "utils/backgroundThemes";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";
import { useDispatch, useStore } from "store/hooks";
import { setBackgroundTheme } from "store/actions";

/**
 * Settings drawer component.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const SettingsDrawer = (props: SettingsDrawerProps) => {
    const [translated] = useLittera(translations);
    const classes = useStyles();

    const [isOpen, setIsOpen] = useState(false);
    const closeDrawer = () => setIsOpen(false);
    const openDrawer = () => setIsOpen(true);

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <Drawer open={isOpen} anchor="right" onClose={closeDrawer} className={classes.drawer} keepMounted>
            <div className={classes.paperDrawer}>
                <Flex alignItems="center" justifyContent="space-between">
                    <h2 className={classes.h2}>{translated.title}</h2>
                    <IconButton onClick={closeDrawer}><CloseIcon /></IconButton>
                </Flex>

                <ThemeSettings />
            </div>
        </Drawer>

        <IconButton onClick={openDrawer}><SettingsIcon style={{ color: "#FFF" }} /></IconButton>
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

    return <div>
        <h3>Theme</h3>

        <Flex flexWrap="wrap">
            {backgroundThemes.map((theme, index) => <ThemePanel key={theme.id} setTheme={() => setTheme(index)} active={(bgTheme?.id?.toString() || '1922729') === theme.id} {...theme} />)}
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
}

// Time to export! 🚚
export default SettingsDrawer;