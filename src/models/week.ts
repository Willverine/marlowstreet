import { GraphQLResult } from '@aws-amplify/api';
import { GetWeekQuery, ListWeeksQuery } from '../API';
import { Game, Season, Week } from '.';

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

  if (!weekResult) { return {} as Week; }

  return {
    id: weekResult?.id,
    createdAt: weekResult?.createdAt,
    updatedAt: weekResult?.updatedAt,
    day: weekResult?.day,
    season: weekResult?.season as Season || {} as Season,
    games: weekResult.games?.items as Game[] || [],
  };
}
