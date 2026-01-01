import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

export const Container = styled.div({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",

  '@media (min-width: 1024px)': {
    flexDirection: 'row',
  },
});

// Left Form Panel
export const LeftPanel = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '32px 16px',
    background: isDay ? '#ffffff' : '#1a162e',
    borderRight: isDay ? '1px solid #e9e7f3' : '1px solid #2d2a42',
    width: '100%',

    '@media (min-width: 640px)': {
      padding: '32px 24px',
    },

    '@media (min-width: 1024px)': {
      flex: 'none',
      width: 'auto',
      padding: '32px 80px',
    },

    '@media (min-width: 1280px)': {
      padding: '32px 96px',
    },
  };
});

export const FormContainer = styled.div({
  margin: '0 auto',
  width: '100%',
  maxWidth: '384px',

  '@media (min-width: 1024px)': {
    width: '384px',
  },
});

export const LogoContainer = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
  };
});

export const LogoIcon = styled.div({
  width: '32px',
  height: '32px',
  flexShrink: 0,
  color: '#3713ec',
});

export const LogoText = styled.h2((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '24px',
    fontWeight: 700,
    letterSpacing: '-0.015em',
    color: isDay ? '#100d1b' : '#ffffff',
    margin: 0,
  };
});

export const Header = styled.div({
  marginBottom: '32px',
});

export const Title = styled.h2((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '30px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: isDay ? '#100d1b' : '#ffffff',
    margin: 0,
    marginBottom: '8px',
  };
});

export const Subtitle = styled.p((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '14px',
    marginTop: '8px',
    color: isDay ? '#594c9a' : '#a094d1',
    margin: 0,
  };
});

// Social Login Button
export const SocialButton = styled.button((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    borderRadius: '8px',
    border: isDay ? '1px solid #d3cfe7' : '1px solid #3e3663',
    background: isDay ? '#ffffff' : '#252040',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 700,
    color: isDay ? '#100d1b' : '#ffffff',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    outline: 'none',

    '&:hover': {
      background: isDay ? '#f9fafb' : '#2d284a',
    },

    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: props.theme.colors.primary,
      outlineOffset: '2px',
    },

    '& svg, & .material-icon': {
      width: '24px',
      height: '24px',
      flexShrink: 0,
    },
  };
});

export const Divider = styled.div({
  position: 'relative',
  marginTop: '24px',
});

export const DividerLine = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    borderTop: `1px solid ${isDay ? '#e9e7f3' : '#3e3663'}`,
  };
});

export const DividerText = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    background: isDay ? '#ffffff' : '#1a162e',
    padding: '0 8px',
    color: isDay ? '#594c9a' : '#a094d1',
  };
});

// Form Styles
export const StyledForm = styled(Form)({
  marginTop: '24px',
  width: '100%',
});

export const FormItem = styled(Form.Item)((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    marginBottom: '24px',

    '& .ant-form-item-label': {
      padding: 0,
      marginBottom: '4px',
    },

    '& .ant-form-item-label > label': {
      height: 'auto',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.5,
      color: isDay ? '#100d1b' : '#ffffff',
    },

    '& .ant-form-item-explain-error': {
      marginTop: '4px',
      fontSize: '12px',
      color: isDay ? '#ef4444' : '#f87171',
    },
  };
});

