import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { GetTeamQuery, GetTeamQueryVariables } from '../../API';
import { callGraphQL } from '../../graphql/callGraphQl';
import { getTeam } from '../../graphql/queries';
import { mapGetTeamQuery } from '../../models/team';
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
    async function fetchData() {
      const apiData = await callGraphQL<GetTeamQuery>(getTeam, {
        variables: {
          id,
        } as GetTeamQueryVariables,
      });

      const fetchTeam = mapGetTeamQuery(apiData);

      if (!fetchTeam) return;

      setTeam(fetchTeam);
    }

    fetchData();
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
