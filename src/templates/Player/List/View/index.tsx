import React from 'react';
import { StyleSheet } from 'react-native';
import { List, CardPlayer, PageWrapper, Texts } from '@soccerapp/ui';
import { ModelOfTemplatePlayerList } from '../Models';
import { ModelOfTheme } from '@soccerapp/theme';

export const TemplatePlayerList: React.FC<ModelOfTemplatePlayerList> = ({
  theme,
  isLoading,
  coachingStaffData,
  coachingStaffNavigateTo,
  goalKeeperData,
  goalKeeperNavigateTo,
  centerBackData,
  centerBackNavigateTo,
  leftAndRightBackData,
  leftAndRightBackNavigateTo,
  midifieldDefenseData,
  midifieldDefenseNavigateTo,
  midifieldAttackData,
  midifieldAttackNavigateTo,
  forwardData,
  forwardNavigateTo,
}) => {
  return (
    <PageWrapper theme={theme} loading={isLoading} isScrollList>
      {coachingStaffData.length > 0 && <Texts.Title theme={theme} small>Comissão técnica</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={coachingStaffData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => coachingStaffNavigateTo(item)}
        />}
      />
      {goalKeeperData.length > 0 && <Texts.Title theme={theme} small>Goleiros</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={goalKeeperData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => goalKeeperNavigateTo(item)}
        />}
      />
      {centerBackData.length > 0 && <Texts.Title theme={theme} small>Zagueiros</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={centerBackData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => centerBackNavigateTo(item)}
        />}
      />
      {leftAndRightBackData.length > 0 && <Texts.Title theme={theme} small>Laterais</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={leftAndRightBackData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => leftAndRightBackNavigateTo(item)}
        />}
      />
      {midifieldDefenseData.length > 0 && <Texts.Title theme={theme} small>Volantes</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={midifieldDefenseData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => midifieldDefenseNavigateTo(item)}
        />}
      />
      {midifieldAttackData.length > 0 && <Texts.Title theme={theme} small>Meio campo</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={midifieldAttackData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => midifieldAttackNavigateTo(item)}
        />}
      />
      {forwardData.length > 0 && <Texts.Title theme={theme} small>Atacantes</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={forwardData}
        horizontal
        item={({ item }) => <CardPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => forwardNavigateTo(item)}
        />}
      />
    </PageWrapper>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  list: { marginTop: theme.metrics.small, marginBottom: theme.metrics.large }
})
