import styled from "styled-components";
import { Form, Input, Button, FormProps } from "antd";

export const Container = styled.div({
  display: "flex",
  minHeight: "100vh",
  flexDirection: "row",
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
});

// Left Visual Panel
export const LeftPanel = styled.div({
  position: "relative",
  display: "none",
  width: 0,
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "48px",
  overflow: "hidden",
  background: "#3713ec",

  "@media (min-width: 1024px)": {
    display: "flex",
  },
});

export const LeftPanelBackground = styled.div({
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to bottom right, #3713ec, #5b3bf7, #131022)",
  opacity: 0.9,
});

export const LeftPanelPattern = styled.div({
  position: "absolute",
  inset: 0,
  backgroundImage:
    "url('https://www.transparenttextures.com/patterns/cubes.png')",
  opacity: 0.1,
  mixBlendMode: "overlay",
});

export const LeftPanelContent = styled.div({
  position: "relative",
  zIndex: 10,
});

export const LogoContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: "#ffffff",
  marginBottom: "48px",
});

export const LogoIcon = styled.div({
  width: "32px",
  height: "32px",
  flexShrink: 0,
});

export const LogoText = styled.h2({
  fontSize: "24px",
  fontWeight: 700,
  letterSpacing: "-0.5px",
  color: "#ffffff",
  margin: 0,
});

export const TestimonialContainer = styled.div({
  maxWidth: "512px",
});

export const TestimonialBlockquote = styled.blockquote({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  margin: 0,
});

export const TestimonialIcon = styled.div({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(8px)",
  marginBottom: "24px",
});

export const TestimonialText = styled.p({
  fontSize: "36px",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#ffffff",
  margin: 0,
});

export const TestimonialFooter = styled.footer({
  fontSize: "18px",
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.9)",
});

export const Copyright = styled.div({
  position: "relative",
  zIndex: 10,
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.7)",
});

// Right Form Panel
export const RightPanel = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: "48px 16px",
    background: isDay ? "#ffffff" : props.theme.colors.background,
    width: "100%",
    borderLeft: isDay
      ? "1px solid #f3f4f6"
      : "1px solid rgba(255, 255, 255, 0.1)",

    "@media (min-width: 1024px)": {
      width: "600px",
      padding: "48px 80px",
    },

    "@media (min-width: 1280px)": {
      padding: "48px 96px",
    },
  };
});

export const FormContainer = styled.div({
  margin: "0 auto",
  width: "100%",
  maxWidth: "384px",
  position: "relative",

  "@media (min-width: 1024px)": {
    width: "384px",
  },
});

export const GoBackButton = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "none",
    border: "none",
    padding: "8px 0",
    marginBottom: "24px",
    color: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s ease",
    outline: "none",

    "&:hover": {
      color: props.theme.colors.primary,
    },

    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: props.theme.colors.primary,
      outlineOffset: "2px",
      borderRadius: "4px",
    },

    "& svg": {
      width: "20px",
      height: "20px",
      flexShrink: 0,
      transition: "transform 0.2s ease",
    },
  };
});

export const MobileLogo = styled.div((props) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: props.theme.colors.primary,
    marginBottom: "32px",

    "@media (min-width: 1024px)": {
      display: "none",
    },
  };
});

export const MobileLogoText = styled.h2((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    fontSize: "24px",
    fontWeight: 700,
    color: isDay ? "#1f2937" : "#ffffff",
    margin: 0,
  };
});

export const Header = styled.div({
  marginBottom: "40px",
});

export const Title = styled.h1((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    fontSize: "30px",
    fontWeight: 700,
    letterSpacing: "-0.5px",
    color: isDay ? "#1f2937" : "#ffffff",
    margin: 0,
    marginBottom: "8px",
  };
});

export const Subtitle = styled.p((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    fontSize: "14px",
    marginTop: "8px",
    color: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
    margin: 0,
  };
});

// Social Login Buttons
export const SocialLoginGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
});

export const SocialButton = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    borderRadius: "8px",
    border: isDay ? "1px solid #e5e7eb" : "1px solid rgba(255, 255, 255, 0.1)",
    background: isDay ? "#ffffff" : "#1a162e",
    padding: "10px 12px",
    fontSize: "14px",
    fontWeight: 500,
    color: isDay ? "#374151" : "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    cursor: "pointer",
    transition: "all 0.2s ease",
    outline: "none",

    "&:hover": {
      background: isDay ? "#f9fafb" : "rgba(255, 255, 255, 0.05)",
    },

    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: props.theme.colors.primary,
      outlineOffset: "2px",
    },

    "& svg": {
      width: "20px",
      height: "20px",
      flexShrink: 0,
    },
  };
});

export const Divider = styled.div({
  position: "relative",
  marginTop: "32px",
});

export const DividerLine = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    borderTop: `1px solid ${isDay ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)"}`,
  };
});

export const DividerText = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.5,
    background: isDay ? "#ffffff" : props.theme.colors.background,
    padding: "0 16px",
    color: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
  };
});

// Form Styles
export const StyledForm = styled(Form)<FormProps>({
  marginTop: "32px",
  width: "100%",
});

