import { GraphQLResult } from '@aws-amplify/api';
import { GetTeamQuery, ListTeamsQuery } from '../API';
import { Player, Team } from '.';

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
