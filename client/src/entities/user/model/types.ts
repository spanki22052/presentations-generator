export interface UpdateUserRequest {
  name?: string;
  surname?: string;
  email?: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  surname: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

