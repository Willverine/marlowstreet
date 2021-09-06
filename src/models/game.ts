import { GraphQLResult } from '@aws-amplify/api';
import { GetGameQuery, ListGamesQuery } from '../API';
import {
  Game, Player, Team, Week,
} from '.';

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

  if (!game) {
    return undefined;
  }

  return {
    id: game.id,
    time: game.time,
    team1: game.team1 as Team,
    team2: game.team2 as Team,
    team1Score: game.team1Score,
    team2Score: game.team2Score,
    team1SpiritScore: game.team1SpiritScore,
    team2SpiritScore: game.team2SpiritScore,
    team1mvp: game.team1mvp as Player,
    team2mvp: game.team2mvp as Player,
    week: game.week as Week,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
  };
}
