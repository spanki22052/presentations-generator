import { apiClient } from '@/shared/api';
import { UpdateUserRequest, UserResponse } from '../model/types';
import { ApiResponse } from '@/entities/auth/model/types';

export async function updateUser(
  data: UpdateUserRequest
): Promise<UserResponse> {
  const response = await apiClient.put<ApiResponse<UserResponse>>(
    '/users/me',
    data
  );
  return response.data.data;
}

export async function getUser(): Promise<UserResponse> {
  const response = await apiClient.get<ApiResponse<UserResponse>>('/users/me');
  return response.data.data;
}

