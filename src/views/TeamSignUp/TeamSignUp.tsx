/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo, useState } from 'react';
import { Auth } from 'aws-amplify';
import { createTeamMutation } from '../../models/team';
import { Player, Team as TeamModel } from '../../models';
import { Team as TeamDiv, Title, SubTitle } from '../Team/Team.styles';
import { fetchPlayer } from '../../models/player';
import { User } from '../Home';

export const TeamSignUp = () => {
  const [success, setSuccess] = useState(false);
  const [player, setPlayer] = useState<Player>();
  const [name, setName] = useState('');
  const [colour, setColour] = useState('');

  useMemo(() => {
    Auth.currentUserInfo().then((authUser: User | undefined) => {
      if (!authUser) return;

      if (!authUser.username) return;

      fetchPlayer(authUser.username).then((fetchedPlayer) => {
        if (!fetchedPlayer) { return; }
        setPlayer(fetchedPlayer);
      });
    });
  }, []);

  const handleCreation = () => {
    setSuccess(true);
    const team: TeamModel = {
      id: '',
      colour,
      name,
      captain: player,
    };

    createTeamMutation(team).then((res) => {
      window.location.href = `/team/${res.data?.createTeam?.id}`;
    }).catch((err) => {
      console.error('There was an error when creating the team:');
      console.error(err);
      setSuccess(false);
    });
  };

  return (
    <TeamDiv>
      <Title>Create a new Team</Title>
      <SubTitle>By creating this team you will become this team captain</SubTitle>
      <div>
        <label htmlFor="teamName">Team Name</label>
        <input id="teamName" type="text" placeholder="some team name" aria-label="teamName" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="teamColour">Team Colour</label>
        <input id="teamColour" type="text" placeholder="red" aria-label="teamColour" onChange={(event) => setColour(event.target.value)} />
      </div>
      <div>
        <button type="button" onClick={handleCreation} disabled={success}>Create Team</button>
      </div>
    </TeamDiv>
  );
};
