import { useMutation } from "@tanstack/react-query";
import { logout } from "../api";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
} from "../model/constants";
import { safeRemoveItem } from "../lib/utils";

export function useLogoutMutation() {
  return useMutation({
    mutationFn: async (): Promise<void> => {
      return await logout();
    },
    onSuccess: () => {
      safeRemoveItem(ACCESS_TOKEN_KEY);
      safeRemoveItem(REFRESH_TOKEN_KEY);
      safeRemoveItem(USER_KEY);
    },
    onError: () => {
      // Even if logout fails on server, clear local storage
      safeRemoveItem(ACCESS_TOKEN_KEY);
      safeRemoveItem(REFRESH_TOKEN_KEY);
      safeRemoveItem(USER_KEY);
    },
  });
}

