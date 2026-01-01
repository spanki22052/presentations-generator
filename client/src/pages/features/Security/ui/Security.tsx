import { Form } from "antd";
import { useTranslation } from "react-i18next";
import * as Styled from "./Security.styles";
import { useSecurityLogic } from "../hooks/useSecurityLogic";
import { ICON_MAP } from "../model/constants";

export function Security() {
  const { t } = useTranslation();
  const {
    form,
    securityState,
    handlePasswordChange,
    handleToggleTwoFactor,
    handleRevokeSession,
    handleLogoutAllDevices,
  } = useSecurityLogic();

  const getDeviceIcon = (device: string) => {
    if (
      device.toLowerCase().includes("iphone") ||
      device.toLowerCase().includes("android")
    ) {
      return ICON_MAP.smartphone;
    }
    if (device.toLowerCase().includes("mac")) {
      return ICON_MAP.desktop_mac;
    }
    return ICON_MAP.desktop_windows;
  };

  return (
    <Styled.SectionContent>
      <Styled.SectionHeader>
        <Styled.SectionHeaderText>
          <Styled.SectionTitle>
            <Styled.SectionIcon>{ICON_MAP.lock}</Styled.SectionIcon>
            {t("profilePage.security.title")}
          </Styled.SectionTitle>
          <Styled.SectionDescription>
            {t("profilePage.security.description")}
          </Styled.SectionDescription>
        </Styled.SectionHeaderText>
        <Styled.SectionActions>
          <Styled.SaveButton
            type="primary"
            onClick={() => form.submit()}
            loading={securityState.isLoading}
          >
            {t("profilePage.saveChanges")}
          </Styled.SaveButton>
        </Styled.SectionActions>
      </Styled.SectionHeader>

      <Styled.SecuritySection>
        <Styled.SectionTitleWithIcon>
          <Styled.SectionIcon>{ICON_MAP.key}</Styled.SectionIcon>
          {t("profilePage.security.changePassword")}
        </Styled.SectionTitleWithIcon>
        <Form form={form} layout="vertical" onFinish={handlePasswordChange}>
          <Styled.PasswordFormGrid>
            <Styled.PasswordFormField $fullWidth>
              <Styled.FormLabel>
                {t("profilePage.security.currentPassword")}
              </Styled.FormLabel>
              <Form.Item
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: t("profilePage.security.currentPasswordRequired"),
                  },
                ]}
              >
                <Styled.StyledPasswordInput placeholder="••••••••" />
              </Form.Item>
            </Styled.PasswordFormField>
            <Styled.PasswordFormField>
              <Styled.FormLabel>
                {t("profilePage.security.newPassword")}
              </Styled.FormLabel>
              <Form.Item
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: t("profilePage.security.newPasswordRequired"),
                  },
                  {
                    min: 8,
                    message: t("profilePage.security.passwordMinLength"),
                  },
                ]}
              >
                <Styled.StyledPasswordInput placeholder="••••••••" />
              </Form.Item>
            </Styled.PasswordFormField>
            <Styled.PasswordFormField>
              <Styled.FormLabel>
                {t("profilePage.security.confirmPassword")}
              </Styled.FormLabel>
              <Form.Item
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  {
                    required: true,
                    message: t("profilePage.security.confirmPasswordRequired"),
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(t("profilePage.security.passwordsDoNotMatch"))
                      );
                    },
                  }),
                ]}
              >
                <Styled.StyledPasswordInput placeholder="••••••••" />
              </Form.Item>
            </Styled.PasswordFormField>
          </Styled.PasswordFormGrid>
        </Form>
        <Styled.PasswordRequirement>
          <Styled.RequirementIcon>
            {ICON_MAP.check_circle}
          </Styled.RequirementIcon>
          {t("profilePage.security.passwordRequirement")}
        </Styled.PasswordRequirement>
      </Styled.SecuritySection>

      <Styled.SectionDivider />

      <Styled.SecuritySection>
        <Styled.TwoFactorSection>
          <Styled.TwoFactorInfo>
            <Styled.SectionTitleWithIcon>
              <Styled.SectionIcon>{ICON_MAP.security}</Styled.SectionIcon>
              {t("profilePage.security.twoFactorAuth")}
            </Styled.SectionTitleWithIcon>
            <Styled.SectionDescription>
              {t("profilePage.security.twoFactorDescription")}
            </Styled.SectionDescription>
          </Styled.TwoFactorInfo>
          <Styled.TwoFactorToggle>
            <Styled.StyledSwitch
              checked={securityState.twoFactorEnabled}
              onChange={handleToggleTwoFactor}
              loading={securityState.isLoading}
            />
          </Styled.TwoFactorToggle>
        </Styled.TwoFactorSection>
        <Styled.RecommendationBox>
          <Styled.RecommendationIcon>
            {ICON_MAP.security}
          </Styled.RecommendationIcon>
          <Styled.RecommendationContent>
            <Styled.RecommendationTitle>
              {t("profilePage.security.recommendation")}
            </Styled.RecommendationTitle>
            <Styled.RecommendationText>
              {t("profilePage.security.recommendationText")}
            </Styled.RecommendationText>
          </Styled.RecommendationContent>
        </Styled.RecommendationBox>
      </Styled.SecuritySection>

      <Styled.SectionDivider />

      <Styled.SecuritySection>
        <Styled.SectionTitleWithIcon>
          <Styled.SectionIcon>{ICON_MAP.history}</Styled.SectionIcon>
          {t("profilePage.security.recentActivity")}
        </Styled.SectionTitleWithIcon>
        <Styled.LoginActivityList>
          {securityState.loginSessions.map((session) => (
            <Styled.LoginSessionCard
              key={session.id}
              $isActive={session.isActive}
            >
              <Styled.SessionInfo>
                <Styled.SessionIconWrapper>
                  {getDeviceIcon(session.device)}
                </Styled.SessionIconWrapper>
                <Styled.SessionDetails>
                  <Styled.SessionDevice>
                    {session.browser} on {session.device}
                  </Styled.SessionDevice>
                  <Styled.SessionMeta>
                    {session.location} • {session.timestamp}
                  </Styled.SessionMeta>
                </Styled.SessionDetails>
              </Styled.SessionInfo>
              {session.isActive ? (
                <Styled.ActiveBadge>
                  {t("profilePage.security.activeNow")}
                </Styled.ActiveBadge>
              ) : (
                <Styled.RevokeButton
                  onClick={() => handleRevokeSession(session.id)}
                  disabled={securityState.isLoading}
                >
                  {t("profilePage.security.revoke")}
                </Styled.RevokeButton>
              )}
            </Styled.LoginSessionCard>
          ))}
        </Styled.LoginActivityList>
        <Styled.LogoutAllButton
          onClick={handleLogoutAllDevices}
          disabled={securityState.isLoading}
        >
          {t("profilePage.security.logoutAll")}
          <Styled.LogoutIcon>{ICON_MAP.logout}</Styled.LogoutIcon>
        </Styled.LogoutAllButton>
      </Styled.SecuritySection>
    </Styled.SectionContent>
  );
}
