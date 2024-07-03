
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createJob } from './createJob.service';
// import { createJob, getAllJobs } from '../services/Jobs.service';

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (jobData) => {
      const accessToken = localStorage.getItem('siteToken');
      return await createJob(jobData, accessToken);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('jobs'); 
    },
  });
};


