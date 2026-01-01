import { useTranslation } from 'react-i18next';
import * as Styled from './SubscriptionPlan.styles';
import { useSubscriptionPlanLogic } from '../hooks/useSubscriptionPlanLogic';
import { AVAILABLE_PLANS, CURRENT_PLAN, PAYMENT_METHOD } from '../model/constants';

export function SubscriptionPlan() {
  const { t } = useTranslation();
  const {
    handleBillingPortal,
    handleCancelPlan,
    handleUpgradePlan,
    handleDowngradePlan,
    handleUpgradeToTeam,
    handleAddPaymentMethod,
    formatCardType,
    formatExpiryDate,
  } = useSubscriptionPlanLogic();

  return (
    <Styled.SectionContent>
      <Styled.SectionHeader>
        <Styled.SectionHeaderText>
          <Styled.SectionTitle>
            {t('profilePage.subscriptionPlan.title')}
          </Styled.SectionTitle>
          <Styled.SectionDescription>
            {t('profilePage.subscriptionPlan.description')}
          </Styled.SectionDescription>
        </Styled.SectionHeaderText>
        <Styled.BillingPortalButton onClick={handleBillingPortal}>
          {t('profilePage.subscriptionPlan.billingPortal')}
        </Styled.BillingPortalButton>
      </Styled.SectionHeader>

      <Styled.Divider />

      <Styled.CurrentPlanSection>
        <Styled.SectionHeading>
          {t('profilePage.subscriptionPlan.currentPlan')}
        </Styled.SectionHeading>
        <Styled.CurrentPlanCard>
          <Styled.CurrentPlanInfo>
            <Styled.PlanIcon>⭐</Styled.PlanIcon>
            <Styled.PlanDetails>
              <Styled.PlanNameRow>
                <Styled.PlanName>{CURRENT_PLAN.name}</Styled.PlanName>
                <Styled.StatusBadge>
                  {t('profilePage.subscriptionPlan.active')}
                </Styled.StatusBadge>
              </Styled.PlanNameRow>
              <Styled.PlanPrice>
                ${CURRENT_PLAN.price.toFixed(2)} / {t('profilePage.subscriptionPlan.month')}
              </Styled.PlanPrice>
              <Styled.PlanBillingDate>
                {t('profilePage.subscriptionPlan.nextBilling')}: {CURRENT_PLAN.nextBillingDate}
              </Styled.PlanBillingDate>
            </Styled.PlanDetails>
          </Styled.CurrentPlanInfo>
          <Styled.PlanActions>
            <Styled.ActionButton onClick={handleCancelPlan}>
              {t('profilePage.subscriptionPlan.cancelPlan')}
            </Styled.ActionButton>
            <Styled.ActionButton variant="primary" onClick={handleUpgradePlan}>
              {t('profilePage.subscriptionPlan.upgradePlan')}
            </Styled.ActionButton>
          </Styled.PlanActions>
        </Styled.CurrentPlanCard>
      </Styled.CurrentPlanSection>

      <Styled.AvailablePlansSection>
        <Styled.SectionHeading>
          {t('profilePage.subscriptionPlan.availablePlans')}
        </Styled.SectionHeading>
        <Styled.PlansGrid>
          {AVAILABLE_PLANS.map((plan) => (
            <Styled.PlanCard
              key={plan.id}
              isPopular={plan.isPopular}
              isCurrent={plan.isCurrent}
            >
              {plan.isPopular && (
                <Styled.PopularBadge>
                  {t('profilePage.subscriptionPlan.mostPopular')}
                </Styled.PopularBadge>
              )}
              <Styled.PlanCardName>{plan.name}</Styled.PlanCardName>
              <Styled.PlanCardPrice>
                <Styled.PriceAmount>${plan.price}</Styled.PriceAmount>
                <Styled.PricePeriod>/{t('profilePage.subscriptionPlan.month')}</Styled.PricePeriod>
              </Styled.PlanCardPrice>
              <Styled.PlanCardDescription>{plan.description}</Styled.PlanCardDescription>
              <Styled.FeaturesList>
                {plan.features.map((feature, index) => (
                  <Styled.FeatureItem key={index}>
                    <Styled.CheckIcon isPrimary={plan.isPopular}>
                      ✓
                    </Styled.CheckIcon>
                    <span>{feature}</span>
                  </Styled.FeatureItem>
                ))}
              </Styled.FeaturesList>
              {plan.isCurrent ? (
                <Styled.PlanCardButton variant="current">
                  {t('profilePage.subscriptionPlan.currentPlan')}
                </Styled.PlanCardButton>
              ) : plan.id === 'starter' ? (
                <Styled.PlanCardButton variant="outline" onClick={handleDowngradePlan}>
                  {t('profilePage.subscriptionPlan.downgrade')}
                </Styled.PlanCardButton>
              ) : (
                <Styled.PlanCardButton variant="primary" onClick={handleUpgradeToTeam}>
                  {t('profilePage.subscriptionPlan.upgrade')}
                </Styled.PlanCardButton>
              )}
            </Styled.PlanCard>
          ))}
        </Styled.PlansGrid>
      </Styled.AvailablePlansSection>

      <Styled.PaymentMethodSection>
        <Styled.PaymentMethodHeader>
          <Styled.SectionHeading>
            {t('profilePage.subscriptionPlan.paymentMethod')}
          </Styled.SectionHeading>
          <Styled.AddPaymentButton onClick={handleAddPaymentMethod}>
            {t('profilePage.subscriptionPlan.addNew')}
          </Styled.AddPaymentButton>
        </Styled.PaymentMethodHeader>
        <Styled.PaymentMethodCard>
          <Styled.PaymentMethodInfo>
            <Styled.CardIcon>
              <Styled.CardIconRect />
              <Styled.CardIconLine />
            </Styled.CardIcon>
            <Styled.PaymentMethodDetails>
              <Styled.CardNumber>
                {formatCardType(PAYMENT_METHOD.type)} ending in {PAYMENT_METHOD.last4}
              </Styled.CardNumber>
              <Styled.CardExpiry>
                {t('profilePage.subscriptionPlan.expiry')} {formatExpiryDate(PAYMENT_METHOD.expiryMonth, PAYMENT_METHOD.expiryYear)}
              </Styled.CardExpiry>
            </Styled.PaymentMethodDetails>
          </Styled.PaymentMethodInfo>
          <Styled.PaymentMethodActions>
            ⋮
          </Styled.PaymentMethodActions>
        </Styled.PaymentMethodCard>
      </Styled.PaymentMethodSection>
    </Styled.SectionContent>
  );
}
