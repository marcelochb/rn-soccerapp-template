import React from 'react';
import { StyleSheet } from 'react-native';
import { PageWrapper, Input, Avatar, PhotoPopup, Buttons } from '@soccerapp/ui';
import { ModelOfTheme } from '@soccerapp/theme';
import IconPlayers from '@src/assets/Icons/iconPlayers.svg';
import IconPersonOutline from '@src/assets/Icons/iconPersonOutline.svg';
import IconPhone from '@src/assets/Icons/iconPhone.svg';
import IconDescription from '@src/assets/Icons/iconDescription.svg';
import { ModelOfTemplateTeamCreate } from '../Models';


export const TemplateTeamCreate: React.FC<ModelOfTemplateTeamCreate> = ({
  isViewOnly = false,
  theme,
  nameValue,
  nameChangeText,
  nameError,
  responsableValue,
  responsableChangeText,
  responsableError,
  phoneValue,
  phoneChangeText,
  phoneError,
  noteValue,
  noteChangeText,
  avatarOnPress,
  avatarSource,
  onSubmit,
  isloadingSubmit,
  onCancel,
  photoPopupDismiss,
  photoPopupSelectFromGalery,
  photoPopupTakePhoto,
  photoPopupVisible,
}) => {
  return (
    <PageWrapper theme={theme} isScrollForm isStatusBarLight>
      <Input
        theme={theme}
        label='Nome' IconSVG={IconPlayers}
        style={styles(theme).marginBottom}
        onChangeText={nameChangeText}
        value={nameValue}
        error={nameError}
        editable={!isViewOnly}
      />
      <Input
        theme={theme}
        label='Responsável' IconSVG={IconPersonOutline}
        style={styles(theme).marginBottom}
        onChangeText={responsableChangeText}
        value={responsableValue}
        error={responsableError}
        editable={!isViewOnly}
      />
      <Input
        theme={theme}
        label='Contato' IconSVG={IconPhone}
        style={styles(theme).marginBottom}
        onChangeText={phoneChangeText}
        value={phoneValue}
        error={phoneError}
        editable={!isViewOnly}
      />
      <Input
        theme={theme}
        label='Observação' IconSVG={IconDescription}
        style={styles(theme).marginBottom}
        onChangeText={noteChangeText}
        value={noteValue}
        editable={!isViewOnly}
      />
      <Avatar theme={theme}
        style={[styles(theme).crest, styles(theme).marginBottom]}
        onPress={avatarOnPress}
        source={avatarSource}
      />
      <Buttons.Base theme={theme}
        label='Salvar'
        onPress={onSubmit}
        style={styles(theme).marginBottom}
        isLoading={isloadingSubmit}
      />
      <Buttons.Link theme={theme}
        label='Agora não'
        onPress={onCancel}
      />
      <PhotoPopup theme={theme}
        onDismiss={photoPopupDismiss}
        onSelectFromGalery={photoPopupSelectFromGalery}
        onTakePhoto={photoPopupTakePhoto}
        visible={photoPopupVisible}
      />

    </PageWrapper>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  marginBottom: { marginBottom: theme.metrics.large },
  crest: { alignSelf: 'center' }
})
