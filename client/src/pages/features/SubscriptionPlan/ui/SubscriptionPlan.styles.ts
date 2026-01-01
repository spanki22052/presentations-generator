import styled from "styled-components";

const isDay = (theme: any) => theme.colors.background === "#ffffff";

export const SectionContent = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
}));

export const SectionHeader = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: props.theme.spacing.md,
  marginBottom: props.theme.spacing.lg,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const SectionHeaderText = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const SectionTitle = styled.h1((props) => ({
  fontSize: "24px",
  fontWeight: 700,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
  margin: 0,
  marginBottom: "4px",
}));

export const SectionDescription = styled.p((props) => ({
  fontSize: "14px",
  color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.6)",
  margin: 0,
}));

export const BillingPortalButton = styled.button((props) => ({
  padding: "10px 24px",
  borderRadius: "12px",
  backgroundColor: props.theme.colors.primary,
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  "&:hover": {
    backgroundColor: props.theme.colors.primaryHover || "#6d28d9",
  },
  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 4px ${props.theme.colors.primary}33`,
  },
}));

export const Divider = styled.div((props) => ({
  width: "100%",
  height: "1px",
  backgroundColor: isDay(props.theme) ? "#e5e7eb" : "#374151",
  marginBottom: props.theme.spacing.md,
  marginTop: props.theme.spacing.sm,
}));

export const CurrentPlanSection = styled.section((props) => ({
  marginBottom: props.theme.spacing.xl,
}));

export const SectionHeading = styled.h2((props) => ({
  fontSize: "18px",
  fontWeight: 600,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
  marginBottom: props.theme.spacing.md,
}));

export const CurrentPlanCard = styled.div((props) => ({
  background: isDay(props.theme)
    ? "linear-gradient(to bottom right, #f3e8ff, #ffffff)"
    : "linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), rgba(31, 41, 55, 1))",
  border: `1px solid ${
    isDay(props.theme) ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.3)"
  }`,
  borderRadius: "16px",
  padding: props.theme.spacing.md,
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.md,
  "@media (min-width: 768px)": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const CurrentPlanInfo = styled.div({
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
});

export const PlanIcon = styled.div((props) => ({
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  backgroundColor: isDay(props.theme) ? "#ffffff" : "#374151",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  color: props.theme.colors.primary,
  fontSize: "24px",
}));

export const PlanDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const PlanNameRow = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "4px",
});

export const PlanName = styled.h3((props) => ({
  fontSize: "20px",
  fontWeight: 700,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
  margin: 0,
}));

export const StatusBadge = styled.span((props) => ({
  padding: "2px 10px",
  borderRadius: "9999px",
  backgroundColor: isDay(props.theme) ? "#dcfce7" : "rgba(34, 197, 94, 0.3)",
  color: isDay(props.theme) ? "#166534" : "#86efac",
  fontSize: "12px",
  fontWeight: 600,
  border: `1px solid ${
    isDay(props.theme) ? "#bbf7d0" : "rgba(34, 197, 94, 0.4)"
  }`,
}));

export const PlanPrice = styled.p((props) => ({
  fontSize: "14px",
  color: isDay(props.theme) ? "#4b5563" : "rgba(255, 255, 255, 0.7)",
  margin: 0,
  marginBottom: "4px",
}));

export const PlanBillingDate = styled.p((props) => ({
  fontSize: "12px",
  color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.5)",
  margin: 0,
}));

export const PlanActions = styled.div({
  display: "flex",
  gap: "12px",
  width: "100%",
  "@media (min-width: 768px)": {
    width: "auto",
  },
});

export const ActionButton = styled.button<{
  variant?: "primary" | "secondary";
}>((props) => ({
  flex: props.variant === "primary" ? "none" : 1,
  padding: "8px 16px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "@media (min-width: 768px)": {
    flex: "none",
  },
  ...(props.variant === "primary"
    ? {
        backgroundColor: props.theme.colors.primary,
        color: "#ffffff",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        "&:hover": {
          backgroundColor: props.theme.colors.primaryHover || "#6d28d9",
        },
      }
    : {
        backgroundColor: isDay(props.theme) ? "#ffffff" : "#374151",
        color: isDay(props.theme) ? "#374151" : "#e5e7eb",
        border: `1px solid ${isDay(props.theme) ? "#e5e7eb" : "#4b5563"}`,
        "&:hover": {
          backgroundColor: isDay(props.theme) ? "#f9fafb" : "#4b5563",
        },
      }),
  "&:focus": {
    outline: "none",
    boxShadow:
      props.variant === "primary"
        ? `0 0 0 4px ${props.theme.colors.primary}33`
        : "0 0 0 2px rgba(0, 0, 0, 0.1)",
  },
}));

export const AvailablePlansSection = styled.section((props) => ({
  marginBottom: props.theme.spacing.xl,
}));

export const PlansGrid = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: props.theme.spacing.md,
  "@media (min-width: 768px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const PlanCard = styled.div<{
  isPopular?: boolean;
  isCurrent?: boolean;
}>((props) => ({
  border: props.isPopular
    ? `2px solid ${props.theme.colors.primary}`
    : `1px solid ${isDay(props.theme) ? "#e5e7eb" : "#374151"}`,
  borderRadius: "16px",
  padding: props.theme.spacing.md,
  backgroundColor: isDay(props.theme) ? "#ffffff" : "rgba(31, 41, 55, 0.5)",
  position: "relative",
  transition: "all 0.2s ease",
  boxShadow:
    props.isPopular && isDay(props.theme)
      ? "0 10px 15px -3px rgba(124, 58, 237, 0.1)"
      : "none",
  "&:hover": {
    borderColor: props.theme.colors.primary + "80",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
}));

export const PopularBadge = styled.div((props) => ({
  position: "absolute",
  top: "-12px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: props.theme.colors.primary,
  color: "#ffffff",
  padding: "2px 12px",
  borderRadius: "9999px",
  fontSize: "12px",
  fontWeight: 500,
}));

export const PlanCardName = styled.h3((props) => ({
  fontSize: "18px",
  fontWeight: 700,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
  marginBottom: "8px",
}));

export const PlanCardPrice = styled.div({
  display: "flex",
  alignItems: "baseline",
  gap: "4px",
  marginBottom: "16px",
});

export const PriceAmount = styled.span((props) => ({
  fontSize: "30px",
  fontWeight: 700,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
}));

export const PricePeriod = styled.span((props) => ({
  fontSize: "14px",
  color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.6)",
}));

export const PlanCardDescription = styled.p((props) => ({
  fontSize: "14px",
  color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.6)",
  marginBottom: "24px",
  minHeight: "40px",
}));

export const FeaturesList = styled.ul({
  listStyle: "none",
  padding: 0,
  margin: 0,
  marginBottom: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const FeatureItem = styled.li((props) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  color: isDay(props.theme) ? "#4b5563" : "rgba(255, 255, 255, 0.7)",
}));

export const CheckIcon = styled.span<{ isPrimary?: boolean }>((props) => ({
  fontSize: "16px",
  color: props.isPrimary ? props.theme.colors.primary : "#22c55e",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const PlanCardButton = styled.button<{
  variant?: "primary" | "outline" | "current";
}>((props) => ({
  width: "100%",
  padding: "10px",
  borderRadius: "12px",
  fontSize: "14px",
  fontWeight: 500,
  border: "none",
  cursor: props.variant === "current" ? "default" : "pointer",
  transition: "all 0.2s ease",
  ...(props.variant === "current"
    ? {
        backgroundColor: props.theme.colors.primary,
        color: "#ffffff",
        opacity: 0.9,
      }
    : props.variant === "primary"
    ? {
        backgroundColor: props.theme.colors.primary,
        color: "#ffffff",
        "&:hover": {
          backgroundColor: props.theme.colors.primaryHover || "#6d28d9",
        },
      }
    : {
        border: `1px solid ${props.theme.colors.primary}`,
        backgroundColor: "transparent",
        color: props.theme.colors.primary,
        "&:hover": {
          backgroundColor: props.theme.colors.primary,
          color: "#ffffff",
        },
      }),
  "&:focus": {
    outline: "none",
    boxShadow: `0 0 0 2px ${props.theme.colors.primary}33`,
  },
}));

export const PaymentMethodSection = styled.section({});

export const PaymentMethodHeader = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: props.theme.spacing.md,
}));

export const AddPaymentButton = styled.button((props) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: props.theme.colors.primary,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  "&:focus": {
    outline: "none",
  },
}));

export const PaymentMethodCard = styled.div((props) => ({
  backgroundColor: isDay(props.theme) ? "#f9fafb" : "rgba(31, 41, 55, 0.3)",
  borderRadius: "16px",
  padding: "16px 24px",
  border: `1px solid ${isDay(props.theme) ? "#e5e7eb" : "#374151"}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    padding: "16px",
  },
}));

