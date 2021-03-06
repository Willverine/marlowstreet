import { GraphQLResult } from '@aws-amplify/api';
import {
  GetGameQuery,
  GetTeamQueryVariables,
  ListGamesQuery,
  UpdateGameInput,
  UpdateGameMutation,
} from '../API';
import {
  Game, Player, Team, Week,
} from '.';
import { callGraphQL } from '../graphql/callGraphQl';
import { getGame } from '../graphql/queries';
import { updateGame } from '../graphql/mutations';

export function mapListGamesQuery(listGamesQuery: GraphQLResult<ListGamesQuery>) {
  return listGamesQuery.data?.listGames?.items?.map((gameResult) => ({
    id: gameResult?.id,
    time: gameResult?.time,
    team1Score: gameResult?.team1Score,
    team2Score: gameResult?.team2Score,
    team1SpiritScore: gameResult?.team1SpiritScore,
    team2SpiritScore: gameResult?.team2SpiritScore,
    weekID: gameResult?.weekID,
    createdAt: gameResult?.createdAt,
    updatedAt: gameResult?.updatedAt,
  } as Omit<Game, 'team1' | 'team2'>)) || [];
}

export function mapGetGamesQuery(getGamesQuery: GraphQLResult<GetGameQuery>): Game | undefined {
  const game = getGamesQuery.data?.getGame;

  return {
    id: game?.id || '',
    time: game?.time || '',
    team1: game?.team1 as Team,
    team2: game?.team2 as Team,
    team1Score: game?.team1Score || 0,
    team2Score: game?.team2Score || 0,
    team1SpiritScore: game?.team1SpiritScore || 0,
    team2SpiritScore: game?.team2SpiritScore || 0,
    team1FemaleMvp: game?.team1FemaleMvp as Player,
    team2FemaleMvp: game?.team2FemaleMvp as Player,
    team1MaleMvp: game?.team1MaleMvp as Player,
    team2MaleMvp: game?.team2MaleMvp as Player,
    week: game?.week as Week,
    createdAt: game?.createdAt,
    updatedAt: game?.updatedAt,
  };
}

export const fetchGame = (id: string) => callGraphQL<GetGameQuery>(getGame, {
  variables: {
    id,
  } as GetTeamQueryVariables,
}).then((gameQuery) => mapGetGamesQuery(gameQuery));

// eslint-disable-next-line max-len
export const updateGameMutation = (game: UpdateGameInput) => callGraphQL<UpdateGameMutation>(updateGame, {
  variables: {
    input: {
      ...game,
    },
  },
});
