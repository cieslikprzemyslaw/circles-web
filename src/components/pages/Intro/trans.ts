// * Translations
const translations = (preset: any) => ({
    title: {
        en_US: "Intro",
        pl_PL: "Intro",
        de_DE: "Intro"
    },
    firstTitle: {
        en_US: "Welcome to safe chat!",
        pl_PL: "Pierwszy Part",
        de_DE: "Erstes Part"
    },

    secondTitle: {
        en_US: "Available everywhere",
        pl_PL: "Drugi Part",
        de_DE: "Zweiten Part"
    },

    thirdTitle: {
        en_US: "Reliable and Stable",
        pl_PL: "Trzeci Part",
        de_DE: "Dreien Part"
    },
    // Example preset use. See src/utils/hooks/locale.ts for more.
    yes: preset.yes
})

export default translations;