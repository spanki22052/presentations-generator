import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, message } from "antd";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/shared/contexts";
import { useRegisterMutation } from "@/entities/auth";
import { RegisterFormValues } from "../model/types";

export function useRegisterPageLogic() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { t } = useTranslation();
  const registerMutation = useRegisterMutation();
  const [form] = Form.useForm<RegisterFormValues>();

  const handleSubmit = useCallback(
    async (values: RegisterFormValues) => {
      try {
        const data = await registerMutation.mutateAsync({
          name: values.name,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
        setUser(data.user);
        message.success(t("api.auth.registerSuccess"));
        navigate("/");
      } catch (error) {
        // Server sends translated error message, use it directly
        // Fallback to translated message if error.message is not available
        const errorMessage =
          error instanceof Error && error.message
            ? error.message
            : t("api.auth.registerFailed");
        message.error(errorMessage);

        // Set field errors based on error message (check both languages)
        const lowerErrorMessage = errorMessage.toLowerCase();
        const isEmailError =
          lowerErrorMessage.includes("email") ||
          lowerErrorMessage.includes("почт");
        const isPasswordError =
          lowerErrorMessage.includes("password") ||
          lowerErrorMessage.includes("парол");

        if (isEmailError) {
          form.setFields([
            {
              name: "email",
              errors: [errorMessage],
            },
          ]);
        } else if (isPasswordError) {
          form.setFields([
            {
              name: "password",
              errors: [errorMessage],
            },
          ]);
        }
      }
    },
    [navigate, registerMutation, setUser, form, t]
  );

  const handleLoginLink = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleGoogleLogin = useCallback(() => {
    // TODO: Implement Google OAuth
    console.log("Google register clicked");
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  return {
    form,
    isLoading: registerMutation.isPending,
    handleSubmit,
    handleLoginLink,
    handleGoogleLogin,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  };
}
