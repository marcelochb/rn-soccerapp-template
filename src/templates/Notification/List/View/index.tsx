import React from 'react';
import { List, ListItemNotification } from '@src/components/Molecules';
import { useNotificationListController } from '../Controller';
import { StyleSheet } from 'react-native';
import { ThemeBase } from '@src/theme';
import { PageWrapper } from '@soccerapp/ui';


export const NotificationList: React.FC = () => {
  const { getController } = useNotificationListController();
  return (
    <PageWrapper theme={ThemeBase} noHorizontalPadding
      loading={getController.loading}
    >
      <List
        style={styles.list}
        data={getController.notifications}
        item={({ item }) => <ListItemNotification item={item} />}
      />

    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
