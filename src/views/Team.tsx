import { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { GetTeamQuery } from '../API';
import { callGraphQL } from '../graphql/callGraphQl';
import { getTeam } from '../graphql/queries';
import { mapGetTeamQuery } from '../models/team';
import { Team as TeamModel } from '../models';

type RouteParams = {
  id: string | undefined;
};

interface Props {
  route: RouteComponentProps<RouteParams>;
}

export const Team = ({ route }: Props) => {
  const { id } = route.match.params;
  const [team, setTeam] = useState<TeamModel>();

  useCallback(async () => {
    const apiData = await callGraphQL<GetTeamQuery>(getTeam, {
      input: {
        id,
      },
    });

    const fetchTeam = mapGetTeamQuery(apiData);

    if (!fetchTeam) return;

    setTeam(fetchTeam);
  }, [id]);

  if (!team) return <div>Loading your player</div>;

  return (
    <div>
      {team.id}
      {team.name}
    </div>
  );
};
