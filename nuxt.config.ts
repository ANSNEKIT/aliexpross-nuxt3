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
        // '@nuxtjs/supabase',
    ],
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
    }
})