export const StyledInput = styled(Input)((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'block',
    width: '100%',
    borderRadius: '8px',
    border: isDay ? '1px solid #d3cfe7' : '1px solid #3e3663',
    padding: '12px 16px',
    color: isDay ? '#100d1b' : '#ffffff',
    backgroundColor: isDay ? '#f9f8fc' : '#252040',
    background: isDay ? '#f9f8fc' : '#252040',
    fontSize: '14px',
    lineHeight: 1.5,
    transition: 'all 0.2s ease',

    '&::placeholder': {
      color: isDay ? '#594c9a' : '#6b609c',
    },

    '&:hover': {
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      borderColor: props.theme.colors.primary,
    },

    '&:focus, &:focus-visible': {
      outline: 'none',
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 1px ${props.theme.colors.primary}`,
    },

    '& input': {
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      color: isDay ? '#100d1b' : '#ffffff',
    },

    '&:disabled, &[disabled]': {
      backgroundColor: isDay ? '#f3f4f6' : '#2d2a42',
      background: isDay ? '#f3f4f6' : '#2d2a42',
      color: isDay ? '#9ca3af' : 'rgba(255, 255, 255, 0.4)',
      borderColor: isDay ? '#e5e7eb' : 'rgba(255, 255, 255, 0.1)',
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:disabled input, &[disabled] input': {
      backgroundColor: isDay ? '#f3f4f6' : '#2d2a42',
      background: isDay ? '#f3f4f6' : '#2d2a42',
      color: isDay ? '#9ca3af' : 'rgba(255, 255, 255, 0.4)',
      cursor: 'not-allowed',
    },
  };
});

export const PasswordInputWrapper = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'relative',
    borderRadius: '8px',
  };
});

export const StyledPasswordInput = styled(Input)((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    display: 'block',
    width: '100%',
    borderRadius: '8px',
    border: isDay ? '1px solid #d3cfe7' : '1px solid #3e3663',
    padding: '12px 40px 12px 16px',
    color: isDay ? '#100d1b' : '#ffffff',
    backgroundColor: isDay ? '#f9f8fc' : '#252040',
    background: isDay ? '#f9f8fc' : '#252040',
    fontSize: '14px',
    lineHeight: 1.5,
    transition: 'all 0.2s ease',

    '&::placeholder': {
      color: isDay ? '#594c9a' : '#6b609c',
    },

    '&:hover': {
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      borderColor: props.theme.colors.primary,
    },

    '&:focus, &:focus-visible': {
      outline: 'none',
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      borderColor: props.theme.colors.primary,
      boxShadow: `0 0 0 1px ${props.theme.colors.primary}`,
    },

    '& input': {
      backgroundColor: isDay ? '#f9f8fc' : '#252040',
      background: isDay ? '#f9f8fc' : '#252040',
      color: isDay ? '#100d1b' : '#ffffff',
    },

    '&:disabled, &[disabled]': {
      backgroundColor: isDay ? '#f3f4f6' : '#2d2a42',
      background: isDay ? '#f3f4f6' : '#2d2a42',
      color: isDay ? '#9ca3af' : 'rgba(255, 255, 255, 0.4)',
      borderColor: isDay ? '#e5e7eb' : 'rgba(255, 255, 255, 0.1)',
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:disabled input, &[disabled] input': {
      backgroundColor: isDay ? '#f3f4f6' : '#2d2a42',
      background: isDay ? '#f3f4f6' : '#2d2a42',
      color: isDay ? '#9ca3af' : 'rgba(255, 255, 255, 0.4)',
      cursor: 'not-allowed',
    },
  };
});

export const PasswordToggle = styled.button((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: isDay ? '#594c9a' : '#6b609c',
    transition: 'color 0.2s ease',
    pointerEvents: 'auto',

    '&:hover': {
      color: isDay ? '#3713ec' : '#a094d1',
    },
  };
});

export const SubmitButton = styled(Button)((props) => {
  return {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    borderRadius: '8px',
    background: props.theme.colors.primary,
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 700,
    color: '#ffffff',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    '&:hover': {
      background: props.theme.colors.primary,
      opacity: 0.9,
    },

    '&:focus-visible': {
      outline: '2px solid',
      outlineColor: props.theme.colors.primary,
      outlineOffset: '2px',
    },
  };
});

export const Microcopy = styled.p((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    marginTop: '16px',
    textAlign: 'center',
    fontSize: '14px',
    color: isDay ? '#594c9a' : '#a094d1',
    margin: 0,
  };
});

export const LoginLink = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    marginTop: '32px',
    textAlign: 'center',
    fontSize: '14px',
    color: isDay ? '#594c9a' : '#a094d1',
    marginBottom: 0,

    '& a': {
      fontWeight: 600,
      color: props.theme.colors.primary,
      textDecoration: 'none',
      transition: 'opacity 0.2s ease',
      marginLeft: '4px',

      '&:hover': {
        opacity: 0.8,
      },
    },
  };
});

// Right Visual Panel
export const RightPanel = styled.div({
  position: 'relative',
  display: 'none',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(55, 19, 236, 0.05)',

  '@media (min-width: 1024px)': {
    display: 'flex',
  },
});

export const RightPanelBackground = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    opacity: 0.1,
    backgroundImage: 'radial-gradient(#3713ec 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    background: isDay ? 'rgba(55, 19, 236, 0.05)' : '#1e1a34',
  };
});

export const FloatingCard = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '512px',
    overflow: 'hidden',
    borderRadius: '16px',
    background: isDay ? '#ffffff' : '#1a162e',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    border: isDay ? '1px solid #e9e7f3' : '1px solid #3e3663',
    margin: '32px',
  };
});

export const CardVisual = styled.div((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    aspectRatio: '16 / 9',
    width: '100%',
    background: isDay ? '#f9f8fc' : '#252040',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };
});

export const CardGradient = styled.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to top, rgba(55, 19, 236, 0.1), transparent)',
});

export const ChartBars = styled.div({
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-end',
  height: '128px',
  width: '256px',
  opacity: 0.8,
});

export const ChartBar = styled.div<{ height: string; opacity: string }>((props) => ({
  width: '32px',
  height: props.height,
  background: props.theme.colors.primary,
  opacity: props.opacity,
  borderRadius: '2px 2px 0 0',
  boxShadow: props.opacity === '1' ? `0 4px 12px ${props.theme.colors.primary}30` : 'none',
}));

export const CardContent = styled.div({
  padding: '32px',
});

export const CardHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '16px',
});

export const CardIcon = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'rgba(55, 19, 236, 0.1)',
  color: '#3713ec',
});

export const CardTitle = styled.h3((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '18px',
    fontWeight: 700,
    color: isDay ? '#100d1b' : '#ffffff',
    margin: 0,
  };
});

export const CardHeading = styled.p((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.2,
    color: isDay ? '#100d1b' : '#ffffff',
    margin: 0,
    marginBottom: '8px',
  };
});

export const CardDescription = styled.p((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '14px',
    color: isDay ? '#594c9a' : '#a094d1',
    margin: 0,
  };
});

export const SocialProof = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '24px',
});

export const AvatarGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-8px',
});

export const Avatar = styled.div<{ src?: string }>((props) => ({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '2px solid',
  borderColor: props.theme.colors.background === '#ffffff' ? '#ffffff' : '#1a162e',
  background: props.src ? `url(${props.src}) center/cover` : '#d1d5db',
  marginLeft: '-8px',
  '&:first-child': {
    marginLeft: 0,
  },
}));

export const SocialProofText = styled.span((props) => {
  const isDay = props.theme.colors.background === '#ffffff';
  return {
    fontSize: '14px',
    fontWeight: 500,
    color: isDay ? '#594c9a' : '#a094d1',
    paddingLeft: '8px',
  };
});
