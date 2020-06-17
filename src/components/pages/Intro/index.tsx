import React, { useState, useCallback } from "react";
import { useLittera } from "react-littera";
import useStyles from "./styles"
import translations from "./trans"
import IntroView from "./IntroView";

import intro00 from "assets/intro00.svg";
import intro01 from "assets/intro01.svg";
import intro02 from "assets/intro02.svg";

import { useHistory } from "react-router-dom";

/**
 * Home page component.
 */
const Intro = () => {
    // history.push("/path");
    const history = useHistory();
    const [translated] = useLittera(translations);
    const classes = useStyles();

    // Controls the active part.
    const [activePart, setActivePart] = useState<number>(0);
    

    const handleNext = useCallback(() => {
        // To get the correct result, I'm looking up activePart (ap) passed to setActivePart method instead of using the in scope state variable.
        setActivePart(ap => { 

            // Handle end of intro by navigating to login screen.
            if(ap === 2) {
                history.push("/login");
                // ? Changing value here after navigating might result in a memory leak as the Intro component is then unmounted. Move outside setActivePart and use "activePart" variable instead of "ap" to prevent state change.
                return ap;
            }

            // Increment activePart.
            return ap+1;
        });
    }, [setActivePart, history]);

    const handlePrev = useCallback(() => {
        setActivePart(ap => {

            if(ap === 0) {
                history.push("/login");
                return ap;
            }

            return ap-1;
        });
    }, [setActivePart, history]);

    return <div className={classes.root}>
        <IntroView activePart={activePart} partId={0} onNext={handleNext} onPrev={handlePrev} image={intro00} title={translated.firstTitle} description="Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse." />
        <IntroView activePart={activePart} partId={1} onNext={handleNext} onPrev={handlePrev} image={intro01} title={translated.secondTitle} description="Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse." />
        <IntroView activePart={activePart} partId={2} onNext={handleNext} onPrev={handlePrev} image={intro02} title={translated.thirdTitle} description="Sunt labore do deserunt consectetur fugiat. Eu dolor laborum elit non id amet Lorem aliqua velit. Elit in cillum elit magna incididunt esse." />
    </div>
}

export default Intro;