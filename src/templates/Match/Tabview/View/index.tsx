import { ActionSheetSquad, Buttons, PageWrapper, TabBarView, Texts } from '@soccerapp/ui';
import React, { useRef } from 'react';
import TemplateMatchList from '../../List/View';
import { ModelOfTemplateMatchTabView } from '../Models';
import IconArrowDropDown from '@src/assets/Icons/iconArrowDropDown.svg';

export const TemplateMatchTabView: React.FC<ModelOfTemplateMatchTabView> = ({
theme,
IconPlus,
navigateToView,
navigateToCreate,
firstTabTitle,
isLoading,
teamName,
teamCrest,
firstSquadData,
secondTabTitle,
secondSquadData,
actionSheetIsCheckedFirstSquad,
actionSheetOnClickFirstSquad,
actionSheetIsCheckedSecondSquad,
actionSheetOnClickSecondSquad,
actionSheetOnPress,
}) => {
  const ref = useRef<any>();
  return (
    <PageWrapper theme={theme}
    loading={isLoading}
    ButtonFixed={
    <Buttons.Fixed 
      theme={theme}
      onPress={navigateToCreate}
      IconSVG={IconPlus}
    />
  }
    actionSheet={
      <ActionSheetSquad theme={theme} 
        isCheckedFirstSquad={actionSheetIsCheckedFirstSquad}
        isCheckedSecondSquad={actionSheetIsCheckedSecondSquad}
        onClickFirstSquad={actionSheetOnClickFirstSquad}
        onClickSecondSquad={actionSheetOnClickSecondSquad}
        onPress={actionSheetOnPress}
        ref={ref}
      />
    }
    Header={
    <Buttons.Link theme={theme}
    onPress={() => ref.current?.show()}
    IconSVG={IconArrowDropDown}
    IconColor={theme.colors.textElements}
    styleLabel={
      {
        fontSize: theme.fontSize.large,
        color: theme.colors.textElements,
    }}
    style={
      {
        justifyContent: 'center',
      }}
    label='Primeiro quadro'
  />
}
  >
  <TabBarView theme={theme}
  firstTabTitle={firstTabTitle}
  FirstTab={() => <TemplateMatchList theme={theme}
  data={firstSquadData}
  teamName={teamName}
  teamCrest={teamCrest}
  navigateToView={navigateToView}
  />
}
secondTabTitle={secondTabTitle}
SecondTab={() => 
  <TemplateMatchList theme={theme}
  data={secondSquadData}
  teamName={teamName}
  teamCrest={teamCrest}
  navigateToView={navigateToView}
  />
}
/>
</PageWrapper>

  );
}