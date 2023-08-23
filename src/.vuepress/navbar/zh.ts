import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/zh/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/zh/guide",
        link: '/zh/guide'
    },
    {
        text: "关于",
        icon: "lightbulb",
        prefix: "/zh/about",
        link: '/zh/about'
    },
]);
