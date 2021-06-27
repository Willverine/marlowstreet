import { ListPlayersQuery } from "../API";
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
