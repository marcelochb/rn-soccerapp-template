import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProfileForm } from '@src/components/Organisms';
import { useNotificationDetailController } from '../Controller';
import { ButtonBase, ButtonLink } from '@src/components/Atoms';
import { colors, metrics } from '@src/theme';
import { Popups } from '@soccerapp/ui';
import { ModelOfTheme, ThemeBase } from '@soccerapp/theme';
import { ModelOfTemplateNotificationDetail } from '../Models';


export const TemplateNotificationDetail: React.FC<ModelOfTemplateNotificationDetail> = ({ theme }) => {
  return (
    <>
      <ProfileForm isStatusBarLight isViewOnly
        data={getController.notification}
      />
      <View style={styles.viewButtom}>

        <ButtonBase
          labelOfButtonBase='Aceitar'
          onPress={handlerController.openConfirmationPlayerAccepted}
        />
        <ButtonLink
          label='Recusar'
          onPress={handlerController.openConfirmationPlayerRefused}
          style={styles.refuse}
        />
      </View>
      <Popups.Notification
        theme={ThemeBase.FamiliaVsc}
        onHandler={handlerController.closeNotification}
        text={getController.notificationText}
        type={getController.notificationType}
        visible={getController.notificationVisible}
      />
      <Popups.Confirmation
        theme={ThemeBase.FamiliaVsc}
        loading={getController.loading}
        handleButtonNegativeAnswer={handlerController.handleButtonNegativeAnswer}
        handleButtonPositiveAnswer={handlerController.handleButtonPositiveAnswer}
        lableButtonPositiveAnswer={getController.lableButtonPositiveAnswer}
        question={getController.confirmationQuestion}
        visible={getController.confirmationVisible}
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
