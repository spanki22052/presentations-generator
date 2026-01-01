import styled from 'styled-components';

export const Container = styled.div((props) => ({
  width: '100%',
  background: props.theme.colors.backgroundGradient,
  color: props.theme.colors.text,
  minHeight: '100vh',
}));

// Hero Section
export const HeroSection = styled.section((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    paddingTop: `calc(${props.theme.navbar.height} + ${props.theme.spacing.xl})`,
    paddingBottom: props.theme.spacing.xxl,
    paddingLeft: props.theme.spacing.lg,
    paddingRight: props.theme.spacing.lg,
    background: isDay ? '#f6f7f8' : props.theme.colors.backgroundGradient,
    display: 'flex',
    justifyContent: 'center',
  };
});

export const HeroContainer = styled.div((props) => ({
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.xl,

  '@media (min-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: props.theme.spacing.xxl,
  },
}));

export const HeroContent = styled.div((props) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
  textAlign: 'center',

  '@media (min-width: 768px)': {
    textAlign: 'left',
    alignItems: 'flex-start',
  },
}));

export const HeroBadge = styled.div((props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
  padding: '4px 12px',
  borderRadius: '9999px',
  backgroundColor: `${props.theme.colors.primary}1A`,
  border: `1px solid ${props.theme.colors.primary}33`,
  color: props.theme.colors.primary,
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  width: 'fit-content',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    margin: 0,
  },
}));

export const HeroTitle = styled.h1((props) => ({
  fontSize: '36px',
  fontWeight: 900,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,
  letterSpacing: '-0.033em',

  '@media (min-width: 768px)': {
    fontSize: '60px',
  },
}));

export const HeroTitleHighlight = styled.span((props) => ({
  color: props.theme.colors.primary,
}));

export const HeroSubtitle = styled.p((props) => ({
  fontSize: '18px',
  color: props.theme.colors.textSecondary,
  margin: 0,
  lineHeight: 1.6,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (min-width: 768px)': {
    marginLeft: 0,
    marginRight: 0,
  },
}));

export const HeroButtons = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.sm,
  paddingTop: props.theme.spacing.md,
  justifyContent: 'center',

  '@media (min-width: 640px)': {
    flexDirection: 'row',
  },

  '@media (min-width: 768px)': {
    justifyContent: 'flex-start',
  },
}));

export const PrimaryButton = styled.button((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  height: '48px',
  padding: `0 ${props.theme.spacing.lg}`,
  backgroundColor: props.theme.colors.primary,
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
  boxShadow: `0 4px 12px ${props.theme.colors.primary}30`,
  transition: 'all 0.2s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 16px ${props.theme.colors.primary}40`,
  },
}));

export const SecondaryButton = styled.button((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: props.theme.spacing.sm,
    borderRadius: '8px',
    height: '48px',
    padding: `0 ${props.theme.spacing.lg}`,
    backgroundColor: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    color: props.theme.colors.text,
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      backgroundColor: isDay ? '#f9fafb' : 'rgba(255, 255, 255, 0.1)',
    },
  };
});

export const HeroImage = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    flex: 1,
    width: '100%',
    position: 'relative',
    aspectRatio: '4/3',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: isDay
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
  };
});

// Section Header
export const SectionHeaderWrapper = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    paddingTop: props.theme.spacing.xl,
    paddingBottom: props.theme.spacing.xl,
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
  };
});

export const SectionHeader = styled.div((props) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
  textAlign: 'center',
}));

export const SectionTitle = styled.h2((props) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.md,
  lineHeight: 1.2,

  '@media (min-width: 768px)': {
    fontSize: '30px',
  },
}));

export const SectionSubtitle = styled.p((props) => ({
  fontSize: '16px',
  color: props.theme.colors.textSecondary,
  margin: 0,
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
}));

