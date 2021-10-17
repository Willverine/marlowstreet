/* eslint-disable max-len */
import { GraphQLResult } from '@aws-amplify/api';
import {
  CreateTeamMutation, CreateTeamMutationVariables, GetTeamQuery, GetTeamQueryVariables, ListTeamsQuery,
} from '../API';
import { Player, Team } from '.';
import { callGraphQL } from '../graphql/callGraphQl';
import { createTeam } from '../graphql/mutations';
import { getTeam, listTeams } from '../graphql/queries';

export function mapListTeamsQuery(listTeamsQuery: GraphQLResult<ListTeamsQuery>): Team[] {
  return listTeamsQuery.data?.listTeams?.items?.map((teamResult) => ({
    id: teamResult?.id,
    colour: teamResult?.colour,
    name: teamResult?.name,
    players: [],
    createdAt: teamResult?.createdAt,
    updatedAt: teamResult?.updatedAt,
  } as Team)) || [];
}

export function mapGetTeamQuery(getTeamsQuery: GraphQLResult<GetTeamQuery>): Team | undefined {
  const team = getTeamsQuery.data?.getTeam;

  if (!team) {
    return {} as Team;
  }

  return {
    id: team.id,
    captain: team.captain as Player,
    colour: team.colour,
    name: team.name,
    players: team.players?.items as Player[] || [],
    createdAt: team.createdAt,
    updatedAt: team.updatedAt,
  };
}

export const fetchTeams = () => callGraphQL<ListTeamsQuery>(listTeams).then((teamsQuery) => mapListTeamsQuery(teamsQuery));

export const fetchTeam = (id: string) => callGraphQL<GetTeamQuery>(getTeam, {
  variables: {
    id,
  } as GetTeamQueryVariables,
}).then((teamQuery) => mapGetTeamQuery(teamQuery));

export const createTeamMutation = (team: Team) => callGraphQL<CreateTeamMutation>(createTeam, {
  variables: {
    input: {
      colour: team.colour,
      name: team.name,
      teamCaptainId: team.captain?.id,
    },
  } as CreateTeamMutationVariables,
});
