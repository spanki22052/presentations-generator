import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as Styled from "./LoginPage.styles";
import { useLoginPageLogic } from "../hooks/useLoginPageLogic";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  containerVariants,
  leftPanelVariants,
  rightPanelVariants,
  logoVariants,
  testimonialVariants,
  titleVariants,
  socialButtonsVariants,
  socialButtonItemVariants,
  formVariants,
  inputVariants,
  buttonVariants,
  linkVariants,
  goBackButtonVariants,
} from "../model/variants";
import {
  LogoIcon,
  GoogleIcon,
  MicrosoftIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  ArrowLeftIcon,
  TestimonialIcon,
} from "../lib/icons";

export function LoginPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const {
    form,
    isLoading,
    handleSubmit,
    handleForgotPassword,
    handleRegisterLink,
    handleGoogleLogin,
    handleMicrosoftLogin,
    handleGoBack,
    showPassword,
    togglePasswordVisibility,
  } = useLoginPageLogic();

  return (
    <Styled.Container
      as={motion.div}
      variants={shouldAnimate ? containerVariants : undefined}
      initial={shouldAnimate ? "hidden" : undefined}
      animate={shouldAnimate ? "visible" : undefined}
    >
      {/* Left Visual Panel */}
      <Styled.LeftPanel
        as={motion.div}
        variants={shouldAnimate ? leftPanelVariants : undefined}
      >
        <Styled.LeftPanelBackground />
        <Styled.LeftPanelPattern />
        <Styled.LeftPanelContent>
          <Styled.LogoContainer
            as={motion.div}
            variants={shouldAnimate ? logoVariants : undefined}
          >
            <Styled.LogoIcon>
              <LogoIcon />
            </Styled.LogoIcon>
            <Styled.LogoText>{t("loginPage.brandName")}</Styled.LogoText>
          </Styled.LogoContainer>
          <Styled.TestimonialContainer
            as={motion.div}
            variants={shouldAnimate ? testimonialVariants : undefined}
          >
            <Styled.TestimonialBlockquote>
              <Styled.TestimonialIcon>
                <TestimonialIcon />
              </Styled.TestimonialIcon>
              <Styled.TestimonialText>
                "{t("loginPage.testimonial.text")}"
              </Styled.TestimonialText>
              <Styled.TestimonialFooter>
                {t("loginPage.testimonial.footer")}
              </Styled.TestimonialFooter>
            </Styled.TestimonialBlockquote>
          </Styled.TestimonialContainer>
        </Styled.LeftPanelContent>
        <Styled.Copyright
          as={motion.div}
          variants={shouldAnimate ? linkVariants : undefined}
        >
          {t("loginPage.copyright")}
        </Styled.Copyright>
      </Styled.LeftPanel>

      {/* Right Form Panel */}
      <Styled.RightPanel
        as={motion.div}
        variants={shouldAnimate ? rightPanelVariants : undefined}
      >
        <Styled.FormContainer>
          {/* Go Back Button */}
          <Styled.GoBackButton
            as={motion.button}
            type="button"
            variants={shouldAnimate ? goBackButtonVariants : undefined}
            whileHover={shouldAnimate ? "hover" : undefined}
            whileTap={shouldAnimate ? "tap" : undefined}
            onClick={handleGoBack}
            aria-label={t("loginPage.goBack")}
          >
            <ArrowLeftIcon />
            <span>{t("loginPage.goBack")}</span>
          </Styled.GoBackButton>

          {/* Mobile Logo */}
          <Styled.MobileLogo
            as={motion.div}
            variants={shouldAnimate ? logoVariants : undefined}
          >
            <Styled.LogoIcon>
              <LogoIcon />
            </Styled.LogoIcon>
            <Styled.MobileLogoText>
              {t("loginPage.brandName")}
            </Styled.MobileLogoText>
          </Styled.MobileLogo>

          <Styled.Header>
            <Styled.Title
              as={motion.h1}
              variants={shouldAnimate ? titleVariants : undefined}
            >
              {t("loginPage.title")}
            </Styled.Title>
            <Styled.Subtitle
              as={motion.p}
              variants={shouldAnimate ? titleVariants : undefined}
            >
              {t("loginPage.subtitle")}
            </Styled.Subtitle>
          </Styled.Header>

          {/* Social Login Buttons */}
          <motion.div
            variants={shouldAnimate ? socialButtonsVariants : undefined}
          >
            <Styled.SocialLoginGrid>
              <Styled.SocialButton
                as={motion.button}
                type="button"
                variants={shouldAnimate ? socialButtonItemVariants : undefined}
                whileHover={shouldAnimate ? "hover" : undefined}
                whileTap={shouldAnimate ? "tap" : undefined}
                onClick={handleGoogleLogin}
              >
                <GoogleIcon />
                <span>{t("loginPage.social.google")}</span>
              </Styled.SocialButton>
              <Styled.SocialButton
                as={motion.button}
                type="button"
                variants={shouldAnimate ? socialButtonItemVariants : undefined}
                whileHover={shouldAnimate ? "hover" : undefined}
                whileTap={shouldAnimate ? "tap" : undefined}
                onClick={handleMicrosoftLogin}
              >
                <MicrosoftIcon />
                <span>{t("loginPage.social.microsoft")}</span>
              </Styled.SocialButton>
            </Styled.SocialLoginGrid>
          </motion.div>

          {/* Divider */}
          <Styled.Divider>
            <Styled.DividerLine />
            <Styled.DividerText>
              {t("loginPage.social.divider")}
            </Styled.DividerText>
          </Styled.Divider>

          {/* Form */}
          <motion.div variants={shouldAnimate ? formVariants : undefined}>
            <Styled.StyledForm
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              onFinishFailed={(errorInfo) => {
                console.log("Form validation failed:", errorInfo);
              }}
            >
              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="email"
                  label={t("loginPage.form.email.label")}
                  rules={[
                    {
                      required: true,
                      message: t("loginPage.form.email.required"),
                    },
                    {
                      type: "email",
                      message: t("loginPage.form.email.invalid"),
                    },
                  ]}
                >
                  <Styled.StyledInput
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("loginPage.form.email.placeholder")}
                  />
                </Styled.FormItem>
              </motion.div>

              <motion.div variants={shouldAnimate ? inputVariants : undefined}>
                <Styled.FormItem
                  name="password"
                  label={t("loginPage.form.password.label")}
                  rules={[
                    {
                      required: true,
                      message: t("loginPage.form.password.required"),
                    },
                    {
                      min: 6,
                      message: t("loginPage.form.password.minLength"),
                    },
                  ]}
                >
                  <Styled.PasswordInputWrapper>
                    <Styled.StyledPasswordInput
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder={t("loginPage.form.password.placeholder")}
                    />
                    <Styled.PasswordToggle
                      type="button"
                      onClick={togglePasswordVisibility}
                      aria-label={
                        showPassword
                          ? t("loginPage.form.password.hidePassword")
                          : t("loginPage.form.password.showPassword")
                      }
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Styled.PasswordToggle>
                  </Styled.PasswordInputWrapper>
                </Styled.FormItem>
                <Styled.ForgotPasswordLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleForgotPassword();
                  }}
                >
                  {t("loginPage.form.forgotPassword")}
                </Styled.ForgotPasswordLink>
              </motion.div>

              <motion.div
                variants={shouldAnimate ? buttonVariants : undefined}
                whileHover={shouldAnimate ? "hover" : undefined}
                whileTap={shouldAnimate ? "tap" : undefined}
              >
                <Styled.FormItem>
                  <Styled.SubmitButton
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                    block
                  >
                    {t("loginPage.form.submit")}
                  </Styled.SubmitButton>
                </Styled.FormItem>
              </motion.div>
            </Styled.StyledForm>
          </motion.div>

          {/* Register Link */}
          <Styled.RegisterLink
            as={motion.p}
            variants={shouldAnimate ? linkVariants : undefined}
          >
            {t("loginPage.register.prompt")}{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleRegisterLink();
              }}
            >
              {t("loginPage.register.link")}
            </a>
          </Styled.RegisterLink>
        </Styled.FormContainer>
      </Styled.RightPanel>
    </Styled.Container>
  );
}
