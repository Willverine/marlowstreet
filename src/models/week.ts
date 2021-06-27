import { ListWeeksQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Week } from ".";

export function mapListWeeksQuery(listWeeksQuery: GraphQLResult<ListWeeksQuery>): Week[] {
  return listWeeksQuery.data?.listWeeks?.items?.map(Week => ({
    id: Week?.id,
    createdAt: Week?.createdAt,
    updatedAt: Week?.updatedAt,
    day: Week?.day,
    seasonID: Week?.seasonID,
  } as Week)) || []
}
