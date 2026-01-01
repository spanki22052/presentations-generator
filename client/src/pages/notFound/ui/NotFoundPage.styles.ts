import styled from "styled-components";

export const PageContainer = styled.div({
  width: "100%",
  overflowX: "hidden",
  position: "relative",
});

export const MainContent = styled.main({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 16px",
  minHeight: "calc(100vh - 200px)",
});

export const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "960px",
  width: "100%",
  gap: "32px",
});

export const TextContent = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  textAlign: "center",
});

export const IllustrationContainer = styled.div(({ theme }) => {
  // Check if theme is dark by comparing background color
  const bgColor = String(theme.colors.background);
  const isDark =
    bgColor.includes("#0a0a1a") ||
    bgColor.includes("#1a1a2e") ||
    bgColor.includes("#16213e");
  return {
    position: "relative",
    width: "100%",
    aspectRatio: "16/9",
    marginBottom: "32px",
    background: `linear-gradient(to bottom right, ${theme.colors.backgroundSecondary}, ${theme.colors.backgroundTertiary})`,
    borderRadius: theme.borderRadius.xl,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${theme.colors.border}`,
    boxShadow: isDark
      ? "0 1px 3px rgba(0, 0, 0, 0.5)"
      : "0 1px 3px rgba(0, 0, 0, 0.1)",
  };
});

export const BackgroundPattern = styled.div(({ theme }) => ({
  position: "absolute",
  inset: 0,
  opacity: 0.2,
  backgroundImage: `radial-gradient(${theme.colors.primary} 1px, transparent 1px)`,
  backgroundSize: "20px 20px",
}));

export const IllustrationContent = styled.div({
  position: "relative",
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const SlideCard = styled.div(({ theme }) => {
  // Check if theme is dark by comparing background color
  const bgColor = String(theme.colors.background);
  const isDark =
    bgColor.includes("#0a0a1a") ||
    bgColor.includes("#1a1a2e") ||
    bgColor.includes("#16213e");
  return {
    width: "192px",
    height: "128px",
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadius.md,
    boxShadow: isDark
      ? "0 10px 15px rgba(0, 0, 0, 0.5)"
      : "0 10px 15px rgba(0, 0, 0, 0.1)",
    border: `1px solid ${theme.colors.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    transform: "rotate(-3deg)",
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "rotate(0deg)",
      boxShadow: isDark
        ? "0 15px 25px rgba(0, 0, 0, 0.6)"
        : "0 15px 25px rgba(0, 0, 0, 0.15)",
    },
  };
});

export const IconWrapper = styled.div<{ $size?: number }>(
  ({ theme, $size = 24 }) => ({
    fontSize: `${$size}px`,
    color: theme.colors.textTertiary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const FloatingIcon = styled.div<{
  $position: "top-right" | "bottom-left";
}>(({ theme, $position }) => ({
  position: "absolute",
  ...($position === "top-right"
    ? { right: "-16px", top: "40px" }
    : { left: "-16px", bottom: "16px" }),
  width: $position === "top-right" ? "48px" : "40px",
  height: $position === "top-right" ? "48px" : "40px",
  backgroundColor: `${theme.colors.primary}15`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation:
    $position === "top-right" ? "bounce 2s infinite" : "pulse 2s infinite",
  "@keyframes bounce": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-10px)" },
  },
  "@keyframes pulse": {
    "0%, 100%": { opacity: 1 },
    "50%": { opacity: 0.5 },
  },
}));

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.text,
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: 800,
  letterSpacing: "-0.02em",
  marginBottom: "16px",
  "& span": {
    color: theme.colors.primary,
  },
}));

export const Description = styled.p(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
  fontWeight: 400,
  lineHeight: 1.6,
  maxWidth: "480px",
  marginBottom: "32px",
}));

export const ActionsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  "@media (min-width: 640px)": {
    flexDirection: "row",
    width: "auto",
  },
});

export const PrimaryButton = styled.button(({ theme }) => {
  const bgColor = String(theme.colors.background);
  const isDark =
    bgColor.includes("#0a0a1a") ||
    bgColor.includes("#1a1a2e") ||
    bgColor.includes("#16213e");
  return {
    display: "flex",
    minWidth: "160px",
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: theme.borderRadius.md,
    height: "44px",
    padding: "0 24px",
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "0.015em",
    border: "none",
    transition: "background-color 0.2s, box-shadow 0.2s, transform 0.2s",
    boxShadow: isDark
      ? `0 4px 6px ${theme.colors.primary}66`
      : `0 4px 6px ${theme.colors.primary}33`,
    "&:hover": {
      backgroundColor: theme.colors.primaryHover || theme.colors.primary,
      transform: "translateY(-1px)",
      boxShadow: isDark
        ? `0 6px 12px ${theme.colors.primary}88`
        : `0 6px 12px ${theme.colors.primary}44`,
    },
    "&:active": {
      transform: "translateY(0)",
    },
  };
});

export const SecondaryButton = styled.button(({ theme }) => ({
  display: "flex",
  minWidth: "160px",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: theme.borderRadius.md,
  height: "44px",
  padding: "0 24px",
  backgroundColor: theme.colors.background,
  border: `1px solid ${theme.colors.border}`,
  color: theme.colors.text,
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "normal",
  letterSpacing: "0.015em",
  transition:
    "background-color 0.2s, border-color 0.2s, color 0.2s, transform 0.2s",
  "&:hover": {
    backgroundColor: theme.colors.backgroundSecondary,
    borderColor: theme.colors.primary,
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

export const ButtonIcon = styled.span({
  marginRight: "8px",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
});

export const HelpfulLinks = styled.div(({ theme }) => ({
  marginTop: "32px",
  paddingTop: "32px",
  borderTop: `1px solid ${theme.colors.border}`,
  width: "100%",
  maxWidth: "480px",
}));

export const LinksTitle = styled.p(({ theme }) => ({
  textAlign: "center",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: theme.colors.textTertiary,
  marginBottom: "16px",
}));

export const LinksContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  gap: "24px",
});

export const LinkItem = styled.a(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  textDecoration: "none",
  color: "inherit",
  transition: "color 0.2s",
  "&:hover": {
    color: theme.colors.primary,
  },
}));

export const LinkIconContainer = styled.div(({ theme }) => ({
  padding: "12px",
  borderRadius: "50%",
  backgroundColor: `${theme.colors.primary}0d`,
  transition: "background-color 0.2s",
  [`${LinkItem}:hover &`]: {
    backgroundColor: `${theme.colors.primary}1a`,
  },
}));

export const LinkIcon = styled.span(({ theme }) => ({
  fontSize: "24px",
  color: theme.colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const LinkText = styled.span(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  color: theme.colors.textSecondary,
  transition: "color 0.2s",
  [`${LinkItem}:hover &`]: {
    color: theme.colors.primary,
  },
}));
