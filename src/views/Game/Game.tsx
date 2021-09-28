import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchGame } from '../../models/game';
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
    if (!id) return;

    fetchGame(id).then((fetchedGame) => setGame(fetchedGame));
  }, [id]);

  if (!game) return <div>Loading your game</div>;

  return (
    <GameDiv>
      <Title>Game Page</Title>
      <GameDetails game={game} />
    </GameDiv>
  );
};
