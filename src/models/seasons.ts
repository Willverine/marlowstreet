import { ListSeasonsQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";

export interface Season {
  id?: string;
  name?: string;
  startDate?: string;
  endDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export function mapListSeasonsQuery(listSeasonsQuery: GraphQLResult<ListSeasonsQuery>): Season[] {
  return listSeasonsQuery.data?.listSeasons?.items?.map(Season => ({
    id: Season?.id,
    name: Season?.name,
    startDate: Season?.startDate,
    endDate: Season?.endDate,
    createdAt: Season?.createdAt,
    updatedAt: Season?.updatedAt,
  } as Season)) || []
}
