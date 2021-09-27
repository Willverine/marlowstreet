import { GraphQLResult } from '@aws-amplify/api';
import { GetSeasonQuery, ListSeasonsQuery } from '../API';
import { Season, Week } from '.';
import { listSeasons } from '../graphql/queries';
import { callGraphQL } from '../graphql/callGraphQl';

export function mapListSeasonsQuery(listSeasonsQuery: GraphQLResult<ListSeasonsQuery>): Season[] {
  return listSeasonsQuery.data?.listSeasons?.items?.map((seasonResult) => ({
    id: seasonResult?.id,
    name: seasonResult?.name,
    startDate: seasonResult?.startDate,
    endDate: seasonResult?.endDate,
    createdAt: seasonResult?.createdAt,
    updatedAt: seasonResult?.updatedAt,
  } as Season)) || [];
}

// eslint-disable-next-line max-len
export function mapGetSeasonQuery(getSeasonQuery: GraphQLResult<GetSeasonQuery>): Season | undefined {
  const season = getSeasonQuery.data?.getSeason;

  if (!season) {
    return {} as Season;
  }

  return {
    id: season.id,
    name: season.name,
    startDate: season.startDate,
    endDate: season.endDate,
    weeks: season.weeks?.items as Week[] || [],
  };
}

// eslint-disable-next-line max-len
export const fetchSeasons = () => callGraphQL<ListSeasonsQuery>(listSeasons).then((seasonQuery) => mapListSeasonsQuery(seasonQuery));
