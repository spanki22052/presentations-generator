import styled from "styled-components";

export const FooterContainer = styled.footer((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: props.theme.colors.background,
    color: props.theme.colors.text,
    padding: `${props.theme.spacing.xl} 0 ${props.theme.spacing.lg}`,
    marginTop: "auto",
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.1)",
  };
});

export const FooterContent = styled.div((props) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `0 ${props.theme.spacing.lg}`,
}));

export const FooterTop = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr 1fr",
  gap: props.theme.spacing.lg,
  marginBottom: props.theme.spacing.xl,

  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
    gap: props.theme.spacing.md,
  },
}));

export const BrandSection = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.sm,
}));

export const BrandLogo = styled.div((props) => ({
  fontSize: "24px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  gap: props.theme.spacing.xs,
  marginBottom: props.theme.spacing.sm,
  color: props.theme.colors.text,
}));

export const BrandDescription = styled.p((props) => ({
  fontSize: "14px",
  lineHeight: 1.6,
  opacity: 0.9,
  margin: 0,
  color: props.theme.colors.textSecondary,
}));

export const LinksSection = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.sm,
}));

export const LinksTitle = styled.h3((props) => ({
  fontSize: "16px",
  fontWeight: 600,
  margin: `0 0 ${props.theme.spacing.sm} 0`,
  color: props.theme.colors.text,
}));

export const LinksList = styled.ul((props) => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing.xs,
}));

export const LinkItem = styled.li({});

export const FooterLink = styled.button((props) => ({
  background: "none",
  border: "none",
  color: props.theme.colors.textSecondary,
  fontSize: "14px",
  cursor: "pointer",
  padding: 0,
  textAlign: "left",
  opacity: 0.8,
  transition: "opacity 0.3s ease, color 0.3s ease",

  "&:hover": {
    opacity: 1,
    color: props.theme.colors.accent,
  },
}));

export const SocialLinks = styled.div((props) => ({
  display: "flex",
  gap: props.theme.spacing.sm,
  marginTop: props.theme.spacing.sm,
}));

export const SocialLink = styled.button((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    background: isDay
      ? props.theme.colors.backgroundSecondary
      : "rgba(255, 255, 255, 0.1)",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "20px",
    color: props.theme.colors.text,
    transition: "background 0.3s ease, transform 0.2s ease",

    "&:hover": {
      background: isDay
        ? props.theme.colors.backgroundTertiary
        : "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-2px)",
    },
  };
});

export const FooterBottom = styled.div((props) => {
  const isDay = props.theme.colors.background === "#ffffff";
  return {
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : "1px solid rgba(255, 255, 255, 0.2)",
    paddingTop: props.theme.spacing.lg,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: props.theme.spacing.sm,

    "@media (max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  };
});

export const Copyright = styled.p((props) => ({
  fontSize: "14px",
  opacity: 0.8,
  margin: 0,
  color: props.theme.colors.textSecondary,
}));
