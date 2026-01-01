import styled from 'styled-components';
import { Select, Button, Switch, Slider, Radio } from 'antd';

const isDay = (theme: any) => theme.colors.background === '#ffffff';

export const SectionContent = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.xl,
}));

export const SectionHeader = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
  paddingBottom: props.theme.spacing.md,
  borderBottom: `1px solid ${isDay(props.theme) ? '#e2e8f0' : '#1e293b'}`,

  '@media (min-width: 640px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));

export const SectionHeaderText = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const SectionTitle = styled.h2((props) => ({
  fontSize: '24px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.xs,
}));

export const SectionDescription = styled.p((props) => ({
  fontSize: '14px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
  margin: 0,
}));

export const SectionActions = styled.div((props) => ({
  display: 'flex',
  gap: props.theme.spacing.md,
}));

export const SaveButton = styled(Button)((props) => ({
  padding: `${props.theme.spacing.xs} ${props.theme.spacing.lg}`,
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff',
  backgroundColor: props.theme.colors.primary,
  border: 'none',
  borderRadius: props.theme.borderRadius.lg,
  boxShadow: `0 4px 12px ${props.theme.colors.primary}30`,
  transition: 'all 0.2s ease',

  '&:hover': {
    backgroundColor: props.theme.colors.primaryHover,
    boxShadow: `0 6px 16px ${props.theme.colors.primary}40`,
  },
}));

export const SectionDivider = styled.div((props) => ({
  borderBottom: `1px solid ${isDay(props.theme) ? '#e2e8f0' : '#1e293b'}`,
  marginBottom: props.theme.spacing.xl,
}));

export const PreferencesSection = styled.section((props) => ({
  marginBottom: props.theme.spacing.xl,
}));

export const SectionTitleSmall = styled.h2((props) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.md,
}));

export const FormGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.md,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FormField = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const FormLabel = styled.label((props) => ({
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: props.theme.spacing.xs,
  color: isDay(props.theme) ? '#374151' : 'rgba(255, 255, 255, 0.7)',
}));

export const FormHint = styled.p((props) => ({
  marginTop: props.theme.spacing.xs,
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
  margin: 0,
}));

export const StyledSelect = styled(Select)((props) => {
  const day = isDay(props.theme);
  return {
    width: '100%',
    borderRadius: props.theme.borderRadius.xl,

    '& .ant-select-selector': {
      backgroundColor: day ? '#f9fafb' : '#1f2937',
      border: `1px solid ${day ? '#d1d5db' : '#374151'}`,
      borderRadius: props.theme.borderRadius.xl,
      padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
      fontSize: '14px',
      color: props.theme.colors.text,
      transition: 'all 0.2s ease',

      '&:hover': {
        borderColor: day ? '#9ca3af' : 'rgba(255, 255, 255, 0.3)',
      },
    },

    '& .ant-select-selection-item': {
      color: props.theme.colors.text,
    },

    '&.ant-select-focused .ant-select-selector': {
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 2px ${props.theme.colors.primary}50`,
    },
  };
});

export const SliderContainer = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#f9fafb' : '#1f2937',
    padding: props.theme.spacing.md,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${day ? '#e5e7eb' : '#374151'}`,
  };
});

export const StyledSlider = styled(Slider)((props) => ({
  '& .ant-slider-rail': {
    backgroundColor: isDay(props.theme) ? '#e5e7eb' : '#374151',
  },

  '& .ant-slider-track': {
    backgroundColor: props.theme.colors.primary,
  },

  '& .ant-slider-handle': {
    borderColor: props.theme.colors.primary,
    backgroundColor: props.theme.colors.primary,

    '&:focus': {
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 2px ${props.theme.colors.primary}50`,
    },
  },
}));

export const SliderLabels = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: props.theme.spacing.xs,
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
}));

export const DepthOptionsGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: props.theme.spacing.md,

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
}));

export const DepthOptionCard = styled.label<{ $checked?: boolean }>((props) => {
  const day = isDay(props.theme);
  return {
    position: 'relative',
    display: 'flex',
    cursor: 'pointer',
    flex: 1,
  };
});

export const DepthOptionContent = styled.div<{ $checked?: boolean }>((props) => {
  const day = isDay(props.theme);
  return {
    flex: 1,
    padding: props.theme.spacing.md,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${props.$checked
      ? props.theme.colors.primary
      : day
      ? '#e5e7eb'
      : '#374151'}`,
    backgroundColor: props.$checked
      ? day
        ? '#f3f0ff'
        : `${props.theme.colors.primary}20`
      : day
      ? '#ffffff'
      : '#1f2937',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    gap: props.theme.spacing.xs,

    '&:hover': {
      borderColor: props.theme.colors.primary + '80',
    },
  };
});

export const DepthOptionHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',
});

export const DepthOptionIcon = styled.span<{ $checked?: boolean }>((props) => ({
  fontSize: '20px',
  color: props.$checked
    ? props.theme.colors.primary
    : isDay(props.theme)
    ? '#9ca3af'
    : 'rgba(255, 255, 255, 0.4)',
  transition: 'color 0.2s ease',
}));

export const DepthOptionRadio = styled.div<{ $checked?: boolean }>((props) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  border: `2px solid ${props.$checked
    ? props.theme.colors.primary
    : isDay(props.theme)
    ? '#d1d5db'
    : '#4b5563'}`,
  backgroundColor: props.$checked ? props.theme.colors.primary : 'transparent',
  transition: 'all 0.2s ease',
}));

