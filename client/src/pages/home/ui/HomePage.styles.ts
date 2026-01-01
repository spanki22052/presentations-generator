import styled from "styled-components";

export const Container = styled.div((props) => ({
  width: "100%",
  background: props.theme.colors.backgroundGradient,
  color: props.theme.colors.text,
  minHeight: "100vh",
}));

export const Section = styled.section((props) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${props.theme.spacing.lg}`,
}));

// Hero Section
export const HeroSection = styled(Section)((props) => ({
  paddingTop: `calc(${props.theme.navbar.height} + ${props.theme.spacing.xxl})`,
  paddingBottom: props.theme.spacing.xxl,
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.xl,
  position: "relative",
  overflow: "hidden",

  "@media (min-width: 1024px)": {
    flexDirection: "row",
    alignItems: "center",
    minHeight: "calc(100vh - 80px)",
  },
}));

export const HeroContent = styled.div((props) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.lg,
  zIndex: 1,
}));

export const HeroBadge = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: props.theme.spacing.xs,
    background: isDay ? "rgba(124, 58, 237, 0.1)" : "rgba(0, 212, 255, 0.1)",
    border: isDay
      ? "1px solid rgba(124, 58, 237, 0.3)"
      : "1px solid rgba(0, 212, 255, 0.3)",
    borderRadius: props.theme.borderRadius.lg,
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
    fontSize: "14px",
    fontWeight: 600,
    color: props.theme.colors.accent,
    width: "fit-content",
  };
});

export const HeroTitle = styled.h1((props) => ({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: 1.1,
  margin: 0,
  color: props.theme.colors.text,

  "& .accent": {
    color: props.theme.colors.accent,
  },

  "@media (max-width: 768px)": {
    fontSize: "40px",
  },
}));

export const HeroSubtitle = styled.p((props) => ({
  fontSize: "20px",
  lineHeight: 1.6,
  color: props.theme.colors.textSecondary,
  margin: 0,
  maxWidth: "600px",

  "@media (max-width: 768px)": {
    fontSize: "18px",
  },
}));

export const HeroActions = styled.div((props) => ({
  display: "flex",
  gap: props.theme.spacing.md,
  flexWrap: "wrap",
}));

export const PrimaryButton = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: props.theme.colors.primary,
    color: props.theme.colors.white,
    border: "none",
    borderRadius: props.theme.borderRadius.md,
    padding: `${props.theme.spacing.sm} ${props.theme.spacing.lg}`,
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: props.theme.spacing.xs,
    transition: "all 0.3s ease",
    boxShadow: isDay
      ? "0 4px 12px rgba(124, 58, 237, 0.3)"
      : "0 4px 12px rgba(24, 144, 255, 0.3)",

    "&:hover": {
      background: props.theme.colors.primaryHover,
      transform: "translateY(-2px)",
      boxShadow: isDay
        ? "0 6px 16px rgba(124, 58, 237, 0.4)"
        : "0 6px 16px rgba(24, 144, 255, 0.4)",
    },

    "&:active": {
      transform: "translateY(0)",
    },
  };
});

export const SecondaryButton = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: "transparent",
    color: isDay ? props.theme.colors.text : props.theme.colors.white,
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : `1px solid ${props.theme.colors.white}`,
    borderRadius: props.theme.borderRadius.md,
    padding: `${props.theme.spacing.sm} ${props.theme.spacing.lg}`,
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: props.theme.spacing.xs,
    transition: "all 0.3s ease",

    "&:hover": {
      background: isDay
        ? props.theme.colors.backgroundSecondary
        : "rgba(255, 255, 255, 0.1)",
      transform: "translateY(-2px)",
    },

    "&:active": {
      transform: "translateY(0)",
    },
  };
});

export const HeroNote = styled.p((props) => ({
  fontSize: "14px",
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

export const HeroIllustration = styled.div((props) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minHeight: "400px",

  "@media (max-width: 1023px)": {
    marginTop: props.theme.spacing.xl,
  },
}));

export const IllustrationCard = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: isDay
      ? props.theme.colors.cardBackground
      : "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.lg,
    boxShadow: isDay
      ? "0 20px 60px rgba(0, 0, 0, 0.1)"
      : "0 20px 60px rgba(0, 0, 0, 0.3)",
    transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    gap: props.theme.spacing.md,
  };
});

// Trust Bar
export const TrustBar = styled(Section)((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    paddingTop: props.theme.spacing.xl,
    paddingBottom: props.theme.spacing.xl,
    textAlign: "center",
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
    borderBottom: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
  };
});

export const TrustBarTitle = styled.p((props) => ({
  fontSize: "14px",
  fontWeight: 600,
  color: props.theme.colors.textSecondary,
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: `0 0 ${props.theme.spacing.lg} 0`,
}));

export const TrustBarLogos = styled.div((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: props.theme.spacing.xl,
  flexWrap: "wrap",
}));

export const TrustBarLogo = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing.xs,
  fontSize: "18px",
  fontWeight: 600,
  color: props.theme.colors.text,
  opacity: 0.8,
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 1,
  },
}));

// Features Section
export const FeaturesSection = styled(Section)((props) => ({
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
}));

export const SectionHeader = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: props.theme.spacing.xl,
  gap: props.theme.spacing.md,
  flexWrap: "wrap",
}));

export const SectionTitle = styled.h2((props) => ({
  fontSize: "48px",
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,

  "@media (max-width: 768px)": {
    fontSize: "36px",
  },
}));

export const SectionSubtitle = styled.p((props) => ({
  fontSize: "18px",
  color: props.theme.colors.textSecondary,
  margin: `${props.theme.spacing.sm} 0 0 0`,
  maxWidth: "600px",
}));

export const ViewAllLink = styled.button((props) => ({
  background: "none",
  border: "none",
  color: props.theme.colors.accent,
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing.xs,
  padding: 0,
  transition: "gap 0.3s ease",

  "&:hover": {
    gap: props.theme.spacing.sm,
  },
}));

export const FeaturesGrid = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: props.theme.spacing.xl,
  marginTop: props.theme.spacing.xl,
}));

export const FeatureCard = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: isDay
      ? props.theme.colors.cardBackground
      : "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.xl,
    display: "flex",
    flexDirection: "column",
    gap: props.theme.spacing.md,
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: isDay
      ? "0 1px 3px rgba(0, 0, 0, 0.1)"
      : "0 1px 3px rgba(0, 0, 0, 0.3)",

    "&:hover": {
      background: isDay
        ? props.theme.colors.cardHover
        : "rgba(255, 255, 255, 0.08)",
      transform: "translateY(-8px)",
      boxShadow: isDay
        ? "0 20px 40px rgba(0, 0, 0, 0.1)"
        : "0 20px 40px rgba(0, 0, 0, 0.3)",
    },
  };
});

export const FeatureImage = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    width: "100%",
    height: "200px",
    background: isDay
      ? props.theme.colors.backgroundSecondary
      : "rgba(255, 255, 255, 0.05)",
    borderRadius: props.theme.borderRadius.lg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "64px",
    marginBottom: props.theme.spacing.sm,
  };
});

export const FeatureIcon = styled.div((props) => ({
  fontSize: "32px",
  marginBottom: props.theme.spacing.xs,
}));

export const FeatureTitle = styled.h3((props) => ({
  fontSize: "24px",
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

export const FeatureDescription = styled.p((props) => ({
  fontSize: "16px",
  lineHeight: 1.6,
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

// Testimonials Section
export const TestimonialsSection = styled(Section)((props) => ({
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
}));

export const TestimonialsGrid = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: props.theme.spacing.xl,
  marginTop: props.theme.spacing.xl,
}));

export const TestimonialCard = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: isDay
      ? props.theme.colors.backgroundSecondary
      : "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.xl,
    display: "flex",
    flexDirection: "column",
    gap: props.theme.spacing.md,
  };
});

export const TestimonialRating = styled.div((props) => ({
  display: "flex",
  gap: props.theme.spacing.xs,
  marginBottom: props.theme.spacing.xs,
}));

export const Star = styled.span({
  color: "#ffd700",
  fontSize: "20px",
});

export const TestimonialQuote = styled.p((props) => ({
  fontSize: "16px",
  lineHeight: 1.6,
  color: props.theme.colors.text,
  margin: 0,
  flex: 1,
}));

export const TestimonialAuthor = styled.div((props) => ({
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing.sm,
  marginTop: props.theme.spacing.sm,
}));

export const TestimonialAvatar = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: isDay
      ? props.theme.colors.backgroundTertiary
      : "rgba(255, 255, 255, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
  };
});

export const TestimonialInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const TestimonialName = styled.p((props) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

export const TestimonialRole = styled.p((props) => ({
  fontSize: "14px",
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

// Bottom CTA Section
export const BottomCTASection = styled.section((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    width: "100vw",
    maxWidth: "none",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
    marginTop: props.theme.spacing.xxl,
    marginBottom: props.theme.spacing.xxl,
    paddingTop: props.theme.spacing.xxl,
    paddingBottom: props.theme.spacing.xxl,
    textAlign: "center",
    background: isDay
      ? "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #ddd6fe 100%)"
      : "transparent",
    borderRadius: props.theme.borderRadius.xl,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

export const BottomCTAContent = styled.div((props) => ({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${props.theme.spacing.lg}`,
}));

export const BottomCTATitle = styled.h2((props) => ({
  fontSize: "48px",
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,

  "& .accent": {
    color: props.theme.colors.accent,
  },

  "@media (max-width: 768px)": {
    fontSize: "36px",
  },
}));

export const BottomCTASubtitle = styled.p((props) => ({
  fontSize: "18px",
  color: props.theme.colors.textSecondary,
  margin: `${props.theme.spacing.md} 0 ${props.theme.spacing.xl} 0`,
}));

export const BottomCTAActions = styled.div((props) => ({
  display: "flex",
  justifyContent: "center",
  gap: props.theme.spacing.md,
  flexWrap: "wrap",
  marginBottom: props.theme.spacing.md,
}));

export const BottomCTANote = styled.p((props) => ({
  fontSize: "14px",
  color: props.theme.colors.textSecondary,
  margin: 0,
}));
