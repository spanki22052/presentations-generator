import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import * as Styled from "./FeaturesPage.styles";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useFeaturesPageLogic } from "../hooks/useFeaturesPageLogic";
import {
  containerVariants,
  heroBadgeVariants,
  heroTitleVariants,
  heroSubtitleVariants,
  heroButtonsVariants,
  titleVariants,
  subtitleVariants,
  zigZagFeatureVariants,
  zigZagFeatureReverseVariants,
  featureCardVariants,
  featureCardHoverVariants,
  testimonialVariants,
  ctaVariants,
} from "../model/variants";
import { ZIGZAG_FEATURES, FEATURES, ICON_MAP } from "../model/constants";

export function FeaturesPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const { handleGetStarted, handleWatchDemo, handleViewPricing } =
    useFeaturesPageLogic();

  return (
    <Styled.Container>
      {/* Hero Section */}
      <Styled.HeroSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        <Styled.HeroContainer>
          <Styled.HeroContent>
            <Styled.HeroBadge
              as={motion.div}
              variants={shouldAnimate ? heroBadgeVariants : undefined}
            >
              {t("featuresPage.hero.badge")}
            </Styled.HeroBadge>
            <Styled.HeroTitle
              as={motion.h1}
              variants={shouldAnimate ? heroTitleVariants : undefined}
            >
              <Trans
                i18nKey="featuresPage.hero.title"
                components={[<Styled.HeroTitleHighlight key="0" />]}
              />
            </Styled.HeroTitle>
            <Styled.HeroSubtitle
              as={motion.p}
              variants={shouldAnimate ? heroSubtitleVariants : undefined}
            >
              {t("featuresPage.hero.subtitle")}
            </Styled.HeroSubtitle>
            <Styled.HeroButtons
              as={motion.div}
              variants={shouldAnimate ? heroButtonsVariants : undefined}
            >
              <Styled.PrimaryButton onClick={handleGetStarted}>
                {t("featuresPage.hero.primaryButton")}
              </Styled.PrimaryButton>
              <Styled.SecondaryButton onClick={handleWatchDemo}>
                <span>{ICON_MAP.play_circle}</span>
                <span>{t("featuresPage.hero.secondaryButton")}</span>
              </Styled.SecondaryButton>
            </Styled.HeroButtons>
          </Styled.HeroContent>
          <Styled.HeroImage />
        </Styled.HeroContainer>
      </Styled.HeroSection>

      {/* Section Header */}
      <Styled.SectionHeaderWrapper>
        <Styled.SectionHeader>
          <Styled.SectionTitle
            as={motion.h2}
            variants={shouldAnimate ? titleVariants : undefined}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={
              shouldAnimate ? { once: true, margin: "-100px" } : undefined
            }
          >
            {t("featuresPage.sectionHeader.title")}
          </Styled.SectionTitle>
          <Styled.SectionSubtitle
            as={motion.p}
            variants={shouldAnimate ? subtitleVariants : undefined}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={
              shouldAnimate ? { once: true, margin: "-100px" } : undefined
            }
          >
            {t("featuresPage.sectionHeader.subtitle")}
          </Styled.SectionSubtitle>
        </Styled.SectionHeader>
      </Styled.SectionHeaderWrapper>

      {/* Zig-Zag Features */}
      {ZIGZAG_FEATURES.map((feature, index) => (
        <Styled.ZigZagSection
          key={feature.id}
          isAlternate={index % 2 === 1}
          as={motion.section}
          initial={shouldAnimate ? "hidden" : undefined}
          whileInView={shouldAnimate ? "visible" : undefined}
          viewport={
            shouldAnimate ? { once: true, margin: "-100px" } : undefined
          }
        >
          <Styled.ZigZagContainer reverse={feature.position === "right"}>
            <Styled.ZigZagContent
              as={motion.div}
              variants={
                shouldAnimate
                  ? feature.position === "left"
                    ? zigZagFeatureVariants
                    : zigZagFeatureReverseVariants
                  : undefined
              }
            >
              <Styled.ZigZagIcon color={feature.iconColor}>
                {ICON_MAP[feature.icon] || "⚡"}
              </Styled.ZigZagIcon>
              <Styled.ZigZagTitle>
                {t(`featuresPage.zigzag.${feature.id}.title`)}
              </Styled.ZigZagTitle>
              <Styled.ZigZagDescription>
                {t(`featuresPage.zigzag.${feature.id}.description`)}
              </Styled.ZigZagDescription>
              {feature.bulletPoints && (
                <Styled.ZigZagBulletList>
                  {feature.bulletPoints.map((_, bulletIndex) => (
                    <Styled.ZigZagBulletItem key={bulletIndex}>
                      <Styled.ZigZagBulletIcon>
                        {ICON_MAP.check_circle}
                      </Styled.ZigZagBulletIcon>
                      <span>
                        {t(
                          `featuresPage.zigzag.${feature.id}.bullets.${bulletIndex}`
                        )}
                      </span>
                    </Styled.ZigZagBulletItem>
                  ))}
                </Styled.ZigZagBulletList>
              )}
              {feature.linkText && (
                <Styled.ZigZagLink>
                  {t(`featuresPage.zigzag.${feature.id}.linkText`)}
                  <span>{ICON_MAP.arrow_forward}</span>
                </Styled.ZigZagLink>
              )}
            </Styled.ZigZagContent>
            <Styled.ZigZagImage
              as={motion.div}
              variants={
                shouldAnimate
                  ? feature.position === "right"
                    ? zigZagFeatureVariants
                    : zigZagFeatureReverseVariants
                  : undefined
              }
            />
          </Styled.ZigZagContainer>
        </Styled.ZigZagSection>
      ))}

      {/* Features Grid Section */}
      <Styled.FeaturesGridSection>
        <Styled.FeaturesGridHeader>
          <Styled.FeaturesGridTitle
            as={motion.h2}
            variants={shouldAnimate ? titleVariants : undefined}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={
              shouldAnimate ? { once: true, margin: "-100px" } : undefined
            }
          >
            {t("featuresPage.grid.title")}
          </Styled.FeaturesGridTitle>
          <Styled.FeaturesGridSubtitle
            as={motion.p}
            variants={shouldAnimate ? subtitleVariants : undefined}
            initial={shouldAnimate ? "hidden" : undefined}
            whileInView={shouldAnimate ? "visible" : undefined}
            viewport={
              shouldAnimate ? { once: true, margin: "-100px" } : undefined
            }
          >
            {t("featuresPage.grid.subtitle")}
          </Styled.FeaturesGridSubtitle>
        </Styled.FeaturesGridHeader>
        <Styled.FeaturesGrid>
          {FEATURES.map((feature, index) => (
            <Styled.FeatureCard
              key={feature.id}
              as={motion.div}
              variants={shouldAnimate ? featureCardVariants : undefined}
              whileHover={
                shouldAnimate ? featureCardHoverVariants.hover : undefined
              }
              custom={index}
              initial={shouldAnimate ? "hidden" : undefined}
              whileInView={shouldAnimate ? "visible" : undefined}
              viewport={
                shouldAnimate ? { once: true, margin: "-100px" } : undefined
              }
            >
              <Styled.FeatureIcon color={feature.iconColor || "primary"}>
                {ICON_MAP[feature.icon] || "⚡"}
              </Styled.FeatureIcon>
              <Styled.FeatureTitle>
                {t(`featuresPage.grid.items.${feature.id}.title`)}
              </Styled.FeatureTitle>
              <Styled.FeatureDescription>
                {t(`featuresPage.grid.items.${feature.id}.description`)}
              </Styled.FeatureDescription>
            </Styled.FeatureCard>
          ))}
        </Styled.FeaturesGrid>
      </Styled.FeaturesGridSection>

      {/* Testimonial Section */}
      <Styled.TestimonialSection
        as={motion.section}
        initial={shouldAnimate ? "hidden" : undefined}
        whileInView={shouldAnimate ? "visible" : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
      >
        <Styled.TestimonialContainer
          as={motion.div}
          variants={shouldAnimate ? testimonialVariants : undefined}
        >
          <Styled.TestimonialQuoteIcon>
            {ICON_MAP.format_quote}
          </Styled.TestimonialQuoteIcon>
          <Styled.TestimonialQuote>
            {t("featuresPage.testimonial.quote")}
          </Styled.TestimonialQuote>
          <Styled.TestimonialAuthor>
            <Styled.TestimonialAvatar />
            <Styled.TestimonialInfo>
              <Styled.TestimonialName>
                {t("featuresPage.testimonial.author")}
              </Styled.TestimonialName>
              <Styled.TestimonialRole>
                {t("featuresPage.testimonial.role")}
              </Styled.TestimonialRole>
            </Styled.TestimonialInfo>
          </Styled.TestimonialAuthor>
        </Styled.TestimonialContainer>
      </Styled.TestimonialSection>

      {/* CTA Section */}
      <Styled.CTASection
        as={motion.section}
        initial={shouldAnimate ? "hidden" : undefined}
        whileInView={shouldAnimate ? "visible" : undefined}
        viewport={shouldAnimate ? { once: true, margin: "-100px" } : undefined}
      >
        <Styled.CTAContainer
          as={motion.div}
          variants={shouldAnimate ? ctaVariants : undefined}
        >
          <Styled.CTATitle>{t("featuresPage.cta.title")}</Styled.CTATitle>
          <Styled.CTASubtitle>
            {t("featuresPage.cta.subtitle")}
          </Styled.CTASubtitle>
          <Styled.CTAButtons>
            <Styled.CTAButtonPrimary onClick={handleGetStarted}>
              {t("featuresPage.cta.primaryButton")}
            </Styled.CTAButtonPrimary>
            <Styled.CTAButtonSecondary onClick={handleViewPricing}>
              {t("featuresPage.cta.secondaryButton")}
            </Styled.CTAButtonSecondary>
          </Styled.CTAButtons>
        </Styled.CTAContainer>
      </Styled.CTASection>
    </Styled.Container>
  );
}
