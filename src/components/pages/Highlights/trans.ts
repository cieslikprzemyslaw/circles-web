// * Translations
const translations = (preset: any) => ({
    greeting: {
        en_US: "Hi",
        pl_PL: "Witaj",
        de_DE: "Hallo",
    },
    // Example preset use. See src/utils/hooks/locale.ts for more.
    yes: preset.yes
})

export default translations;