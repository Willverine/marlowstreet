import { Player } from '../../models';
import { Id, Details } from './Player.styles';

interface Props {
  player: Player
}

export const PlayerDetails = ({ player }: Props) => (
  <>
    <Id>
      ID:
      {' '}
      {player.id}
    </Id>
    <Details>
      Name:
      {' '}
      {player.firstName}
      {' '}
      {player.lastName}
    </Details>
    <Details>
      Email:
      {' '}
      {player.email}
    </Details>
    <Details>
      Date of Birth:
      {' '}
      {new Date(player.dob).toDateString()}
    </Details>
    {player.team && (
    <div>
      Team:
      {' '}
      {player.team.name}
      {' '}
      Team ID:
      {' '}
      {player.team.id}
    </div>
    )}
  </>
);

export const PlayerDetailsList = ({ player }: Props) => (
  <>
    <Id>
      ID:
      {' '}
      {player.id}
    </Id>
    <Details>
      Name:
      {' '}
      {player.firstName}
      {' '}
      {player.lastName}
    </Details>
    <Details>
      Email:
      {' '}
      {player.email}
    </Details>
  </>
);
