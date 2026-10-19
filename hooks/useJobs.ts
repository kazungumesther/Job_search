import { useCallback, useEffect, useState } from "react";
import { fetchJobs } from "../data/jobs";
import { Job } from "../types";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  const load = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchJobs()
      .then(setJobs)
      .catch(() => setError("Couldn't load jobs"))
      .finally(() => setLoading(false));
  }, []);

 
  useEffect(() => {
    load();
  }, [load]);

  return { jobs, loading,error, retry: load};
}
