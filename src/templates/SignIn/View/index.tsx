import React from 'react';
import { View, Image, ScrollView, Animated } from 'react-native';

import { ModelOfTemplateSignIn } from '../Models';
import { useTemplateSignInController } from '../Controller';

import { Texts, Input, Buttons, Popups, SignUpPopup, PageWrapper } from '@soccerapp/ui';

import { styles } from './styles';

import IconPassword from '@src/assetstemplate/Icons/iconPassword.svg';
import IconMail from '@src/assetstemplate/Icons/iconMail.svg';


export const TemplateSignIn: React.FC<ModelOfTemplateSignIn> = ({
  theme, logo, title, subTitle, emailValue, emailOnChangeText, passwordValue,
  passwordOnChangeText, passwordOnSubmitEditing, buttonSignInOnPress,
  buttonSignInIsLoading, buttonSignUpOnPress,
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
  return (
    <PageWrapper theme={theme}
      Header={
        <View style={styles(theme).viewTop}>
          <Image style={styles(theme).imageLogo} source={logo} />
          <View style={styles(theme).viewTitle}>
            <Texts.Title theme={theme} isTextElement>{title}</Texts.Title>
            <Texts.Body theme={theme} isTextElement>{subTitle}</Texts.Body>
          </View>
        </View>
      }
    >
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles(theme).viewBottom}>
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
          </View>
        </View>
      </ScrollView>
      <Popups.Notification
        theme={theme}
        onHandler={notificationOnHandler}
        text={notificationText}
        type={notificationType}
        visible={notificationVisible}
      />
    </PageWrapper >

  );
}
