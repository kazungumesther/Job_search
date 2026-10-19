import { Stack } from "expo-router";
import { SavedJobsProvider } from "../context/SavedJobsContext";
import { useTheme } from "../hooks/useTheme";

export default function RootLayout() {
  const theme = useTheme();
  return (
    <SavedJobsProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerTintColor: theme.text,
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="job/[id]" options={{ title: "Job details" }} />
      </Stack>
    </SavedJobsProvider>
  );
}