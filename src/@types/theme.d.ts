import 'styled-components/native';

import colors from '@/theme/colors';
import fonts from '@/theme/fonts';
declare module 'styled-components/native' {
  type ThemeType = {
    colors: typeof colors.light | typeof colors.dark;
    fonts: typeof fonts;
    containerPadding: string;
  };

  export interface DefaultTheme extends ThemeType {}
}
