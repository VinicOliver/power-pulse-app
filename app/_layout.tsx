import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Home() {
  return(
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  )
}
