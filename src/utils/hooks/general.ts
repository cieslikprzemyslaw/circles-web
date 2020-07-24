import { useState, useRef, useEffect, useCallback } from "react";
import { useStore } from "store/hooks";
import { useHistory } from "react-router-dom";
import {useLittera} from "react-littera"

export const useForkedState = <T extends any[], R>(fn: (...args: T) => R, ...args: T) => {
    const ref = useRef(null as unknown as [R, (value: R) => void]);
    const signal = useSignal();

    if(ref.current === null) {
        const value: R = fn(...args);
        const setState = (val: R) => { ref.current[0] = val; signal(); }

        ref.current = [ value, setState ];
    }

    useEffect(() => { 
        const value = fn(...args);

        if(ref.current[0] !== value) 
            ref.current[1](value); 
    }, [fn, args]);

    return ref.current;
}

/**
 * Redirect to page if condition met
 * @param path for redirect
 * @param condition
 */
export const useRestrictedPage = (condition: boolean, path: string = "/home" ) => {
    const history = useHistory();
    useEffect(() => {
        if (condition) 
            history.push(path)
        
    }, [condition, path, history]);
}

/**
 * Redirect to page if current account is active
 * @param path for redirect
 */
export const useRestrictedPageForCurrentAccount = (path: string = "/home") => {
    const currentAccount = useStore(state => state.currentAccount);
    useRestrictedPage(!!currentAccount, path)
}



export const useSignal = () => {
    const [, updateState] = useState();
    return useCallback(() => updateState({}), []);
}

const timeTranslations = {
    goodmorning01: {
        en_US: "Good morning",
        pl_PL: "Dzień dobry",
        de_DE: "Guten Morgen"
    },
    goodmorning02: {
        en_US: "Nice to see you",
        pl_PL: "Miło Cię widzieć",
        de_DE: "Schön dich zu sehen"
    },
    goodmorning03: {
        en_US: "Howdy",
        pl_PL: "Cześć",
        de_DE: "Hallo"
    },
    goodmorning04: {
        en_US: "Good to see you",
        pl_PL: "Dobrze Cię widzieć",
        de_DE: "Schön dich zu sehen"
    },
    goodmorning05: {
        en_US: "Greetings",
        pl_PL: "Pozdrowienia",
        de_DE: "Schöne Grüße"
    },

    goodafternoon01: {
        en_US: "Good afternoon",
        pl_PL: "Dzień dobry",
        de_DE: "Guten Tag"
    },
    goodafternoon02: {
        en_US: "Nice to see you again",
        pl_PL: "Miło Cię znowu widzieć",
        de_DE: "Schön dich wieder zu sehen"
    },
    goodafternoon03: {
        en_US: "Great to see you",
        pl_PL: "Dobrze Cię widzieć",
        de_DE: "Schön dich zu sehen"
    },
    goodafternoon04: {
        en_US: "Greetings and salutations",
        pl_PL: "Pozdrowienia",
        de_DE: "GWiederholungen und Grüße"
    },
    goodafternoon05: {
        en_US: "Yo",
        pl_PL: "Joł",
        de_DE: "Mich"
    },

    goodevening01: {
        en_US: "Good evening",
        pl_PL: "Dobry wieczór",
        de_DE: "Guten Abend"
    },
    goodevening02: {
        en_US: "Long time no see",
        pl_PL: "Dawno się nie widzieliśmy",
        de_DE: "Lange nicht gesehen"
    },
    goodevening03: {
        en_US: "Hi there",
        pl_PL: "Cześć",
        de_DE: "Hallo"
    },
    goodevening04: {
        en_US: "It’s been a while",
        pl_PL: "Chwilę Cię nie było",
        de_DE: "Es ist eine Weile her"
    },
    goodevening05: {
        en_US: "It’s nice to meet you",
        pl_PL: "Miło Cię poznać",
        de_DE: "Sehr nett dich kennzulernen"
    },

    goodnight01: {
        en_US: "Good night",
        pl_PL: "Dobranoc",
        de_DE: "Gute Nacht"
    },
    goodnight02: {
        en_US: "Sweet Dreams",
        pl_PL: "Słodkich snów",
        de_DE: "Süße Träume"
    },
    goodnight03: {
        en_US: "Nighty Night",
        pl_PL: "Branoc",
        de_DE: "Gute Nacht"
    },
    goodnight04: {
        en_US: "Sleep well",
        pl_PL: "Śpij dobrze",
        de_DE: "Schlafen Sie gut"
    },
    goodnight05: {
        en_US: "See ya’ in the mornin’",
        pl_PL: "Do jutra",
        de_DE: "Wir sehen uns am Morgen"
    },

    
}

export const useTimeGreeting = () => {
    const translated = useLittera(timeTranslations);

    const currentHour = new Date().getHours();
    if (currentHour > 7 && currentHour <= 11)
        return randomArrayItem(translated.goodmorning01, translated.goodmorning02, translated.goodmorning03, translated.goodmorning04, translated.goodmorning05 );

    if (currentHour > 11 && currentHour <= 19)
        return randomArrayItem(translated.goodafternoon01, translated.goodafternoon02, translated.goodafternoon03, translated.goodafternoon04, translated.goodafternoon05,);

    if (currentHour > 19 && currentHour <= 22)
        return randomArrayItem(translated.goodevening01, translated.goodevening02, translated.goodevening03, translated.goodevening04, translated.goodevening05);

    return randomArrayItem(translated.goodnight01, translated.goodnight02, translated.goodnight03, translated.goodnight04, translated.goodnight05);
}
const randomArrayItem = (...items: string[]) => {
    return items[Math.floor(Math.random() * Math.floor(items.length))];

}