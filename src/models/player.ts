import { GraphQLResult } from '@aws-amplify/api';
import {
  CreatePlayerMutation,
  CreatePlayerMutationVariables,
  GetPlayerQuery,
  GetPlayerQueryVariables,
  ListPlayersQuery,
} from '../API';
import { Player, Team } from '.';
import { callGraphQL } from '../graphql/callGraphQl';
import { getPlayer } from '../graphql/queries';
import { createPlayer } from '../graphql/mutations';

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
    // this is a problem i should fix -- fetchPlayer was returning empty player objects which is bad
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
    team: player.team as Team,
  };
}

export async function fetchPlayer(playerId: string) {
  const apiData = await callGraphQL<GetPlayerQuery>(getPlayer, {
    variables: {
      id: playerId,
    } as GetPlayerQueryVariables,
  });

  if (!apiData?.data?.getPlayer) return undefined;

  return mapGetPlayerQuery(apiData);
}

// eslint-disable-next-line max-len
export const createPlayerMutation = async (player: Player, teamId?: string) => callGraphQL<CreatePlayerMutation>(createPlayer, {
  variables: {
    input: {
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      email: player.email,
      mobileNumber: player.mobileNumber,
      dob: new Date(player.dob).toISOString(),
      teamID: teamId,
    },
  } as CreatePlayerMutationVariables,
});
