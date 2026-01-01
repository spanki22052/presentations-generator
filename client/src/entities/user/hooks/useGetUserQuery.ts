import { useQuery } from '@tanstack/react-query';
import { getUser } from '../api';
import { handleApiError } from '@/shared/api';
import { UserResponse } from '../model/types';

/**
 * Query hook for fetching current user profile
 */
export function useGetUserQuery() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<UserResponse> => {
      try {
        const response = await getUser();
        return response;
      } catch (error) {
        const apiError = handleApiError(error);
        throw new Error(apiError.message);
      }
    },
  });
}

