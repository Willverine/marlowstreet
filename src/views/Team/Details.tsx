import { Team } from '../../models';
import { Id, Details } from './Team.styles';

interface Props {
  team: Team
}

export const TeamDetails = ({ team }: Props) => (
  <>
    <Id>
      ID:
      {team.id}
    </Id>
    <Details>
      Name:
      {team.name}
    </Details>
    <Details>
      Colour:
      {team.colour}
    </Details>
    <Details>
      Captain:
      {team.captain?.firstName}
    </Details>
    <Details>
      Players:
      {' '}
      {team.players && team.players[0]?.firstName}
    </Details>
  </>
);
