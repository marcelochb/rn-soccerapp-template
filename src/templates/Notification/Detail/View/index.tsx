import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Popups, Buttons } from '@soccerapp/ui';
import { ModelOfTheme } from '@soccerapp/theme';
import { ModelOfTemplateNotificationDetail } from '../Models';
import { TemplateProfile } from '../../../Profile/View';


export const TemplateNotificationDetail: React.FC<ModelOfTemplateNotificationDetail> = ({
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
  acceptOnPressed,
  refusedOnPressed,
  popupNotificationOnHandler,
  popupNotificationText,
  popupNotificationType,
  popupNotificationVisible,
  popupConfirmationLoading,
  popupConfirmationHandleNegativeAnswer,
  popupConfirmationHandlePositiveAnswer,
  popupConfirmationLablePositiveAnswer,
  popupConfirmationQuestion,
  popupConfirmationVisible,
}) => {
  return (
    <>
      <TemplateProfile isStatusBarLight isViewOnly
        theme={theme}
        nickNameValue={nickNameValue}
        nickNameChangeText={nickNameChangeText}
        nickNameError={nickNameError}
        lastNameValue={lastNameValue}
        lastNameChangeText={lastNameChangeText}
        lastNameError={lastNameError}
        nameValue={nameValue}
        nameChangeText={nameChangeText}
        nameError={nameError}
        avatarOnPress={avatarOnPress}
        avatarSource={avatarSource}
        avatarError={avatarError}
        birthDateValue={birthDateValue}
        birthDateChangeText={birthDateChangeText}
        birthDateError={birthDateError}
        coachingStaffIsChecked={coachingStaffIsChecked}
        coachingStaffClick={coachingStaffClick}
        playerIsChecked={playerIsChecked}
        playerClick={playerClick}
        typeUserIsError={typeUserIsError}
        typeUserErrorText={typeUserErrorText}
        goalKeeperIsChecked={goalKeeperIsChecked}
        goalKeeperClick={goalKeeperClick}
        leftBackIsChecked={leftBackIsChecked}
        leftBackClick={leftBackClick}
        rightBackIsChecked={rightBackIsChecked}
        rightBackClick={rightBackClick}
        centralBackIsChecked={centralBackIsChecked}
        centralBackClick={centralBackClick}
        midfielderDefensiveIsChecked={midfielderDefensiveIsChecked}
        midfielderDefensiveClick={midfielderDefensiveClick}
        midifielderAttackingIsChecked={midifielderAttackingIsChecked}
        midifielderAttackingClick={midifielderAttackingClick}
        forwardIsChecked={forwardIsChecked}
        forwardClick={forwardClick}
        firstSquadIsChecked={firstSquadIsChecked}
        firstSquadClick={firstSquadClick}
        secondSquadIsChecked={secondSquadIsChecked}
        secondSquadClick={secondSquadClick}
        caracteristicValue={caracteristicValue}
        caracteristicChange={caracteristicChange}
      />
      <View style={styles(theme).viewButtom}>

        <Buttons.Base
          theme={theme}
          label='Aceitar'
          onPress={acceptOnPressed}
        />
        <Buttons.Link
          theme={theme}
          label='Recusar'
          onPress={refusedOnPressed}
          style={styles(theme).refuse}
        />
      </View>
      <Popups.Notification
        theme={theme}
        onHandler={popupNotificationOnHandler}
        text={popupNotificationText}
        type={popupNotificationType}
        visible={popupNotificationVisible}
      />
      <Popups.Confirmation
        theme={theme}
        loading={popupConfirmationLoading}
        handleButtonNegativeAnswer={popupConfirmationHandleNegativeAnswer}
        handleButtonPositiveAnswer={popupConfirmationHandlePositiveAnswer}
        lableButtonPositiveAnswer={popupConfirmationLablePositiveAnswer}
        question={popupConfirmationQuestion}
        visible={popupConfirmationVisible}
      />
    </>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  viewButtom: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.metrics.base
  },
  refuse: {
    marginVertical: theme.metrics.largest
  }
})
