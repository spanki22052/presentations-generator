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
  paddingTop: `calc(${props.theme.navbar.height} + ${props.theme.spacing.xxl})`,
  paddingBottom: props.theme.spacing.xxl,
}));

export const HeroSection = styled.section((props) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
  paddingTop: `calc(${props.theme.navbar.height} + ${props.theme.spacing.xxl})`,
  paddingBottom: props.theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

export const HeroTitle = styled.h1((props) => ({
  fontSize: '48px',
  fontWeight: 900,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.md,
  lineHeight: 1.2,
  maxWidth: '800px',

  '@media (max-width: 768px)': {
    fontSize: '36px',
  },
}));

export const HeroSubtitle = styled.p((props) => ({
  fontSize: '18px',
  color: props.theme.colors.textSecondary,
  margin: 0,
  marginBottom: props.theme.spacing.xl,
  maxWidth: '700px',
  lineHeight: 1.6,

  '@media (max-width: 768px)': {
    fontSize: '16px',
  },
}));

export const BillingToggle = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: props.theme.spacing.md,
    borderRadius: '12px',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    padding: '8px',
    boxShadow: isDay
      ? '0 1px 3px rgba(0, 0, 0, 0.05)'
      : '0 1px 3px rgba(0, 0, 0, 0.3)',
  };
});

export const ToggleLabel = styled.span<{ isActive: boolean }>((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.isActive
    ? props.theme.colors.text
    : props.theme.colors.textSecondary,
  paddingLeft: props.isActive ? props.theme.spacing.md : 0,
  paddingRight: props.isActive ? 0 : props.theme.spacing.md,
  transition: 'color 0.2s ease',
}));

export const ToggleSwitch = styled.label((props) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: '48px',
  height: '28px',
}));

export const ToggleInput = styled.input({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

export const ToggleSlider = styled.span<{ isChecked: boolean }>((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '9999px',
    transition: 'background-color 0.3s ease',
    backgroundColor: props.isChecked
      ? props.theme.colors.primary
      : isDay
        ? '#e5e7eb'
        : 'rgba(255, 255, 255, 0.2)',
    '&::before': {
      position: 'absolute',
      content: '""',
      height: '24px',
      width: '24px',
      left: '2px',
      bottom: '2px',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      transition: 'transform 0.3s ease',
      transform: props.isChecked ? 'translateX(20px)' : 'translateX(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
  };
});

export const DiscountBadge = styled.span((props) => ({
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '9999px',
  backgroundColor: `${props.theme.colors.primary}1A`,
  color: props.theme.colors.primary,
  padding: '4px 10px',
  fontSize: '12px',
  fontWeight: 500,
}));

export const ToggleLabelWrapper = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
}));

export const PricingCardsSection = styled.section((props) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
  paddingBottom: props.theme.spacing.xxl,
}));

export const PricingGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.lg,
  alignItems: 'start',

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: props.theme.spacing.lg,
  },
}));

export const PricingCard = styled.div<{ isPopular?: boolean }>((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  const isPopular = props.isPopular || false;
  
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    border: isPopular
      ? `2px solid ${props.theme.colors.primary}`
      : isDay
        ? `1px solid ${props.theme.colors.border}`
        : '1px solid rgba(255, 255, 255, 0.1)',
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    padding: props.theme.spacing.xl,
    boxShadow: isPopular
      ? isDay
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        : '0 20px 25px -5px rgba(0, 0, 0, 0.4)'
      : isDay
        ? '0 1px 3px rgba(0, 0, 0, 0.05)'
        : '0 1px 3px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'default',
    width: '100%',

    '@media (min-width: 768px)': {
      transform: isPopular ? 'scale(1.05)' : 'scale(1)',
      marginTop: isPopular ? '-16px' : '0',
      marginBottom: isPopular ? '16px' : '0',
      zIndex: isPopular ? 10 : 1,
    },

    '@media (max-width: 640px)': {
      padding: props.theme.spacing.lg,
    },

    '&:hover': {
      transform: isPopular ? 'scale(1.05) translateY(-4px)' : 'translateY(-4px)',
      boxShadow: isDay
        ? '0 8px 24px rgba(0, 0, 0, 0.1)'
        : '0 8px 24px rgba(0, 0, 0, 0.4)',
    },
  };
});

export const PopularBadge = styled.div((props) => ({
  position: 'absolute',
  top: '-16px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '9999px',
  backgroundColor: props.theme.colors.primary,
  color: '#ffffff',
  padding: '4px 16px',
  fontSize: '12px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const PlanHeader = styled.div((props) => ({
  marginBottom: props.theme.spacing.md,
}));

export const PlanName = styled.h3((props) => ({
  fontSize: '18px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.xs,
}));

