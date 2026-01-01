import styled from 'styled-components';

export const Container = styled.div((props) => ({
  width: '100%',
  background: props.theme.colors.backgroundGradient,
  color: props.theme.colors.text,
  minHeight: '100vh',
}));

export const Section = styled.section((props) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
}));

// Hero Section
export const HeroSection = styled(Section)((props) => ({
  paddingTop: `calc(${props.theme.navbar.height} + ${props.theme.spacing.xxl})`,
  paddingBottom: props.theme.spacing.xxl,
  textAlign: 'center',
}));

export const HeroTitle = styled.h1((props) => ({
  fontSize: '64px',
  fontWeight: 700,
  lineHeight: 1.1,
  margin: 0,
  color: props.theme.colors.text,
  marginBottom: props.theme.spacing.md,

  '@media (max-width: 768px)': {
    fontSize: '40px',
  },
}));

export const AccentSpan = styled.span((props) => ({
  color: props.theme.colors.accent,
}));

export const HeroSubtitle = styled.p((props) => ({
  fontSize: '20px',
  lineHeight: 1.6,
  color: props.theme.colors.textSecondary,
  margin: 0,
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (max-width: 768px)': {
    fontSize: '18px',
  },
}));

// Mission Section
export const MissionSection = styled(Section)((props) => ({
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
}));

export const TwoColumnGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.xl,

  '@media (min-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const ContentCard = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    background: isDay
      ? props.theme.colors.cardBackground
      : 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.xl,
    boxShadow: isDay
      ? '0 1px 3px rgba(0, 0, 0, 0.1)'
      : '0 1px 3px rgba(0, 0, 0, 0.3)',
  };
});

export const CardIcon = styled.div((props) => ({
  fontSize: '48px',
  marginBottom: props.theme.spacing.md,
}));

export const CardTitle = styled.h3((props) => ({
  fontSize: '28px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: `0 0 ${props.theme.spacing.sm} 0`,
}));

export const CardDescription = styled.p((props) => ({
  fontSize: '16px',
  lineHeight: 1.6,
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

// Values Section
export const ValuesSection = styled(Section)((props) => ({
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
}));

export const SectionHeader = styled.div((props) => ({
  textAlign: 'center',
  marginBottom: props.theme.spacing.xl,
}));

export const SectionTitle = styled.h2((props) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,

  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
}));

export const SectionSubtitle = styled.p((props) => ({
  fontSize: '18px',
  color: props.theme.colors.textSecondary,
  margin: `${props.theme.spacing.sm} 0 0 0`,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const ValuesGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: props.theme.spacing.xl,
  marginTop: props.theme.spacing.xl,
}));

export const ValueCard = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    background: isDay
      ? props.theme.colors.cardBackground
      : 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: props.theme.spacing.md,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: isDay
      ? '0 1px 3px rgba(0, 0, 0, 0.1)'
      : '0 1px 3px rgba(0, 0, 0, 0.3)',

    '&:hover': {
      background: isDay
        ? props.theme.colors.cardHover
        : 'rgba(255, 255, 255, 0.08)',
      transform: 'translateY(-8px)',
      boxShadow: isDay
        ? '0 20px 40px rgba(0, 0, 0, 0.1)'
        : '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
  };
});

export const ValueIcon = styled.div((props) => ({
  fontSize: '48px',
  marginBottom: props.theme.spacing.xs,
}));

export const ValueTitle = styled.h3((props) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

// Stats Section
export const StatsSection = styled.section((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100vw',
    maxWidth: 'none',
    marginLeft: 'calc(-50vw + 50%)',
    marginRight: 'calc(-50vw + 50%)',
    marginTop: props.theme.spacing.xxl,
    marginBottom: props.theme.spacing.xxl,
    paddingTop: props.theme.spacing.xxl,
    paddingBottom: props.theme.spacing.xxl,
    background: isDay
      ? 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #ddd6fe 100%)'
      : 'transparent',
    borderRadius: props.theme.borderRadius.xl,
  };
});

export const StatsContent = styled.div((props) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
}));

export const StatsGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: props.theme.spacing.xl,
  marginTop: props.theme.spacing.xl,
}));

export const StatCard = styled.div((props) => ({
  textAlign: 'center',
  padding: props.theme.spacing.lg,
}));

export const StatValue = styled.div((props) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: props.theme.colors.accent,
  marginBottom: props.theme.spacing.xs,
  lineHeight: 1,

  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
}));

export const StatLabel = styled.div((props) => ({
  fontSize: '16px',
  color: props.theme.colors.textSecondary,
  fontWeight: 500,
}));

// CTA Section
export const CTASection = styled(Section)((props) => ({
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
  textAlign: 'center',
}));

export const CTAContent = styled.div((props) => ({
  maxWidth: '800px',
  margin: '0 auto',
}));

export const CTATitle = styled.h2((props) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,

  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
}));

export const CTASubtitle = styled.p((props) => ({
  fontSize: '18px',
  color: props.theme.colors.textSecondary,
  margin: `${props.theme.spacing.md} 0 ${props.theme.spacing.xl} 0`,
}));

export const CTAActions = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: props.theme.spacing.md,
  flexWrap: 'wrap',
}));

export const PrimaryButton = styled.button((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    background: props.theme.colors.primary,
    color: props.theme.colors.white,
    border: 'none',
    borderRadius: props.theme.borderRadius.md,
    padding: `${props.theme.spacing.sm} ${props.theme.spacing.lg}`,
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: props.theme.spacing.xs,
    transition: 'all 0.3s ease',
    boxShadow: isDay
      ? '0 4px 12px rgba(124, 58, 237, 0.3)'
      : '0 4px 12px rgba(24, 144, 255, 0.3)',

    '&:hover': {
      background: props.theme.colors.primaryHover,
      transform: 'translateY(-2px)',
      boxShadow: isDay
        ? '0 6px 16px rgba(124, 58, 237, 0.4)'
        : '0 6px 16px rgba(24, 144, 255, 0.4)',
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  };
});

export const SecondaryButton = styled.button((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    background: 'transparent',
    color: isDay ? props.theme.colors.text : props.theme.colors.white,
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : `1px solid ${props.theme.colors.white}`,
    borderRadius: props.theme.borderRadius.md,
    padding: `${props.theme.spacing.sm} ${props.theme.spacing.lg}`,
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: props.theme.spacing.xs,
    transition: 'all 0.3s ease',

    '&:hover': {
      background: isDay
        ? props.theme.colors.backgroundSecondary
        : 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-2px)',
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  };
});

