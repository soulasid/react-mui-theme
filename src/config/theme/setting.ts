import { ThemeOptions } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { ReactNode } from 'react';

type Color = 'inherit' | 'primary' | 'secondary';

export const lightMode: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976D2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#0079a7',
    },
    error: {
      main: red.A400,
      light: '#ff5f52',
      dark: '#c41c00',
      contrastText: '#ffffff',
    },
    background: {
      default: '#E5E5E5',
    },
    text: {
      primary: '#1976D2',
      secondary: '#000000',
      disabled: '#8c8c8c',
    },
    common: {
      black: '#fffff',
      white: '#000000',
    },
    success: {
      main: '#66bb6a',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    mode: 'light',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `Defago Noto Sans`,
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          tableLayout: 'auto',
          minWidth: 'max-content',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td, &:last-child th': { border: 0 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: `Defago Noto Sans`,
          fontWeight: 'bold',
        },
        root: {
          fontFamily: `Defago Noto Sans`,
          color: 'black',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `Defago Noto Sans`,
        },
        containedPrimary: {
          '&.MuiButton-contained': {
            backgroundColor: '#1565c0',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:hover': {
            textDecoration: 'auto',
          },
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: `Defago Noto Sans`,
        },
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          fontFamily: `Defago Noto Sans`,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: '#eeeeee',
        },
        track: {
          backgroundColor: '#212121',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'Defago Noto Sans',
          color: 'white',
          fontSize: '12px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          fontFamily: 'Defago Noto Sans',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Defago Noto Sans',
  },
};

export interface Layout {
  name: string;
  component: ReactNode;
}
export interface ThemeSetting {
  mode: {
    light: ThemeOptions;
  };
  layout: Array<Layout>;
  banner: {
    position: 'toolbar' | 'sidebar';
  };
  sidebar: {
    drawerWidth: number;
    color: Color;
    header: {
      elevation: number;
      color?: Color;
    };
  };
  toolbar: {
    color: Color;
    textColor: Color;
  };
}
const setting: ThemeSetting = {
  mode: {
    light: lightMode,
  },
  layout: [],
  banner: {
    position: 'toolbar',
  },
  sidebar: {
    drawerWidth: 260,
    color: 'primary',
    header: {
      elevation: 0,
      color: 'secondary',
    },
  },
  toolbar: {
    color: 'primary',
    textColor: 'secondary',
  },
};

export default setting;
