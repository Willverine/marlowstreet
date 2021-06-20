import React, { useEffect, useState } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { CreateSeasonMutation, CreateSeasonMutationVariables, ListSeasonsQuery } from "./API";
import { listSeasons } from "./graphql/queries";
import { callGraphQL } from './graphql/callGraphQl';
import { mapListSeasonsQuery, Season } from './models/seasons';
import { createSeason } from './graphql/mutations';
import { a } from 'aws-amplify';

function App() {
  const [seasons, setSeasons] = useState<Season[]>();

  useEffect(() => {
    try {
      fetchNotes();
    } catch (error) {
      console.error("Error listing seasons", error);
    }
  }, []);

  const fetchNotes = async () => {
    const apiData = await
      callGraphQL<ListSeasonsQuery>(listSeasons);

      const seasons = mapListSeasonsQuery(apiData);
      setSeasons(seasons);
  }

  const createSeasonMutation = async () => {
    await callGraphQL<CreateSeasonMutation>(createSeason, {
      input: {
        name: "this is a test",
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      },
    } as CreateSeasonMutationVariables);
  }

  return (
    <div className="App">
      <header>
        <h1>Seasons list:</h1>
        {seasons?.map((a) => a.name)}
        <div style={{width: '100%', backgroundColor: 'red',}}>--------------------</div>
        <button onClick={createSeasonMutation}>Click to create new season</button>
      </header>
      <AmplifySignOut />
    </div>
  );
}

// export default App;
export default withAuthenticator(App);