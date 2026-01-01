import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import {
  useLogoutMutation,
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_KEY,
} from "@/entities/auth";
import { AuthContextValue, AuthProviderProps, User } from "./types";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Helper function to safely get item from localStorage
function safeGetItem(key: string): string | null {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return null;
    }
    const value = localStorage.getItem(key);
    // Check for invalid values
    if (!value || value === "undefined" || value === "null") {
      return null;
    }
    return value;
  } catch (error) {
    // localStorage might be disabled or unavailable
    return null;
  }
}

// Helper function to safely remove item from localStorage
function safeRemoveItem(key: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    // localStorage might be disabled or unavailable
    console.warn("Failed to remove localStorage item:", error);
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUserState] = useState<User | null>(() => {
    try {
      const token = safeGetItem(ACCESS_TOKEN_KEY);
      const savedUser = safeGetItem(USER_KEY);

      // Only load user if both token and user exist
      if (token && savedUser) {
        return JSON.parse(savedUser);
      }

      // Clear user if token is missing
      if (!token && savedUser) {
        safeRemoveItem(USER_KEY);
      }

      return null;
    } catch (error) {
      // Invalid JSON in localStorage, clear it
      safeRemoveItem(USER_KEY);
      return null;
    }
  });

  // Logout mutation
  const logoutMutation = useLogoutMutation();

  const setUser = useCallback((newUser: User | null) => {
    setUserState(newUser);
    if (newUser) {
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.setItem(USER_KEY, JSON.stringify(newUser));
        }
      } catch (error) {
        console.warn("Failed to save user to localStorage:", error);
      }
    } else {
      safeRemoveItem(USER_KEY);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
      setUser(null);
      // Tokens are cleared by logoutMutation onSuccess/onError handlers
    } catch (error) {
      // Even if logout fails, clear user state and tokens
      setUser(null);
      safeRemoveItem(ACCESS_TOKEN_KEY);
      safeRemoveItem(REFRESH_TOKEN_KEY);
      safeRemoveItem(USER_KEY);
    }
  }, [logoutMutation, setUser]);

  // Check if user is authenticated on mount and load from cache
  useEffect(() => {
    const token = safeGetItem(ACCESS_TOKEN_KEY);
    const savedUser = safeGetItem(USER_KEY);

    if (token && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUserState(parsedUser);
      } catch (error) {
        // Invalid user data, clear everything
        safeRemoveItem(ACCESS_TOKEN_KEY);
        safeRemoveItem(REFRESH_TOKEN_KEY);
        safeRemoveItem(USER_KEY);
        setUserState(null);
      }
    } else if (!token && savedUser) {
      // Token missing but user exists, clear user
      safeRemoveItem(USER_KEY);
      setUserState(null);
    } else {
      setUserState(null);
    }
  }, []);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      isLoading: logoutMutation.isPending,
      setUser,
      logout,
    }),
    [user, isAuthenticated, logoutMutation.isPending, setUser, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
