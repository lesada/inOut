import 'styled-components';

import colors from '@/theme/colors';
import fonts from '@/theme/fonts';
declare module 'styled-components' {
  type ThemeType = {
    colors: typeof colors;
    fonts: typeof fonts;
    containerPadding: number;
  };

  export interface DefaultTheme extends ThemeType {}
}
