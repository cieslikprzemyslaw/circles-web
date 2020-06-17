import React from "react";
import { Button, Typography, Icon, useTheme } from "@material-ui/core";
import Flex from "components/utils/Flex";
import useStyles from "./styles";

type IntroViewProps = {
    partId: number;
    activePart: number;
    
    title: string;
    description: string;
    image: any;
    
    onNext: () => void;
    onPrev: () => void;
}

const IntroView = (props: IntroViewProps) => {
    const classes = useStyles();

    // Prevent rendering if not active.
    if(props.activePart !== props.partId) return null;

    // TODO: Add translations.
    const prevButtonText = props.partId === 0 ? "Skip" : "Back";
    const nextButtonText = props.partId === 2 ? "Continue" : "Next";

    return <div className={classes.introViewRoot} style={{height: "100vh"}}>
        <Flex flexDirection="column" alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" height="90vh" alignItems="center" justifyContent="center">
                {/* Image */}
                <Flex alignItems="center" justifyContent="center">
                    <img src={props.image} alt={props.title} style={{maxWidth: "300px", height: "auto"}} />
                </Flex>

                {/* Content */}
                <Flex className={classes.introViewContentWrapper} alignItems="center" justifyContent="center" flexDirection="column">
                    <Typography variant="h2">{props.title}</Typography>
                    <Typography align="center" paragraph >{props.description}</Typography>
                </Flex>
            </Flex>

            {/* Actions */}
            <Flex justifyContent="space-evenly" height="10vh" alignItems="center" width="60%">
                <Button onClick={props.onPrev}>{prevButtonText}</Button>
                <ProgressIcons activePart={props.activePart} />
                <Button variant="contained" color="primary" onClick={props.onNext}>{nextButtonText}</Button>
            </Flex>
        </Flex>
        
        
        
        </div>
}

const ProgressIcons = ({activePart} : {activePart: number}) => {
    
    return  <Flex justifyContent="center" alignItems="center">
                <ProgressIcon active={activePart >= 0} />
                <ProgressIcon active={activePart >= 1} />
                <ProgressIcon active={activePart >= 2} />
            </Flex>
}

const ProgressIcon = ({active}: {active: boolean}) => {
    const theme = useTheme();

    return <Icon style={{ opacity: active ? 1 : 0.15, fontSize: "14px", color: active ? theme.palette.primary.main : "#000" }}>lens</Icon>;
}

export default IntroView;
