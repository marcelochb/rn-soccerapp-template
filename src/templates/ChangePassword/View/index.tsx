import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconPassword from '@src/assets/Icons/iconPassword.svg';
import { ModelOfTemplateChangePassword } from '../Models';
import { PageWrapper, Input, Texts, Buttons } from '@soccerapp/ui';
import { ModelOfTheme } from '@soccerapp/theme';

export const TemplateChangePassword: React.FC<ModelOfTemplateChangePassword> = ({
  title,
  theme,
  newPasswordValue,
  newPasswordChangeText,
  newPasswordError,
  confirmPasswordValue,
  confirmPasswordChangeText,
  confirmPasswordError,
  onSubmit,
  isLoadingSubmit,
  onCancel,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight>
      <Texts.Title theme={theme}>{title}</Texts.Title>
      <View style={styles(theme).viewInput}>
        <Input
          theme={theme}
          label='Nova senha'
          isSecurityTextEntry
          IconSVG={IconPassword}
          autoCapitalize={'none'}
          value={newPasswordValue}
          onChangeText={newPasswordChangeText}
          error={newPasswordError}
        />
        <Input
          theme={theme}
          label='Confirmar senha'
          isSecurityTextEntry
          autoCapitalize={'none'}
          IconSVG={IconPassword}
          onChangeText={confirmPasswordChangeText}
          value={confirmPasswordValue}
          error={confirmPasswordError}
          style={styles(theme).password}
        />
      </View>
      <Buttons.Base
        theme={theme}
        label="Próximo"
        onPress={onSubmit}
        isLoading={isLoadingSubmit}
      />
      <Buttons.Link
        theme={theme}
        label='Agora não'
        onPress={onCancel}
        style={styles(theme).buttonLink}
      />
    </PageWrapper>
  );
}
const styles = (theme: ModelOfTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.metrics.base
  },
  viewInput: {
    width: '90%',
    marginBottom: theme.metrics.large,
    alignSelf: 'center'
  },
  buttonLink: { marginTop: theme.metrics.large },
  password: { marginTop: theme.metrics.base }
});
