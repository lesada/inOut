import colors from './colors';
import fonts from './fonts';

const theme = {
  fonts,
  containerPadding: '32px',
};

const darkTheme = {
  ...theme,
  colors: colors.dark,
};

const lightTheme = {
  ...theme,
  colors: colors.light,
};

export { darkTheme, lightTheme };