export const DepthOptionTitle = styled.h3((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: '4px',
}));

export const DepthOptionDescription = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
  margin: 0,
}));

export const HiddenRadio = styled.input({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

export const LanguageSettingsList = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
}));

export const LanguageSettingCard = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#f9fafb' : '#1f2937',
    padding: props.theme.spacing.md,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${day ? '#e5e7eb' : '#374151'}`,
    display: 'flex',
    flexDirection: 'column',
    gap: props.theme.spacing.md,

    '@media (min-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  };
});

export const LanguageSettingContent = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.md,
}));

export const LanguageSettingIcon = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: day ? '#ffffff' : '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: props.theme.colors.primary,
    boxShadow: day ? '0 1px 2px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.3)',
  };
});

export const LanguageSettingInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const LanguageSettingTitle = styled.h3((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

export const LanguageSettingDescription = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
  margin: 0,
}));

export const LanguageSelect = styled(Select)((props) => {
  const day = isDay(props.theme);
  return {
    minWidth: '200px',

    '& .ant-select-selector': {
      backgroundColor: day ? '#ffffff' : '#111827',
      border: `1px solid ${day ? '#e5e7eb' : '#374151'}`,
      borderRadius: props.theme.borderRadius.md,
      fontSize: '14px',
      color: props.theme.colors.text,
    },

    '&.ant-select-focused .ant-select-selector': {
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 2px ${props.theme.colors.primary}50`,
    },
  };
});

export const ToggleSettingCard = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#f9fafb' : '#1f2937',
    padding: props.theme.spacing.md,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${day ? '#e5e7eb' : '#374151'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
});

export const ToggleSettingContent = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.md,
}));

export const ToggleSettingIcon = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: day ? '#ffffff' : '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: props.theme.colors.primary,
    boxShadow: day ? '0 1px 2px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.3)',
  };
});

export const ToggleSettingInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const ToggleSettingTitle = styled.h3((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

export const ToggleSettingDescription = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
  margin: 0,
}));

export const StyledSwitch = styled(Switch)((props) => ({
  '&.ant-switch-checked': {
    backgroundColor: props.theme.colors.primary,
  },
}));

export const BetaFeaturesBox = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#eff6ff' : 'rgba(59, 130, 246, 0.2)',
    padding: props.theme.spacing.md,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${day ? '#bfdbfe' : 'rgba(59, 130, 246, 0.3)'}`,
  };
});

export const BetaFeaturesContent = styled.div((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: props.theme.spacing.md,
}));

export const BetaFeaturesIcon = styled.span((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '24px',
    color: day ? '#2563eb' : '#93c5fd',
    flexShrink: 0,
  };
});

export const BetaFeaturesInfo = styled.div((props) => ({
  flex: 1,
}));

export const BetaFeaturesTitle = styled.h3((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '14px',
    fontWeight: 700,
    color: day ? '#1e2937' : '#ffffff',
    margin: 0,
    marginBottom: '4px',
  };
});

export const BetaFeaturesDescription = styled.p((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '12px',
    color: day ? '#475569' : 'rgba(255, 255, 255, 0.7)',
    margin: 0,
    marginBottom: props.theme.spacing.md,
  };
});

export const BetaFeaturesLink = styled.button((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '12px',
    fontWeight: 600,
    color: day ? '#2563eb' : '#93c5fd',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: day ? '#1d4ed8' : '#bfdbfe',
    },
  };
});

