import type { Setting } from "./index.d";
export const APP_NAME = "LAOITDEV";
export const APP_TITLE = "LAOITDEV";
export const APP_DESCRIPTION = "LAOITDEV";
export const APP_AUTHOR = "LAOITDEV";
export const APP_KEYWORDS = "LAOITDEV";
export const APP_LOGO = "/assets/images/logo.png";
export const APP_FAVICON = "/assets/images/favicon.png";

export const LOCALE = {
  en: "en-US",
  la: "la-LA",
};
export const LOCALE_DEFAULT = LOCALE.la;
export const DRAWER_WIDTH = 240;
export const DRAWER_WIDTH_COLLAPSED = 64;

const APP_SETTING: Setting = {
  banner: {
    position: "toolbar",
    color: "primary",
    textColor: "secondary",
    title: "LAOITDEV",
    description: "LAOITDEV",
    image: "",
    imageDark: "",
  },
  direction: "ltr",
  info: {
    name: APP_NAME,
    author: APP_AUTHOR,
    favicon: APP_FAVICON,
    keywords: APP_KEYWORDS,
    logo: APP_LOGO,
    logoDark: APP_LOGO,
    title: APP_TITLE,
  },
  layout: {
    color: "primary",
    drawerWidth: DRAWER_WIDTH,
    mode: "container",
    navbar: {
      color: "primary",
      position: "left",
      style: "fixed",
      textColor: "secondary",
    },
    style: "vertical",
    toolbar: {
      color: "primary",
      textColor: "secondary",
      position: "top",
    },
    footer: {
      style: "fixed",
      color: "primary",
      copyright: "LAOITDEV",
    },
  },
  loading: false,
  locale: LOCALE_DEFAULT,
  theme: "light",
};
export default APP_SETTING;