// Zig-Zag Feature Sections
export const ZigZagSection = styled.section<{ isAlternate?: boolean }>(
  (props) => {
    const isDay = props.theme.colors.background === '#ffffff';
    const isAlternate = props.isAlternate || false;
    return {
      width: '100%',
      paddingTop: props.theme.spacing.xxl,
      paddingBottom: props.theme.spacing.xxl,
      paddingLeft: props.theme.spacing.lg,
      paddingRight: props.theme.spacing.lg,
      background: isAlternate
        ? isDay
          ? '#f6f7f8'
          : 'rgba(22, 36, 43, 1)'
        : isDay
          ? '#ffffff'
          : props.theme.colors.backgroundGradient,
      borderTop: isAlternate
        ? isDay
          ? `1px solid ${props.theme.colors.border}`
          : '1px solid rgba(255, 255, 255, 0.1)'
        : 'none',
      borderBottom: isAlternate
        ? isDay
          ? `1px solid ${props.theme.colors.border}`
          : '1px solid rgba(255, 255, 255, 0.1)'
        : 'none',
    };
  }
);

export const ZigZagContainer = styled.div<{ reverse?: boolean }>((props) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.xxl,
  alignItems: 'center',

  '@media (min-width: 768px)': {
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    gap: props.theme.spacing.xxl,
  },
}));

export const ZigZagContent = styled.div((props) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
}));

export const ZigZagIcon = styled.div<{ color: string }>((props) => {
  const colorMap: Record<string, string> = {
    purple: props.theme.colors.primary || '#7c3aed',
    blue: '#3b82f6',
    pink: '#ec4899',
  };
  const bgColor = colorMap[props.color] || props.theme.colors.primary;
  const isDay = props.theme.colors.background === '#ffffff';

  return {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: isDay ? `${bgColor}1A` : `${bgColor}30`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: bgColor,
    fontSize: '32px',
    lineHeight: 1,
    marginBottom: props.theme.spacing.sm,
  };
});

export const ZigZagTitle = styled.h2((props) => ({
  fontSize: '30px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  lineHeight: 1.2,

  '@media (min-width: 768px)': {
    fontSize: '36px',
  },
}));

export const ZigZagDescription = styled.p((props) => ({
  fontSize: '18px',
  color: props.theme.colors.textSecondary,
  margin: 0,
  lineHeight: 1.6,
}));

export const ZigZagBulletList = styled.ul((props) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  marginTop: props.theme.spacing.sm,
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.sm,
}));

export const ZigZagBulletItem = styled.li((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: props.theme.spacing.sm,
  fontSize: '16px',
  color: props.theme.colors.text,
  lineHeight: 1.5,

  '& > span:first-child': {
    color: props.theme.colors.primary,
    flexShrink: 0,
    marginTop: '2px',
  },
}));

export const ZigZagBulletIcon = styled.span((props) => ({
  color: 'inherit',
  fontSize: '20px',
}));

export const ZigZagLink = styled.button((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
  marginTop: props.theme.spacing.sm,
  color: props.theme.colors.primary,
  fontSize: '16px',
  fontWeight: 700,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'gap 0.2s ease',

  '&:hover': {
    gap: props.theme.spacing.sm,
  },
}));

export const ZigZagImage = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    flex: 1,
    width: '100%',
    minHeight: '400px',
    borderRadius: '16px',
    overflow: 'hidden',
    background: isDay ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
});

// Features Grid Section
export const FeaturesGridSection = styled.section((props) => ({
  width: '100%',
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
  paddingLeft: props.theme.spacing.lg,
  paddingRight: props.theme.spacing.lg,
  background: props.theme.colors.backgroundGradient,
}));

export const FeaturesGridHeader = styled.div((props) => ({
  maxWidth: '900px',
  margin: '0 auto',
  marginBottom: props.theme.spacing.xxl,
  textAlign: 'center',
}));

export const FeaturesGridTitle = styled.h2((props) => ({
  fontSize: '30px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.md,
}));

