import { GraphQLResult } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';
import {
  CreatePlayerMutation,
  CreatePlayerMutationVariables,
  GetPlayerQuery,
  GetPlayerQueryVariables,
  ListPlayersQuery,
  UpdatePlayerMutation,
  UpdatePlayerMutationVariables,
} from '../API';
import { Player, Team } from '.';
import { callGraphQL } from '../graphql/callGraphQl';
import { getPlayer } from '../graphql/queries';
import { createPlayer, updatePlayer } from '../graphql/mutations';

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
    return undefined;
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

export const fetchPlayer = (playerId: string) => callGraphQL<GetPlayerQuery>(getPlayer, {
  variables: {
    id: playerId,
  } as GetPlayerQueryVariables,
}).then((res) => mapGetPlayerQuery(res));

// eslint-disable-next-line max-len
export const createPlayerMutation = (player: Player, teamId?: string) => callGraphQL<CreatePlayerMutation>(createPlayer, {
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

// eslint-disable-next-line max-len
export const updatePlayerMutation = (player: Player, teamId?: string) => callGraphQL<UpdatePlayerMutation>(updatePlayer, {
  variables: {
    input: {
      id: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      email: player.email,
      mobileNumber: player.mobileNumber,
      dob: new Date(player.dob).toISOString(),
      teamID: teamId || player.team?.id,
    },
  } as UpdatePlayerMutationVariables,
});

// eslint-disable-next-line max-len
export const addPlayerToTeam = (playerId: string, teamId: string) => callGraphQL<UpdatePlayerMutation>(updatePlayer, {
  variables: {
    input: {
      id: playerId,
      teamID: teamId,
    },
  } as UpdatePlayerMutationVariables,
});

// eslint-disable-next-line max-len
export const getCurrentUser = () => Auth.currentUserInfo().then((authUser: User | undefined) => authUser);

// eslint-disable-next-line max-len
export const getCurrentUserPlayer = () => getCurrentUser().then((user) => fetchPlayer(user?.username || '').then((fetchedPlayer) => fetchedPlayer));

export interface User {
  attributes: {
    birthdate: string,
    email: string,
    email_verified: boolean,
    family_name: string,
    given_name: string,
    phone_number: string,
    phone_number_verified: boolean,
    preferred_username: string,
    sub: string,
  },
  id: string,
  username: string,
}
