// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width",
      title: "Frontend",
      meta: [{ name: "description", content: "My nuxt 3 demo" }],
    },
  },
  css: ["@/assets/admin/css/tabler.min.css"],
});
