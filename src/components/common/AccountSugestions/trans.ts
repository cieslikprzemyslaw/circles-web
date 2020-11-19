// * Translations
const translations = (preset: any) => ({
    firstMessage: {
        en_US: "Write to this member 1st time",
        pl_PL: "Napisz do tej osoby poraz pierwszy",
        de_DE: "Hallo!",
    },
    // Example preset use. See src/utils/hooks/locale.ts for more.
    yes: preset.yes
})

export default translations;