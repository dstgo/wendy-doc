import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Wendy Panel",
      description: "Wendy Panel Document",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Wendy Panel",
      description: "Wendy Panel 文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
