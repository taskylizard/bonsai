import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
  title: "☘️ Bonsai",
  description: "☘️ Our personal digital garden.",
  lang: "en-US",
  lastUpdated: true,
  cleanUrls: true,
  appearance: "dark",
  titleTemplate: ":title • Bonsai",
  head: [
    ["meta", { name: "theme-color", content: "#b4f9f8" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
  ],
  themeConfig: {
    sidebar: generateSidebar({
      documentRootPath: "wiki",
      collapseDepth: 2,
      capitalizeFirst: true,
      useTitleFromFileHeading: true,
    }),
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/taskylizard/bonsai" },
    ],
  },
});
