// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "nuxt-monaco-editor",
    "@nuxtjs/supabase",
  ],

  colorMode: {
    preference: "dark",
    fallback: "dark",
    storageKey: "codescribe-color-mode",
  },

  googleFonts: {
    families: {
      "Fira Sans": [400, 600, 700],
    },
  },

  css: ["~/assets/css/main.css"],

  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL,
    },
  },

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/auth/github",
      exclude: ["/"],
    },
  },
})
