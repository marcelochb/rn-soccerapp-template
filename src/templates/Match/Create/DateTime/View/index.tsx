import { Buttons, CheckBox, Input, PageWrapper, Texts } from '@soccerapp/ui';
import React from 'react';
import { View } from 'react-native';
import { ModelOfTemplateMatchCreateDateTime } from '../Models';
import { styles } from './styles';
import { Avatar } from '@soccerapp/ui';
import iconDate from '@src/assets/Icons/iconDate.svg';
import iconHour from '@src/assets/Icons/iconHour.svg';
import iconAddAlert from '@src/assets/Icons/iconAddAlert.svg';

export const TemplateMatchCreateDateTime
  : React.FC<ModelOfTemplateMatchCreateDateTime> = ({
    theme,
    sourceCrest,
    teamName,
    teamResponsable,
    dateValue,
    dateChangeText,
    dateError,
    hourValue,
    hourChangeText,
    hourError,
    firstSquadIsChecked,
    firstSquadOnClick,
    secondSquadIsChecked,
    secondSquadOnClick,
    confirmAttendanceError,
    confirmAttendanceDaysBeforeValue,
    confirmAttendanceDaysBeforeChangeText,
    confirmAttendanceDaysBeforeError,
    confirmAttendanceIsChecked,
    confirmAttendanceOnClick,
    notConfirmAttendanceIsChecked,
    notConfirmAttendanceOnClick,
    onSubmit,
    onCancel,
  }) => {
    return (
      <PageWrapper theme={theme} isStatusBarLight isScrollForm>
        <View style={styles(theme).viewRow}>
          <View>
            <Avatar theme={theme} source={sourceCrest} small />
          </View>
          <View style={styles(theme).padding}>
            <Texts.Title theme={theme} small>{teamName}</Texts.Title>
            <Texts.Body theme={theme} style={styles(theme).name}>{teamResponsable}</Texts.Body>
          </View>
        </View>
        <View style={[styles(theme).viewRow, styles(theme).marginBottom]}>
          <View
            style={styles(theme).input}
          >
            <Input theme={theme} IconSVG={iconDate}
              label='Data'
              value={dateValue}
              onChangeText={dateChangeText}
              maxLength={10}
              error={dateError}
            />
          </View>
          <View
            style={[styles(theme).input, styles(theme).marginLeft]}
          >
            <Input theme={theme} IconSVG={iconHour}
              label='Hora'
              keyboardType='numeric'
              maxLength={5}
              value={hourValue}
              onChangeText={hourChangeText}
              error={hourError}
            />
          </View>
        </View>
        <Texts.Title theme={theme} small style={styles(theme).marginTop}>Equipe</Texts.Title>
        <View style={[styles(theme).viewRow]}>
          <CheckBox
            theme={theme}
            label='Primeiro quadro'
            isChecked={firstSquadIsChecked}
            onClick={firstSquadOnClick}
            isRadioButton
          />
          <CheckBox
            theme={theme}
            isRadioButton
            label='Segundo quadro'
            style={styles(theme).marginLeft}
            isChecked={secondSquadIsChecked}
            onClick={secondSquadOnClick}
          />
        </View>
        <Texts.Title theme={theme} small style={styles(theme).marginTop}>Confirmar presença</Texts.Title>
        <View style={[confirmAttendanceError ?
          styles(theme).attendanceError : {}]}>
          <Input theme={theme} IconSVG={iconAddAlert}
            label='Dias antes'
            keyboardType='numeric'
            maxLength={2}
            error={confirmAttendanceDaysBeforeError}
            value={confirmAttendanceDaysBeforeValue}
            onChangeText={confirmAttendanceDaysBeforeChangeText}
          />
          <View style={[styles(theme).viewRow, styles(theme).marginTop]}>
            <CheckBox
              theme={theme}
              label='Imediatamente'
              isChecked={confirmAttendanceIsChecked}
              onClick={confirmAttendanceOnClick}
            />
            <CheckBox
              theme={theme}
              label='Não confirmar'
              style={styles(theme).marginLeft}
              isChecked={notConfirmAttendanceIsChecked}
              onClick={notConfirmAttendanceOnClick}
            />
          </View>
        </View>
        {confirmAttendanceError && (
          <Texts.Error theme={theme}>Escolha uma das opções</Texts.Error>
        )}
        <Buttons.Base
          theme={theme}
          label='Defenir local do jogo'
          style={{ marginTop: theme.metrics.large }}
          onPress={onSubmit}
        />
        <Buttons.Link
          theme={theme}
          label='Agora não'
          onPress={onCancel}
        />
      </PageWrapper>
    );
  }
