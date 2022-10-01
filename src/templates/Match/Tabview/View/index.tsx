import { ActionSheetSquad, Buttons, PageWrapper, TabBarView, Texts } from '@soccerapp/ui';
import React from 'react';
import { View } from 'react-native';
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
actionSheetDismiss,
actionSheetVisible,
actionSheetIsCheckedFirstSquad,
actionSheetOnClickFirstSquad,
actionSheetIsCheckedSecondSquad,
actionSheetOnClickSecondSquad,
actionSheetOnPress,
}) => {
  return (
    <PageWrapper theme={theme}
    loading={isLoading}
    ButtonFixed={<Buttons.Fixed 
      theme={theme}
      onPress={navigateToCreate}
      IconSVG={IconPlus}
    />}
    actionSheet={
      <ActionSheetSquad theme={theme} 
        dismiss={actionSheetDismiss}
        visible={actionSheetVisible}
        isCheckedFirstSquad={actionSheetIsCheckedFirstSquad}
        isCheckedSecondSquad={actionSheetIsCheckedSecondSquad}
        onClickFirstSquad={actionSheetOnClickFirstSquad}
        onClickSecondSquad={actionSheetOnClickSecondSquad}
        onPress={actionSheetOnPress}
      />
    }
    Header={<Buttons.Link theme={theme}
    onPress={() => {}}
    IconSVG={IconArrowDropDown}
    IconColor={theme.colors.textElements}
    styleLabel={
      {
        fontSize: theme.fontSize.large,
        color: theme.colors.textElements,
    }}
    style={
      {
        // flex: 1,
        justifyContent: 'center',
      }}
    label='Primeiro quadro'
  />}
  >
    {/* <View style={{height: 80, backgroundColor: theme.colors.elements, justifyContent: 'flex-end', alignItems: 'center'}}>
    <Buttons.Link theme={theme}
              onPress={() => {}}
              IconSVG={IconArrowDropDown}
              IconColor={theme.colors.textElements}
              styleLabel={
                {
                  fontSize: theme.fontSize.large,
                  color: theme.colors.textElements,
              }}
              style={
                {
                  flex: 1,
                  justifyContent: 'center',
                }}
              label='Primeiro quadro'
            />
    </View> */}
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