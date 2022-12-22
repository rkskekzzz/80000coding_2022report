import { createTheme } from '@mui/material';

export type BgFg = {
  bg: string;
  fg: string;
};

export type SectionTheme = {
  fgTitle: string;
  fgSubtitle: string;
  fgBody: string;
  fgFooter: string;
  bg: string;
};

export type HighlightTheme = {
  light: string;
  lighter: string;
};

export type WidgetTheme = {
  bar: {
    selected: BgFg;
    unselected: BgFg;
  };
  slider: {
    selected: BgFg;
    unselected: BgFg;
  };
  tab: {
    selected: BgFg;
    unselected: BgFg;
  };
};

export type Themes = 'default' | 'secondary';

export type Color<T> = {
  [key in Themes]: T;
};
declare module '@mui/material/styles' {
  interface Theme {
    color: Color<BgFg>;
    highlight: Color<HighlightTheme>;
    box: Color<BgFg>;
    titleBox: Color<BgFg>;
    contentBox: Color<BgFg>;
    section: Color<SectionTheme>;
    widget: Color<WidgetTheme>;
  }
  interface ThemeOptions {
    color?: Color<BgFg>;
    highlight?: Color<HighlightTheme>;
    box?: Color<BgFg>;
    titleBox?: Color<BgFg>;
    contentBox?: Color<BgFg>;
    section?: Color<SectionTheme>;
    widget?: Color<WidgetTheme>;
  }
}

export const theme = createTheme({
  color: {
    default: { bg: '#fff', fg: '#000' },
    secondary: { bg: '#f50057', fg: '#fff' },
  },
  highlight: {
    default: {
      light: '#00dc64',
      lighter: '#1dda51',
    },
    secondary: {
      light: '#f50057',
      lighter: '#f50057',
    },
  },
  box: {
    default: { bg: '#170a62', fg: '#000' },
    secondary: { bg: '#f50057', fg: '#fff' },
  },
  titleBox: {
    default: {
      bg: 'linear-gradient(0deg,#170a62,#000) no-repeat top',
      fg: '#ffffff',
    },
    secondary: { bg: '#f50057', fg: '#fff' },
  },
  contentBox: {
    default: { bg: 'none', fg: '#000' },
    secondary: { bg: '#f50057', fg: '#fff' },
  },
  section: {
    default: {
      fgTitle: '#000000',
      fgSubtitle: '#1dda51',
      fgBody: '#000000',
      fgFooter: '#fff',
      bg: '#ffffff',
    },
    secondary: {
      fgTitle: '#fff',
      fgSubtitle: '#fff',
      fgBody: '#fff',
      fgFooter: '#fff',
      bg: '#f50057',
    },
  },
});
