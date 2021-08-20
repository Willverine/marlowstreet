import { useEffect, useRef, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  CreateGameMutation,
  CreateGameMutationVariables,
  CreatePlayerMutation,
  CreatePlayerMutationVariables,
  CreateSeasonMutation,
  CreateSeasonMutationVariables,
  CreateTeamMutation,
  CreateTeamMutationVariables,
  CreateWeekMutation,
  CreateWeekMutationVariables,
  ListGamesQuery,
  ListPlayersQuery,
  ListSeasonsQuery,
  ListTeamsQuery,
  ListWeeksQuery,
} from '../API';
import {
  listGames,
  listPlayers,
  listSeasons,
  listTeams,
  listWeeks,
} from '../graphql/queries';
import { callGraphQL } from '../graphql/callGraphQl';
import { mapListSeasonsQuery } from '../models/season';
import {
  createGame, createPlayer, createSeason, createTeam, createWeek,
} from '../graphql/mutations';
import {
  Game, Player, Season, Team, Week,
} from '../models';
import { mapListWeeksQuery } from '../models/week';
import { mapListGamesQuery } from '../models/game';
import { mapListPlayersQuery } from '../models/player';
import { mapListTeamsQuery } from '../models/team';

export const Admin = withAuthenticator(() => {
  const [seasons, setSeasons] = useState<Season[]>();
  const [weeks, setWeeks] = useState<Week[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [games, setGames] = useState<Omit<Game, 'team1' | 'team2'>[]>();
  const [players, setPlayers] = useState<Player[]>();

  const seasonName = useRef<HTMLInputElement>(null);
  const weekName = useRef<HTMLInputElement>(null);
  const teamName = useRef<HTMLInputElement>(null);
  const gameName = useRef<HTMLInputElement>(null);
  const playerName = useRef<HTMLInputElement>(null);

  const fetchSeasons = async () => {
    const apiData = await callGraphQL<ListSeasonsQuery>(listSeasons);

    const retrievedSeasons = mapListSeasonsQuery(apiData);
    setSeasons(retrievedSeasons);
  };

  const fetchWeeks = async () => {
    const apiData = await callGraphQL<ListWeeksQuery>(listWeeks);

    const retrievedWeeks = mapListWeeksQuery(apiData);
    setWeeks(retrievedWeeks);
  };

  const fetchTeams = async () => {
    const apiData = await callGraphQL<ListTeamsQuery>(listTeams);

    const retrievedTeams = mapListTeamsQuery(apiData);
    setTeams(retrievedTeams);
  };

  const fetchGames = async () => {
    const apiData = await callGraphQL<ListGamesQuery>(listGames);

    const retrievedGames = mapListGamesQuery(apiData);
    setGames(retrievedGames);
  };

  const fetchPlayers = async () => {
    const apiData = await callGraphQL<ListPlayersQuery>(listPlayers);

    const retrievedPlayers = mapListPlayersQuery(apiData);
    setPlayers(retrievedPlayers);
  };

  useEffect(() => {
    try {
      fetchSeasons();
      fetchWeeks();
      fetchTeams();
      fetchGames();
      fetchPlayers();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error listing things', error);
    }
  }, []);

  const createSeasonMutation = async () => {
    await callGraphQL<CreateSeasonMutation>(createSeason, {
      input: {
        name: seasonName.current?.value,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
    } as CreateSeasonMutationVariables);
  };

  const createGameMutation = async () => {
    await callGraphQL<CreateGameMutation>(createGame, {
      variables: {
        input: {
          id: '12345',
          time: new Date().toISOString(),
          gameTeam1Id: '63b965e2-5a35-4773-94c9-76fb248c8b8a',
          gameTeam2Id: '2f51152e-915e-4553-a8bd-4df41a7148e6',
          team1Score: 10,
          team2Score: 8,
          team1SpiritScore: 5,
          team2SpiritScore: 5,
          gameTeam1mvpId: '123456',
          gameTeam2mvpId: '123457',
          weekID: '18e82cb6-3cd1-48af-a93f-a2abe09c2a25',
        },
      } as CreateGameMutationVariables,
    });
  };

  const createWeekMutation = async () => {
    await callGraphQL<CreateWeekMutation>(createWeek, {
      variables: {
        input: {
          day: new Date().toISOString(),
          seasonID: '50479b0e-b76f-4f8f-a404-692626169881',
        },
      } as CreateWeekMutationVariables,
    });
  };

  const createTeamMutation = async () => {
    if (!players) { return; }

    await callGraphQL<CreateTeamMutation>(createTeam, {
      variables: {
        input: {
          colour: 'red',
          name: 'third team name',
        },
      } as CreateTeamMutationVariables,
    });
  };

  const createPlayerMutation = async () => {
    await callGraphQL<CreatePlayerMutation>(createPlayer, {
      variables: {
        input: {
          id: '123457',
          firstName: 'Will',
          lastName: 'Owens',
          email: 'asdf@asdf.com',
          mobileNumber: '0412312312',
          dob: new Date().toISOString(),
          teamID: '63b965e2-5a35-4773-94c9-76fb248c8b8a',
        },
      } as CreatePlayerMutationVariables,
    });
  };

  return (
    <header>
      <h1>Seasons list:</h1>
      {seasons?.map((season) => `${season.id}, `)}
      <h1>weeks list:</h1>
      {weeks?.map((a) => `${a.id}, `)}
      <h1>teams list:</h1>
      {teams?.map((a) => `${a.id}, `)}
      <h1>games list:</h1>
      {games?.map((a) => `${a.id}, `)}
      <h1>players list:</h1>
      {players?.map((a) => `${a.firstName} + ${a.id}, `)}
      <div style={{ width: '100%', backgroundColor: 'red' }}>
        --------------------
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input type="text" ref={seasonName} />
        <button type="button" onClick={createSeasonMutation}>Click to create new season</button>
        <input type="text" ref={weekName} />
        <button type="button" onClick={createWeekMutation}>Click to create new week</button>
        <input type="text" ref={teamName} />
        <button type="button" onClick={createTeamMutation}>Click to create new team</button>
        <input type="text" ref={gameName} />
        <button type="button" onClick={createGameMutation}>Click to create new game</button>
        <input type="text" ref={playerName} />
        <button type="button" onClick={createPlayerMutation}>Click to create new player</button>
      </div>
    </header>
  );
});
