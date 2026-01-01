export const dayTheme = {
  colors: {
    primary: "#7c3aed",
    primaryHover: "#6d28d9",
    secondary: "#a855f7",
    background: "#ffffff",
    backgroundSecondary: "#f9fafb",
    backgroundTertiary: "#f3f4f6",
    backgroundGradient: "#ffffff",
    white: "#ffffff",
    text: "#1f2937",
    textSecondary: "#6b7280",
    textTertiary: "#9ca3af",
    accent: "#7c3aed",
    accentPurple: "#7c3aed",
    purple: "#7c3aed",
    border: "#e5e7eb",
    borderLight: "#f3f4f6",
    cardBackground: "#ffffff",
    cardHover: "#f9fafb",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  navbar: {
    height: "80px",
  },
} as const;

export const nightTheme = {
  colors: {
    primary: "#1890ff",
    primaryHover: "#40a9ff",
    secondary: "#52c41a",
    background: "#0a0a1a",
    backgroundSecondary: "#1a1a2e",
    backgroundTertiary: "#16213e",
    backgroundGradient:
      "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)",
    white: "#ffffff",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    textTertiary: "rgba(255, 255, 255, 0.6)",
    accent: "#00d4ff",
    accentPurple: "#764ba2",
    purple: "#667eea",
    border: "rgba(255, 255, 255, 0.1)",
    borderLight: "rgba(255, 255, 255, 0.05)",
    cardBackground: "rgba(255, 255, 255, 0.05)",
    cardHover: "rgba(255, 255, 255, 0.08)",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  navbar: {
    height: "80px",
  },
} as const;

export type Theme = typeof dayTheme | typeof nightTheme;

export const theme = dayTheme;
