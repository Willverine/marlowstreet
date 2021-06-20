import { ListGamesQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Game } from ".";

export function mapListGamesQuery(listGamesQuery: GraphQLResult<ListGamesQuery>): Game[] {
  return listGamesQuery.data?.listGames?.items?.map(Game => ({
    id: Game?.id,
    createdAt: Game?.createdAt,
    updatedAt: Game?.updatedAt,
  } as Game)) || []
}
