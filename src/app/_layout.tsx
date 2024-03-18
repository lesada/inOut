import { useEffect, useState } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import Menu from '@/components/Menu';
import Routes from '@/routes';
import { darkTheme, lightTheme } from '@/theme/theme';

export { ErrorBoundary } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const insets = useSafeAreaInsets();

  const [loaded, error] = useFonts({
    GothamBold: require('../assets/fonts/Gotham-Bold.ttf'),
    GothamBook: require('../assets/fonts/Gotham-Book.ttf'),
    GothamBlack: require('../assets/fonts/Gotham-Black.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
      }}
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Menu setDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