export const FeaturesGridSubtitle = styled.p((props) => ({
  fontSize: '16px',
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

export const FeaturesGrid = styled.div((props) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.lg,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const FeatureCard = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    padding: props.theme.spacing.lg,
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: isDay
      ? '0 1px 3px rgba(0, 0, 0, 0.05)'
      : '0 1px 3px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'default',

    '&:hover': {
      boxShadow: isDay
        ? '0 4px 12px rgba(0, 0, 0, 0.08)'
        : '0 4px 12px rgba(0, 0, 0, 0.4)',
    },
  };
});

export const FeatureIcon = styled.div<{ color: string }>((props) => {
  const colorMap: Record<string, string> = {
    green: '#10b981',
    orange: '#f97316',
    purple: '#a855f7',
    red: '#ef4444',
    teal: '#14b8a6',
    indigo: '#6366f1',
  };
  const iconColor = colorMap[props.color] || props.theme.colors.primary;
  const isDay = props.theme.colors.background === '#ffffff';

  return {
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: isDay ? `${iconColor}1A` : `${iconColor}30`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: iconColor,
    fontSize: '24px',
    marginBottom: props.theme.spacing.md,
  };
});

export const FeatureTitle = styled.h3((props) => ({
  fontSize: '18px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.sm,
  lineHeight: 1.3,
}));

export const FeatureDescription = styled.p((props) => ({
  fontSize: '14px',
  lineHeight: 1.6,
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

// Testimonial Section
export const TestimonialSection = styled.section((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    paddingTop: props.theme.spacing.xxl,
    paddingBottom: props.theme.spacing.xxl,
    paddingLeft: props.theme.spacing.lg,
    paddingRight: props.theme.spacing.lg,
    background: isDay ? '#f9fafb' : 'rgba(255, 255, 255, 0.02)',
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    borderBottom: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
  };
});

export const TestimonialContainer = styled.div((props) => ({
  maxWidth: '900px',
  margin: '0 auto',
  textAlign: 'center',
}));

export const TestimonialQuoteIcon = styled.div((props) => ({
  fontSize: '48px',
  color: props.theme.colors.primary,
  marginBottom: props.theme.spacing.lg,
}));

export const TestimonialQuote = styled.h3((props) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.xl,
  lineHeight: 1.4,

  '@media (min-width: 768px)': {
    fontSize: '36px',
  },
}));

export const TestimonialAuthor = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: props.theme.spacing.md,
}));

export const TestimonialAvatar = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: isDay ? '#e5e7eb' : 'rgba(255, 255, 255, 0.1)',
  };
});

export const TestimonialInfo = styled.div((props) => ({
  textAlign: 'left',
}));

export const TestimonialName = styled.p((props) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
}));

export const TestimonialRole = styled.p((props) => ({
  fontSize: '14px',
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

// CTA Section
export const CTASection = styled.section((props) => ({
  width: '100%',
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
  paddingLeft: props.theme.spacing.lg,
  paddingRight: props.theme.spacing.lg,
  background: props.theme.colors.backgroundGradient,
}));

export const CTAContainer = styled.div((props) => ({
  maxWidth: '900px',
  margin: '0 auto',
  borderRadius: '24px',
  padding: props.theme.spacing.xxl,
  background: props.theme.colors.primary,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: `0 20px 25px -5px ${props.theme.colors.primary}30`,

  '@media (min-width: 768px)': {
    padding: props.theme.spacing.xxl * 2,
  },
}));

export const CTATitle = styled.h2((props) => ({
  fontSize: '30px',
  fontWeight: 900,
  color: '#ffffff',
  margin: 0,
  marginBottom: props.theme.spacing.lg,
  lineHeight: 1.2,

  '@media (min-width: 768px)': {
    fontSize: '48px',
  },
}));

export const CTASubtitle = styled.p((props) => ({
  fontSize: '18px',
  color: 'rgba(255, 255, 255, 0.8)',
  margin: 0,
  marginBottom: props.theme.spacing.xl,
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const CTAButtons = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
  justifyContent: 'center',

  '@media (min-width: 640px)': {
    flexDirection: 'row',
  },
}));

export const CTAButtonPrimary = styled.button((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  padding: `${props.theme.spacing.md} ${props.theme.spacing.xl}`,
  backgroundColor: '#ffffff',
  color: props.theme.colors.primary,
  fontSize: '18px',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: '#f9fafb',
  },
}));

export const CTAButtonSecondary = styled.button((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  padding: `${props.theme.spacing.md} ${props.theme.spacing.xl}`,
  backgroundColor: 'transparent',
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 700,
  border: '1px solid rgba(255, 255, 255, 0.3)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));
