import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/shared/contexts';
import { ProfileFormValues } from '../model/types';

export function useProfilePageLogic() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [form] = Form.useForm<ProfileFormValues>();
  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const initialValues = useMemo<ProfileFormValues>(() => {
    if (!user) {
      return {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        company: '',
      };
    }

    const nameParts = user.name.split(' ');
    return {
      firstName: nameParts[0] || '',
      lastName: nameParts.slice(1).join(' ') || '',
      email: user.email || '',
      jobTitle: '',
      company: '',
    };
  }, [user]);

  const handleSave = useCallback(
    async (values: ProfileFormValues) => {
      try {
        // TODO: Implement API call to update profile
        console.log('Saving profile:', values);
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
    [t]
  );

  const handleCancel = useCallback(() => {
    form.resetFields();
    setIsEditing(false);
    setHasChanges(false);
  }, [form]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

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
    user,
    isEditing,
    setIsEditing,
    hasChanges,
    initialValues,
    handleSave,
    handleCancel,
    handleEdit,
    handleFormChange,
    handleManageSubscription,
    handleChangePhoto,
    handleRemovePhoto,
    logout,
  };
}

