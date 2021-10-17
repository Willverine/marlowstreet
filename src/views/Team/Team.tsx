import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { fetchTeam } from '../../models/team';
import { Team as TeamModel } from '../../models';
import { TeamDetails } from './Details';
import { Team as TeamDiv, Title } from './Team.styles';

type RouteParams = {
  id: string | undefined;
};

export const Team = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;
  const [team, setTeam] = useState<TeamModel>();
  const [isCurrentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    if (!id) return;

    // eslint-disable-next-line no-console
    fetchTeam(id).then((fetchedTeam) => setTeam(fetchedTeam)).catch((err) => console.error(err));
  }, [id]);

  if (!team) return <div>Loading your team</div>;

  Auth.currentUserInfo().then((res) => {
    if (team?.captain?.email === res.attributes.email) {
      setCurrentUser(true);
    }
  });

  return (
    <TeamDiv>
      <Title>Team Page</Title>
      {isCurrentUser && <p>You are captain of this team</p>}
      <TeamDetails team={team} />
    </TeamDiv>
  );
};
