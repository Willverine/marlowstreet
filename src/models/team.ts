import { ListTeamsQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Team } from ".";

export function mapListTeamsQuery(listTeamsQuery: GraphQLResult<ListTeamsQuery>): Team[] {
  return listTeamsQuery.data?.listTeams?.items?.map(Team => ({
    id: Team?.id,
    createdAt: Team?.createdAt,
    updatedAt: Team?.updatedAt,
  } as Team)) || []
}
