import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, useTheme, I18nProvider, AuthProvider } from "@/shared/contexts";
import { HomePage } from "@/pages/home";
import { FeaturesPage } from "@/pages/featuresPage";
import { AboutPage } from "@/pages/about";
import { PricingPage } from "@/pages/pricing";
import { LoginPage } from "@/pages/auth/login";
import { RegisterPage } from "@/pages/auth/register";
import { ProfilePage } from "@/pages/profile";
import { NotFoundPage } from "@/pages/notFound";
import { Layout } from "@/shared/ui/Layout";
import { dayTheme, nightTheme } from "./lib/theme";
import { GlobalStyles } from "./lib/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  const { theme } = useTheme();
  const currentTheme = theme === "day" ? dayTheme : nightTheme;
  const antdPrimaryColor =
    theme === "day" ? dayTheme.colors.primary : nightTheme.colors.primary;
  const isDay = theme === "day";

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: antdPrimaryColor,
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            colorBgContainer: isDay ? "#ffffff" : "#1a162e",
            colorText: isDay ? "#1f2937" : "#ffffff",
            colorTextPlaceholder: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
            colorBorder: isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)",
            colorBorderSecondary: isDay ? "#e5e7eb" : "rgba(255, 255, 255, 0.1)",
            colorBgElevated: isDay ? "#ffffff" : "#1e1b2e",
          },
          components: {
            Input: {
              colorBgContainer: isDay ? "#ffffff" : "#1a162e",
              colorText: isDay ? "#1f2937" : "#ffffff",
              colorTextPlaceholder: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
              colorBorder: isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)",
              hoverBorderColor: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.3)",
              activeBorderColor: antdPrimaryColor,
            },
            Button: {
              colorBgContainer: isDay ? "#ffffff" : "#1a162e",
              colorText: isDay ? "#1f2937" : "#ffffff",
              colorBorder: isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)",
              colorPrimary: antdPrimaryColor,
              colorPrimaryHover: isDay ? "#5b3bf7" : "#6d4aff",
              colorPrimaryActive: isDay ? "#4a2de6" : "#5b3bf7",
              defaultBg: isDay ? "#ffffff" : "#1a162e",
              defaultHoverBg: isDay ? "#f9fafb" : "#252040",
              defaultActiveBg: isDay ? "#f3f4f6" : "#2d2a42",
              defaultBorderColor: isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)",
              defaultHoverBorderColor: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.3)",
              defaultActiveBorderColor: isDay ? "#6b7280" : "rgba(255, 255, 255, 0.4)",
              defaultColor: isDay ? "#1f2937" : "#ffffff",
              defaultHoverColor: isDay ? "#111827" : "#ffffff",
              defaultActiveColor: isDay ? "#030712" : "#ffffff",
              textHoverBg: isDay ? "#f9fafb" : "rgba(255, 255, 255, 0.05)",
              textHoverColor: antdPrimaryColor,
              linkHoverColor: antdPrimaryColor,
              borderRadius: 8,
              fontWeight: 500,
              controlHeight: 40,
              paddingInline: 16,
              paddingBlock: 8,
            },
            Select: {
              colorBgContainer: isDay ? "#ffffff" : "#1a162e",
              colorText: isDay ? "#1f2937" : "#ffffff",
              colorTextPlaceholder: isDay ? "#9ca3af" : "rgba(255, 255, 255, 0.5)",
              colorBorder: isDay ? "#d1d5db" : "rgba(255, 255, 255, 0.2)",
              colorPrimary: antdPrimaryColor,
              colorPrimaryHover: antdPrimaryColor,
              optionSelectedBg: `${antdPrimaryColor}1A`,
              optionActiveBg: isDay ? "#f9fafb" : "rgba(255, 255, 255, 0.05)",
              optionSelectedColor: antdPrimaryColor,
              optionPadding: "8px 12px",
              controlHeight: 40,
              borderRadius: 8,
              boxShadowSecondary: isDay
                ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                : "0 4px 12px rgba(0, 0, 0, 0.4)",
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </StyledThemeProvider>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <ThemeProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </ThemeProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}
