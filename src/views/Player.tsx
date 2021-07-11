import { useEffect, useState } from "react";
import { GetPlayerQuery, GetPlayerQueryVariables } from "../API";
import { callGraphQL } from "../graphql/callGraphQl";
import { getPlayer } from "../graphql/queries";
import { mapGetPlayerQuery } from "../models/player";
import { Player as PlayerModel } from "../models";
import { RouteComponentProps } from "react-router-dom";

type routeParams = {
  id: string | undefined;
};

export const Player = ({ match }: RouteComponentProps<routeParams>) => {
  const id = match.params.id;
  const [player, setPlayer] = useState<PlayerModel>();

  useEffect(() => {
    async function fetchData() {

      const apiData = await callGraphQL<GetPlayerQuery>(getPlayer, {
        variables: {
          id: id,
        } as GetPlayerQueryVariables,
      });

      const fetchPlayer = mapGetPlayerQuery(apiData);
      
      if (!fetchPlayer) return;

      setPlayer(fetchPlayer);
    }

    fetchData();
  }, [id]);

  if (!player) return <div>Loading your player</div>;

  return (
    <div>
      {player.id}
      {player.firstName}
      {player.lastName}
      {player.lastName}
    </div>
  );
};
