import styled from 'styled-components';
import { Input, Button } from 'antd';

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

export const CancelButton = styled(Button)((props) => ({
  padding: `${props.theme.spacing.xs} ${props.theme.spacing.md}`,
  fontSize: '14px',
  fontWeight: 500,
  color: isDay(props.theme) ? '#475569' : 'rgba(255, 255, 255, 0.7)',
  backgroundColor: isDay(props.theme) ? '#ffffff' : '#1e293b',
  border: `1px solid ${isDay(props.theme) ? '#cbd5e1' : '#334155'}`,
  borderRadius: props.theme.borderRadius.lg,

  '&:hover': {
    backgroundColor: isDay(props.theme) ? '#f8fafc' : '#334155',
    borderColor: isDay(props.theme) ? '#94a3b8' : '#475569',
    color: isDay(props.theme) ? '#334155' : '#ffffff',
  },
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

export const AvatarSection = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.lg,
  alignItems: 'center',

  '@media (min-width: 640px)': {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));

export const AvatarWrapper = styled.div({
  position: 'relative',
  cursor: 'pointer',
});

export const AvatarImage = styled.div<{ $avatarUrl?: string }>((props) => {
  const day = isDay(props.theme);
  return {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: props.theme.colors.backgroundSecondary,
    backgroundImage: props.$avatarUrl ? `url(${props.$avatarUrl})` : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    color: props.theme.colors.text,
    border: `4px solid ${day ? '#f1f5f9' : '#1e293b'}`,
    transition: 'opacity 0.2s ease',
  };
});

export const AvatarOverlay = styled.div({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.2s ease',

  '&:hover': {
    opacity: 1,
  },
});

export const AvatarActions = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.xs,
  alignItems: 'center',

  '@media (min-width: 640px)': {
    alignItems: 'flex-start',
  },
}));

export const AvatarButtons = styled.div((props) => ({
  display: 'flex',
  gap: props.theme.spacing.md,
}));

export const ChangePhotoButton = styled.button((props) => ({
  padding: `${props.theme.spacing.xs} ${props.theme.spacing.md}`,
  fontSize: '12px',
  fontWeight: 600,
  color: props.theme.colors.primary,
  backgroundColor: `${props.theme.colors.primary}1A`,
  border: 'none',
  borderRadius: props.theme.borderRadius.md,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: `${props.theme.colors.primary}33`,
  },
}));

