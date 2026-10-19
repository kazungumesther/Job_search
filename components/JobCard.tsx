import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSaved } from "../context/SavedJobsContext";
import { useTheme } from "../hooks/useTheme";
import { Job } from "../types";
import { Star } from 'lucide-react-native';

export function JobCard({ job }: { job: Job }) {
  const theme = useTheme();
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(job.id);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.card,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Link href={`/job/${job.id}`} asChild>
        <Pressable style={{ flex: 1, padding: 14 }}>
          <Text style={{ fontWeight: "700", fontSize: 16, color: theme.text }}>{job.title}</Text>
          <Text style={{ color: theme.subtext }}>
            {job.company} · {job.location}
          </Text>
        </Pressable>
      </Link>
      <Pressable onPress={() => toggle(job.id)} hitSlop={10} style={{ padding: 14 }}>
  <Star 
    size={24} 
    color={saved ? theme.tint : theme.subtext} 
    fill={saved ? theme.tint : "none"} 
  />
</Pressable>
    </View>
  );
}