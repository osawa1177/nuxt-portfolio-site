import fs from "fs";
import path from "path";

const contentDir = path.resolve(__dirname, "content");

const getArticleRoutes = () => {
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => `/articles/${file.replace(".md", "")}`);
};

export default {
  ssr: false,
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

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-gtag',
  ],

  // buildModules: [
  //   '@nuxtjs/storybook'
  // ],

  storybook: {
    stories: ['~/components/**/*.stories.@(js|ts|mdx)'],
    addons: [
      '@storybook/addon-essentials',
      '@storybook/addon-links'
    ],
    viteFinal: (config) => config, // Storybook v7+ は vite を推奨（Nuxt 2でも互換あり）
    parameters: {
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#ffffff' },
          { name: 'dark', value: '#000000' },
        ],
      },
    }
  },

  googleAnalytics: {
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
        config.node = { fs: "empty" };
      }

      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
    },
    loaders: {
      scss: {
        implementation: require('sass'),
        sassOptions: {
          quietDeps: true,
          outputStyle: 'compressed',
          logger: {
            warn: () => { },
            debug: () => { }
          }
        }
      }
    }
  },

  generate: {
    fallback: true,
    routes: getArticleRoutes(),
  }
};
