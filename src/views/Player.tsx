import { useEffect, useState } from "react";
import { GetPlayerQuery, GetPlayerQueryVariables } from "../API";
import { callGraphQL } from "../graphql/callGraphQl";
import { getPlayer } from "../graphql/queries";
import { mapGetPlayerQuery } from "../models/player";
import { Player as PlayerModel } from "../models";
import { RouteComponentProps } from "react-router-dom";
import { API } from "@aws-amplify/api";

type routeParams = {
  id: string | undefined;
};

export const Player = ({ match }: RouteComponentProps<routeParams>) => {
  const id = match.params.id;
  const [player, setPlayer] = useState<PlayerModel>();

  useEffect(() => {
    async function fetchData() {
      console.log(id);

      // const apiData = await callGraphQL<GetPlayerQuery>(getPlayer, {
      //   variables: {
      //     variables: {
      //       id: "8d0ccd7b-64ac-4279-9f5d-d3ee4511bcab",
      //     },
      //     id: "8d0ccd7b-64ac-4279-9f5d-d3ee4511bcab",
      //   } as GetPlayerQueryVariables,
      // });

      const apiData = await API.graphql({
        query: getPlayer,
        variables: { id },
      });

      console.log(apiData);
      // @ts-ignore
      const fetchPlayer = mapGetPlayerQuery(apiData);
      
      if (!fetchPlayer) return;
      console.log("HELLO");
      console.log(fetchPlayer);
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
