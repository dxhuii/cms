// https://vitepress.dev/guide/custom-theme
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import type { EnhanceAppContext } from "vitepress";
import Theme from "vitepress/theme";
import "@shikijs/vitepress-twoslash/style.css";
import "uno.css";
import "virtual:group-icons.css";
import "./style.css";

// @unocss-include

export default {
  extends: Theme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue);
  },
};
