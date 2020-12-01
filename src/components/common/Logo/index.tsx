import { Typography, TypographyProps } from "@material-ui/core";
import useStyles from "./styles";
import React from "react";

type LogoProps = {
    typographyProps?: TypographyProps,
    style?: Object
}

const Logo = (props: LogoProps) => {
    const classes = useStyles();

    return <Typography variant="h2" className={classes.root} style={props.style} {...props.typographyProps}>Circles</Typography>
}

export default Logo;