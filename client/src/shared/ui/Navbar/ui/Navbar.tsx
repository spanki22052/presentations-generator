import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  NavbarContainer,
  NavbarContent,
  Logo,
  LogoImage,
  NavLinks,
  NavLink,
  NavLinkButton,
  Actions,
  LanguageSelect,
  ThemeToggleButton,
  LoginButton,
  SignUpButton,
  ProfileIconButton,
} from "./Navbar.styles";
import { useNavbarLogic } from "../hooks/useNavbarLogic";
import { useTheme, useI18n, useAuth } from "@/shared/contexts";
import { NAVBAR_ITEMS, LANGUAGE_OPTIONS } from "../model/constants";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export function Navbar() {
  const { t } = useTranslation();
  const {
    scrolled,
    handleLogoClick,
    handleNavClick,
    handleLogin,
    handleSignUp,
    handleProfileClick,
    isActive,
  } = useNavbarLogic();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useI18n();
  const { isAuthenticated, user } = useAuth();

  return (
    <NavbarContainer
      as={motion.nav}
      $scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <NavbarContent>
        <Logo
          as={motion.div}
          onClick={handleLogoClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <LogoImage src="/icon.png" alt="AutoDeck AI" />
          {t("navbar.logo")}
        </Logo>

        <NavLinks>
          {NAVBAR_ITEMS.map((item, index) => (
            <NavLink
              key={item.path}
              as={motion.li}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <NavLinkButton
                $active={isActive(item.path)}
                onClick={() => handleNavClick(item.path)}
                as={motion.button}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {t(`navbar.items.${item.path.slice(1)}`)}
              </NavLinkButton>
            </NavLink>
          ))}
        </NavLinks>

        <Actions>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <LanguageSelect
              value={language}
              onChange={(value) => changeLanguage(value as "en" | "ru")}
              options={LANGUAGE_OPTIONS.map((option) => ({
                value: option.value,
                label: `${option.flag} ${option.label}`,
              }))}
              popupMatchSelectWidth={false}
              suffixIcon={null}
            />
          </motion.div>
          <ThemeToggleButton
            as={motion.button}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            title={
              theme === "day"
                ? t("navbar.themeToggle.dayMode")
                : t("navbar.themeToggle.nightMode")
            }
          >
            {theme === "day" ? "🌙" : "☀️"}
          </ThemeToggleButton>
          {isAuthenticated ? (
            <ProfileIconButton
              as={motion.button}
              onClick={handleProfileClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={t("navbar.profile")}
              $avatarUrl={undefined}
            >
              {user?.name
                ?.split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2) || '👤'}
            </ProfileIconButton>
          ) : (
            <>
              <LoginButton
                as={motion.button}
                onClick={handleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("navbar.login")}
              </LoginButton>
              <SignUpButton
                as={motion.button}
                onClick={handleSignUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("navbar.getStarted")}
              </SignUpButton>
            </>
          )}
        </Actions>
      </NavbarContent>
    </NavbarContainer>
  );
}
