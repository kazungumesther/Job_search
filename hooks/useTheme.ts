import { useColorScheme } from "react-native";

const light = {
  background: "#ffffff",
  card: "#f4f4f5",
  text: "#111111",
  subtext: "#555555",
  border: "#cccccc",
  tint: "#2563eb",
  placeholder: "#888888",
};

const dark = {
  background: "#0f0f10",
  card: "#1c1c1e",
  text: "#f5f5f5",
  subtext: "#a1a1aa",
  border: "#3f3f46",
  tint: "#60a5fa",
  placeholder: "#71717a",
};

export function useTheme() {
  return useColorScheme() === "dark" ? dark : light;
}
