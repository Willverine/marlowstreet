import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { CreateGameMutation, CreateGameMutationVariables, CreatePlayerMutation, CreatePlayerMutationVariables, CreateSeasonMutation, CreateSeasonMutationVariables, ListGamesQuery, ListPlayersQuery, ListSeasonsQuery, ListTeamsQuery, ListWeeksQuery } from "./API";
import { listGames, listPlayers, listSeasons, listTeams, listWeeks } from "./graphql/queries";
import { callGraphQL } from './graphql/callGraphQl';
import { mapListSeasonsQuery } from './models/seasons';
import { createGame, createPlayer, createSeason } from './graphql/mutations';
import { Game, Player, Season, Team, Week } from './models';
import { mapListWeeksQuery } from './models/week';
import { mapListGamesQuery } from './models/game';
import { mapListPlayersQuery } from './models/player';
import { mapListTeamsQuery } from './models/team';

function App() {
  const [seasons, setSeasons] = useState<Season[]>();
  const [weeks, setWeeks] = useState<Week[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [games, setGames] = useState<Game[]>();
  const [players, setPlayers] = useState<Player[]>();

  const seasonName = useRef<HTMLInputElement>(null);
  const weekName = useRef<HTMLInputElement>(null);
  const teamName = useRef<HTMLInputElement>(null);
  const gameName = useRef<HTMLInputElement>(null);
  const playerName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      fetchSeasons();
      fetchWeeks();
      fetchTeams();
      fetchGames();
      fetchPlayers();
    } catch (error) {
      console.error("Error listing seasons", error);
    }
  }, []);

  const fetchSeasons = async () => {
    const apiData = await
      callGraphQL<ListSeasonsQuery>(listSeasons);

      const seasons = mapListSeasonsQuery(apiData);
      setSeasons(seasons);
  }

  const fetchWeeks = async () => {
    const apiData = await callGraphQL<ListWeeksQuery>(listWeeks);

    const weeks = mapListWeeksQuery(apiData);
    setWeeks(weeks);
  }

  const fetchTeams = async () => {
    const apiData = await callGraphQL<ListTeamsQuery>(listTeams);

    const teams = mapListTeamsQuery(apiData);
    setTeams(teams);
  }

  const fetchGames = async () => {
    const apiData = await callGraphQL<ListGamesQuery>(listGames);

    const games = mapListGamesQuery(apiData);
    setGames(games);
  }

  const fetchPlayers = async () => {
    const apiData = await callGraphQL<ListPlayersQuery>(listPlayers);

    const players = mapListPlayersQuery(apiData);
    setPlayers(players);
  }

  const createSeasonMutation = async () => {
    await callGraphQL<CreateSeasonMutation>(createSeason, {
      input: {
        name: seasonName.current?.value,
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
    } as CreateSeasonMutationVariables);
  }

  const createGameMutation = async () => {
    await callGraphQL<CreateGameMutation>(createGame, {
      input: {
        time: new Date().toISOString(),
      },
    } as CreateGameMutationVariables);
  }

  const createPlayerMutation = async () => {
    console.log(playerName.current?.value);
    console.log(playerName.current?.value.split(' '));
    await callGraphQL<CreatePlayerMutation>(createPlayer, {
      input: {
        firstName: 'test',
        lastName: 'name',
        email: "",
        mobileNumber: "",
        dob: new Date().toISOString(),
      },
    } as CreatePlayerMutationVariables);
  }

  return (
    <div className="App">
      <header>
        <h1>Seasons list:</h1>
        {seasons?.map((season) => season.startDate + ", ")}
        <h1>weeks list:</h1>
        {weeks?.map((a) => a.id)}
        <h1>teams list:</h1>
        {teams?.map((a) => a.id)}
        <h1>games list:</h1>
        {games?.map((a) => a.id)}
        <h1>players list:</h1>
        {players?.map((a) => a.id)}
        <div style={{ width: "100%", backgroundColor: "red" }}>
          --------------------
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input type="text" ref={seasonName}></input>
          <button onClick={createSeasonMutation}>
            Click to create new season
          </button>
          <input type="text" ref={weekName}></input>
          <button onClick={createSeasonMutation}>
            Click to create new week
          </button>
          <input type="text" ref={teamName}></input>
          <button onClick={createSeasonMutation}>
            Click to create new team
          </button>
          <input type="text" ref={gameName}></input>
          <button onClick={createGameMutation}>Click to create new game</button>
          <input type="text" ref={playerName}></input>
          <button onClick={createPlayerMutation}>
            Click to create new player
          </button>
        </div>
      </header>
      <AmplifySignOut style={{backgroundColor: 'blue'}} />
    </div>
  );
}

// export default App;
export default withAuthenticator(App);