export const PlanDescription = styled.p((props) => ({
  fontSize: '14px',
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

export const PriceContainer = styled.div((props) => ({
  display: 'flex',
  alignItems: 'baseline',
  gap: props.theme.spacing.xs,
  marginBottom: props.theme.spacing.lg,
}));

export const Price = styled.span((props) => ({
  fontSize: '36px',
  fontWeight: 900,
  color: props.theme.colors.text,
  lineHeight: 1,
}));

export const PricePeriod = styled.span((props) => ({
  fontSize: '16px',
  fontWeight: 500,
  color: props.theme.colors.textSecondary,
}));

export const PlanButton = styled.button<{ variant: 'primary' | 'outline' }>(
  (props) => {
    const isDay = props.theme.colors.background === '#ffffff';
    const isPrimary = props.variant === 'primary';

    return {
      width: '100%',
      borderRadius: '8px',
      padding: '10px 16px',
      fontSize: '14px',
      fontWeight: 700,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: props.theme.spacing.lg,

      ...(isPrimary
        ? {
            backgroundColor: props.theme.colors.primary,
            color: '#ffffff',
            boxShadow: `0 4px 12px ${props.theme.colors.primary}40`,

            '&:hover': {
              backgroundColor: props.theme.colors.primaryHover || props.theme.colors.primary,
              transform: 'translateY(-1px)',
              boxShadow: `0 6px 16px ${props.theme.colors.primary}50`,
            },
          }
        : {
            backgroundColor: 'transparent',
            color: props.theme.colors.text,
            border: isDay
              ? `1px solid ${props.theme.colors.border}`
              : '1px solid rgba(255, 255, 255, 0.2)',

            '&:hover': {
              backgroundColor: isDay
                ? props.theme.colors.cardHover
                : 'rgba(255, 255, 255, 0.05)',
            },
          }),
    };
  }
);

export const FeaturesList = styled.ul((props) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
}));

export const FeatureItem = styled.li((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: props.theme.spacing.sm,
  fontSize: '14px',
  color: props.theme.colors.textSecondary,
  lineHeight: 1.5,
}));

export const CheckIcon = styled.span((props) => ({
  color: props.theme.colors.primary,
  fontSize: '20px',
  lineHeight: 1,
  flexShrink: 0,
  marginTop: '2px',
}));

export const ComparisonSection = styled.section((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    paddingTop: props.theme.spacing.xxl,
    paddingBottom: props.theme.spacing.xxl,
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
  };
});

export const ComparisonContainer = styled.div((props) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
}));

export const ComparisonHeader = styled.div((props) => ({
  textAlign: 'center',
  marginBottom: props.theme.spacing.xl,
}));

export const ComparisonTitle = styled.h2((props) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.sm,
}));

export const ComparisonSubtitle = styled.p((props) => ({
  fontSize: '16px',
  color: props.theme.colors.textSecondary,
  margin: 0,
}));

export const ComparisonTable = styled.table((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',

    '& thead': {
      borderBottom: isDay
        ? `1px solid ${props.theme.colors.border}`
        : '1px solid rgba(255, 255, 255, 0.1)',
    },

    '& tbody tr': {
      borderBottom: isDay
        ? `1px solid ${props.theme.colors.border}`
        : '1px solid rgba(255, 255, 255, 0.1)',
    },
  };
});

export const TableHeader = styled.th((props) => ({
  padding: `${props.theme.spacing.md} ${props.theme.spacing.sm}`,
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.text,
  textAlign: 'center',

  '&:first-child': {
    textAlign: 'left',
    paddingLeft: 0,
    width: '25%',
  },
}));

export const TableHeaderPrimary = styled(TableHeader)((props) => ({
  color: props.theme.colors.primary,
}));

export const TableCell = styled.td((props) => ({
  padding: `${props.theme.spacing.md} ${props.theme.spacing.sm}`,
  fontSize: '14px',
  color: props.theme.colors.textSecondary,
  textAlign: 'center',

  '&:first-child': {
    fontWeight: 500,
    color: props.theme.colors.text,
    textAlign: 'left',
    paddingLeft: 0,
  },
}));

export const TableCellBold = styled(TableCell)((props) => ({
  fontWeight: 700,
  color: props.theme.colors.text,
}));

export const CheckMark = styled.span((props) => ({
  color: props.theme.colors.primary,
  fontSize: '20px',
}));

export const MinusMark = styled.span((props) => ({
  color: props.theme.colors.textTertiary || props.theme.colors.textSecondary,
  fontSize: '20px',
}));

export const FAQSection = styled.section((props) => ({
  maxWidth: '900px',
  margin: '0 auto',
  padding: `0 ${props.theme.spacing.lg}`,
  paddingTop: props.theme.spacing.xxl,
  paddingBottom: props.theme.spacing.xxl,
}));

export const FAQTitle = styled.h2((props) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.xl,
  textAlign: 'center',
}));

export const FAQGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.md,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: props.theme.spacing.lg,
  },
}));

export const FAQCard = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    borderRadius: '8px',
    border: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    background: isDay ? '#ffffff' : 'rgba(255, 255, 255, 0.05)',
    padding: props.theme.spacing.lg,
  };
});

export const FAQQuestion = styled.h3((props) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.sm,
}));

export const FAQAnswer = styled.p((props) => ({
  fontSize: '14px',
  color: props.theme.colors.textSecondary,
  margin: 0,
  lineHeight: 1.6,
}));

export const TrustSection = styled.section((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    width: '100%',
    paddingTop: props.theme.spacing.xl,
    paddingBottom: props.theme.spacing.xl,
    borderTop: isDay
      ? `1px solid ${props.theme.colors.border}`
      : '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
  };
});

export const TrustText = styled.p((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.textSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: 0,
  marginBottom: props.theme.spacing.lg,
}));

export const TrustLogos = styled.div((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: props.theme.spacing.xl,
  opacity: 0.6,
  filter: 'grayscale(100%)',
}));

export const TrustLogoPlaceholder = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    height: '32px',
    width: '96px',
    borderRadius: '4px',
    background: isDay ? '#e5e7eb' : 'rgba(255, 255, 255, 0.1)',
  };
});

