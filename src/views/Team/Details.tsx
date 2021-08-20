import { Team } from '../../models';
import { PlayerDetailsList } from '../Player/Details';
import { Id, Details, PlayerList } from './Team.styles';

interface Props {
  team: Team
}

export const TeamDetails = ({ team }: Props) => (
  <>
    <Id>
      ID:
      {' '}
      {team.id}
    </Id>
    <Details>
      Name:
      {' '}
      {team.name}
    </Details>
    <Details>
      Colour:
      {' '}
      {team.colour}
    </Details>
    {team.captain && (
      <Details>
        Captain:
        {team.captain?.firstName}
        {' '}
        {team.captain?.lastName}
      </Details>
    )}
    Players:
    <PlayerList>
      {team.players?.map(
        (player) => player && (
        <li key={player.id}>
          <PlayerDetailsList player={player} />
        </li>
        ),
      )}
    </PlayerList>
  </>
);
