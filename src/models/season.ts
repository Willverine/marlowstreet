import { GraphQLResult } from '@aws-amplify/api';
import { ListSeasonsQuery } from '../API';
import { Season } from '.';

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
