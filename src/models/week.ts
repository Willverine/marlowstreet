import { GraphQLResult } from '@aws-amplify/api';
import { GetWeekQuery, GetWeekQueryVariables, ListWeeksQuery } from '../API';
import { Game, Season, Week } from '.';
import { getWeek, listWeeks } from '../graphql/queries';
import { callGraphQL } from '../graphql/callGraphQl';

export function mapListWeeksQuery(listWeeksQuery: GraphQLResult<ListWeeksQuery>): Week[] {
  return listWeeksQuery.data?.listWeeks?.items?.map((weekResult) => ({
    id: weekResult?.id,
    createdAt: weekResult?.createdAt,
    updatedAt: weekResult?.updatedAt,
    day: weekResult?.day,
    seasonID: weekResult?.seasonID,
  } as Week)) || [];
}

export function mapGetWeekQuery(getWeekQuery: GraphQLResult<GetWeekQuery>): Week | undefined {
  const weekResult = getWeekQuery.data?.getWeek;

  return {
    id: weekResult?.id || '',
    createdAt: weekResult?.createdAt,
    updatedAt: weekResult?.updatedAt,
    day: weekResult?.day || '',
    season: weekResult?.season as Season || {} as Season,
    games: weekResult?.games?.items as Game[] || [],
  };
}

// eslint-disable-next-line max-len
export const fetchWeeks = () => callGraphQL<ListWeeksQuery>(listWeeks).then((weeksQuery) => mapListWeeksQuery(weeksQuery));

export const fetchWeek = (id: string) => callGraphQL<GetWeekQuery>(getWeek, {
  variables: {
    id,
  } as GetWeekQueryVariables,
}).then((weekQuery) => mapGetWeekQuery(weekQuery));
