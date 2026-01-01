import { apiClient } from "@/shared/api";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  RefreshTokenRequest,
  ApiResponse,
} from "../model/types";

export async function login(data: LoginRequest): Promise<AuthResponse> {
  const response = await apiClient.post<ApiResponse<AuthResponse>>("/auth/login", data);
  return response.data.data;
}

export async function register(data: RegisterRequest): Promise<AuthResponse> {
  const response = await apiClient.post<ApiResponse<AuthResponse>>("/auth/register", data);
  return response.data.data;
}

export async function refreshToken(
  data: RefreshTokenRequest
): Promise<AuthResponse> {
  const response = await apiClient.post<ApiResponse<AuthResponse>>("/auth/refresh", data);
  return response.data.data;
}

export async function logout(): Promise<void> {
  await apiClient.post("/auth/logout");
}
