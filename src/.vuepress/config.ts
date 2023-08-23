import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Wilson Panel",
      description: "Wilson Panel Document",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Wilson Panel",
      description: "Wilson Panel 文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
