import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/shared/contexts";
import { useLoginMutation } from "@/entities/auth";
import { LoginFormValues } from "../model/types";

export function useLoginPageLogic() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { t } = useTranslation();
  const loginMutation = useLoginMutation();
  const [form] = Form.useForm<LoginFormValues>();

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      try {
        const data = await loginMutation.mutateAsync({
          email: values.email,
          password: values.password,
        });
        setUser(data.user);
        message.success(t("api.auth.loginSuccess"));
        navigate("/");
      } catch (error) {
        // Server sends translated error message, use it directly
        // Fallback to translated message if error.message is not available
        const errorMessage =
          error instanceof Error && error.message
            ? error.message
            : t("api.auth.loginFailed");
        message.error(errorMessage);
        form.setFields([
          {
            name: "password",
            errors: [errorMessage],
          },
        ]);
      }
    },
    [loginMutation, setUser, navigate, form, t]
  );

  const handleForgotPassword = useCallback(() => {
    // TODO: Navigate to forgot password page
    console.log("Forgot password clicked");
  }, []);

  const handleRegisterLink = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const handleGoogleLogin = useCallback(() => {
    // TODO: Implement Google OAuth
    console.log("Google login clicked");
  }, []);

  const handleMicrosoftLogin = useCallback(() => {
    // TODO: Implement Microsoft OAuth
    console.log("Microsoft login clicked");
  }, []);

  const handleGoBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  return {
    form,
    isLoading: loginMutation.isPending,
    handleSubmit,
    handleForgotPassword,
    handleRegisterLink,
    handleGoogleLogin,
    handleMicrosoftLogin,
    handleGoBack,
    showPassword,
    togglePasswordVisibility,
  };
}
