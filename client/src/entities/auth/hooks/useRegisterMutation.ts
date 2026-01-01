import { useMutation } from "@tanstack/react-query";
import { register } from "../api";
import { handleApiError } from "@/shared/api";
import { RegisterRequest, AuthResponse } from "../model/types";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
} from "../model/constants";
import { safeSetItem } from "../lib/utils";

export function useRegisterMutation() {
  return useMutation({
    mutationFn: async (data: RegisterRequest): Promise<AuthResponse> => {
      try {
        const response = await register(data);
        return response;
      } catch (error) {
        const apiError = handleApiError(error);
        throw new Error(apiError.message);
      }
    },
    onSuccess: (data) => {
      safeSetItem(ACCESS_TOKEN_KEY, data.accessToken);
      safeSetItem(REFRESH_TOKEN_KEY, data.refreshToken);
      safeSetItem(USER_KEY, JSON.stringify(data.user));
    },
  });
}

