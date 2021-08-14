import { GetTeamQuery, ListTeamsQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Player, Team } from ".";

export function mapListTeamsQuery(listTeamsQuery: GraphQLResult<ListTeamsQuery>): Team[] {
  return listTeamsQuery.data?.listTeams?.items?.map(Team => ({
    id: Team?.id,
    colour: Team?.colour,
    name: Team?.name,
    players: [],
    createdAt: Team?.createdAt,
    updatedAt: Team?.updatedAt,
  } as Team)) || []
}

export function mapGetTeamQuery(getTeamsQuery: GraphQLResult<GetTeamQuery>): Team | undefined {
  const team = getTeamsQuery.data?.getTeam;
  console.log(getTeamsQuery);
  if (!team) {
    return;
  }

  console.log(team);

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