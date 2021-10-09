import React from 'react';
import { View } from 'react-native';
import { ModelOfTemplatePlayerCreate } from '../Models';
import { PageWrapper, Input, Popups, Avatar, CheckBox, Texts, Buttons, PhotoPopup } from '@soccerapp/ui';
import iconPersonOutline from '@src/assets/Icons/iconPersonOutline.svg';
import iconAccountCircle from '@src/assets/Icons/iconAccountCircle.svg';
import iconAssignment from '@src/assets/Icons/iconAssignment.svg';
import iconDate from '@src/assets/Icons/iconDate.svg';
import { styles } from './styles';


export const TemplatePlayerCreate: React.FC<ModelOfTemplatePlayerCreate> = ({
  isScrollForm = false,
  isStatusBarLight = false,
  isViewOnly = false,
  theme,
  nickNameValue,
  nickNameChangeText,
  nickNameError,
  lastNameValue,
  lastNameChangeText,
  lastNameError,
  nameValue,
  nameChangeText,
  nameError,
  avatarOnPress,
  avatarSource,
  avatarError,
  birthDateValue,
  birthDateChangeText,
  birthDateError,
  coachingStaffIsChecked,
  coachingStaffClick,
  playerIsChecked,
  playerClick,
  typeUserIsError,
  typeUserErrorText,
  goalKeeperIsChecked,
  goalKeeperClick,
  leftBackIsChecked,
  leftBackClick,
  rightBackIsChecked,
  rightBackClick,
  centralBackIsChecked,
  centralBackClick,
  midfielderDefensiveIsChecked,
  midfielderDefensiveClick,
  midifielderAttackingIsChecked,
  midifielderAttackingClick,
  forwardIsChecked,
  forwardClick,
  firstSquadIsChecked,
  firstSquadClick,
  secondSquadIsChecked,
  secondSquadClick,
  caracteristicValue,
  caracteristicChange,
  onSubmit,
  isloadingSubmit,
  onCancel,
  photoPopupDismiss = () => { },
  photoPopupSelectFromGalery = () => { },
  photoPopupTakePhoto = () => { },
  photoPopupVisible = false,
  popupNotificationOnHandler = () => { },
  popupNotificationText = '',
  popupNotificationType = 'Sucesso',
  popupNotificationVisible = false,
}) => {
  return (
    <PageWrapper theme={theme} isScrollForm={isScrollForm} isStatusBarLight={isStatusBarLight}>
      <View style={styles(theme).viewTop}>
        <View style={styles(theme).viewTopLeft}>
          <Input theme={theme} label='Apelido' IconSVG={iconAccountCircle}
            value={nickNameValue}
            onChangeText={nickNameChangeText}
            error={nickNameError}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
          <Input theme={theme} label='Nome' IconSVG={iconPersonOutline}
            value={nameValue}
            onChangeText={nameChangeText}
            error={nameError}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
          <Input theme={theme} label='Sobrenome' IconSVG={iconAssignment}
            value={lastNameValue}
            onChangeText={lastNameChangeText}
            error={lastNameError}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
        </View>
        <View style={styles(theme).image}>
          <Avatar
            theme={theme}
            onPress={avatarOnPress}
            source={avatarSource}
            error={avatarError}
            disable={isViewOnly}
          />
        </View>
      </View>
      <Input theme={theme} label='Data Nascimento' IconSVG={iconDate}
        value={birthDateValue}
        onChangeText={birthDateChangeText}
        error={birthDateError}
        keyboardType='numeric'
        maxLength={10}
        editable={!isViewOnly}
      />
      <View style={[styles(theme).marginTop, (typeUserIsError) ? styles(theme).viewUserTypeError : {}]}>
        <Texts.Title theme={theme} small>Tipo</Texts.Title>
        <View
          style={styles(theme).viewUserType}>
          <CheckBox label='Comissão Técnica'
            theme={theme}
            isChecked={coachingStaffIsChecked}
            onClick={coachingStaffClick}
            disable={isViewOnly}
          />
          <CheckBox label='Jogador'
            theme={theme}
            style={styles(theme).checkBoxPlayerSoccer}
            isChecked={playerIsChecked}
            onClick={playerClick}
            disable={isViewOnly}
          />
        </View>
      </View>
      {(typeUserIsError) && (
        <Texts.Error theme={theme}>{typeUserErrorText}</Texts.Error>
      )}
      <Texts.Title theme={theme} small style={styles(theme).subTitlePosition}>Posição</Texts.Title>
      <View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='GOL'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={goalKeeperIsChecked}
            onClick={goalKeeperClick}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='LAT ESQ.'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={leftBackIsChecked}
            onClick={leftBackClick}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='LAT DIR.'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={rightBackIsChecked}
            onClick={rightBackClick}
            disable={isViewOnly}
          />
        </View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='ZAG'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={centralBackIsChecked}
            onClick={centralBackClick}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='VOL'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={midfielderDefensiveIsChecked}
            onClick={midfielderDefensiveClick}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='MEI'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={midifielderAttackingIsChecked}
            onClick={midifielderAttackingClick}
            disable={isViewOnly}
          />
        </View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='ATA'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={forwardIsChecked}
            onClick={forwardClick}
            disable={isViewOnly}
          />
        </View>
      </View>
      <Texts.Title theme={theme} small style={styles(theme).subTitlePosition}>Equipe</Texts.Title>
      <View style={styles(theme).viewLinePosition}>
        <CheckBox isRadioButton label='Primeiro quadro'
          theme={theme}
          isChecked={firstSquadIsChecked}
          onClick={firstSquadClick}
          disable={isViewOnly}
        />
        <CheckBox isRadioButton label='Segundo quadro'
          theme={theme}
          isChecked={secondSquadIsChecked}
          onClick={secondSquadClick}
          disable={isViewOnly}
        />

      </View>

      <Input theme={theme} label='Caracteristicas' multiline
        value={caracteristicValue}
        onChangeText={caracteristicChange}
        editable={!isViewOnly}
      />

      {!isViewOnly && (
        <>
          <Buttons.Base
            theme={theme}
            label='Salvar'
            onPress={onSubmit}
            style={styles(theme).button}
            isLoading={isloadingSubmit}
          />
          <Buttons.Link
            theme={theme}
            label='Agora não'
            onPress={onCancel}
            style={styles(theme).button}
          />
          <PhotoPopup
            theme={theme}
            onDismiss={photoPopupDismiss}
            onSelectFromGalery={photoPopupSelectFromGalery}
            onTakePhoto={photoPopupTakePhoto}
            visible={photoPopupVisible}
          />
          <Popups.Notification
            theme={theme}
            onHandler={popupNotificationOnHandler}
            text={popupNotificationText}
            type={popupNotificationType}
            visible={popupNotificationVisible}
          />
        </>
      )}
    </PageWrapper>
  );
}

