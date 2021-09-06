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

export const createPlayerMutation = async (playerId: string) => { // this needs more inputs ofc
  await callGraphQL<CreatePlayerMutation>(createPlayer, {
    variables: {
      input: {
        id: playerId,
        firstName: 'Will',
        lastName: 'Owens',
        email: 'asdf@asdf.com',
        mobileNumber: '0412312312',
        dob: new Date().toISOString(),
        teamID: '63b965e2-5a35-4773-94c9-76fb248c8b8a',
      },
    } as CreatePlayerMutationVariables,
  });
};
