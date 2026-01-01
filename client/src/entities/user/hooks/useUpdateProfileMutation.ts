import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../api';
import { handleApiError } from '@/shared/api';
import { UpdateUserRequest, UserResponse } from '../model/types';
import { useAuth } from '@/shared/contexts';

/**
 * Mutation hook for updating user profile
 */
export function useUpdateProfileMutation() {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: async (data: UpdateUserRequest): Promise<UserResponse> => {
      try {
        const response = await updateUser(data);
        return response;
      } catch (error) {
        const apiError = handleApiError(error);
        throw new Error(apiError.message);
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      const updatedUser = {
        id: data.id,
        email: data.email,
        name: data.name,
        role: data.role,
      };
      if (data.surname) {
        updatedUser.surname = data.surname;
      }
      setUser(updatedUser);
    },
  });
}

