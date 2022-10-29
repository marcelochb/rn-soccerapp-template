import { HeaderGroupedList, ListGrouped, ListItemMatch, EmptyMatchList } from '@soccerapp/ui';
import React from 'react';
import { ModelOfTemplateMatchList } from '../Models';

const TemplateMatchList: React.FC<ModelOfTemplateMatchList> = ({
  theme,
  data,
  teamName,
  teamCrest,
  navigateToView,
}) => {
  return (
      <ListGrouped 
        theme={theme}
        emptyList={<EmptyMatchList theme={theme} />}
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
  );
}
export default React.memo(TemplateMatchList);