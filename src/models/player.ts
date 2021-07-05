import { GetPlayerQuery, ListPlayersQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Player } from ".";

export function mapListPlayersQuery(listPlayersQuery: GraphQLResult<ListPlayersQuery>): Player[] {
  return listPlayersQuery.data?.listPlayers?.items?.map(Player => ({
    id: Player?.id,
    firstName: Player?.firstName,
    lastName: Player?.lastName,
    dob: Player?.dob,
    mobileNumber: Player?.mobileNumber,
    email: Player?.email,
    createdAt: Player?.createdAt,
    updatedAt: Player?.updatedAt,
  } as Player)) || []
}


export function mapGetPlayerQuery(getPlayerQuery: GraphQLResult<GetPlayerQuery>): Player | undefined {
  const player = getPlayerQuery.data?.getPlayer;

  if (!player) {
    return;
  }

  return {
    id: player.id,
    firstName: player.firstName,
    lastName: player.lastName,
    dob: player.dob,
    mobileNumber: player.mobileNumber,
    email: player.email,
    createdAt: player.createdAt,
    updatedAt: player.updatedAt,
  };
}
