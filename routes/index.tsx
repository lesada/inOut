import { Stack } from 'expo-router';

function Routes() {
  return (
    <Stack>
      <Stack.Screen name="(home)/index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Routes;
