import styled from 'styled-components';
import { Input, Button, Switch } from 'antd';

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const SectionHeaderText = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const SectionTitle = styled.h2((props) => ({
  fontSize: '20px',
  fontWeight: 700,
  color: props.theme.colors.text,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
}));

export const SectionDescription = styled.p((props) => ({
  fontSize: '14px',
  color: isDay(props.theme) ? '#64748b' : 'rgba(255, 255, 255, 0.6)',
  margin: 0,
  marginTop: '4px',
}));

export const SectionActions = styled.div((props) => ({
  display: 'flex',
  gap: props.theme.spacing.md,
}));

export const SaveButton = styled(Button)((props) => ({
  padding: `${props.theme.spacing.xs} ${props.theme.spacing.md}`,
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff',
  backgroundColor: props.theme.colors.primary,
  border: 'none',
  borderRadius: props.theme.borderRadius.lg,
  boxShadow: `0 1px 3px ${props.theme.colors.primary}30`,

  '&:hover': {
    backgroundColor: props.theme.colors.primaryHover,
    opacity: 0.9,
  },
}));

export const SectionDivider = styled.div((props) => ({
  borderBottom: `1px solid ${isDay(props.theme) ? '#e2e8f0' : '#1e293b'}`,
  marginBottom: props.theme.spacing.xl,
}));

export const SecuritySection = styled.section((props) => ({
  marginBottom: props.theme.spacing.xl,
}));

export const SectionTitleWithIcon = styled.h2((props) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
  marginBottom: props.theme.spacing.md,
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
}));

export const SectionIcon = styled.span((props) => ({
  color: props.theme.colors.primary,
  fontSize: '20px',
}));

export const PasswordFormGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.md,

  '@media (min-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const PasswordFormField = styled.div<{ $fullWidth?: boolean }>((props) => ({
  gridColumn: props.$fullWidth ? '1 / -1' : 'auto',
}));

export const FormLabel = styled.label((props) => ({
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: props.theme.spacing.xs,
  color: isDay(props.theme) ? '#64748b' : 'rgba(255, 255, 255, 0.6)',
}));

export const StyledPasswordInput = styled(Input.Password)((props) => {
  const day = isDay(props.theme);
  return {
    width: '100%',
    backgroundColor: day ? '#f9fafb' : '#1f2937',
    border: `1px solid ${day ? '#e5e7eb' : '#374151'}`,
    borderRadius: props.theme.borderRadius.xl,
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
    fontSize: '14px',
    color: props.theme.colors.text,
    transition: 'all 0.2s ease',

    '&:hover': {
      borderColor: day ? '#9ca3af' : 'rgba(255, 255, 255, 0.3)',
    },

    '&:focus, &:focus-visible': {
      outline: 'none',
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 2px ${props.theme.colors.primary}50`,
    },

    '& input': {
      backgroundColor: day ? '#f9fafb' : '#1f2937',
      color: props.theme.colors.text,
    },

    '& .ant-input-password-icon': {
      color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.5)',
    },
  };
});

export const PasswordRequirement = styled.div((props) => ({
  marginTop: props.theme.spacing.md,
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.xs,
  fontSize: '14px',
  color: '#10b981',
}));

export const RequirementIcon = styled.span({
  fontSize: '16px',
});

export const TwoFactorSection = styled.div((props) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: props.theme.spacing.md,
}));

export const TwoFactorInfo = styled.div({
  flex: 1,
});

export const TwoFactorToggle = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const StyledSwitch = styled(Switch)((props) => ({
  '&.ant-switch-checked': {
    backgroundColor: props.theme.colors.primary,
  },
}));

export const RecommendationBox = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#eff6ff' : 'rgba(59, 130, 246, 0.2)',
    border: `1px solid ${day ? '#bfdbfe' : 'rgba(59, 130, 246, 0.3)'}`,
    borderRadius: props.theme.borderRadius.xl,
    padding: props.theme.spacing.md,
    display: 'flex',
    alignItems: 'flex-start',
    gap: props.theme.spacing.md,
  };
});

export const RecommendationIcon = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#dbeafe' : 'rgba(59, 130, 246, 0.3)',
    padding: props.theme.spacing.xs,
    borderRadius: props.theme.borderRadius.md,
    color: day ? '#2563eb' : '#93c5fd',
    fontSize: '20px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

export const RecommendationContent = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    flex: 1,
  };
});

export const RecommendationTitle = styled.h4((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '14px',
    fontWeight: 500,
    color: day ? '#1e40af' : '#bfdbfe',
    margin: 0,
    marginBottom: props.theme.spacing.xs,
  };
});

export const RecommendationText = styled.p((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '14px',
    color: day ? '#1e3a8a' : '#93c5fd',
    margin: 0,
    marginTop: props.theme.spacing.xs,
  };
});

export const LoginActivityList = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.md,
}));

export const LoginSessionCard = styled.div<{ $isActive?: boolean }>((props) => {
  const day = isDay(props.theme);
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: props.theme.spacing.md,
    backgroundColor: props.$isActive
      ? day
        ? '#f9fafb'
        : 'rgba(31, 41, 55, 0.5)'
      : day
      ? '#ffffff'
      : props.theme.colors.backgroundSecondary,
    borderRadius: props.theme.borderRadius.xl,
    border: `1px solid ${day ? '#e5e7eb' : '#1e293b'}`,
  };
});

export const SessionInfo = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.md,
}));

export const SessionIconWrapper = styled.div((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#ffffff' : '#374151',
    padding: props.theme.spacing.xs,
    borderRadius: props.theme.borderRadius.md,
    border: `1px solid ${day ? '#e5e7eb' : '#1e293b'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
  };
});

export const SessionDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const SessionDevice = styled.p((props) => ({
  fontSize: '14px',
  fontWeight: 500,
  color: props.theme.colors.text,
  margin: 0,
}));

export const SessionMeta = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#6b7280' : 'rgba(255, 255, 255, 0.6)',
  margin: 0,
}));

export const ActiveBadge = styled.span((props) => {
  const day = isDay(props.theme);
  return {
    backgroundColor: day ? '#d1fae5' : 'rgba(16, 185, 129, 0.3)',
    color: day ? '#065f46' : '#6ee7b7',
    fontSize: '12px',
    fontWeight: 500,
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
    borderRadius: props.theme.borderRadius.md,
    border: `1px solid ${day ? '#a7f3d0' : 'rgba(16, 185, 129, 0.5)'}`,
  };
});

export const RevokeButton = styled.button((props) => {
  const day = isDay(props.theme);
  return {
    fontSize: '12px',
    fontWeight: 500,
    color: '#ef4444',
    backgroundColor: 'transparent',
    border: 'none',
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
    borderRadius: props.theme.borderRadius.md,
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      color: '#dc2626',
      backgroundColor: day ? '#fef2f2' : 'rgba(239, 68, 68, 0.1)',
    },
  };
});

export const LogoutAllButton = styled.button((props) => ({
  marginTop: props.theme.spacing.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: props.theme.spacing.xs,
  fontSize: '14px',
  fontWeight: 500,
  color: props.theme.colors.primary,
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: props.theme.colors.primaryHover,
  },
}));

export const LogoutIcon = styled.span({
  fontSize: '18px',
});