export const FormItem = styled(Form.Item)((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    marginBottom: "24px",

    "& .ant-form-item-label": {
      padding: 0,
      marginBottom: "8px",
    },

    "& .ant-form-item-label > label": {
      height: "auto",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: isDay ? "#1f2937" : "rgba(255, 255, 255, 0.9)",
    },

    "& .ant-form-item-explain-error": {
      marginTop: "4px",
      fontSize: "12px",
      color: isDay ? "#ef4444" : "#f87171",
    },
  };
});

export const FormLabel = styled.label((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.5,
    color: isDay ? "#1f2937" : "rgba(255, 255, 255, 0.9)",
    marginBottom: "8px",
  };
});

export const InputWrapper = styled.div({
  marginTop: "8px",
});

export const PasswordInputWrapper = styled.div({
  position: "relative",
  marginTop: "8px",
  borderRadius: "8px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
});

export const StyledInput = styled(Input)((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "block",
    width: "100%",
    borderRadius: "8px",
    border: 0,
    padding: "12px",
    color: isDay ? "#1f2937" : "#ffffff",
    boxShadow: `0 0 0 1px inset ${
      isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)"
    }`,
    backgroundColor: isDay ? "#ffffff" : "#1a162e",
    background: isDay ? "#ffffff" : "#1a162e",
    fontSize: "14px",
    lineHeight: 1.5,
    transition: "all 0.2s ease",

    "&::placeholder": {
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
    },

    "&:hover": {
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      boxShadow: `0 0 0 1px inset ${
        isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.3)"
      }`,
    },

    "&:focus, &:focus-visible": {
      outline: "none",
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      boxShadow: `0 0 0 2px inset ${props.theme.colors.primary}`,
    },

    "& input": {
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      color: isDay ? "#1f2937" : "#ffffff",
    },

    "&:disabled, &[disabled]": {
      backgroundColor: isDay ? "#f3f4f6" : "#2d2a42",
      background: isDay ? "#f3f4f6" : "#2d2a42",
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.4)",
      cursor: "not-allowed",
      opacity: 0.6,
      boxShadow: `0 0 0 1px inset ${
        isDay ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)"
      }`,
    },

    "&:disabled input, &[disabled] input": {
      backgroundColor: isDay ? "#f3f4f6" : "#2d2a42",
      background: isDay ? "#f3f4f6" : "#2d2a42",
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.4)",
      cursor: "not-allowed",
    },
  };
});

export const StyledPasswordInput = styled(Input)((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "block",
    width: "100%",
    borderRadius: "8px",
    border: 0,
    padding: "12px 40px 12px 12px",
    color: isDay ? "#1f2937" : "#ffffff",
    boxShadow: `0 0 0 1px inset ${
      isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)"
    }`,
    backgroundColor: isDay ? "#ffffff" : "#1a162e",
    background: isDay ? "#ffffff" : "#1a162e",
    fontSize: "14px",
    lineHeight: 1.5,
    transition: "all 0.2s ease",

    "&::placeholder": {
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
    },

    "&:hover": {
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      boxShadow: `0 0 0 1px inset ${
        isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.3)"
      }`,
    },

    "&:focus, &:focus-visible": {
      outline: "none",
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      boxShadow: `0 0 0 2px inset ${props.theme.colors.primary}`,
    },

    "& input": {
      backgroundColor: isDay ? "#ffffff" : "#1a162e",
      background: isDay ? "#ffffff" : "#1a162e",
      color: isDay ? "#1f2937" : "#ffffff",
    },

    "&:disabled, &[disabled]": {
      backgroundColor: isDay ? "#f3f4f6" : "#2d2a42",
      background: isDay ? "#f3f4f6" : "#2d2a42",
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.4)",
      cursor: "not-allowed",
      opacity: 0.6,
    },

    "&:disabled input, &[disabled] input": {
      backgroundColor: isDay ? "#f3f4f6" : "#2d2a42",
      background: isDay ? "#f3f4f6" : "#2d2a42",
      color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.4)",
      cursor: "not-allowed",
    },
  };
});

export const PasswordToggle = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    position: "absolute",
    top: "50%",
    right: "12px",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    color: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
    transition: "color 0.2s ease",

    "&:hover": {
      color: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
    },
  };
});

export const ForgotPasswordLink = styled.a((props) => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: 500,
    color: props.theme.colors.primary,
    textDecoration: "none",
    transition: "opacity 0.2s ease",

    "&:hover": {
      opacity: 0.8,
    },
  };
});

export const SubmitButton = styled(Button)((props) => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    borderRadius: "8px",
    background: props.theme.colors.primary,
    padding: "12px",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.5,
    color: "#ffffff",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",

    "&:hover": {
      background: props.theme.colors.primary,
      opacity: 0.9,
    },

    "&:focus-visible": {
      outline: "2px solid",
      outlineColor: props.theme.colors.primary,
      outlineOffset: "2px",
    },
  };
});

export const RegisterLink = styled.p((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    marginTop: "32px",
    textAlign: "center",
    fontSize: "14px",
    color: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
    margin: 0,

    "& a": {
      fontWeight: 600,
      color: props.theme.colors.primary,
      textDecoration: "none",
      transition: "opacity 0.2s ease",

      "&:hover": {
        opacity: 0.8,
      },
    },
  };
});
