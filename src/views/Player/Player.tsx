import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { fetchPlayer } from '../../models/player';
import { Player as PlayerModel } from '../../models';
import {
  Title, Player as PlayerDiv,
} from './Player.styles';
import { PlayerDetails } from './Details';

type RouteParams = {
  id: string | undefined;
};

export const Player = ({ match }: RouteComponentProps<RouteParams>) => {
  const { id } = match.params;
  const [player, setPlayer] = useState<PlayerModel>();
  const [isCurrentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetchPlayer(id).then((playerData) => {
      setPlayer(playerData);
    });
  }, [id]);

  if (!player) return <div>Loading your player</div>;

  Auth.currentUserInfo().then((res) => {
    if (player.email === res.attributes.email) {
      setCurrentUser(true);
    }
  });

  return (
    <PlayerDiv>
      <Title>Player Page</Title>
      {isCurrentUser && <p>This is your user</p>}
      <PlayerDetails player={player} />
    </PlayerDiv>
  );
};
