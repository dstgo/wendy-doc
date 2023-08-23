import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Start",
      icon: "flag",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Development",
      icon: "laptop-code",
      prefix: "dev/",
      children: "structure",
    },
    {
      text: "Questions",
      icon: "clipboard-question",
      prefix: "question/",
      children: "structure",
    },
    {
      text: "Contributors",
      icon: "code-commit",
      prefix: "other/contributors",
      link: 'other/contributors'
    },
    {
      text: "Sponsors",
      icon: "hand",
      prefix: "other/sponsors",
      link: 'other/sponsors'
    },
  ],
});
