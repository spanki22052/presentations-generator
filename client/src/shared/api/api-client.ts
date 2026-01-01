import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/entities/auth";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api";

// Helper function to safely get item from localStorage
function safeGetItem(key: string): string | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }
    const value = localStorage.getItem(key);
    if (!value || value === "undefined" || value === "null") {
      return null;
    }
    return value;
  } catch (error) {
    return null;
  }
}

// Helper function to safely set item in localStorage
function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch (error) {
    console.warn("Failed to set localStorage item:", error);
  }
}

// Helper function to safely remove item from localStorage
function safeRemoveItem(key: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.warn("Failed to remove localStorage item:", error);
  }
}

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Request interceptor - add auth token and language header
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = safeGetItem(ACCESS_TOKEN_KEY);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Add Accept-Language header based on user's language preference
    const language = safeGetItem("i18nextLng") || "en";
    if (config.headers) {
      config.headers["Accept-Language"] =
        language === "ru" ? "ru-RU,ru;q=0.9" : "en-US,en;q=0.9";
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors and token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized - token expired or invalid
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshTokenValue = safeGetItem(REFRESH_TOKEN_KEY);
        if (!refreshTokenValue) {
          // No refresh token, clear auth and redirect to login
          safeRemoveItem(ACCESS_TOKEN_KEY);
          safeRemoveItem(REFRESH_TOKEN_KEY);
          return Promise.reject(error);
        }

        // Try to refresh the token
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          { refreshToken: refreshTokenValue },
          { withCredentials: true }
        );

        // Handle nested data structure: response.data.data
        const responseData = response.data?.data || response.data;
        const { accessToken, refreshToken: newRefreshToken } = responseData;
        safeSetItem(ACCESS_TOKEN_KEY, accessToken);
        if (newRefreshToken) {
          safeSetItem(REFRESH_TOKEN_KEY, newRefreshToken);
        }

        // Retry original request with new token
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Refresh failed, clear auth and redirect to login
        safeRemoveItem(ACCESS_TOKEN_KEY);
        safeRemoveItem(REFRESH_TOKEN_KEY);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export function handleApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{
      message?: string;
      statusCode?: number;
      errors?: Record<string, string[]>;
    }>;
    // Server sends translated messages in response.data.message based on Accept-Language header
    // This message is already in the user's preferred language
    return {
      message:
        axiosError.response?.data?.message ||
        axiosError.message ||
        "An error occurred",
      statusCode:
        axiosError.response?.status || axiosError.response?.data?.statusCode,
      errors: axiosError.response?.data?.errors,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message || "An error occurred",
    };
  }

  return {
    message: "An unexpected error occurred",
  };
}
