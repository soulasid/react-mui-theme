export type Status = 'IDLE' | 'PENDING' | 'SUCCESS' | 'FAILURE' | 'LOGOUT';
export type Setting = {
  info: {
    name: string;
    title: string;
    logo: string;
    author: string;
    keywords: string;
    favicon: string;
    logoDark: string;
  };
  banner: {
    position: 'toolbar' | 'sidebar';
    color: 'primary' | 'secondary';
    textColor: 'primary' | 'secondary';
    title: string;
    description: string;
    image: string;
    imageDark: string;
  };
  layout: {
    drawerWidth: number;
    style: 'vertical' | 'horizontal';
    mode: 'container' | 'fullWidth';
    color: 'primary' | 'secondary';
    navbar: {
      position: 'left' | 'right';
      style: 'fixed' | 'absolute';
      color: 'primary' | 'secondary';
      textColor: 'primary' | 'secondary';
    };
    toolbar: {
      color: 'primary' | 'secondary';
      textColor: 'primary' | 'secondary';
      position: 'top' | 'bottom';
    };
    footer?: {
      style: 'fixed' | 'absolute';
      color: 'primary' | 'secondary';
      copyright: string;
    };
  };
  theme: 'light' | 'dark';
  direction: 'ltr' | 'rtl';
  locale: string;
  loading: boolean;
};
export type Auth = {
  profile: string | null;
  loading: boolean;
  status: Status;
};
export type AppContextProps = {
  auth: Auth;
  setting: Setting;
  layout:
};
