import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Button, ScrollView, Text } from "react-native";
import { useSaved } from "../../context/SavedJobsContext";
import { useJobs } from "../../hooks/useJobs";
import { useTheme } from "../../hooks/useTheme";

export default function JobDetail() {
  const theme = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { jobs, loading } = useJobs();
  const { isSaved, toggle } = useSaved();
  const job = jobs.find((j) => j.id === id);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" color={theme.tint} />;
  if (!job) return <Text style={{ padding: 16, color: theme.text }}>Job not found.</Text>;

  return (
    <ScrollView style={{ backgroundColor: theme.background }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", color: theme.text }}>{job.title}</Text>
      <Text style={{ marginBottom: 12, color: theme.subtext }}>
        {job.company} · {job.location} · {job.type}
      </Text>
      <Text style={{ marginBottom: 20, color: theme.text }}>{job.description}</Text>
      <Button
        title={isSaved(job.id) ? "Remove from saved" : "Save job"}
        onPress={() => toggle(job.id)}
        color={theme.tint}
      />
    </ScrollView>
  );
}