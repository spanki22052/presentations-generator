import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import * as Styled from './RegisterPage.styles';
import { useRegisterPageLogic } from '../hooks/useRegisterPageLogic';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  containerVariants,
  leftPanelVariants,
  rightPanelVariants,
  logoVariants,
  titleVariants,
  socialButtonVariants,
  formVariants,
  inputVariants,
  buttonVariants,
  linkVariants,
  cardVariants,
} from '../model/variants';

// Logo Icon SVG
const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
      fill="currentColor"
    />
  </svg>
);

// Google Icon SVG
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

// Account Circle Icon SVG
const AccountCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
      fill="currentColor"
    />
  </svg>
);

// Visibility Icon SVG
const VisibilityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
      fill="currentColor"
    />
  </svg>
);

// Visibility Off Icon SVG
const VisibilityOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
      fill="currentColor"
    />
  </svg>
);

// Auto Awesome Icon SVG
const AutoAwesomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 9l-2.5-1.5L14 5l-1.5 2.5L10 9l2.5 1.5L14 13l1.5-2.5L18 9zm-9 5l-2.5-1.5L5 11l-1.5 2.5L1 15l2.5 1.5L5 19l1.5-2.5L9 15zm9-9l-1.5-1.5L15 3l-1.5 1.5L12 6l1.5 1.5L15 9l1.5-1.5L18 6z"
      fill="currentColor"
    />
  </svg>
);

