import { Auth } from 'aws-amplify';
import { useMemo, useState } from 'react';
import { createPlayerMutation, fetchPlayer } from '../models/player';

interface User { // move this out somewhere intelligent
  attributes: {
    birthdate: string,
    email: string,
    email_verified: boolean,
    family_name: string,
    given_name: string,
    phone_number: string,
    phone_number_verified: boolean,
    preferred_username: string,
    sub: string,
  },
  id: string,
  username: string,
}

export const Home = () => {
  const [playerId, setPlayerId] = useState('');

  useMemo(() => {
    Auth.currentUserInfo().then((authUser: User | undefined) => {
      if (!authUser) return;

      if (!authUser.attributes.preferred_username) return;

      // this is kinda dodgy - if a player doesn't visit this page on login they will never
      // get a user account created for them!!

      // if logged in fetch the player object from the auth username
      fetchPlayer(authUser.attributes.preferred_username).then(async (playerData) => {
        if (!playerData) {
          // if no player exists for that user we should create one:
          await createPlayerMutation(authUser.attributes.preferred_username); // may not need await?
          // add all other sign up fields we need to create a user
        }
        // player now exists so feel free to act as that player:
        setPlayerId(authUser.attributes.preferred_username);
      });
    });
  }, []);

  if (!playerId) {
    return <div>Hello from marlow street you should log in.</div>;
  }

  return (
    <div>
      <div>
        Hello from marlow street
      </div>
      <p>This is your player: </p>
      <a href={`player/${playerId}`}>CLICK ME</a>
    </div>
  );
};
