import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

export interface GraphQLOptions {
  input?: object;
  variables?: object;
  authMode?: GRAPHQL_AUTH_MODE;
}

// eslint-disable-next-line max-len
export async function callGraphQL<T>(query: any, options?: GraphQLOptions): Promise<GraphQLResult<T>> {
  return (await API.graphql(graphqlOperation(query, options?.variables))) as GraphQLResult<T>;
}
