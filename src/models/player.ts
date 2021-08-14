import { GraphQLResult } from '@aws-amplify/api';
import { GetPlayerQuery, ListPlayersQuery } from '../API';
import { Player } from '.';

export function mapListPlayersQuery(listPlayersQuery: GraphQLResult<ListPlayersQuery>): Player[] {
  return listPlayersQuery.data?.listPlayers?.items?.map((playerResult) => ({
    id: playerResult?.id,
    firstName: playerResult?.firstName,
    lastName: playerResult?.lastName,
    dob: playerResult?.dob,
    mobileNumber: playerResult?.mobileNumber,
    email: playerResult?.email,
    createdAt: playerResult?.createdAt,
    updatedAt: playerResult?.updatedAt,
  } as Player)) || [];
}

// eslint-disable-next-line max-len
export function mapGetPlayerQuery(getPlayerQuery: GraphQLResult<GetPlayerQuery>): Player | undefined {
  const player = getPlayerQuery.data?.getPlayer;

  if (!player) {
    return {} as Player;
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
