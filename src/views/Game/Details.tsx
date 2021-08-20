import { Game } from '../../models';
import { Id, Details } from './Game.styles';

interface Props {
  game: Game
}

export const GameDetails = ({ game }: Props) => (
  <>
    <Id>
      ID:
      {game.id}
    </Id>
    <Details>
      Game time:
      {game.time}
    </Details>
    <Details>
      Team 1:
      {game.team1.name}
    </Details>
    <Details>
      Team 2:
      {game.team2.name}
    </Details>
    <Details>
      Team 1 Score:
      {game.team1Score}
    </Details>
    <Details>
      Team 2 Score:
      {game.team2Score}
    </Details>
    <Details>
      Team 1 Spirit score:
      {game.team1SpiritScore}
    </Details>
    <Details>
      Team 2 Spirit score:
      {game.team2SpiritScore}
    </Details>
    <Details>
      Team 1 MVP:
      {game.team1mvp?.firstName}
      {' '}
      {game.team1mvp?.lastName}
    </Details>
    <Details>
      Team 2 MVP:
      {game.team2mvp?.firstName}
      {' '}
      {game.team2mvp?.lastName}
    </Details>
  </>
);
