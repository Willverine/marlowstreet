/* eslint-disable no-console */
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
  // Big dislike here - this getPlayer is just a trigger to rerun this useEffect manually :'(
  const [getPlayer, setGetPlayer] = useState(false);
  const [player, setPlayer] = useState<Player>();

  useEffect(() => {
    Auth.currentUserInfo().then((authUser: User | undefined) => {
      if (!authUser) {
        setTimeout(() => setGetPlayer(!getPlayer), 3000);
        return;
      }

      if (!authUser.username) {
        console.error('It appears you are logged in but have no user account. Contact the admin.');
      }

      // this is kinda dodgy - if a player doesn't visit this page on login they will never
      // get a user account created for them!!
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
    }).catch((event) => {
      console.error('Something went wrong and you got Rejected bro');
      console.error(event);
    });
  }, [getPlayer]);

  if (!player) {
    return <div>Hello from marlow street loading...</div>;
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
          <a href="join-a-team">Join an existing team</a>
          <p>Alternatively you can create and captain your own team!</p>
          <a href="team-sign-up">Create a new team</a>
        </>
        )}
    </div>
  );
};