export function RegisterPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const {
    form,
    isLoading,
    handleSubmit,
    handleLoginLink,
    handleGoogleLogin,
    showPassword,
    showConfirmPassword,
    togglePasswordVisibility,
    toggleConfirmPasswordVisibility,
  } = useRegisterPageLogic();

  const avatarUrls = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCiBq1LYWKh-FJsfLp2ZSxFuDvaIhU4mwTTKKN3iNqnf7WkSnKpIAiZ2ZoIr0yYliTk2rwKjWPSJZ-CBHJYT7MBZnlq2FQomm6d6RHHEqQIvfc_0Tc_3YGtkNdSPaAo43MD6jt0fG6bZZuEpvJ3SMdKUHm5dYYgoYi0TNpw5HLji1cRGr9m0miodblmWJAD8CEVUA5JwDzKi-iDqheraNVsknViGTu4sOO1dgodtlzzgbl-D2FrS_AaWV0oflgMBafcCyOEF75R27r0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6IQhlTyj-Rde_pt8BsUIUcxteSDyXYldQ0dB4CeqR7ebTMJAa3JNlYN7tGank3Lo4gAe28fhzFeGmXW2JYUlJpooZAn05gbBoUmeK4tyztIom5V48S9o0LUnJ5VNxBPbJUIaHAMAxijQPJM8ewscENg9ifo_2Fm_iMtFXz4wmc4iMQDCLe8Z6rPiz6SJuazmb5Ovpmc7alYWvkh8gyt44cDcn3YB2Ac5MILmRMGlVKKVI-w7f-u1VoF5kk_MwG6AOmkdsNU-fpECZ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAC_tb6dH67MJMVl_nHfoiI9FsJAPwWyJ_nWjXyWXPb6x-Vd-w-bGcGAAoqJmtiQOn6Ui_u04UmxMWzbvXPbCs55rImq6gygPNjT_4B3xvaiSl7d8Qf38GxiQiEYlJNcMSu7oj7lvGsb60k8U4DujaIUHX4ZUHoj7iKtyt5TpWQ9KYg2sKG1tVKabG849vlkSVWajftGFYBFumt5pqsO5sy9wUXveLYD5GeZgDX2l6agiEX_OcILdspfV_wfDdlkmVD3EkxcNmz8ih4',
  ];

  return (
    <Styled.Container
      as={motion.div}
      variants={shouldAnimate ? containerVariants : undefined}
      initial={shouldAnimate ? 'hidden' : undefined}
      animate={shouldAnimate ? 'visible' : undefined}
    >
      {/* Left Form Panel */}
      <Styled.LeftPanel
        as={motion.div}
        variants={shouldAnimate ? leftPanelVariants : undefined}
      >
        <Styled.FormContainer>
          {/* Logo */}
          <Styled.LogoContainer
            as={motion.div}
            variants={shouldAnimate ? logoVariants : undefined}
          >
            <Styled.LogoIcon>
              <LogoIcon />
            </Styled.LogoIcon>
            <Styled.LogoText>{t('registerPage.brandName')}</Styled.LogoText>
          </Styled.LogoContainer>

          {/* Header */}
          <Styled.Header>
            <Styled.Title
              as={motion.h2}
              variants={shouldAnimate ? titleVariants : undefined}
            >
              {t('registerPage.title')}
            </Styled.Title>
            <Styled.Subtitle
              as={motion.p}
              variants={shouldAnimate ? titleVariants : undefined}
            >
              {t('registerPage.subtitle')}
            </Styled.Subtitle>
          </Styled.Header>

          {/* Social Login Button */}
          <motion.div variants={shouldAnimate ? socialButtonVariants : undefined}>
            <Styled.SocialButton
              as={motion.button}
              type="button"
              variants={shouldAnimate ? socialButtonVariants : undefined}
              whileHover={shouldAnimate ? 'hover' : undefined}
              whileTap={shouldAnimate ? 'tap' : undefined}
              onClick={handleGoogleLogin}
            >
              <AccountCircleIcon />
              <span>{t('registerPage.social.google')}</span>
            </Styled.SocialButton>
          </motion.div>

          {/* Divider */}
          <Styled.Divider>
            <Styled.DividerLine />
            <Styled.DividerText>{t('registerPage.social.divider')}</Styled.DividerText>
          </Styled.Divider>

          {/* Form */}
          <motion.div variants={shouldAnimate ? formVariants : undefined}>
            <Styled.StyledForm
              form={form as any}
              layout="vertical"
              onFinish={handleSubmit as any}
            >
              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="name"
                  label={t('registerPage.form.name.label')}
                  rules={[
                    {
                      required: true,
                      message: t('registerPage.form.name.required'),
                    },
                    {
                      min: 2,
                      message: t('registerPage.form.name.minLength'),
                    },
                  ]}
                >
                  <Styled.StyledInput
                    placeholder={t('registerPage.form.name.placeholder')}
                    autoComplete="name"
                  />
                </Styled.FormItem>
              </motion.div>

              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="email"
                  label={t('registerPage.form.email.label')}
                  rules={[
                    {
                      required: true,
                      message: t('registerPage.form.email.required'),
                    },
                    {
                      type: 'email',
                      message: t('registerPage.form.email.invalid'),
                    },
                  ]}
                >
                  <Styled.StyledInput
                    type="email"
                    placeholder={t('registerPage.form.email.placeholder')}
                    autoComplete="email"
                  />
                </Styled.FormItem>
              </motion.div>

              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="password"
                  label={t('registerPage.form.password.label')}
                  rules={[
                    {
                      required: true,
                      message: t('registerPage.form.password.required'),
                    },
                    {
                      min: 6,
                      message: t('registerPage.form.password.minLength'),
                    },
                  ]}
                >
                  <Styled.PasswordInputWrapper>
                    <Styled.StyledPasswordInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('registerPage.form.password.placeholder')}
                      autoComplete="new-password"
                    />
                    <Styled.PasswordToggle
                      type="button"
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? t('loginPage.form.password.hidePassword') : t('loginPage.form.password.showPassword')}
                    >
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </Styled.PasswordToggle>
                  </Styled.PasswordInputWrapper>
                </Styled.FormItem>
              </motion.div>

              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="confirmPassword"
                  label={t('registerPage.form.confirmPassword.label')}
                  dependencies={['password']}
                  rules={[
                    {
                      required: true,
                      message: t('registerPage.form.confirmPassword.required'),
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(t('registerPage.form.confirmPassword.mismatch'))
                        );
                      },
                    }),
                  ]}
                >
                  <Styled.PasswordInputWrapper>
                    <Styled.StyledPasswordInput
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder={t('registerPage.form.confirmPassword.placeholder')}
                      autoComplete="new-password"
                    />
                    <Styled.PasswordToggle
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      aria-label={showConfirmPassword ? t('loginPage.form.password.hidePassword') : t('loginPage.form.password.showPassword')}
                    >
                      {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </Styled.PasswordToggle>
                  </Styled.PasswordInputWrapper>
                </Styled.FormItem>
              </motion.div>

              <motion.div
                variants={shouldAnimate ? buttonVariants : undefined}
                whileHover={shouldAnimate ? 'hover' : undefined}
                whileTap={shouldAnimate ? 'tap' : undefined}
              >
                <Styled.FormItem>
                  <Styled.SubmitButton
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    block
                  >
                    {t('registerPage.form.submit')}
                  </Styled.SubmitButton>
                </Styled.FormItem>
              </motion.div>
            </Styled.StyledForm>
          </motion.div>

          {/* Microcopy */}
          <Styled.Microcopy
            as={motion.p}
            variants={shouldAnimate ? linkVariants : undefined}
          >
            {t('registerPage.form.microcopy')}
          </Styled.Microcopy>

          {/* Login Link */}
          <Styled.LoginLink
            as={motion.div}
            variants={shouldAnimate ? linkVariants : undefined}
          >
            {t('registerPage.login.prompt')}{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLoginLink();
              }}
            >
              {t('registerPage.login.link')}
            </a>
          </Styled.LoginLink>
        </Styled.FormContainer>
      </Styled.LeftPanel>

      {/* Right Visual Panel */}
      <Styled.RightPanel
        as={motion.div}
        variants={shouldAnimate ? rightPanelVariants : undefined}
      >
        <Styled.RightPanelBackground />
        <Styled.FloatingCard
          as={motion.div}
          variants={shouldAnimate ? cardVariants : undefined}
        >
          <Styled.CardVisual>
            <Styled.CardGradient />
            <Styled.ChartBars>
              <Styled.ChartBar height="64px" opacity="0.3" />
              <Styled.ChartBar height="96px" opacity="0.5" />
              <Styled.ChartBar height="128px" opacity="1" />
              <Styled.ChartBar height="80px" opacity="0.4" />
              <Styled.ChartBar height="48px" opacity="0.2" />
            </Styled.ChartBars>
          </Styled.CardVisual>
          <Styled.CardContent>
            <Styled.CardHeader>
              <Styled.CardIcon>
                <AutoAwesomeIcon />
              </Styled.CardIcon>
              <Styled.CardTitle>{t('registerPage.card.title')}</Styled.CardTitle>
            </Styled.CardHeader>
            <Styled.CardHeading>{t('registerPage.card.heading')}</Styled.CardHeading>
            <Styled.CardDescription>{t('registerPage.card.description')}</Styled.CardDescription>
            <Styled.SocialProof>
              <Styled.AvatarGroup>
                {avatarUrls.map((url, index) => (
                  <Styled.Avatar key={index} src={url} />
                ))}
              </Styled.AvatarGroup>
              <Styled.SocialProofText>{t('registerPage.card.socialProof')}</Styled.SocialProofText>
            </Styled.SocialProof>
          </Styled.CardContent>
        </Styled.FloatingCard>
      </Styled.RightPanel>
    </Styled.Container>
  );
}
