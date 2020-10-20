// * Translations
const translations = (preset: any) => ({
    greeting: {
        en_US: "Hi!",
        pl_PL: "Witaj!",
        de_DE: "Hallo!",
    },
    loadImage: {
        en_US: "Sorry! We can not load image",
        pl_PL: "Przepraszamy. Nie możemy wczytać zdjęcia",
        de_DE: "Es tut uns leid. Wir können das Foto nicht laden",
    },
    // Example preset use. See src/utils/hooks/locale.ts for more.
    yes: preset.yes
})

export default translations;