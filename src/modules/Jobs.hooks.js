// src/hooks/useGetAllJobs.js
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "./Jobs.service";
// import { getAllJobs } from "../services/Jobs.service";

export const useGetAllJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
    enabled: !!localStorage.getItem("siteToken"), 
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};
