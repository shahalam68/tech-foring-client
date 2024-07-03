
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory, deleteRole } from './deleteJob.service';
// import { deleteRole, deleteCategory } from '../services/jobService';

export const useDeleteRoleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ category, role }) => deleteRole({ category, role }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['jobs']);
      },
    }
  );
};

export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ category }) => deleteCategory({ category }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['jobs']);
      },
    }
  );
};
