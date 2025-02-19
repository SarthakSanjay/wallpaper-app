import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(nobottombar)"
          options={{
            headerShown: true,
            headerTitle: "Account Info ℹ️",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
