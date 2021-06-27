import { GetTeamQuery, ListTeamsQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Team } from ".";

export function mapListTeamsQuery(listTeamsQuery: GraphQLResult<ListTeamsQuery>): Team[] {
  return listTeamsQuery.data?.listTeams?.items?.map(Team => ({
    id: Team?.id,
    colour: Team?.colour,
    name: Team?.name,
    players: Team?.players,
    createdAt: Team?.createdAt,
    updatedAt: Team?.updatedAt,
  } as Team)) || []
}

export function mapGetTeamQuery(getTeamsQuery: GraphQLResult<GetTeamQuery>): Team | undefined {
  const team = getTeamsQuery.data?.getTeam;

  if (!team) {
    return;
  }

  return {
    id: team.id,
    captain: team.captain || undefined,
    colour: team.colour,
    name: team.name,
    players: team.players,
    createdAt: team.createdAt,
    updatedAt: team.updatedAt,
  };
}