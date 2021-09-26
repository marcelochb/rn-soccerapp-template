import { Buttons, CheckBox, Input, PageWrapper, Texts } from '@soccerapp/ui';
import React from 'react';
import { View } from 'react-native';
import { ModelOfMatchCreateDateTimeTemplate } from '../Models';
import { styles } from './styles';
import { Avatar } from '@soccerapp/ui';
import iconDate from '@src/assets/Icons/iconDate.svg';
import iconHour from '@src/assets/Icons/iconHour.svg';
import iconAddAlert from '@src/assets/Icons/iconAddAlert.svg';

export const MatchCreateDateTimeTemplate
  : React.FC<ModelOfMatchCreateDateTimeTemplate> = ({
    theme,
    sourceCrest,
  }) => {
    return (
      <PageWrapper theme={theme} isStatusBarLight isScrollForm>
        <View style={styles(theme).viewRow}>
          <View>
            <Avatar theme={theme} source={sourceCrest} small />
          </View>
          <View style={styles(theme).padding}>
            <Texts.Title theme={theme} small>{getController.team.name}</Texts.Title>
            <Texts.Body theme={theme} style={styles(theme).name}>{`${getController.team.responsable} - ${getController.team.phone}`}</Texts.Body>
          </View>
        </View>
        <View style={[styles(theme).viewRow, styles(theme).marginBottom]}>
          <View
            style={styles(theme).input}
          >
            <Input theme={theme} IconSVG={iconDate}
              label='Data'
              value={getController.matchDate}
              onChangeText={handleController.onDateChange}
              maxLength={10}
              error={getController.touched.matchDate && getController.errors.matchDate}
            />
          </View>
          <View
            style={[styles(theme).input, styles(theme).marginLeft]}
          >
            <Input theme={theme} IconSVG={iconHour}
              label='Hora'
              keyboardType='numeric'
              maxLength={5}
              value={getController.matchHour}
              onChangeText={handleController.onHourChange}
              error={getController.touched.matchHour && getController.errors.matchHour}
            />
          </View>
        </View>
        <Texts.Title theme={theme} small style={styles(theme).marginTop}>Equipe</Texts.Title>
        <View style={[styles(theme).viewRow]}>
          <CheckBox
            theme={theme}
            label='Primeiro quadro'
            isChecked={getController.squad.includes('first')}
            onClick={() => handleController.toggleSquad('first')}
            isRadioButton
          />
          <CheckBox
            theme={theme}
            isRadioButton
            label='Segundo quadro'
            style={styles(theme).marginLeft}
            isChecked={getController.squad.includes('second')}
            onClick={() => handleController.toggleSquad('second')}
          />
        </View>
        <Texts.Title theme={theme} small style={styles(theme).marginTop}>Confirmar presença</Texts.Title>
        <View style={[getController.confirmAttendanceError ?
          styles(theme).attendanceError : {}]}>
          <Input theme={theme} IconSVG={iconAddAlert}
            label='Dias antes'
            keyboardType='numeric'
            maxLength={2}
            error={getController.touched.confirmAttendanceDaysBefore && getController.errors.confirmAttendanceDaysBefore}
            value={getController.confirmAttendanceDaysBefore}
            onChangeText={handleController.onConfirmAttendanceDaysBeforeChange}
          />
          <View style={[styles(theme).viewRow, styles(theme).marginTop]}>
            <CheckBox
              theme={theme}
              label='Imediatamente'
              isChecked={getController.confirmAttendance.includes('now')}
              onClick={() => handleController.toggleConfirmAttendance('now')}
            />
            <CheckBox
              theme={theme}
              label='Não confirmar'
              style={styles(theme).marginLeft}
              isChecked={getController.confirmAttendance.includes('disable')}
              onClick={() => handleController.toggleConfirmAttendance('disable')}
            />
          </View>
        </View>
        {getController.confirmAttendanceError && (
          <Texts.Error theme={theme}>Escolha uma das opções</Texts.Error>
        )}
        <Buttons.Base
          theme={theme}
          label='Defenir local do jogo'
          style={{ marginTop: theme.metrics.large }}
          onPress={handleController.onSubmit}
        />
        <Buttons.Link
          theme={theme}
          label='Agora não'
          onPress={() => { }}
        />
      </PageWrapper>
    );
  }
