import { GetGameQuery, ListGamesQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { Game } from ".";

export function mapListGamesQuery(listGamesQuery: GraphQLResult<ListGamesQuery>) {
  return listGamesQuery.data?.listGames?.items?.map(Game => ({
    id: Game?.id,
    time: Game?.time,
    team1Score: Game?.team1Score,
    team2Score: Game?.team2Score,
    team1SpiritScore: Game?.team1SpiritScore,
    team2SpiritScore: Game?.team2SpiritScore,
    weekID: Game?.weekID,
    createdAt: Game?.createdAt,
    updatedAt: Game?.updatedAt,
  } as Omit<Game, 'team1' | 'team2'>)) || []
}

export function mapGetGamesQuery(getGamesQuery: GraphQLResult<GetGameQuery>): Game | undefined {
  const game = getGamesQuery.data?.getGame;

  if (!game) {
    return;
  }

  return {
    id: game.id,
    time: game.time,
    team1: game.team1,
    team2: game.team2,
    team1Score: game.team1Score,
    team2Score: game.team2Score,
    team1SpiritScore: game.team1SpiritScore,
    team2SpiritScore: game.team2SpiritScore,
    team1mvp: game.team1mvp || undefined,
    team2mvp: game.team2mvp || undefined,
    week: game.week || undefined,
    createdAt: game.createdAt,
    updatedAt: game.updatedAt,
  };
}