import { createTheme } from '@mui/material';

type BgFg = {
  bg: string;
  fg: string;
};

type Color = {
  default: BgFg;
  primary: BgFg;
  secondary: BgFg;
};
declare module '@mui/material/styles' {
  interface Theme {
    color: Color;
  }
  interface ThemeOptions {
    color?: Color;
  }
}

export const theme = createTheme({
  color: {
    default: { bg: '#fff', fg: '#000' },
    primary: { bg: '#3f51b5', fg: '#fff' },
    secondary: { bg: '#f50057', fg: '#fff' },
  },
});
