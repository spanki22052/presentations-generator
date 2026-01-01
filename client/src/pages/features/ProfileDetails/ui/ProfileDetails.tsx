import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/contexts';
import * as Styled from './ProfileDetails.styles';
import { useProfileDetailsLogic } from '../hooks/useProfileDetailsLogic';
import { ICON_MAP } from '../model/constants';

export function ProfileDetails() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const {
    form,
    isEditing,
    setIsEditing,
    hasChanges,
    initialValues,
    handleSave,
    handleCancel,
    handleFormChange,
    handleManageSubscription,
    handleChangePhoto,
    handleRemovePhoto,
  } = useProfileDetailsLogic();

  if (!user) {
    return null;
  }

  const userInitials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Styled.SectionContent>
      <Styled.SectionHeader>
        <Styled.SectionHeaderText>
          <Styled.SectionTitle>
            {t('profilePage.profileInformation')}
          </Styled.SectionTitle>
          <Styled.SectionDescription>
            {t('profilePage.profileDescription')}
          </Styled.SectionDescription>
        </Styled.SectionHeaderText>
        <Styled.SectionActions>
          {isEditing ? (
            <>
              <Styled.CancelButton onClick={handleCancel}>
                {t('profilePage.cancel')}
              </Styled.CancelButton>
              <Styled.SaveButton
                type="primary"
                onClick={() => form.submit()}
                disabled={!hasChanges}
              >
                {t('profilePage.saveChanges')}
              </Styled.SaveButton>
            </>
          ) : (
            <Styled.SaveButton
              type="primary"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              {t('profilePage.edit')}
            </Styled.SaveButton>
          )}
        </Styled.SectionActions>
      </Styled.SectionHeader>

      <Styled.AvatarSection>
        <Styled.AvatarWrapper>
          <Styled.AvatarImage>{userInitials}</Styled.AvatarImage>
          <Styled.AvatarOverlay>
            <span>{ICON_MAP.photo_camera}</span>
          </Styled.AvatarOverlay>
        </Styled.AvatarWrapper>
        <Styled.AvatarActions>
          <Styled.AvatarButtons>
            <Styled.ChangePhotoButton onClick={handleChangePhoto}>
              {t('profilePage.changePhoto')}
            </Styled.ChangePhotoButton>
            <Styled.RemovePhotoButton onClick={handleRemovePhoto}>
              {t('profilePage.remove')}
            </Styled.RemovePhotoButton>
          </Styled.AvatarButtons>
          <Styled.AvatarHint>
            {t('profilePage.avatarHint')}
          </Styled.AvatarHint>
        </Styled.AvatarActions>
      </Styled.AvatarSection>

      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onFinish={handleSave}
        onValuesChange={handleFormChange}
      >
        <Styled.FormGrid>
          <Styled.FormField>
            <Styled.FormLabel>
              {t('profilePage.firstName')}
            </Styled.FormLabel>
            <Form.Item name="name">
              <Styled.StyledInput
                placeholder={t('profilePage.firstNamePlaceholder')}
                disabled={!isEditing}
              />
            </Form.Item>
          </Styled.FormField>

          <Styled.FormField>
            <Styled.FormLabel>
              {t('profilePage.lastName')}
            </Styled.FormLabel>
            <Form.Item name="surname">
              <Styled.StyledInput
                placeholder={t('profilePage.lastNamePlaceholder')}
                disabled={!isEditing}
              />
            </Form.Item>
          </Styled.FormField>

          <Styled.FormField style={{ gridColumn: '1 / -1' }}>
            <Styled.FormLabel>
              {t('profilePage.email')}
            </Styled.FormLabel>
            <Form.Item name="email">
              <Styled.EmailInputWrapper>
                <Styled.EmailIcon>{ICON_MAP.mail}</Styled.EmailIcon>
                <Styled.EmailInput
                  type="email"
                  placeholder={t('profilePage.emailPlaceholder')}
                  disabled={!isEditing}
                />
              </Styled.EmailInputWrapper>
            </Form.Item>
          </Styled.FormField>
        </Styled.FormGrid>
      </Form>

      <Styled.PreferencesSection>
        <Styled.PreferencesTitle>
          {t('profilePage.workspacePreferences')}
        </Styled.PreferencesTitle>
        <Styled.PreferencesGrid>
          <Styled.PreferenceCard>
            <Styled.PreferenceContent>
              <Styled.PreferenceIcon>
                {ICON_MAP.palette}
              </Styled.PreferenceIcon>
              <Styled.PreferenceInfo>
                <Styled.PreferenceLabel>
                  {t('profilePage.themePreference')}
                </Styled.PreferenceLabel>
                <Styled.PreferenceValue>
                  {t('profilePage.systemDefault')}
                </Styled.PreferenceValue>
              </Styled.PreferenceInfo>
            </Styled.PreferenceContent>
            <Styled.PreferenceChevron>
              {ICON_MAP.chevron_right}
            </Styled.PreferenceChevron>
          </Styled.PreferenceCard>

          <Styled.PreferenceCard>
            <Styled.PreferenceContent>
              <Styled.PreferenceIcon>
                {ICON_MAP.translate}
              </Styled.PreferenceIcon>
              <Styled.PreferenceInfo>
                <Styled.PreferenceLabel>
                  {t('profilePage.language')}
                </Styled.PreferenceLabel>
                <Styled.PreferenceValue>
                  {t('profilePage.englishUS')}
                </Styled.PreferenceValue>
              </Styled.PreferenceInfo>
            </Styled.PreferenceContent>
            <Styled.PreferenceChevron>
              {ICON_MAP.chevron_right}
            </Styled.PreferenceChevron>
          </Styled.PreferenceCard>
        </Styled.PreferencesGrid>
      </Styled.PreferencesSection>

      <Styled.SubscriptionTeaser>
        <Styled.SubscriptionCard>
          <Styled.SubscriptionContent>
            <Styled.SubscriptionIcon>
              {ICON_MAP.diamond}
            </Styled.SubscriptionIcon>
            <Styled.SubscriptionInfo>
              <Styled.SubscriptionTitle>
                {t('profilePage.proPlanActive')}
              </Styled.SubscriptionTitle>
              <Styled.SubscriptionDescription>
                {t('profilePage.proPlanDescription')}
              </Styled.SubscriptionDescription>
            </Styled.SubscriptionInfo>
          </Styled.SubscriptionContent>
          <Styled.ManageSubscriptionButton
            onClick={handleManageSubscription}
          >
            {t('profilePage.manageSubscription')}
          </Styled.ManageSubscriptionButton>
        </Styled.SubscriptionCard>
      </Styled.SubscriptionTeaser>
    </Styled.SectionContent>
  );
}

