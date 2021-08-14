import { GraphQLResult } from '@aws-amplify/api';
import { ListWeeksQuery } from '../API';
import { Week } from '.';

export function mapListWeeksQuery(listWeeksQuery: GraphQLResult<ListWeeksQuery>): Week[] {
  return listWeeksQuery.data?.listWeeks?.items?.map((weekResult) => ({
    id: weekResult?.id,
    createdAt: weekResult?.createdAt,
    updatedAt: weekResult?.updatedAt,
    day: weekResult?.day,
    seasonID: weekResult?.seasonID,
  } as Week)) || [];
}
