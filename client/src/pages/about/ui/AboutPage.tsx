import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import * as Styled from './AboutPage.styles';
import { useAboutPageLogic } from '../hooks/useAboutPageLogic';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  containerVariants,
  titleVariants,
  subtitleVariants,
  cardVariants,
  cardHoverVariants,
  statVariants,
} from '../model/variants';
import { VALUES, STATS } from '../model/constants';

export function AboutPage() {
  const { t } = useTranslation();
  const { handleContactClick, handleLearnMore } = useAboutPageLogic();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <Styled.Container>
      {/* Hero Section */}
      <Styled.HeroSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        animate={shouldAnimate ? 'visible' : undefined}
      >
        <Styled.HeroTitle
          as={motion.h1}
          variants={shouldAnimate ? titleVariants : undefined}
        >
          <Trans
            i18nKey="aboutPage.hero.title"
            components={[<Styled.AccentSpan key="0" />]}
          />
        </Styled.HeroTitle>
        <Styled.HeroSubtitle
          as={motion.p}
          variants={shouldAnimate ? subtitleVariants : undefined}
        >
          {t('aboutPage.hero.subtitle')}
        </Styled.HeroSubtitle>
      </Styled.HeroSection>

      {/* Mission & Vision Section */}
      <Styled.MissionSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={shouldAnimate ? { once: true, margin: '-100px' } : undefined}
      >
        <Styled.TwoColumnGrid>
          <Styled.ContentCard
            as={motion.div}
            variants={shouldAnimate ? cardVariants : undefined}
          >
            <Styled.CardIcon>🎯</Styled.CardIcon>
            <Styled.CardTitle>{t('aboutPage.mission.title')}</Styled.CardTitle>
            <Styled.CardDescription>{t('aboutPage.mission.description')}</Styled.CardDescription>
          </Styled.ContentCard>
          <Styled.ContentCard
            as={motion.div}
            variants={shouldAnimate ? cardVariants : undefined}
            custom={1}
          >
            <Styled.CardIcon>👁️</Styled.CardIcon>
            <Styled.CardTitle>{t('aboutPage.vision.title')}</Styled.CardTitle>
            <Styled.CardDescription>{t('aboutPage.vision.description')}</Styled.CardDescription>
          </Styled.ContentCard>
        </Styled.TwoColumnGrid>
      </Styled.MissionSection>

      {/* Values Section */}
      <Styled.ValuesSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={shouldAnimate ? { once: true, margin: '-100px' } : undefined}
      >
        <Styled.SectionHeader>
          <Styled.SectionTitle
            as={motion.h2}
            variants={shouldAnimate ? titleVariants : undefined}
          >
            {t('aboutPage.values.title')}
          </Styled.SectionTitle>
          <Styled.SectionSubtitle
            as={motion.p}
            variants={shouldAnimate ? subtitleVariants : undefined}
          >
            {t('aboutPage.values.subtitle')}
          </Styled.SectionSubtitle>
        </Styled.SectionHeader>
        <Styled.ValuesGrid>
          {VALUES.map((value, index) => (
            <Styled.ValueCard
              key={value.id}
              as={motion.div}
              variants={shouldAnimate ? cardVariants : undefined}
              whileHover={
                shouldAnimate ? cardHoverVariants.hover : undefined
              }
              custom={index}
            >
              <Styled.ValueIcon>{value.icon}</Styled.ValueIcon>
              <Styled.ValueTitle>
                {t(`aboutPage.values.items.${value.id}.title`)}
              </Styled.ValueTitle>
            </Styled.ValueCard>
          ))}
        </Styled.ValuesGrid>
      </Styled.ValuesSection>

      {/* Stats Section */}
      <Styled.StatsSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={shouldAnimate ? { once: true, margin: '-100px' } : undefined}
      >
        <Styled.StatsContent>
          <Styled.SectionHeader>
            <Styled.SectionTitle
              as={motion.h2}
              variants={shouldAnimate ? titleVariants : undefined}
            >
              {t('aboutPage.stats.title')}
            </Styled.SectionTitle>
          </Styled.SectionHeader>
          <Styled.StatsGrid>
            {STATS.map((stat, index) => (
              <Styled.StatCard
                key={stat.id}
                as={motion.div}
                variants={shouldAnimate ? statVariants : undefined}
                custom={index}
              >
                <Styled.StatValue>{stat.value}</Styled.StatValue>
                <Styled.StatLabel>
                  {t(`aboutPage.stats.items.${stat.id}.label`)}
                </Styled.StatLabel>
              </Styled.StatCard>
            ))}
          </Styled.StatsGrid>
        </Styled.StatsContent>
      </Styled.StatsSection>

      {/* CTA Section */}
      <Styled.CTASection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? 'hidden' : undefined}
        whileInView={shouldAnimate ? 'visible' : undefined}
        viewport={shouldAnimate ? { once: true, margin: '-100px' } : undefined}
      >
        <Styled.CTAContent>
          <Styled.CTATitle
            as={motion.h2}
            variants={shouldAnimate ? titleVariants : undefined}
          >
            <Trans
              i18nKey="aboutPage.cta.title"
              components={[<Styled.AccentSpan key="0" />]}
            />
          </Styled.CTATitle>
          <Styled.CTASubtitle
            as={motion.p}
            variants={shouldAnimate ? subtitleVariants : undefined}
          >
            {t('aboutPage.cta.subtitle')}
          </Styled.CTASubtitle>
          <Styled.CTAActions>
            <Styled.PrimaryButton
              as={motion.button}
              whileHover={shouldAnimate ? { scale: 1.05 } : undefined}
              whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              onClick={handleContactClick}
            >
              {t('aboutPage.cta.primaryButton')}
            </Styled.PrimaryButton>
            <Styled.SecondaryButton
              as={motion.button}
              whileHover={shouldAnimate ? { scale: 1.02 } : undefined}
              whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
              onClick={handleLearnMore}
            >
              {t('aboutPage.cta.secondaryButton')}
            </Styled.SecondaryButton>
          </Styled.CTAActions>
        </Styled.CTAContent>
      </Styled.CTASection>
    </Styled.Container>
  );
}

