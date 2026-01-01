import { useState, useCallback, useMemo } from 'react';
import { Form, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/contexts';
import { ProfileFormValues } from '../model/types';
import { useUpdateProfileMutation } from '@/entities/user';

export function useProfileDetailsLogic() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [form] = Form.useForm<ProfileFormValues>();
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const updateProfileMutation = useUpdateProfileMutation();

  const initialValues = useMemo<ProfileFormValues>(() => {
    if (!user) {
      return {
        name: '',
        surname: '',
        email: '',
      };
    }

    const nameParts = user.name.split(' ');
    return {
      name: nameParts[0] || '',
      surname: user.surname || nameParts.slice(1).join(' ') || '',
      email: user.email || '',
    };
  }, [user]);

  const handleSave = useCallback(
    async (values: ProfileFormValues) => {
      try {
        await updateProfileMutation.mutateAsync({
          name: values.name,
          surname: values.surname,
          email: values.email,
        });
        message.success(t('profilePage.saveSuccess'));
        setIsEditing(false);
        setHasChanges(false);
      } catch (error) {
        const errorMessage =
          error instanceof Error && error.message
            ? error.message
            : t('profilePage.saveFailed');
        message.error(errorMessage);
      }
    },
    [t, updateProfileMutation]
  );

  const handleCancel = useCallback(() => {
    form.resetFields();
    setIsEditing(false);
    setHasChanges(false);
  }, [form]);

  const handleFormChange = useCallback(() => {
    setHasChanges(true);
  }, []);

  const handleManageSubscription = useCallback(() => {
    // TODO: Navigate to subscription page
    console.log('Navigate to subscription page');
  }, []);

  const handleChangePhoto = useCallback(() => {
    // TODO: Implement photo upload
    console.log('Change photo');
  }, []);

  const handleRemovePhoto = useCallback(() => {
    // TODO: Implement photo removal
    console.log('Remove photo');
  }, []);

  return {
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
  };
}

