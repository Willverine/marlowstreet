import { ListPlayersQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Player } from ".";

export function mapListPlayersQuery(listPlayersQuery: GraphQLResult<ListPlayersQuery>): Player[] {
  return listPlayersQuery.data?.listPlayers?.items?.map(Player => ({
    id: Player?.id,
    createdAt: Player?.createdAt,
    updatedAt: Player?.updatedAt,
  } as Player)) || []
}
