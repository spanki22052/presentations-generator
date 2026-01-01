import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterContent,
  FooterTop,
  BrandSection,
  BrandLogo,
  BrandDescription,
  LinksSection,
  LinksTitle,
  LinksList,
  LinkItem,
  FooterLink,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright,
} from './Footer.styles';
import { useFooterLogic } from '../hooks/useFooterLogic';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../model/constants';

export function Footer() {
  const { t } = useTranslation();
  const { handleLinkClick, handleSocialClick } = useFooterLogic();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <BrandSection>
            <BrandLogo>
              <span>⚡</span>
              {t('navbar.logo')}
            </BrandLogo>
            <BrandDescription>
              {t('footer.brandDescription')}
            </BrandDescription>
            <SocialLinks>
              {SOCIAL_LINKS.map((social) => (
                <SocialLink
                  key={social.name}
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={social.name}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </BrandSection>

          <LinksSection>
            <LinksTitle>{t('footer.sections.product')}</LinksTitle>
            <LinksList>
              {FOOTER_LINKS.product.map((link) => (
                <LinkItem key={link.path}>
                  <FooterLink onClick={() => handleLinkClick(link.path)}>
                    {t(`footer.links.${link.path.slice(1)}`)}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinksList>
          </LinksSection>

          <LinksSection>
            <LinksTitle>{t('footer.sections.company')}</LinksTitle>
            <LinksList>
              {FOOTER_LINKS.company.map((link) => (
                <LinkItem key={link.path}>
                  <FooterLink onClick={() => handleLinkClick(link.path)}>
                    {t(`footer.links.${link.path.slice(1)}`)}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinksList>
          </LinksSection>

          <LinksSection>
            <LinksTitle>{t('footer.sections.legal')}</LinksTitle>
            <LinksList>
              {FOOTER_LINKS.legal.map((link) => (
                <LinkItem key={link.path}>
                  <FooterLink onClick={() => handleLinkClick(link.path)}>
                    {t(`footer.links.${link.path.slice(1)}`)}
                  </FooterLink>
                </LinkItem>
              ))}
            </LinksList>
          </LinksSection>
        </FooterTop>

        <FooterBottom>
          <Copyright>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

