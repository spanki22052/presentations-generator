import { useTranslation } from "react-i18next";
import * as Styled from "./NotFoundPage.styles";
import { useNotFoundPageLogic } from "../hooks/useNotFoundPageLogic";

export function NotFoundPage() {
  const { t } = useTranslation();
  const {
    handleReturnToDashboard,
    handleContactSupport,
    handleNewDeck,
    handleMyLibrary,
    handleHelpCenter,
  } = useNotFoundPageLogic();

  return (
    <Styled.PageContainer>
      <Styled.MainContent>
        <Styled.ContentContainer>
          <Styled.TextContent>
            <Styled.IllustrationContainer>
              <Styled.BackgroundPattern />
              <Styled.IllustrationContent>
                <Styled.SlideCard>
                  <Styled.IconWrapper $size={64}>⚠️</Styled.IconWrapper>
                </Styled.SlideCard>
                <Styled.FloatingIcon $position="top-right">
                  <Styled.IconWrapper $size={24}>❓</Styled.IconWrapper>
                </Styled.FloatingIcon>
                <Styled.FloatingIcon $position="bottom-left">
                  <Styled.IconWrapper $size={20}>🔍</Styled.IconWrapper>
                </Styled.FloatingIcon>
              </Styled.IllustrationContent>
            </Styled.IllustrationContainer>

            <Styled.Title>
              <span>404</span> - {t("notFoundPage.title").replace("404 - ", "")}
            </Styled.Title>
            <Styled.Description>
              {t("notFoundPage.description")}
            </Styled.Description>

            <Styled.ActionsContainer>
              <Styled.PrimaryButton onClick={handleReturnToDashboard}>
                <Styled.ButtonIcon>📊</Styled.ButtonIcon>
                {t("notFoundPage.returnToDashboard")}
              </Styled.PrimaryButton>
              <Styled.SecondaryButton onClick={handleContactSupport}>
                {t("notFoundPage.contactSupport")}
              </Styled.SecondaryButton>
            </Styled.ActionsContainer>
          </Styled.TextContent>

          <Styled.HelpfulLinks>
            <Styled.LinksTitle>
              {t("notFoundPage.commonDestinations")}
            </Styled.LinksTitle>
            <Styled.LinksContainer>
              <Styled.LinkItem onClick={handleNewDeck} href="#">
                <Styled.LinkIconContainer>
                  <Styled.LinkIcon>➕</Styled.LinkIcon>
                </Styled.LinkIconContainer>
                <Styled.LinkText>{t("notFoundPage.newDeck")}</Styled.LinkText>
              </Styled.LinkItem>
              <Styled.LinkItem onClick={handleMyLibrary} href="#">
                <Styled.LinkIconContainer>
                  <Styled.LinkIcon>📁</Styled.LinkIcon>
                </Styled.LinkIconContainer>
                <Styled.LinkText>{t("notFoundPage.myLibrary")}</Styled.LinkText>
              </Styled.LinkItem>
              <Styled.LinkItem onClick={handleHelpCenter} href="#">
                <Styled.LinkIconContainer>
                  <Styled.LinkIcon>❓</Styled.LinkIcon>
                </Styled.LinkIconContainer>
                <Styled.LinkText>
                  {t("notFoundPage.helpCenter")}
                </Styled.LinkText>
              </Styled.LinkItem>
            </Styled.LinksContainer>
          </Styled.HelpfulLinks>
        </Styled.ContentContainer>
      </Styled.MainContent>
    </Styled.PageContainer>
  );
}
