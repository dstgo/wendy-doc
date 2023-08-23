import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "入门",
      icon: "flag",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "开发",
      icon: "laptop-code",
      prefix: "dev/",
      children: "structure",
    },
    {
      text: "问题",
      icon: "clipboard-question",
      prefix: "question/",
      children: "structure",
    },
    {
      text: "贡献",
      icon: "code-commit",
      prefix: "other/contributors",
      link: 'other/contributors'
    },
    {
      text: "赞助",
      icon: "hand",
      prefix: "other/sponsors",
      link: 'other/sponsors'
    },
  ],
});
