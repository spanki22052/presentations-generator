import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/shared/contexts";
import * as Styled from "./ProfilePage.styles";
import {
  PROFILE_MENU_ITEMS,
  CREDITS_USED,
  CREDITS_CURRENT,
  CREDITS_TOTAL,
} from "../model/constants";
import { ProfileDetails } from "@/pages/features/ProfileDetails";
import { SubscriptionPlan } from "@/pages/features/SubscriptionPlan";
import { Security } from "@/pages/features/Security";
import { AIPreferences } from "@/pages/features/AIPreferences";

const ICON_MAP: Record<string, string> = {
  person: "👤",
  credit_card: "💳",
  lock: "🔒",
  auto_awesome: "✨",
};

export function ProfilePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("profile");

  const userInitials = useMemo(() => {
    if (!user) return "";
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }, [user]);

  if (!isAuthenticated || !user) {
    navigate("/login");
    return null;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileDetails />;
      case "subscription":
        return <SubscriptionPlan />;
      case "security":
        return <Security />;
      case "aiPreferences":
        return <AIPreferences />;
      default:
        return <ProfileDetails />;
    }
  };

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.PageHeader>
          <Styled.PageTitle>{t("profilePage.title")}</Styled.PageTitle>
          <Styled.PageSubtitle>{t("profilePage.subtitle")}</Styled.PageSubtitle>
        </Styled.PageHeader>

        <Styled.MainGrid>
          <Styled.Sidebar>
            <Styled.UserMiniProfile>
              <Styled.UserAvatar>{userInitials}</Styled.UserAvatar>
              <Styled.UserInfo>
                <Styled.UserName>{user.name}</Styled.UserName>
                <Styled.UserEmail>{user.email}</Styled.UserEmail>
              </Styled.UserInfo>
            </Styled.UserMiniProfile>

            <Styled.MenuItems>
              {PROFILE_MENU_ITEMS.map((item) => (
                <Styled.MenuItem
                  key={item.id}
                  $active={item.id === activeTab}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Styled.MenuIcon>
                    {ICON_MAP[item.icon] || "•"}
                  </Styled.MenuIcon>
                  <span>{t(`profilePage.sidebar.menuItems.${item.id}`)}</span>
                </Styled.MenuItem>
              ))}
            </Styled.MenuItems>

            <Styled.UsageStatus>
              <Styled.UsageHeader>
                <Styled.UsageLabel>
                  {t("profilePage.creditsUsed")}
                </Styled.UsageLabel>
                <Styled.UsagePercentage>{CREDITS_USED}%</Styled.UsagePercentage>
              </Styled.UsageHeader>
              <Styled.UsageBar>
                <Styled.UsageBarFill $percentage={CREDITS_USED} />
              </Styled.UsageBar>
              <Styled.UsageText>
                {t("profilePage.creditsText", {
                  current: CREDITS_CURRENT,
                  total: CREDITS_TOTAL,
                })}
              </Styled.UsageText>
            </Styled.UsageStatus>
          </Styled.Sidebar>

          <Styled.ContentArea>{renderContent()}</Styled.ContentArea>
        </Styled.MainGrid>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
}
