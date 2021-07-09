import React from 'react';
import { View, Image, ScrollView, Animated } from 'react-native';

import { ModelOfTemplateSignIn } from '../Models';
import { useTemplateSignInController } from '../Controller';

import { Texts, Input, Buttons, PopupNotification, SignUpPopup } from '@soccerapp/ui';

import { styles } from './styles';

import IconPassword from '@src/assets/Icons/iconPassword.svg';
import IconMail from '@src/assets/Icons/iconMail.svg';


export const TemplateSignIn: React.FC<ModelOfTemplateSignIn> = ({
  theme, logo, title, subTitle, emailValue, emailOnChangeText, passwordValue,
  passwordOnChangeText, passwordOnSubmitEditing, buttonSignInOnPress,
  buttonSignInIsLoading, buttonSignUpOnPress, buttonCancelOnPress,
  signUpPopupVisible, signUpPopupOnDismiss, notificationOnHandler,
  notificationText, notificationType, notificationVisible,
  signUpPopupFirstButtonLabel,
  signUpPopupFirstButtonIcon,
  signUpPopupFirstButtonOnPress,
  signUpPopupSecondButtonLabel,
  signUpPopupSecondButtonIcon,
  signUpPopupSecondButtonOnPress,
  signUpPopupTertiaryButtonLabel,
  signUpPopupTertiaryButtonIcon,
  signUpPopupTertiaryButtonOnPress,
}) => {
  const { handleController } = useTemplateSignInController();
  return (

    <View style={styles(theme).container}>
      <View style={styles(theme).viewTop}>
        <Image style={styles(theme).imageLogo} source={logo} />
        <View style={styles(theme).viewTitle}>
          <Texts.Title theme={theme} isTextElement>{title}</Texts.Title>
          <Texts.Body theme={theme} isTextElement>{subTitle}</Texts.Body>
        </View>
      </View>
      <ScrollView keyboardShouldPersistTaps='handled'>
        <Animated.View style={[styles(theme).viewBottom, handleController.moveViewUp.getLayout()]}>
          <Texts.Title theme={theme}>Login</Texts.Title>
          <Input
            theme={theme}
            IconSVG={IconMail}
            label={'e-mail'}
            keyboardType={'email-address'}
            value={emailValue}
            onChangeText={emailOnChangeText}
            autoCapitalize={'none'}
          />
          <Input
            theme={theme}
            IconSVG={IconPassword}
            label={'senha'}
            value={passwordValue}
            onChangeText={passwordOnChangeText}
            autoCapitalize={'none'}
            isSecurityTextEntry
            style={styles(theme).password}
            onSubmitEditing={passwordOnSubmitEditing}
          />
          <Buttons.Link theme={theme} label='Esqueci senha.' onPress={() => { }}
            styleLabel={styles(theme).forgotPassword}
          />
          <View style={styles(theme).viewButtons}>
            <Buttons.Base theme={theme}
              label={'Entrar'}
              onPress={buttonSignInOnPress}
              isLoading={buttonSignInIsLoading}
            />
            <Buttons.Link theme={theme}
              label={'Ainda não tem conta? Registre-se.'}
              onPress={buttonSignUpOnPress}
              styleLabel={styles(theme).signUp}
            />
            <Buttons.Link theme={theme}
              style={styles(theme).buttonLink}
              label={'Agora não'}
              onPress={buttonCancelOnPress}
            />
          </View>
        </Animated.View>
      </ScrollView>
      <SignUpPopup
        theme={theme}
        visible={signUpPopupVisible}
        onDismiss={signUpPopupOnDismiss}
        firstButtonLabel={signUpPopupFirstButtonLabel}
        firstButtonIcon={signUpPopupFirstButtonIcon}
        firstButtonOnPress={signUpPopupFirstButtonOnPress}
        secondButtonLabel={signUpPopupSecondButtonLabel}
        secondButtonIcon={signUpPopupSecondButtonIcon}
        secondButtonOnPress={signUpPopupSecondButtonOnPress}
        tertiaryButtonLabel={signUpPopupTertiaryButtonLabel}
        tertiaryButtonIcon={signUpPopupTertiaryButtonIcon}
        tertiaryButtonOnPress={signUpPopupTertiaryButtonOnPress}
      />
      <PopupNotification
        theme={theme}
        onHandler={notificationOnHandler}
        text={notificationText}
        type={notificationType}
        visible={notificationVisible}
      />
    </View >

  );
}