export const RemovePhotoButton = styled.button((props) => {
  const day = isDay(props.theme);
  return {
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.md}`,
    fontSize: '12px',
    fontWeight: 600,
    color: '#dc2626',
    backgroundColor: day ? '#fef2f2' : 'rgba(220, 38, 38, 0.2)',
    border: 'none',
    borderRadius: props.theme.borderRadius.md,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',

    '&:hover': {
      backgroundColor: day ? '#fee2e2' : 'rgba(220, 38, 38, 0.3)',
    },
  };
});

export const AvatarHint = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#94a3b8' : 'rgba(255, 255, 255, 0.5)',
  margin: 0,
  textAlign: 'center',

  '@media (min-width: 640px)': {
    textAlign: 'left',
  },
}));

export const FormGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.lg,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FormField = styled.label((props) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.xs,
}));

export const FormLabel = styled.span((props) => ({
  fontSize: '14px',
  fontWeight: 500,
  color: isDay(props.theme) ? '#334155' : 'rgba(255, 255, 255, 0.7)',
}));

export const StyledInput = styled(Input)((props) => {
  const day = isDay(props.theme);
  return {
    width: '100%',
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.sm}`,
    borderRadius: props.theme.borderRadius.lg,
    backgroundColor: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
    background: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
    color: day ? '#1e2937' : '#ffffff',
    border: day ? '1px solid #cbd5e1' : '1px solid #334155',
    fontSize: '14px',
    transition: 'all 0.2s ease',

    '&::placeholder': {
      color: day ? '#94a3b8' : 'rgba(255, 255, 255, 0.5)',
    },

    '&:hover': {
      backgroundColor: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      background: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      borderColor: day ? '#94a3b8' : 'rgba(255, 255, 255, 0.3)',
    },

    '&:focus, &:focus-visible': {
      outline: 'none',
      backgroundColor: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      background: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 2px ${props.theme.colors.primary}50`,
    },

    '& input': {
      backgroundColor: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      background: day ? '#f8fafc' : 'rgba(30, 27, 46, 0.5)',
      color: day ? '#1e2937' : '#ffffff',
    },

    '&:disabled, &[disabled]': {
      backgroundColor: day ? '#f1f5f9' : 'rgba(30, 27, 46, 0.3)',
      background: day ? '#f1f5f9' : 'rgba(30, 27, 46, 0.3)',
      color: day ? '#94a3b8' : 'rgba(255, 255, 255, 0.4)',
      borderColor: day ? '#e2e8f0' : 'rgba(255, 255, 255, 0.1)',
    cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:disabled input, &[disabled] input': {
      backgroundColor: day ? '#f1f5f9' : 'rgba(30, 27, 46, 0.3)',
      background: day ? '#f1f5f9' : 'rgba(30, 27, 46, 0.3)',
      color: day ? '#94a3b8' : 'rgba(255, 255, 255, 0.4)',
      cursor: 'not-allowed',
    },
  };
});

export const EmailInputWrapper = styled.div({
  position: 'relative',
});

export const EmailIcon = styled.span((props) => ({
  position: 'absolute',
  left: props.theme.spacing.sm,
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '20px',
  color: isDay(props.theme) ? '#94a3b8' : 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));

export const EmailInput = styled(StyledInput)((props) => ({
  paddingLeft: `calc(${props.theme.spacing.sm} + 20px)`,
}));

export const PreferencesSection = styled.div((props) => ({
  paddingTop: props.theme.spacing.lg,
  borderTop: `1px solid ${isDay(props.theme) ? '#e2e8f0' : '#1e293b'}`,
}));

export const PreferencesTitle = styled.h3((props) => ({
  fontSize: '18px',
  fontWeight: 700,
  color: props.theme.colors.text,
  marginBottom: props.theme.spacing.md,
  marginTop: 0,
}));

export const PreferencesGrid = styled.div((props) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: props.theme.spacing.md,

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const PreferenceCard = styled.button((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: props.theme.spacing.md,
  borderRadius: props.theme.borderRadius.lg,
  border: `1px solid ${isDay(props.theme) ? '#cbd5e1' : '#334155'}`,
  backgroundColor: isDay(props.theme) ? '#f8fafc' : 'rgba(30, 27, 46, 0.3)',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textAlign: 'left',
  width: '100%',

  '&:hover': {
    borderColor: `${props.theme.colors.primary}80`,
  },
}));

export const PreferenceContent = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: props.theme.spacing.md,
}));

export const PreferenceIcon = styled.div((props) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: isDay(props.theme) ? '#ffffff' : '#334155',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: props.theme.colors.primary,
  fontSize: '20px',
  boxShadow: isDay(props.theme)
    ? '0 1px 2px rgba(0, 0, 0, 0.1)'
    : '0 1px 2px rgba(0, 0, 0, 0.3)',
}));

export const PreferenceInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const PreferenceLabel = styled.p((props) => ({
  fontSize: '14px',
  fontWeight: 600,
  color: props.theme.colors.text,
  margin: 0,
}));

export const PreferenceValue = styled.p((props) => ({
  fontSize: '12px',
  color: isDay(props.theme) ? '#64748b' : 'rgba(255, 255, 255, 0.6)',
  margin: 0,
}));

export const PreferenceChevron = styled.span((props) => ({
  fontSize: '20px',
  color: isDay(props.theme) ? '#94a3b8' : 'rgba(255, 255, 255, 0.5)',
}));

export const SubscriptionTeaser = styled.div((props) => ({
  paddingTop: props.theme.spacing.xs,
}));

export const SubscriptionCard = styled.div((props) => ({
  background: `linear-gradient(to right, ${props.theme.colors.primary}0D, ${props.theme.colors.primary}1A)`,
  border: `1px solid ${props.theme.colors.primary}33`,
  borderRadius: props.theme.borderRadius.xl,
  padding: props.theme.spacing.lg,
  display: 'flex',
  flexDirection: 'column',
  gap: props.theme.spacing.lg,
  alignItems: 'center',

  '@media (min-width: 640px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const SubscriptionContent = styled.div((props) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: props.theme.spacing.md,
  flex: 1,
}));

export const SubscriptionIcon = styled.div((props) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: `${props.theme.colors.primary}33`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: props.theme.colors.primary,
  fontSize: '24px',
  flexShrink: 0,
}));

export const SubscriptionInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const SubscriptionTitle = styled.h4((props) => ({
  fontWeight: 700,
  color: props.theme.colors.text,
  fontSize: '16px',
  margin: 0,
}));

export const SubscriptionDescription = styled.p((props) => ({
  fontSize: '14px',
  color: isDay(props.theme) ? '#475569' : 'rgba(255, 255, 255, 0.7)',
  margin: 0,
  marginTop: '4px',
  maxWidth: '400px',
}));

export const ManageSubscriptionButton = styled(Button)((props) => {
  const day = isDay(props.theme);
  return {
    whiteSpace: 'nowrap',
    padding: `${props.theme.spacing.xs} ${props.theme.spacing.lg}`,
    backgroundColor: day ? '#ffffff' : '#1e293b',
    color: props.theme.colors.text,
    fontWeight: 600,
    fontSize: '14px',
    borderRadius: props.theme.borderRadius.lg,
    border: `1px solid ${day ? '#cbd5e1' : '#334155'}`,
    boxShadow: day
      ? '0 1px 2px rgba(0, 0, 0, 0.1)'
      : '0 1px 2px rgba(0, 0, 0, 0.3)',

    '&:hover': {
      backgroundColor: day ? '#f8fafc' : '#334155',
      borderColor: day ? '#94a3b8' : '#475569',
    },
  };
});

