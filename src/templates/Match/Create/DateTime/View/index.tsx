import { Buttons, RadioButton, Input, ListItemTeam, PageWrapper, Texts } from '@soccerapp/ui';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { ModelOfTemplateMatchCreateDateTime } from '../Models';
import { styles } from './styles';
import { Avatar } from '@soccerapp/ui';
import iconDate from '@src/assetstemplate/Icons/iconDate.svg';
import iconHour from '@src/assetstemplate/Icons/iconHour.svg';
import iconAddAlert from '@src/assetstemplate/Icons/iconAddAlert.svg';
import iconRoad from '@src/assetstemplate/Icons/iconRoad.svg';
import iconPlace from '@src/assetstemplate/Icons/iconPlace.svg';
import iconHouse from '@src/assetstemplate/Icons/iconHouse.svg';
import iconDirections from '@src/assetstemplate/Icons/iconDirections.svg';
import iconDescription from '@src/assetstemplate/Icons/iconDescription.svg';
import iconSoccerField from '@src/assetstemplate/Icons/iconSoccerField.svg';

export const TemplateMatchCreateDateTime
  : React.FC<ModelOfTemplateMatchCreateDateTime> = ({
    theme,
    sourceCrest,
    teamName,
    teamResponsable,
    teamPhone,
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
    soccerFieldNameValue,
    soccerFieldNameChangeText,
    soccerFieldNameError,
    zipCodeValue,
    zipCodeChangeText,
    streetValue,
    streetChangeText,
    addressNumberValue,
    addressNumberChangeText,
    neighborhoodValue,
    neighborhoodChangeText,
    startAnimateInput,
    complementValue,
    complementChangeText,
    cityValue,
    cityChangeText,
    ufValue,
    ufChangeText,
  
    onSubmit,
    onCancel,
  }) => {
    return (
      <PageWrapper theme={theme} isStatusBarLight isScrollForm>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Texts.Title theme={theme} >Oponente</Texts.Title>
        <ListItemTeam theme={theme}
          avatarSource={sourceCrest}
          editOnPressed={onCancel}
          labelEdit='Alterar'
          isSelectable={false}
          name={teamName}
          phone={teamPhone}
          responsable={teamResponsable}
          selectOnPressed={() => {}}
          style={styles(theme).viewFormGroupOpponent}
        />
        <Texts.Title theme={theme} style={[styles(theme).marginTop, styles(theme).marginBottom]}>Nosso time</Texts.Title>
        <View style={styles(theme).viewFormGroupOurTeam}>
          <RadioButton
            theme={theme}
            label='Primeiro quadro'
            isChecked={firstSquadIsChecked}
            onClick={firstSquadOnClick}
          />
          <RadioButton
            theme={theme}
            label='Segundo quadro'
            style={styles(theme).marginLeft}
            isChecked={secondSquadIsChecked}
            onClick={secondSquadOnClick}
          />
        </View>
        <Texts.Title theme={theme} >Quando?</Texts.Title>
        <View style={[styles(theme).viewFormGroupWhen]}>
          <View style={[styles(theme).input]}>
            <Input theme={theme} IconSVG={iconDate}
              label='Data'
              value={dateValue}
              onChangeText={dateChangeText}
              maxLength={10}
              error={dateError}
            />
          </View>
          <View style={[styles(theme).input, styles(theme).marginLeft]}>
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
        <Texts.Title theme={theme} style={styles(theme).marginTop}>Confirmar presença?</Texts.Title>
        <View style={[confirmAttendanceError ?
          styles(theme).attendanceError : {},styles(theme).viewFormGroupAttendance]}>
          <Input theme={theme} IconSVG={iconAddAlert}
            label='Dias antes'
            keyboardType='numeric'
            maxLength={2}
            error={confirmAttendanceDaysBeforeError}
            value={confirmAttendanceDaysBeforeValue}
            onChangeText={confirmAttendanceDaysBeforeChangeText}
          />
          <View style={[styles(theme).viewRow, styles(theme).marginTop]}>
            <RadioButton
              theme={theme}
              label='Imediatamente'
              isChecked={confirmAttendanceIsChecked}
              onClick={confirmAttendanceOnClick}
            />
            <RadioButton
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
          <Texts.Title theme={theme} style={styles(theme).marginTop}>Local do jogo</Texts.Title>
        <View style={styles(theme).viewFormGroupOpponent}>
        <Input theme={theme} IconSVG={iconSoccerField}
        label='Nome do campo'
        value={soccerFieldNameValue}
        onChangeText={soccerFieldNameChangeText}
        error={soccerFieldNameError}
      />
      <Input theme={theme} IconSVG={iconPlace}
        style={styles(theme).marginTop}
        label='CEP'
        value={zipCodeValue}
        maxLength={9}
        onChangeText={zipCodeChangeText}
        keyboardType='numeric'
      />
      <Input theme={theme} IconSVG={iconRoad}
        style={styles(theme).marginTop}
        label='Rua'
        value={streetValue}
        onChangeText={streetChangeText}
        startAnimate={startAnimateInput}
      />
      <Input theme={theme} IconSVG={iconHouse}
        style={styles(theme).marginTop}
        label='Numero'
        keyboardType='numeric'
        value={addressNumberValue}
        onChangeText={addressNumberChangeText}
      />
      <Input theme={theme} IconSVG={iconDirections}
        style={styles(theme).marginTop}
        label='Bairro'
        value={neighborhoodValue}
        onChangeText={neighborhoodChangeText}
        startAnimate={startAnimateInput}
      />
      <Input theme={theme} IconSVG={iconDescription}
        style={styles(theme).marginTop}
        label='Complemento'
        value={complementValue}
        onChangeText={complementChangeText}
      />
      <View style={[styles(theme).viewRow, styles(theme).marginTop]}>
        <Input theme={theme} IconSVG={iconDescription}
          style={styles(theme).city}
          label='Cidade'
          value={cityValue}
          onChangeText={cityChangeText}
          startAnimate={startAnimateInput}
        />
        <Input theme={theme} IconSVG={iconDescription}
          style={[styles(theme).zipCode, styles(theme).marginLeft]}
          label='Estado'
          value={ufValue}
          onChangeText={ufChangeText}
          startAnimate={startAnimateInput}
        />
      </View>          

        </View>
        <Buttons.Base
          theme={theme}
          label='Salvar'
          style={{ marginTop: theme.metrics.large }}
          onPress={onSubmit}
        />
        <Buttons.Link
          theme={theme}
          label='Agora não'
          onPress={onCancel}
        />
        </ScrollView>

      </PageWrapper>
    );
  }
