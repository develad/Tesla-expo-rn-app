import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
      ></Stack>
      <StatusBar style='light' />
    </>
  );
};

export default _layout;
