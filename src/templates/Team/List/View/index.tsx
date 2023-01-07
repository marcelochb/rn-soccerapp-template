import React from 'react';
import iconPlus from '@src/assetstemplate/Icons/iconPlus.svg';
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
        style={{flex: 1}}
        data={data}
        item={({ item }) => <ListItemTeam theme={theme}
          name={item.name}
          labelEdit='Editar'
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
