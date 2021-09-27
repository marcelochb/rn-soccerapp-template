import React from 'react';
import { StyleSheet } from 'react-native';
import { List, PageWrapper } from '@soccerapp/ui';
import { ModelOfTemplateNotificationList } from '../Models';


export const TemplateNotificationList: React.FC<ModelOfTemplateNotificationList> = ({
  theme,
  isLoading,
  data,
  item,
}) => {
  return (
    <PageWrapper theme={theme} noHorizontalPadding
      loading={isLoading}
    >
      <List
        theme={theme}
        style={styles.list}
        data={data}
        item={item}
      />
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
