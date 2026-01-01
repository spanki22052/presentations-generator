import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import * as Styled from "./PricingPage.styles";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { usePricingPageLogic } from "../hooks/usePricingPageLogic";
import {
  containerVariants,
  heroTitleVariants,
  heroSubtitleVariants,
  toggleVariants,
  pricingCardVariants,
  pricingCardHoverVariants,
  sectionTitleVariants,
  faqCardVariants,
} from "../model/variants";
import {
  PRICING_PLANS,
  COMPARISON_FEATURES,
  FAQ_ITEMS,
} from "../model/constants";

export function PricingPage() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  const {
    isYearly,
    toggleBilling,
    getPrice,
    getYearlyDiscount,
    formatPrice,
    handleButtonClick,
  } = usePricingPageLogic();

  return (
    <Styled.Container>
      <Styled.HeroSection
        as={motion.section}
        variants={shouldAnimate ? containerVariants : undefined}
        initial={shouldAnimate ? "hidden" : undefined}
        animate={shouldAnimate ? "visible" : undefined}
      >
        <Styled.HeroTitle
          as={motion.h1}
          variants={shouldAnimate ? heroTitleVariants : undefined}
        >
          {t("pricingPage.title")}
        </Styled.HeroTitle>
        <Styled.HeroSubtitle
          as={motion.p}
          variants={shouldAnimate ? heroSubtitleVariants : undefined}
        >
          {t("pricingPage.subtitle")}
        </Styled.HeroSubtitle>

        <Styled.BillingToggle
          as={motion.div}
          variants={shouldAnimate ? toggleVariants : undefined}
        >
          <Styled.ToggleLabel isActive={!isYearly}>
            {t("pricingPage.billing.monthly")}
          </Styled.ToggleLabel>
          <Styled.ToggleSwitch>
            <Styled.ToggleInput
              type="checkbox"
              checked={isYearly}
              onChange={toggleBilling}
            />
            <Styled.ToggleSlider isChecked={isYearly} />
          </Styled.ToggleSwitch>
          <Styled.ToggleLabelWrapper>
            <Styled.ToggleLabel isActive={isYearly}>
              {t("pricingPage.billing.yearly")}
            </Styled.ToggleLabel>
            <Styled.DiscountBadge>
              {t("pricingPage.billing.save", { discount: getYearlyDiscount })}
            </Styled.DiscountBadge>
          </Styled.ToggleLabelWrapper>
        </Styled.BillingToggle>
      </Styled.HeroSection>

      <Styled.PricingCardsSection>
        <Styled.PricingGrid>
          {PRICING_PLANS.map((plan, index) => {
            const price = getPrice(plan.monthlyPrice, plan.yearlyPrice);
            const displayPrice = formatPrice(price);

            return (
              <Styled.PricingCard
                key={plan.id}
                isPopular={plan.isPopular}
                as={motion.div}
                variants={shouldAnimate ? pricingCardVariants : undefined}
                whileHover={
                  shouldAnimate ? pricingCardHoverVariants.hover : undefined
                }
                custom={index}
              >
                {plan.isPopular && (
                  <Styled.PopularBadge>
                    {t("pricingPage.popularBadge")}
                  </Styled.PopularBadge>
                )}
                <Styled.PlanHeader>
                  <Styled.PlanName>
                    {t(`pricingPage.plans.${plan.id}.name`)}
                  </Styled.PlanName>
                  <Styled.PlanDescription>
                    {t(`pricingPage.plans.${plan.id}.description`)}
                  </Styled.PlanDescription>
                </Styled.PlanHeader>
                <Styled.PriceContainer>
                  <Styled.Price>{displayPrice}</Styled.Price>
                  {price !== "custom" && (
                    <Styled.PricePeriod>
                      {t("pricingPage.pricePeriod")}
                    </Styled.PricePeriod>
                  )}
                </Styled.PriceContainer>
                <Styled.PlanButton
                  variant={plan.buttonVariant}
                  onClick={() => handleButtonClick(plan.id)}
                >
                  {t(`pricingPage.plans.${plan.id}.buttonText`)}
                </Styled.PlanButton>
                <Styled.FeaturesList>
                  {plan.features.map((_, featureIndex) => (
                    <Styled.FeatureItem key={featureIndex}>
                      <Styled.CheckIcon>✓</Styled.CheckIcon>
                      <span>
                        {t(
                          `pricingPage.plans.${plan.id}.features.${featureIndex}`
                        )}
                      </span>
                    </Styled.FeatureItem>
                  ))}
                </Styled.FeaturesList>
              </Styled.PricingCard>
            );
          })}
        </Styled.PricingGrid>
      </Styled.PricingCardsSection>

      <Styled.ComparisonSection>
        <Styled.ComparisonContainer>
          <Styled.ComparisonHeader>
            <Styled.ComparisonTitle
              as={motion.h2}
              variants={shouldAnimate ? sectionTitleVariants : undefined}
            >
              {t("pricingPage.compare.title")}
            </Styled.ComparisonTitle>
            <Styled.ComparisonSubtitle>
              {t("pricingPage.compare.subtitle")}
            </Styled.ComparisonSubtitle>
          </Styled.ComparisonHeader>
          <Styled.ComparisonTable>
            <thead>
              <tr>
                <Styled.TableHeader>
                  {t("pricingPage.compare.tableHeaders.features")}
                </Styled.TableHeader>
                <Styled.TableHeader>
                  {t("pricingPage.compare.tableHeaders.starter")}
                </Styled.TableHeader>
                <Styled.TableHeaderPrimary>
                  {t("pricingPage.compare.tableHeaders.pro")}
                </Styled.TableHeaderPrimary>
                <Styled.TableHeader>
                  {t("pricingPage.compare.tableHeaders.enterprise")}
                </Styled.TableHeader>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature) => (
                <tr key={feature.id}>
                  <Styled.TableCell>
                    {t(`pricingPage.compare.features.${feature.id}.name`)}
                  </Styled.TableCell>
                  <Styled.TableCell>
                    {typeof feature.starter === "boolean" ? (
                      feature.starter ? (
                        <Styled.CheckMark>✓</Styled.CheckMark>
                      ) : (
                        <Styled.MinusMark>—</Styled.MinusMark>
                      )
                    ) : (
                      t(`pricingPage.compare.features.${feature.id}.starter`)
                    )}
                  </Styled.TableCell>
                  <Styled.TableCellBold>
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Styled.CheckMark>✓</Styled.CheckMark>
                      ) : (
                        <Styled.MinusMark>—</Styled.MinusMark>
                      )
                    ) : (
                      t(`pricingPage.compare.features.${feature.id}.pro`)
                    )}
                  </Styled.TableCellBold>
                  <Styled.TableCell>
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Styled.CheckMark>✓</Styled.CheckMark>
                      ) : (
                        <Styled.MinusMark>—</Styled.MinusMark>
                      )
                    ) : (
                      t(`pricingPage.compare.features.${feature.id}.enterprise`)
                    )}
                  </Styled.TableCell>
                </tr>
              ))}
            </tbody>
          </Styled.ComparisonTable>
        </Styled.ComparisonContainer>
      </Styled.ComparisonSection>

      <Styled.FAQSection>
        <Styled.FAQTitle
          as={motion.h2}
          variants={shouldAnimate ? sectionTitleVariants : undefined}
        >
          {t("pricingPage.faq.title")}
        </Styled.FAQTitle>
        <Styled.FAQGrid>
          {FAQ_ITEMS.map((faq, index) => (
            <Styled.FAQCard
              key={faq.id}
              as={motion.div}
              variants={shouldAnimate ? faqCardVariants : undefined}
              custom={index}
            >
              <Styled.FAQQuestion>
                {t(`pricingPage.faq.items.${faq.id}.question`)}
              </Styled.FAQQuestion>
              <Styled.FAQAnswer>
                {t(`pricingPage.faq.items.${faq.id}.answer`)}
              </Styled.FAQAnswer>
            </Styled.FAQCard>
          ))}
        </Styled.FAQGrid>
      </Styled.FAQSection>

      <Styled.TrustSection>
        <Styled.TrustText>{t("pricingPage.trust.title")}</Styled.TrustText>
        <Styled.TrustLogos>
          {[1, 2, 3, 4].map((index) => (
            <Styled.TrustLogoPlaceholder key={index} />
          ))}
        </Styled.TrustLogos>
      </Styled.TrustSection>
    </Styled.Container>
  );
}
