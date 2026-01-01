import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import {
  Container,
  HeroSection,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroNote,
  HeroIllustration,
  IllustrationCard,
  TrustBar,
  TrustBarTitle,
  TrustBarLogos,
  TrustBarLogo,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  ViewAllLink,
  FeaturesGrid,
  FeatureCard,
  FeatureImage,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialRating,
  Star,
  TestimonialQuote,
  TestimonialAuthor,
  TestimonialAvatar,
  TestimonialInfo,
  TestimonialName,
  TestimonialRole,
  BottomCTASection,
  BottomCTAContent,
  BottomCTATitle,
  BottomCTASubtitle,
  BottomCTAActions,
  BottomCTANote,
} from "./HomePage.styles";
import { useHomePageLogic } from "../hooks/useHomePageLogic";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  containerVariants,
  titleVariants,
  subtitleVariants,
  featureCardVariants,
  buttonVariants,
  featureCardHoverVariants,
} from "../model/variants";
import { TRUSTED_COMPANIES } from "../model/constants";

export function HomePage() {
  const { t } = useTranslation();
  const { handleGetStarted, handleWatchDemo, handleViewAllFeatures } =
    useHomePageLogic();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <Container>
      {/* Hero Section */}
      <HeroSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        <HeroContent>
          <HeroBadge
            as={motion.div}
            variants={
              shouldAnimate
                ? {
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }
                : undefined
            }
          >
            {t("hero.badge")}
          </HeroBadge>
          <HeroTitle
            as={motion.h1}
            variants={shouldAnimate ? titleVariants : undefined}
          >
            <Trans
              i18nKey="hero.title"
              components={[<span className="accent" key="0" />]}
            />
          </HeroTitle>
          <HeroSubtitle
            as={motion.p}
            variants={shouldAnimate ? subtitleVariants : undefined}
          >
            {t("hero.subtitle")}
          </HeroSubtitle>
          <HeroActions>
            <PrimaryButton
              as={motion.button}
              variants={shouldAnimate ? buttonVariants : undefined}
              whileHover={shouldAnimate ? "hover" : undefined}
              whileTap={shouldAnimate ? "tap" : undefined}
              onClick={handleGetStarted}
            >
              {t("hero.primaryButton")}
            </PrimaryButton>
            <SecondaryButton
              as={motion.button}
              variants={shouldAnimate ? buttonVariants : undefined}
              whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
              whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              onClick={handleWatchDemo}
            >
              {t("hero.secondaryButton")}
            </SecondaryButton>
          </HeroActions>
          <HeroNote
            as={motion.p}
            variants={
              shouldAnimate
                ? {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 0.6 } },
                  }
                : undefined
            }
          >
            {t("hero.note")}
          </HeroNote>
        </HeroContent>
        <HeroIllustration
          as={motion.div}
          variants={
            shouldAnimate
              ? {
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  },
                }
              : undefined
          }
        >
          <IllustrationCard>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "16px",
                fontSize: "14px",
                color: "#fff",
              }}
            >
              📊 Chart Data
            </div>
            <div style={{ display: "flex", gap: "12px", flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              ></div>
            </div>
          </IllustrationCard>
        </HeroIllustration>
      </HeroSection>

      {/* Trust Bar */}
      <TrustBar
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        <TrustBarTitle>{t("trustBar.title")}</TrustBarTitle>
        <TrustBarLogos>
          {TRUSTED_COMPANIES.map((company, index) => (
            <TrustBarLogo
              key={company.name}
              as={motion.div}
              variants={
                shouldAnimate
                  ? {
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 0.8,
                        y: 0,
                        transition: { delay: index * 0.1 },
                      },
                    }
                  : undefined
              }
            >
              <span>{company.icon}</span>
              <span>{company.name}</span>
            </TrustBarLogo>
          ))}
        </TrustBarLogos>
      </TrustBar>

      {/* Features Section */}
      <FeaturesSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        whileInView={shouldAnimate ? "visible" : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
      >
        <SectionHeader>
          <div>
            <SectionTitle>{t("features.title")}</SectionTitle>
            <SectionSubtitle>{t("features.subtitle")}</SectionSubtitle>
          </div>
          <ViewAllLink onClick={handleViewAllFeatures}>
            {t("features.viewAll")}
          </ViewAllLink>
        </SectionHeader>
        <FeaturesGrid>
          {(["textToSlide", "smartLayouts", "instantBranding"] as const).map(
            (featureKey, index) => (
              <FeatureCard
                key={featureKey}
                as={motion.div}
                variants={shouldAnimate ? featureCardVariants : undefined}
                whileHover={
                  shouldAnimate ? featureCardHoverVariants.hover : undefined
                }
                custom={index}
              >
                <FeatureImage>
                  {featureKey === "textToSlide" && "💻"}
                  {featureKey === "smartLayouts" && "📊"}
                  {featureKey === "instantBranding" && "🖥️"}
                </FeatureImage>
                <FeatureIcon>
                  {featureKey === "textToSlide" && "⚡"}
                  {featureKey === "smartLayouts" && "📐"}
                  {featureKey === "instantBranding" && "🎨"}
                </FeatureIcon>
                <FeatureTitle>
                  {t(`features.items.${featureKey}.title`)}
                </FeatureTitle>
                <FeatureDescription>
                  {t(`features.items.${featureKey}.description`)}
                </FeatureDescription>
              </FeatureCard>
            )
          )}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Testimonials Section */}
      <TestimonialsSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        whileInView={shouldAnimate ? "visible" : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
      >
        <SectionHeader>
          <div>
            <SectionTitle>{t("testimonials.title")}</SectionTitle>
            <SectionSubtitle>{t("testimonials.subtitle")}</SectionSubtitle>
          </div>
        </SectionHeader>
        <TestimonialsGrid>
          {(["sarah", "michael", "elena"] as const).map(
            (testimonialKey, index) => (
              <TestimonialCard
                key={testimonialKey}
                as={motion.div}
                variants={shouldAnimate ? featureCardVariants : undefined}
                custom={index}
              >
                <TestimonialRating>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i}>★</Star>
                  ))}
                </TestimonialRating>
                <TestimonialQuote>
                  "{t(`testimonials.items.${testimonialKey}.quote`)}"
                </TestimonialQuote>
                <TestimonialAuthor>
                  <TestimonialAvatar>
                    {testimonialKey === "sarah" && "👩"}
                    {testimonialKey === "michael" && "👨"}
                    {testimonialKey === "elena" && "👩"}
                  </TestimonialAvatar>
                  <TestimonialInfo>
                    <TestimonialName>
                      {t(`testimonials.items.${testimonialKey}.name`)}
                    </TestimonialName>
                    <TestimonialRole>
                      {t(`testimonials.items.${testimonialKey}.role`)}
                    </TestimonialRole>
                  </TestimonialInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            )
          )}
        </TestimonialsGrid>
      </TestimonialsSection>

      {/* Bottom CTA Section */}
      <BottomCTASection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        whileInView={shouldAnimate ? "visible" : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
      >
        <BottomCTAContent>
          <BottomCTATitle>
            <Trans
              i18nKey="cta.title"
              components={[<span className="accent" key="0" />]}
            />
          </BottomCTATitle>
          <BottomCTASubtitle>{t("cta.subtitle")}</BottomCTASubtitle>
          <BottomCTAActions>
            <PrimaryButton
              as={motion.button}
              variants={shouldAnimate ? buttonVariants : undefined}
              whileHover={shouldAnimate ? "hover" : undefined}
              whileTap={shouldAnimate ? "tap" : undefined}
              onClick={handleGetStarted}
            >
              {t("cta.primaryButton")}
            </PrimaryButton>
            <SecondaryButton
              as={motion.button}
              variants={shouldAnimate ? buttonVariants : undefined}
              whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
              whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              onClick={handleViewAllFeatures}
            >
              {t("cta.secondaryButton")}
            </SecondaryButton>
          </BottomCTAActions>
          <BottomCTANote>{t("cta.note")}</BottomCTANote>
        </BottomCTAContent>
      </BottomCTASection>
    </Container>
  );
}
