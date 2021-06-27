import { useEffect, useState } from "react";
import { GetTeamQuery } from "../API";
import { callGraphQL } from "../graphql/callGraphQl";
import { getTeam } from "../graphql/queries";
import { mapGetTeamQuery } from "../models/team";
import { Team as TeamModel } from '../models';

export const Team = () => {
    const id = '';
    const [team, setTeam] = useState<TeamModel>();
    
    const fetchTeam = async () => {
      const apiData = await callGraphQL<GetTeamQuery>(getTeam);

      const fetchTeam = mapGetTeamQuery(apiData);

      if (!fetchTeam) return; 

      setTeam(fetchTeam);
    };

    useEffect(() => {
        fetchTeam();
    }, []);

    return (<div>
        {team.id}
        {team.name}
    </div>)
}