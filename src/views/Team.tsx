import { useCallback, useState } from "react";
import { GetTeamQuery } from "../API";
import { callGraphQL } from "../graphql/callGraphQl";
import { getTeam } from "../graphql/queries";
import { mapGetTeamQuery } from "../models/team";
import { Team as TeamModel } from '../models';
import { RouteComponentProps } from "react-router-dom";

type routeParams = {
    id: string | undefined;
};

interface Props {
    route: RouteComponentProps<routeParams>;
}

export const Team = ({ route }: Props) => {
  const id = route.match.params.id;
  const [team, setTeam] = useState<TeamModel>();

  useCallback(async  () => {
    const apiData = await callGraphQL<GetTeamQuery>(getTeam, {
    input: {
        id: id,
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