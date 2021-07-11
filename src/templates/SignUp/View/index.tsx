import React from 'react';
import { View, StyleSheet } from 'react-native';

import { PageWrapper, Texts, Input, Buttons, Popups } from '@soccerapp/ui';
import { ModelOfTheme } from '@soccerapp/theme';

import { ModelOfTemplateSignUp } from '../Models';

import IconMail from '@src/assets/Icons/iconMail.svg';
import IconPassword from '@src/assets/Icons/iconPassword.svg';

export const TemplateSignUp: React.FC<ModelOfTemplateSignUp> = ({
  theme,
  title,
  emailValue,
  emailChangeText,
  passwordlValue,
  passwordlChangeText,
  passwordError,
  passwordErrorText,
  confirmpasswordlValue,
  confirmpasswordlChangeText,
  confirmpasswordError,
  onSubmit,
  isLoadingSubmit,
  onCancel,
  notificationOnHandler,
  notificationText,
  notificationType,
  notificationVisible,
}) => {
  return (
    <PageWrapper theme={theme} isScrollForm isStatusBarLight>
      <Texts.Title theme={theme}>{title}</Texts.Title>
      <Input
        theme={theme}
        IconSVG={IconMail}
        label={'e-mail'}
        keyboardType={'email-address'}
        value={emailValue}
        onChangeText={emailChangeText}
        autoCapitalize={'none'}
      />
      <Input
        theme={theme}
        label='Nova senha'
        isSecurityTextEntry
        IconSVG={IconPassword}
        autoCapitalize={'none'}
        value={passwordlValue}
        onChangeText={passwordlChangeText}
        error={passwordError}
        style={{ marginVertical: theme.metrics.base }}
      />
      <Input
        theme={theme}
        label='Confirmar senha'
        isSecurityTextEntry
        autoCapitalize={'none'}
        IconSVG={IconPassword}
        onChangeText={confirmpasswordlChangeText}
        value={confirmpasswordlValue}
        error={confirmpasswordError}
      />
      <View style={{ paddingVertical: theme.metrics.large }}>
        <Texts.SubTitle theme={theme} isTextElement style={
          [
            passwordErrorText === 'A senha deve conter 1 caracter maiusculo'
              ? styles(theme).error : {}
          ]
        }>1 Caracter maiúsculo</Texts.SubTitle>
        <Texts.SubTitle theme={theme} style={
          [
            passwordErrorText === 'A senha deve conter 1 caracter numérico'
              ? styles(theme).error : {}
          ]
        }>1 Caracter numérico</Texts.SubTitle>
        <Texts.SubTitle theme={theme} style={
          [
            passwordErrorText === 'A senha deve conter 1 caracter especial'
              ? styles(theme).error : {}
          ]
        }>1 Caracter especial</Texts.SubTitle>
        <Texts.SubTitle theme={theme} style={
          [
            passwordErrorText === 'A senha deve conter no mínio 8 caracteres'
              ? styles(theme).error : {}
          ]
        }>8 Digitos</Texts.SubTitle>
      </View>

      <Buttons.Base theme={theme}
        label='Enviar'
        onPress={onSubmit}
        isLoading={isLoadingSubmit}
      />

      <Buttons.Link theme={theme}
        label='Agora não'
        onPress={onCancel}
      />
      <Popups.Notification
        theme={theme}
        visible={notificationVisible}
        text={notificationText}
        onHandler={notificationOnHandler}
        type={notificationType}
      />
    </PageWrapper>

  );
}

const styles = (theme: ModelOfTheme) => {
  const { colors } = theme;
  return StyleSheet.create({
    error: {
      color: colors.textHighlight,
    }
  })
}
