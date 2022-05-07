import { TabBarView } from '@soccerapp/ui';
import React from 'react';
import TemplateMatchList from '../../List/View';
import { ModelOfTemplateMatchTabView } from '../Models';

export const TemplateMatchTabView: React.FC<ModelOfTemplateMatchTabView> = ({
theme,
IconPlus,
navigateToView,
navigateToCreate,
firstTabTitle,
firstSquadIsLoading,
teamName,
teamCrest,
firstSquadData,
secondTabTitle,
secondSquadIsLoading,
secondSquadData
}) => {
  return (
  <TabBarView theme={theme}
  firstTabTitle={firstTabTitle}
    FirstTab={() => <TemplateMatchList theme={theme}
        isLoading={firstSquadIsLoading}
        data={firstSquadData}
        teamName={teamName}
        teamCrest={teamCrest}
        navigateToCreate={navigateToCreate}
        navigateToView={navigateToView}
        IconPlus={IconPlus}
     />
    }
    secondTabTitle={secondTabTitle}
    SecondTab={() => 
      <TemplateMatchList theme={theme}
      isLoading={secondSquadIsLoading}
      data={secondSquadData}
      teamName={teamName}
      teamCrest={teamCrest}
      navigateToCreate={navigateToCreate}
      navigateToView={navigateToView}
      IconPlus={IconPlus}
   />
    }
  />
  );
}