// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    devtools: { enabled: true },
    css: ["~/assets/scss/index.scss"],
    modules: [
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        // '@nuxtjs/supabase',
    ],
    typescript: {
        strict: true,
    },
    runtimeConfig: {
        public: {
            stripePK: process.env.STRIPE_PK_KEY,
        }
    },
    app: {
        head: {
            script: [
                { src: 'https://js.stripe.com/v3/', defer: true, },
            ],   
        }
    },
    components: [{
        // path: `~/components`,
        // pathPrefix: false,
        global: true,
        dirs: ['~/components'],
    }],
    googleFonts: {
        download: true,
        fontsDir: 'assets/fonts',
        stylePath: 'assets/scss/google-fonts.scss',
        families: {
            Inter: [400, 500, 600],
                'Josefin+Sans': true,
        },
    },
})
