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
      {game.team1FemaleMvp?.firstName}
      {' '}
      {game.team1FemaleMvp?.lastName}
    </Details>
    <Details>
      Team 2 MVP:
      {game.team2FemaleMvp?.firstName}
      {' '}
      {game.team2FemaleMvp?.lastName}
    </Details>
    <Details>
      Team 1 MVP:
      {game.team1MaleMvp?.firstName}
      {' '}
      {game.team1MaleMvp?.lastName}
    </Details>
    <Details>
      Team 2 MVP:
      {game.team2MaleMvp?.firstName}
      {' '}
      {game.team2MaleMvp?.lastName}
    </Details>
  </>
);
