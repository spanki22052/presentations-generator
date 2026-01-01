import styled from 'styled-components';
import { Select } from 'antd';

export const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.navbar.height};
  background: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.colors.background === '#ffffff'
        ? 'rgba(255, 255, 255, 0.95)'
        : 'rgba(10, 10, 26, 0.95)'
      : theme.colors.background === '#ffffff'
      ? 'rgba(255, 255, 255, 0.9)'
      : 'rgba(10, 10, 26, 0.8)'};
  backdrop-filter: blur(10px);
  box-shadow: ${({ $scrolled, theme }) =>
    $scrolled
      ? theme.colors.background === '#ffffff'
        ? '0 2px 20px rgba(0, 0, 0, 0.1)'
        : '0 2px 20px rgba(0, 0, 0, 0.3)'
      : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid
    ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.border : 'transparent'};
`;

export const NavbarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.li<{ $active?: boolean }>`
  position: relative;
`;

export const NavLinkButton = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.text};
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;
  position: relative;
  opacity: ${({ $active }) => ($active ? 1 : 0.9)};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? '80%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LanguageSelect = styled(Select)(props => ({
  width: '75px',
  minWidth: '75px',

  '& .ant-select-selector': {
    background: 'transparent !important',
    border: `1px solid ${props.theme.colors.border} !important`,
    borderRadius: `${props.theme.borderRadius.md} !important`,
    height: '40px !important',
    padding: `0 ${props.theme.spacing.xs} !important`,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease',

    '&:hover': {
      borderColor: `${props.theme.colors.accent} !important`,
      background: `${props.theme.colors.backgroundSecondary} !important`,
    },
  },

  '& .ant-select-selection-item': {
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    color: `${props.theme.colors.text} !important`,
    fontSize: '14px !important',
    fontWeight: '500 !important',
    lineHeight: '38px !important',
    padding: '0 !important',
  },

  '& .ant-select-selection-placeholder': {
    color: `${props.theme.colors.text} !important`,
    opacity: 0.6,
  },

  '& .ant-select-arrow': {
    display: 'none !important',
  },

  '&.ant-select-focused .ant-select-selector': {
    borderColor: `${props.theme.colors.accent} !important`,
    boxShadow: `0 0 0 2px ${props.theme.colors.accent}20 !important`,
  },
}));

export const ThemeToggleButton = styled.button(props => ({
  background: 'none',
  border: 'none',
  color: props.theme.colors.text,
  fontSize: '24px',
  cursor: 'pointer',
  padding: props.theme.spacing.xs,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: props.theme.borderRadius.md,
  transition: 'background 0.3s ease, transform 0.2s ease',
  opacity: 0.9,

  '&:hover': {
    background: props.theme.colors.backgroundSecondary,
    opacity: 1,
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  transition: color 0.3s ease;
  opacity: 0.9;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    opacity: 1;
  }
`;

export const SignUpButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: ${({ theme }) =>
    theme.colors.background === '#ffffff'
      ? '0 4px 12px rgba(124, 58, 237, 0.3)'
      : '0 4px 12px rgba(24, 144, 255, 0.3)'};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) =>
      theme.colors.background === '#ffffff'
        ? '0 6px 16px rgba(124, 58, 237, 0.4)'
        : '0 6px 16px rgba(24, 144, 255, 0.4)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProfileIconButton = styled.button<{ $avatarUrl?: string }>(props => ({
  background: props.$avatarUrl ? `url(${props.$avatarUrl})` : props.theme.colors.backgroundSecondary,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: `1px solid ${props.theme.colors.border}`,
  color: props.theme.colors.text,
  fontSize: '14px',
  fontWeight: 600,
  cursor: 'pointer',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
  opacity: 0.9,
  backgroundColor: props.$avatarUrl ? 'transparent' : props.theme.colors.backgroundSecondary,

  '&:hover': {
    backgroundColor: props.$avatarUrl ? 'transparent' : props.theme.colors.backgroundTertiary,
    borderColor: props.theme.colors.primary,
    opacity: 1,
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95)',
  },
}));

