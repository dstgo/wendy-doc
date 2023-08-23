import {navbar} from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "guide",
    link: 'guide'
  },
  {
    text: "About",
    icon: "lightbulb",
    prefix: "about",
    link: 'about'
  },
]);
