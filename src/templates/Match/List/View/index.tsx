import { Buttons, HeaderGroupedList, ListGrouped, ListItemMatch, PageWrapper, Texts } from '@soccerapp/ui';
import React from 'react';
import { ModelOfTemplateMatchList } from '../Models';

const TemplateMatchList: React.FC<ModelOfTemplateMatchList> = ({
  theme,
  isLoading,
  data,
  teamName,
  teamCrest,
  navigateToView,
  navigateToCreate,
  IconPlus,
}) => {
  return (
    <PageWrapper theme={theme} isScrollList
      loading={isLoading}
      ButtonFixed={<Buttons.Fixed 
        theme={theme}
        onPress={navigateToCreate}
        IconSVG={IconPlus}
      />}
    >
      <ListGrouped 
        theme={theme}
        data={data}
        header={({section: {yearMonth}}) => <HeaderGroupedList themme={theme} yearMonth={yearMonth} />}
        item={({item}) => <ListItemMatch 
          matchHour={item.matchHour}
          monthDay={item.monthDay}
          theme={theme}
          teamName={teamName}
          teamCrest={teamCrest}
          opponentTeamName={item.teamName}
          opponentTeamCrest={item.teamCrest}
          onPressed={() => navigateToView(item)}
          weekDay={item.weekDay}
        />}
      />

    </PageWrapper>
  );
}
export default React.memo(TemplateMatchList);