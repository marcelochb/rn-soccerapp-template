import { TabBarView } from '@soccerapp/ui';
import React from 'react';
import { TemplatePlayerList } from '../../List/View';
import { ModelOfTemplatePlayerTabview } from '../Models';

export const TemplatePlayerTabView: React.FC<ModelOfTemplatePlayerTabview> = ({
  theme,
  navigateToDetail,
  firstSquadisLoading,
  firstSquadcoachingStaffData,
  firstSquadgoalKeeperData,
  firstSquadcenterBackData,
  firstSquadleftAndRightBackData,
  firstSquadmidifieldDefenseData,
  firstSquadmidifieldAttackData,
  firstSquadforwardData,
  firstSquadBadge,
  secondSquadisLoading,
  secondSquadcoachingStaffData,
  secondSquadgoalKeeperData,
  secondSquadcenterBackData,
  secondSquadleftAndRightBackData,
  secondSquadmidifieldDefenseData,
  secondSquadmidifieldAttackData,
  secondSquadforwardData,
  secondSquadBadge,
}) => {
  return (
    <TabBarView theme={theme}
      FirstTab={() => <TemplatePlayerList theme={theme}
        isLoading={firstSquadisLoading}
        navigateToDetail={navigateToDetail}
        coachingStaffData={firstSquadcoachingStaffData}
        goalKeeperData={firstSquadgoalKeeperData}
        centerBackData={firstSquadcenterBackData}
        leftAndRightBackData={firstSquadleftAndRightBackData}
        midifieldDefenseData={firstSquadmidifieldDefenseData}
        midifieldAttackData={firstSquadmidifieldAttackData}
        forwardData={firstSquadforwardData}
      />}
      FirstTabBadge={firstSquadBadge}
      SecondTab={() => <TemplatePlayerList theme={theme}
        isLoading={secondSquadisLoading}
        navigateToDetail={navigateToDetail}
        coachingStaffData={secondSquadcoachingStaffData}
        goalKeeperData={secondSquadgoalKeeperData}
        centerBackData={secondSquadcenterBackData}
        leftAndRightBackData={secondSquadleftAndRightBackData}
        midifieldDefenseData={secondSquadmidifieldDefenseData}
        midifieldAttackData={secondSquadmidifieldAttackData}
        forwardData={secondSquadforwardData}
      />}
      SecondTabBadge={secondSquadBadge}
    />

  );
}
