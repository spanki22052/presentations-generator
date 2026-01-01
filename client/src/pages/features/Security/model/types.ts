export interface LoginSession {
  id: string;
  device: string;
  browser: string;
  location: string;
  timestamp: string;
  isActive: boolean;
}

export interface PasswordChangeFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface SecurityState {
  twoFactorEnabled: boolean;
  loginSessions: LoginSession[];
  isLoading: boolean;
}

