export default {
  ssr: false, // ← SPAモード

  target: "static",

  head: {
    title: "portfolio-site",
    htmlAttrs: { lang: "ja" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap",
      },
    ],
  },

  css: ["@/assets/scss/styles.scss"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: ["@nuxtjs/style-resources", "@nuxtjs/google-gtag", "@nuxtjs/axios"],

  "google-gtag": {
    id: "G-2QX64DJL5F",
    config: {
      anonymize_ip: true,
    },
    debug: false,
  },

  styleResources: {
    scss: [
      "@/assets/scss/foundation/_variables.scss",
      "@/assets/scss/foundation/_mixin.scss",
    ],
  },

  serverMiddleware: ["~/api/contact.js"],

  build: {
    transpile: ["gsap"],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.node = {
          fs: "empty",
        };
      }

      // Markdown を raw-loader で読み込む設定を追加
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
    },
  },
};
