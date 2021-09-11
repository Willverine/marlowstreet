import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Player } from '../models';
import { createPlayerMutation, fetchPlayer } from '../models/player';

export interface User { // move this out somewhere intelligent
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
  const [getPlayer, setGetPlayer] = useState(false);
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    Auth.currentUserInfo().then((authUser: User | undefined) => {
      if (!authUser) return;

      if (!authUser.username) return;

      // this is kinda dodgy - if a player doesn't visit this page on login they will never
      // get a user account created for them!!

      // if logged in fetch the player object from the auth username

      fetchPlayer(authUser.username).then((playerData) => {
        if (!playerData) {
          // if no player exists for that user we should create one:
          createPlayerMutation({
            id: authUser.username,
            firstName: authUser.attributes.given_name,
            lastName: authUser.attributes.family_name,
            dob: authUser.attributes.birthdate,
            mobileNumber: authUser.attributes.phone_number,
            email: authUser.attributes.email,
          }).then(() => setGetPlayer(!getPlayer));
        } else {
          setPlayer(playerData);
        }
      });
    });
  }, [getPlayer]);

  if (!player) {
    return <div>Hello from marlow street you should log in.</div>;
  }

  return (
    <div>
      <div>
        Hello from marlow street
      </div>
      <p>This is your player: </p>
      <a href={`player/${player.id}`}>CLICK ME</a>
      {!player?.team
        && (
        <>
          <p>If you need to add yourself to a team click below:</p>
          <a href="join-a-team">I need a team</a>
        </>
        )}
    </div>
  );
};
