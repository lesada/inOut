import { Stack } from 'expo-router';

function Routes() {
  return (
    <Stack>
      <Stack.Screen name="(home)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Routes;
