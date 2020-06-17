import {useState} from "react";

const LOCALES = Object.freeze([ "en_US", "pl_PL", "de_DE" ]);

const PRESET = Object.freeze({
    yes: {
        en_US: "Yes",
        pl_PL: "Tak",
        de_DE: "Ja"
    },
    no: {
        en_US: "No",
        pl_PL: "Nie",
        de_DE: "Nein"
    }
});

export const useLocale = () => {
    const [locale, setLocale] = useState(LOCALES[0]);

    return [locale, setLocale, PRESET];
}