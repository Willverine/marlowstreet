/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMemo, useState } from 'react';
import { Auth } from 'aws-amplify';
import { createTeamMutation } from '../../models/team';
import { Player, Team as TeamModel } from '../../models';
import { Team as TeamDiv, Title } from '../Team/Team.styles';
import { fetchPlayer } from '../../models/player';
import { User } from '../Home';

export const TeamSignUp = () => {
  const [success, setSuccess] = useState(false);
  const [player, setPlayer] = useState<Player>();
  const [name, setName] = useState('');
  const [colour, setColour] = useState('');
  const [teamId, setTeamId] = useState<string | undefined>();

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
    const team: TeamModel = {
      id: '',
      colour,
      name,
      captain: player,
    };

    createTeamMutation(team).then((res) => {
      setSuccess(true);
      setTeamId(res.data?.createTeam?.id);
    });
  };

  return (
    <TeamDiv>
      <Title>Create a new Team</Title>
      <div>
        <label htmlFor="teamName">Team Name</label>
        <input id="teamName" type="text" placeholder="some team name" aria-label="teamName" onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="teamColour">Team Colour</label>
        <input id="teamColour" type="text" placeholder="red" aria-label="teamColour" onChange={(event) => setColour(event.target.value)} />
      </div>
      {success && (
      <div>
        YOU ARE NOW SIGNED UP
        <a href={`/team/${teamId}`}>Click Here to visit your team page</a>
      </div>
      )}
      <div>
        <button type="button" onClick={handleCreation} disabled={success}>Create Team</button>
      </div>
    </TeamDiv>
  );
};
