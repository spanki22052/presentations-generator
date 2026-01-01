import { Form, Radio } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Styled from './AIPreferences.styles';
import { useAIPreferencesLogic } from '../hooks/useAIPreferencesLogic';
import {
  TONE_OPTIONS,
  LANGUAGE_OPTIONS,
  CONTENT_DEPTH_OPTIONS,
  ICON_MAP,
  DEFAULT_PREFERENCES,
} from '../model/constants';

export function AIPreferences() {
  const { t } = useTranslation();
  const { form, preferencesState, handleSavePreferences, handleManageBetaFeatures } =
    useAIPreferencesLogic();

  return (
    <Styled.SectionContent>
      <Styled.SectionHeader>
        <Styled.SectionHeaderText>
          <Styled.SectionTitle>
            {t('profilePage.aiPreferences.title')}
          </Styled.SectionTitle>
          <Styled.SectionDescription>
            {t('profilePage.aiPreferences.description')}
          </Styled.SectionDescription>
        </Styled.SectionHeaderText>
        <Styled.SectionActions>
          <Styled.SaveButton
            type="primary"
            onClick={() => form.submit()}
            loading={preferencesState.isLoading}
          >
            {t('profilePage.aiPreferences.saveSettings')}
          </Styled.SaveButton>
        </Styled.SectionActions>
      </Styled.SectionHeader>

      <Form
        form={form}
        layout="vertical"
        initialValues={DEFAULT_PREFERENCES}
        onFinish={handleSavePreferences}
      >
        <Styled.PreferencesSection>
          <Styled.SectionTitleSmall>
            {t('profilePage.aiPreferences.styleAndTone')}
          </Styled.SectionTitleSmall>
          <Styled.FormGrid>
            <Styled.FormField>
              <Styled.FormLabel>
                {t('profilePage.aiPreferences.preferredTone')}
              </Styled.FormLabel>
              <Form.Item name="tone">
                <Styled.StyledSelect>
                  {TONE_OPTIONS.map((option) => (
                    <Styled.StyledSelect.Option key={option.value} value={option.value}>
                      {t(`profilePage.aiPreferences.tones.${option.value}`)}
                    </Styled.StyledSelect.Option>
                  ))}
                </Styled.StyledSelect>
              </Form.Item>
              <Styled.FormHint>
                {t('profilePage.aiPreferences.toneHint')}
              </Styled.FormHint>
            </Styled.FormField>
            <Styled.FormField>
              <Styled.FormLabel>
                {t('profilePage.aiPreferences.creativityLevel')}
              </Styled.FormLabel>
              <Styled.SliderContainer>
                <Form.Item name="creativityLevel">
                  <Styled.StyledSlider min={0} max={100} />
                </Form.Item>
                <Styled.SliderLabels>
                  <span>{t('profilePage.aiPreferences.precise')}</span>
                  <span>{t('profilePage.aiPreferences.balanced')}</span>
                  <span>{t('profilePage.aiPreferences.creative')}</span>
                </Styled.SliderLabels>
              </Styled.SliderContainer>
            </Styled.FormField>
          </Styled.FormGrid>
        </Styled.PreferencesSection>

        <Styled.SectionDivider />

        <Styled.PreferencesSection>
          <Styled.SectionTitleSmall>
            {t('profilePage.aiPreferences.contentAndDepth')}
          </Styled.SectionTitleSmall>
          <Form.Item name="contentDepth">
            <Radio.Group>
              <Styled.DepthOptionsGrid>
                {CONTENT_DEPTH_OPTIONS.map((option) => {
                  const isChecked = form.getFieldValue('contentDepth') === option.value;
                  return (
                    <Styled.DepthOptionCard
                      key={option.value}
                      onClick={() => form.setFieldValue('contentDepth', option.value)}
                    >
                      <Radio value={option.value} style={{ display: 'none' }} />
                      <Styled.DepthOptionContent $checked={isChecked}>
                        <Styled.DepthOptionHeader>
                          <Styled.DepthOptionIcon $checked={isChecked}>
                            {ICON_MAP[option.icon]}
                          </Styled.DepthOptionIcon>
                          <Styled.DepthOptionRadio $checked={isChecked} />
                        </Styled.DepthOptionHeader>
                        <Styled.DepthOptionTitle>
                          {t(`profilePage.aiPreferences.depth.${option.value}.title`)}
                        </Styled.DepthOptionTitle>
                        <Styled.DepthOptionDescription>
                          {t(`profilePage.aiPreferences.depth.${option.value}.description`)}
                        </Styled.DepthOptionDescription>
                      </Styled.DepthOptionContent>
                    </Styled.DepthOptionCard>
                  );
                })}
              </Styled.DepthOptionsGrid>
            </Radio.Group>
          </Form.Item>
        </Styled.PreferencesSection>

        <Styled.SectionDivider />

        <Styled.PreferencesSection>
          <Styled.SectionTitleSmall>
            {t('profilePage.aiPreferences.languageAndFormatting')}
          </Styled.SectionTitleSmall>
          <Styled.LanguageSettingsList>
            <Styled.LanguageSettingCard>
              <Styled.LanguageSettingContent>
                <Styled.LanguageSettingIcon>
                  {ICON_MAP.translate}
                </Styled.LanguageSettingIcon>
                <Styled.LanguageSettingInfo>
                  <Styled.LanguageSettingTitle>
                    {t('profilePage.aiPreferences.defaultGenerationLanguage')}
                  </Styled.LanguageSettingTitle>
                  <Styled.LanguageSettingDescription>
                    {t('profilePage.aiPreferences.defaultLanguageHint')}
                  </Styled.LanguageSettingDescription>
                </Styled.LanguageSettingInfo>
              </Styled.LanguageSettingContent>
              <Form.Item name="defaultLanguage">
                <Styled.LanguageSelect>
                  {LANGUAGE_OPTIONS.map((option) => (
                    <Styled.LanguageSelect.Option key={option.value} value={option.value}>
                      {option.label}
                    </Styled.LanguageSelect.Option>
                  ))}
                </Styled.LanguageSelect>
              </Form.Item>
            </Styled.LanguageSettingCard>
            <Styled.ToggleSettingCard>
              <Styled.ToggleSettingContent>
                <Styled.ToggleSettingIcon>
                  {ICON_MAP.image}
                </Styled.ToggleSettingIcon>
                <Styled.ToggleSettingInfo>
                  <Styled.ToggleSettingTitle>
                    {t('profilePage.aiPreferences.autoImageSelection')}
                  </Styled.ToggleSettingTitle>
                  <Styled.ToggleSettingDescription>
                    {t('profilePage.aiPreferences.autoImageHint')}
                  </Styled.ToggleSettingDescription>
                </Styled.ToggleSettingInfo>
              </Styled.ToggleSettingContent>
              <Form.Item name="autoImageSelection" valuePropName="checked">
                <Styled.StyledSwitch />
              </Form.Item>
            </Styled.ToggleSettingCard>
          </Styled.LanguageSettingsList>
        </Styled.PreferencesSection>

        <Styled.SectionDivider />

        <Styled.PreferencesSection>
          <Styled.BetaFeaturesBox>
            <Styled.BetaFeaturesContent>
              <Styled.BetaFeaturesIcon>{ICON_MAP.science}</Styled.BetaFeaturesIcon>
              <Styled.BetaFeaturesInfo>
                <Styled.BetaFeaturesTitle>
                  {t('profilePage.aiPreferences.experimentalFeatures')}
                </Styled.BetaFeaturesTitle>
                <Styled.BetaFeaturesDescription>
                  {t('profilePage.aiPreferences.experimentalDescription')}
                </Styled.BetaFeaturesDescription>
                <Styled.BetaFeaturesLink onClick={handleManageBetaFeatures}>
                  {t('profilePage.aiPreferences.manageBetaFeatures')} →
                </Styled.BetaFeaturesLink>
              </Styled.BetaFeaturesInfo>
            </Styled.BetaFeaturesContent>
          </Styled.BetaFeaturesBox>
        </Styled.PreferencesSection>
      </Form>
    </Styled.SectionContent>
  );
}

