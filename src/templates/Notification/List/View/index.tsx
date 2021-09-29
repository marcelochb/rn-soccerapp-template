import React from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItemNotification, PageWrapper } from '@soccerapp/ui';
import { ModelOfTemplateNotificationList } from '../Models';


export const TemplateNotificationList: React.FC<ModelOfTemplateNotificationList> = ({
  theme,
  isLoading,
  data,
  navigateTo
}) => {
  return (
    <PageWrapper theme={theme} noHorizontalPadding
      loading={isLoading}
    >
      <List
        theme={theme}
        style={styles.list}
        data={data}
        item={({ item }) => <ListItemNotification theme={theme}
          createdDistance={item.created_distance}
          lastName={item.last_name}
          name={item.name}
          nickName={item.nickname}
          playerPosition={item.player?.position_name}
          onPressed={() => navigateTo(item)}
        />}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
