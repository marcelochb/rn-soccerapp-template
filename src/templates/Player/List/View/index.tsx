import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItemPlayer, PageWrapper, Texts } from '@soccerapp/ui';
import { ModelOfTemplatePlayerList } from '../Models';
import { ModelOfTheme } from '@soccerapp/theme';

const TemplatePlayerList: React.FC<ModelOfTemplatePlayerList> = ({
  theme,
  isLoading,
  coachingStaffData,
  navigateToDetail,
  goalKeeperData,
  centerBackData,
  leftAndRightBackData,
  midifieldDefenseData,
  midifieldAttackData,
  forwardData,
}) => {
  return (
    <PageWrapper theme={theme} loading={isLoading}>
      <ScrollView>
      {coachingStaffData.length > 0 && <Texts.Title theme={theme} small>Comissão técnica</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={coachingStaffData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {goalKeeperData.length > 0 && <Texts.Title theme={theme} small>Goleiros</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={goalKeeperData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {centerBackData.length > 0 && <Texts.Title theme={theme} small>Zagueiros</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={centerBackData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {leftAndRightBackData.length > 0 && <Texts.Title theme={theme} small>Laterais</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={leftAndRightBackData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {midifieldDefenseData.length > 0 && <Texts.Title theme={theme} small>Volantes</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={midifieldDefenseData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {midifieldAttackData.length > 0 && <Texts.Title theme={theme} small>Meio campo</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={midifieldAttackData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      {forwardData.length > 0 && <Texts.Title theme={theme} small>Atacantes</Texts.Title>}
      <List theme={theme}
        style={styles(theme).list}
        data={forwardData}
        horizontal
        item={({ item }) => <ListItemPlayer theme={theme}
          avatarSource={item.avatar}
          nickname={item.nickname}
          name={item.name}
          navigateTo={() => navigateToDetail(item)}
        />}
      />
      </ScrollView>
    </PageWrapper>
  );
}

const styles = (theme: ModelOfTheme) => StyleSheet.create({
  list: { marginTop: theme.metrics.small, marginBottom: theme.metrics.large }
})

export default React.memo(TemplatePlayerList)