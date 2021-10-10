import React from 'react';
import iconPlus from '@src/assets/Icons/iconPlus.svg';
import { Buttons, List, ListItemTeam, PageWrapper } from '@soccerapp/ui';
import { ModelOfTemplateTeamList } from '../Models';


export const TemplateTeamList: React.FC<ModelOfTemplateTeamList> = ({
  theme,
  data,
  isLoading,
  editOnPressed,
  selectOnPressed,
  navigateToTeamCreate,
}) => {
  return (
    <PageWrapper theme={theme} isStatusBarLight noHorizontalPadding
      loading={isLoading}
      ButtonFixed={<Buttons.Fixed theme={theme} IconSVG={iconPlus} onPress={navigateToTeamCreate} />}
    >
      <List theme={theme}
        data={data}
        item={({ item }) => <ListItemTeam theme={theme}
          name={item.name}
          responsable={item.responsable}
          phone={item.phone}
          avatarSource={item.crest}
          editOnPressed={() => editOnPressed(item)}
          selectOnPressed={() => selectOnPressed(item)}
        />}
      />
    </PageWrapper>
  );
}
