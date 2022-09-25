import React from 'react';
import { View, Text } from 'react-native';
import { PageWrapper, Input,Avatar, Texts, Buttons } from '@soccerapp/ui';
import iconRoad from '@src/assetstemplate/Icons/iconRoad.svg';
import iconPlace from '@src/assetstemplate/Icons/iconPlace.svg';
import iconHouse from '@src/assetstemplate/Icons/iconHouse.svg';
import iconDirections from '@src/assetstemplate/Icons/iconDirections.svg';
import iconDescription from '@src/assetstemplate/Icons/iconDescription.svg';
import iconSoccerField from '@src/assetstemplate/Icons/iconSoccerField.svg';
import { ModelOfTemplateMatchCreateLocation } from '../Models';
import { styles } from './styles';

export const TemplateMatchCreateLocation: React.FC<ModelOfTemplateMatchCreateLocation> = ({
  theme,
  sourceCrest,
  name,
  responsable,
  phone,
  dateAndsquad,
  confirmAttendance,
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
  isLoading,
  onCancel,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight isScrollForm>
      <View style={styles(theme).viewRow}>
        <View>
          <Avatar theme={theme} source={sourceCrest} small />
        </View>
        <View style={[styles(theme).padding, { justifyContent: 'center' }]}>
          <Texts.Title theme={theme} small>{name}</Texts.Title>
          <Text style={styles(theme).name}>{`${responsable} - ${phone}`}</Text>
        </View>
      </View>
      <Texts.Body theme={theme} style={styles(theme).marginTop}>{dateAndsquad}</Texts.Body>
      <View style={styles(theme).viewRow}>
        <Texts.Body theme={theme}>Confirmar presença:</Texts.Body>
        <Texts.Body theme={theme} style={styles(theme).name}>{` ${confirmAttendance}`}</Texts.Body>

      </View>
      <Texts.Title theme={theme} small style={styles(theme).marginTop}>Local do jogo</Texts.Title>
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
      <Buttons.Base theme={theme}
        label='Salvar'
        style={{ marginTop: theme.metrics.large }}
        onPress={onSubmit}
        isLoading={isLoading}
      />
      <Buttons.Link theme={theme}
        label='Agora não'
        onPress={onCancel}
      />
    </PageWrapper>

  );
}
