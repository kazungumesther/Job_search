import { useState } from "react";
import { Job } from "../types";
import jobsData from "./jobs.json";

const FORCE_ERROR = false;


export async function fetchJobs(): Promise<Job[]> {
  await new Promise((r) => setTimeout(r, 800)); 
  if (FORCE_ERROR) throw new Error("Network error");
  return jobsData as Job[];
}
