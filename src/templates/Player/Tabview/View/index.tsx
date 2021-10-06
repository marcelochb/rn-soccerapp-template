import { TabBarView } from '@soccerapp/ui';
import React from 'react';
import { TemplatePlayerList } from '../../List/View';
import { ModelOfTemplatePlayerTabview } from '../Models';

export const TemplatePlayerTabView: React.FC<ModelOfTemplatePlayerTabview> = ({
  theme,
  firstSquadisLoading,
  firstSquadcoachingStaffData,
  firstSquadcoachingStaffNavigateTo,
  firstSquadgoalKeeperData,
  firstSquadgoalKeeperNavigateTo,
  firstSquadcenterBackData,
  firstSquadcenterBackNavigateTo,
  firstSquadleftAndRightBackData,
  firstSquadleftAndRightBackNavigateTo,
  firstSquadmidifieldDefenseData,
  firstSquadmidifieldDefenseNavigateTo,
  firstSquadmidifieldAttackData,
  firstSquadmidifieldAttackNavigateTo,
  firstSquadforwardData,
  firstSquadforwardNavigateTo,
  firstSquadBadge,
  secondSquadisLoading,
  secondSquadcoachingStaffData,
  secondSquadcoachingStaffNavigateTo,
  secondSquadgoalKeeperData,
  secondSquadgoalKeeperNavigateTo,
  secondSquadcenterBackData,
  secondSquadcenterBackNavigateTo,
  secondSquadleftAndRightBackData,
  secondSquadleftAndRightBackNavigateTo,
  secondSquadmidifieldDefenseData,
  secondSquadmidifieldDefenseNavigateTo,
  secondSquadmidifieldAttackData,
  secondSquadmidifieldAttackNavigateTo,
  secondSquadforwardData,
  secondSquadforwardNavigateTo,
  secondSquadBadge,
}) => {
  return (
    <TabBarView theme={theme}
      FirstTab={() => <TemplatePlayerList theme={theme}
        isLoading={firstSquadisLoading}
        coachingStaffData={firstSquadcoachingStaffData}
        coachingStaffNavigateTo={firstSquadcoachingStaffNavigateTo}
        goalKeeperData={firstSquadgoalKeeperData}
        goalKeeperNavigateTo={firstSquadgoalKeeperNavigateTo}
        centerBackData={firstSquadcenterBackData}
        centerBackNavigateTo={firstSquadcenterBackNavigateTo}
        leftAndRightBackData={firstSquadleftAndRightBackData}
        leftAndRightBackNavigateTo={firstSquadleftAndRightBackNavigateTo}
        midifieldDefenseData={firstSquadmidifieldDefenseData}
        midifieldDefenseNavigateTo={firstSquadmidifieldDefenseNavigateTo}
        midifieldAttackData={firstSquadmidifieldAttackData}
        midifieldAttackNavigateTo={firstSquadmidifieldAttackNavigateTo}
        forwardData={firstSquadforwardData}
        forwardNavigateTo={firstSquadforwardNavigateTo}
      />}
      FirstTabBadge={firstSquadBadge}
      SecondTab={() => <TemplatePlayerList theme={theme}
        isLoading={secondSquadisLoading}
        coachingStaffData={secondSquadcoachingStaffData}
        coachingStaffNavigateTo={secondSquadcoachingStaffNavigateTo}
        goalKeeperData={secondSquadgoalKeeperData}
        goalKeeperNavigateTo={secondSquadgoalKeeperNavigateTo}
        centerBackData={secondSquadcenterBackData}
        centerBackNavigateTo={secondSquadcenterBackNavigateTo}
        leftAndRightBackData={secondSquadleftAndRightBackData}
        leftAndRightBackNavigateTo={secondSquadleftAndRightBackNavigateTo}
        midifieldDefenseData={secondSquadmidifieldDefenseData}
        midifieldDefenseNavigateTo={secondSquadmidifieldDefenseNavigateTo}
        midifieldAttackData={secondSquadmidifieldAttackData}
        midifieldAttackNavigateTo={secondSquadmidifieldAttackNavigateTo}
        forwardData={secondSquadforwardData}
        forwardNavigateTo={secondSquadforwardNavigateTo}
      />}
      SecondTabBadge={secondSquadBadge}
    />

  );
}
