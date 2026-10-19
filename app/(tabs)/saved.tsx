import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { JobCard } from "../../components/JobCard";
import { useSaved } from "../../context/SavedJobsContext";
import { useJobs } from "../../hooks/useJobs";
import { useTheme } from "../../hooks/useTheme";

export default function SavedScreen() {
  const theme = useTheme();
  const { jobs, loading } = useJobs();
  const { savedIds } = useSaved();
  const saved = jobs.filter((j) => savedIds.includes(j.id));

  if (loading)
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" color={theme.tint} />
    );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.background }}>
      <FlatList
        data={saved}
        keyExtractor={(j) => j.id}
        ListEmptyComponent={
          <Text style={{ color: theme.subtext }}>
            No saved jobs yet. Save one from the Jobs tab.
          </Text>
        }
        renderItem={({ item }) => <JobCard job={item} />}
      />
    </View>
  );
}
