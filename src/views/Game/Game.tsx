import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GetGameQuery, GetTeamQueryVariables } from '../../API';
import { callGraphQL } from '../../graphql/callGraphQl';
import { getGame } from '../../graphql/queries';
import { mapGetGamesQuery } from '../../models/game';
import { Game as GameModel } from '../../models';
import { GameDetails } from './Details';
import { Game as GameDiv, Title } from './Game.styles';

type RouteParams = {
  id: string | undefined;
};

export const Game = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;
  const [game, setGame] = useState<GameModel>();

  useEffect(() => {
    async function fetchData() {
      const apiData = await callGraphQL<GetGameQuery>(getGame, {
        variables: {
          id,
        } as GetTeamQueryVariables,
      });

      const fetchGame = mapGetGamesQuery(apiData);

      if (!fetchGame) return;

      setGame(fetchGame);
    }

    fetchData();
  }, [id]);

  if (!game) return <div>Loading your game</div>;

  return (
    <GameDiv>
      <Title>Game Page</Title>
      <GameDetails game={game} />
    </GameDiv>
  );
};
