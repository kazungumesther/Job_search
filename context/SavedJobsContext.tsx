import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const KEY = "saved_jobs";

type Ctx = {
  savedIds: string[];
  toggle: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const SavedCtx = createContext<Ctx>({ savedIds: [], toggle: () => {}, isSaved: () => false });

export const useSaved = () => useContext(SavedCtx);

export function SavedJobsProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((v) => {
        if (v) setSavedIds(JSON.parse(v));
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (loaded) AsyncStorage.setItem(KEY, JSON.stringify(savedIds)).catch(() => {});
  }, [savedIds, loaded]);

  const toggle = (id: string) =>
    setSavedIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <SavedCtx.Provider value={{ savedIds, toggle, isSaved: (id) => savedIds.includes(id) }}>
      {children}
    </SavedCtx.Provider>
  );
}