export const PaymentMethodInfo = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const CardIcon = styled.div((props) => ({
  width: "48px",
  height: "32px",
  backgroundColor: isDay(props.theme) ? "#ffffff" : "#374151",
  borderRadius: "4px",
  border: `1px solid ${isDay(props.theme) ? "#e5e7eb" : "#4b5563"}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
}));

export const CardIconRect = styled.div((props) => ({
  position: "absolute",
  top: "5px",
  left: "2px",
  width: "20px",
  height: "14px",
  borderRadius: "2px",
  backgroundColor: isDay(props.theme) ? "#1f2937" : "#6b7280",
}));

export const CardIconLine = styled.div((props) => ({
  position: "absolute",
  top: "10px",
  left: "2px",
  width: "20px",
  height: "2px",
  backgroundColor: "#ffffff",
}));

export const PaymentMethodDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const CardNumber = styled.p((props) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: isDay(props.theme) ? "#111827" : "#f3f4f6",
  margin: 0,
}));

export const CardExpiry = styled.p((props) => ({
  fontSize: "12px",
  color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.5)",
  margin: 0,
}));

export const PaymentMethodActions = styled.button((props) => ({
  padding: "8px",
  color: isDay(props.theme) ? "#9ca3af" : "rgba(255, 255, 255, 0.4)",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
  "&:hover": {
    color: isDay(props.theme) ? "#6b7280" : "rgba(255, 255, 255, 0.7)",
    backgroundColor: isDay(props.theme)
      ? "#f3f4f6"
      : "rgba(255, 255, 255, 0.1)",
  },
  "&:focus": {
    outline: "none",
  },
}));
