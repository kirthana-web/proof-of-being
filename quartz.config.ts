import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: undefined, // Disable analytics to avoid localhost warnings
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Alegreya",
        body: "Alegreya",
        code: "Alegreya Sans", // Using Alegreya Sans for code for consistency
      },
      colors: {
        lightMode: {
          light: "#FFFCF0",          // Flexoki paper
          lightgray: "#F2F0E5",      // Flexoki ui-2
          gray: "#B7B5AC",           // Flexoki ui
          darkgray: "#6F6E69",       // Flexoki tx-2
          dark: "#403E3C",           // Flexoki tx
          secondary: "#205EA6",      // Flexoki blue
          tertiary: "#24837B",       // Flexoki cyan
          highlight: "rgba(36, 131, 123, 0.15)",     // Flexoki cyan with transparency
          textHighlight: "#D0A21588", // Flexoki yellow with transparency
        },
        darkMode: {
          light: "#100F0F",          // Flexoki black
          lightgray: "#1C1B1A",      // Flexoki ui-2 dark
          gray: "#282726",           // Flexoki ui dark
          darkgray: "#B7B5AC",       // Flexoki tx-2 dark
          dark: "#CECDC3",           // Flexoki tx dark
          secondary: "#4385BE",      // Flexoki blue (lighter variant)
          tertiary: "#3AA99F",       // Flexoki cyan (lighter variant)
          highlight: "rgba(58, 169, 159, 0.15)",     // Flexoki cyan with transparency
          textHighlight: "#D0A21588", // Flexoki yellow with transparency
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config