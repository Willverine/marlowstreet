import { ListSeasonsQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Season } from ".";

//type mismatch between lsitSeasons return and getSeason
// looks like listSeasons returns a trimmed down version of Season, and getSeason returns the entire season object
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
