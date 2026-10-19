import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import { JobCard } from "../../components/JobCard";
import { useJobs } from "../../hooks/useJobs";
import { useTheme } from "../../hooks/useTheme";

export default function JobsScreen() {
  const theme = useTheme();
  const { jobs, loading,refreshing, error, retry, refresh } = useJobs();
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      jobs.filter((j) =>
        `${j.title} ${j.company} ${j.location}`
          .toLowerCase()
          .includes(q.toLowerCase()),
      ),
    [jobs, q],
  );

  if (loading)
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" color={theme.tint} />
    );

  if (error)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 24,
          backgroundColor: theme.background,
        }}
      >
        <Text
          style={{ textAlign: "center", marginBottom: 12, color: theme.text }}
        >
          {error}
        </Text>
        <Button title="Retry" onPress={retry} color={theme.tint} />
      </View>
    );

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme.background }}>
      <TextInput
        placeholder="Search title, company, location"
        placeholderTextColor={theme.placeholder}
        value={q}
        onChangeText={setQ}
        style={{
          borderWidth: 1,
          borderColor: theme.border,
          borderRadius: 8,
          padding: 10,
          marginBottom: 12,
          color: theme.text,
        }}
      />
      <FlatList
       refreshing = {refreshing}
       onRefresh = {refresh}

        data={filtered}
        keyExtractor={(j) => j.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={{ color: theme.text, textAlign: "center", marginTop: 16 }}>
            No jobs found.
          </Text>
        }
        renderItem={({ item }) => <JobCard job={item} />}
      />
    </View>
  );
}
