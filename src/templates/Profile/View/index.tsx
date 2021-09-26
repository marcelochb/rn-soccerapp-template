import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModelOfTemplateProfile } from '../Models';
import { PageWrapper, Input, Popups, Avatar, CheckBox, Texts, Buttons, PhotoPopup } from '@soccerapp/ui';
import iconPersonOutline from '@src/assets/Icons/iconPersonOutline.svg';
import iconAccountCircle from '@src/assets/Icons/iconAccountCircle.svg';
import iconAssignment from '@src/assets/Icons/iconAssignment.svg';
import iconDate from '@src/assets/Icons/iconDate.svg';
import { ModelOfTheme } from '@soccerapp/theme';


export const TemplateProfile: React.FC<ModelOfTemplateProfile> = ({
  isStatusBarLight = false,
  isViewOnly = false,
  theme,
}) => {
  return (
    <PageWrapper theme={theme} isScrollForm isStatusBarLight={isStatusBarLight}>
      <View style={styles(theme).viewTop}>
        <View style={styles(theme).viewTopLeft}>
          <Input theme={theme} label='Apelido' IconSVG={iconAccountCircle}
            value={getController.nickname}
            onChangeText={handleController.onChange('nickname')}
            error={getController.touched.nickname && getController.errors.nickname}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
          <Input theme={theme} label='Nome' IconSVG={iconPersonOutline}
            value={getController.name}
            onChangeText={handleController.onChange('name')}
            error={getController.touched.name && getController.errors.name}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
          <Input theme={theme} label='Sobrenome' IconSVG={iconAssignment}
            value={getController.last_name}
            onChangeText={handleController.onChange('last_name')}
            error={getController.touched.last_name && getController.errors.last_name}
            editable={!isViewOnly}
            style={styles(theme).marginBottom}
          />
        </View>
        <View style={styles(theme).image}>
          <Avatar
            theme={theme}
            onPress={handleController.openPhotoPopup}
            source={getController.avatarImage.sourceURL}
            error={getController.touched.avatar && getController.errors.avatar}
            disable={isViewOnly}
          />
        </View>
      </View>
      <Input theme={theme} label='Data Nascimento' IconSVG={iconDate}
        value={getController.birth_date}
        onChangeText={handleController.onDateChange}
        error={getController.touched.birth_date && getController.errors.birth_date}
        keyboardType='numeric'
        maxLength={10}
        editable={!isViewOnly}
      />
      <View style={[styles(theme).marginTop, (getController.touched.type && getController.errors.type) ? styles(theme).viewUserTypeError : {}]}>
        <Texts.Title theme={theme} small>Tipo</Texts.Title>
        <View
          style={styles(theme).viewUserType}>
          <CheckBox label='Comissão Técnica'
            theme={theme}
            isChecked={getController.type.includes('CT')}
            onClick={() => handleController.toggleUserType('CT')}
            disable={isViewOnly}
          />
          <CheckBox label='Jogador'
            theme={theme}
            style={styles(theme).checkBoxPlayerSoccer}
            isChecked={getController.type.includes('Player')}
            onClick={() => handleController.toggleUserType('Player')}
            disable={isViewOnly}
          />
        </View>
      </View>
      {(getController.touched.type && getController.errors.type) && (
        <Texts.Error theme={theme}>{getController.errors.type}</Texts.Error>
      )}
      <Texts.Title theme={theme} small style={styles(theme).subTitlePosition}>Posição</Texts.Title>
      <View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='GOL'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Goleiro')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Goleiro', position_alias: 'GOL'
            })}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='LAT ESQ.'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Lateral esquerdo')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Lateral esquerdo', position_alias: 'LAT'
            })}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='LAT DIR.'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Lateral direito')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Lateral direito', position_alias: 'LAT'
            })}
            disable={isViewOnly}
          />
        </View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='ZAG'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Zagueiro')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Zagueiro', position_alias: 'ZAG'
            })}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='VOL'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Volante')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Volante', position_alias: 'VOL'
            })}
            disable={isViewOnly}
          />
          <CheckBox isRadioButton label='MEI'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Meia ofensivo')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Meia ofensivo', position_alias: 'MEI'
            })}
            disable={isViewOnly}
          />
        </View>
        <View style={styles(theme).viewLinePosition}>
          <CheckBox isRadioButton label='ATA'
            theme={theme}
            style={styles(theme).checkBoxPosition}
            isChecked={getController.position.includes('Atacante')}
            onClick={() => handleController.togglePlayerPosition({
              position_name: 'Atacante', position_alias: 'ATA'
            })}
            disable={isViewOnly}
          />
        </View>
      </View>
      <Texts.Title theme={theme} small style={styles(theme).subTitlePosition}>Equipe</Texts.Title>
      <View style={styles(theme).viewLinePosition}>
        <CheckBox isRadioButton label='Primeiro quadro'
          theme={theme}
          isChecked={getController.squad.includes('first')}
          onClick={() => handleController.toggleSquad('first')}
          disable={isViewOnly}
        />
        <CheckBox isRadioButton label='Segundo quadro'
          theme={theme}
          isChecked={getController.squad.includes('second')}
          onClick={() => handleController.toggleSquad('second')}
          disable={isViewOnly}
        />

      </View>

      <Input theme={theme} label='Caracteristicas' multiline
        value={getController.caracteristic}
        onChangeText={handleController.onChange('caracteristic')}
        editable={!isViewOnly}
      />

      {!isViewOnly && (
        <>
          <Buttons.Base
            theme={theme}
            label='Salvar'
            onPress={handleController.onSubmit}
            style={styles(theme).button}
            isLoading={getController.loading}
          />
          <Buttons.Link
            theme={theme}
            label='Agora não'
            onPress={handleController.loggOut}
            style={styles(theme).button}
          />
          <PhotoPopup
            theme={theme}
            onDismiss={handleController.closePhotoPopup}
            onSelectFromGalery={handleController.onSelectFromGalery}
            onTakePhoto={handleController.onTakePhoto}
            visible={getController.visiblePhotoPopup}
          />
          <Popups.Notification
            theme={theme}
            onHandler={handleController.closeNotification}
            text={getController.notificationText}
            type={getController.notificationType}
            visible={getController.notificationVisible}
          />
        </>
      )}
    </PageWrapper>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  marginBottom: { marginBottom: theme.metrics.base },
  viewTopLeft: {
    flex: 1
  },
  image: {
    justifyContent: 'center',
    marginLeft: theme.metrics.base
  },
  viewUserType: {
    flexDirection: 'row',
    paddingLeft: theme.metrics.large,
    paddingTop: theme.metrics.small
  },
  viewUserTypeError: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.textHighlight
  },
  checkBoxPlayerSoccer: {
    marginLeft: theme.metrics.large,
  },
  subTitlePosition: { marginTop: theme.metrics.base, marginBottom: theme.metrics.small },
  viewLinePosition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.metrics.large,
    marginBottom: theme.metrics.base,
  },
  checkBoxPosition: {
    width: 100,
  },
  marginTop: { marginTop: theme.metrics.small },
  button: { marginTop: theme.metrics.large }
});
