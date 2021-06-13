/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSeasonInput = {
  id?: string | null,
  name: string,
  startDate: string,
  endDate: string,
};

export type ModelSeasonConditionInput = {
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelSeasonConditionInput | null > | null,
  or?: Array< ModelSeasonConditionInput | null > | null,
  not?: ModelSeasonConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Season = {
  __typename: "Season",
  id: string,
  name: string,
  startDate: string,
  endDate: string,
  weeks?: ModelWeekConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelWeekConnection = {
  __typename: "ModelWeekConnection",
  items?:  Array<Week | null > | null,
  nextToken?: string | null,
};

export type Week = {
  __typename: "Week",
  id: string,
  day: string,
  games?: ModelGameConnection | null,
  seasonID: string,
  season?: Season | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  time: string,
  team1: Team,
  team2: Team,
  team1Score: number,
  team2Score: number,
  team1SpiritScore: number,
  team2SpiritScore: number,
  team1mvp?: Player | null,
  team2mvp?: Player | null,
  weekID: string,
  week?: Week | null,
  createdAt: string,
  updatedAt: string,
};

export type Team = {
  __typename: "Team",
  id: string,
  captain?: Player | null,
  colour: string,
  name: string,
  players: number,
  createdAt: string,
  updatedAt: string,
};

export type Player = {
  __typename: "Player",
  id: string,
  firstName: string,
  lastName: string,
  dob: string,
  mobileNumber: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeasonInput = {
  id: string,
  name?: string | null,
  startDate?: string | null,
  endDate?: string | null,
};

export type DeleteSeasonInput = {
  id: string,
};

export type CreateWeekInput = {
  id?: string | null,
  day: string,
  seasonID: string,
};

export type ModelWeekConditionInput = {
  day?: ModelStringInput | null,
  seasonID?: ModelIDInput | null,
  and?: Array< ModelWeekConditionInput | null > | null,
  or?: Array< ModelWeekConditionInput | null > | null,
  not?: ModelWeekConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateWeekInput = {
  id: string,
  day?: string | null,
  seasonID?: string | null,
};

export type DeleteWeekInput = {
  id: string,
};

export type CreateGameInput = {
  id?: string | null,
  time: string,
  team1Score: number,
  team2Score: number,
  team1SpiritScore: number,
  team2SpiritScore: number,
  weekID: string,
  gameTeam1Id: string,
  gameTeam2Id: string,
  gameTeam1mvpId?: string | null,
  gameTeam2mvpId?: string | null,
};

export type ModelGameConditionInput = {
  time?: ModelStringInput | null,
  team1Score?: ModelIntInput | null,
  team2Score?: ModelIntInput | null,
  team1SpiritScore?: ModelIntInput | null,
  team2SpiritScore?: ModelIntInput | null,
  weekID?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGameInput = {
  id: string,
  time?: string | null,
  team1Score?: number | null,
  team2Score?: number | null,
  team1SpiritScore?: number | null,
  team2SpiritScore?: number | null,
  weekID?: string | null,
  gameTeam1Id?: string | null,
  gameTeam2Id?: string | null,
  gameTeam1mvpId?: string | null,
  gameTeam2mvpId?: string | null,
};

export type DeleteGameInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  colour: string,
  name: string,
  players: number,
  teamCaptainId?: string | null,
};

export type ModelTeamConditionInput = {
  colour?: ModelStringInput | null,
  name?: ModelStringInput | null,
  players?: ModelIntInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  colour?: string | null,
  name?: string | null,
  players?: number | null,
  teamCaptainId?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  dob: string,
  mobileNumber: string,
  email: string,
};

export type ModelPlayerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  dob?: string | null,
  mobileNumber?: string | null,
  email?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelSeasonFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  and?: Array< ModelSeasonFilterInput | null > | null,
  or?: Array< ModelSeasonFilterInput | null > | null,
  not?: ModelSeasonFilterInput | null,
};

export type ModelSeasonConnection = {
  __typename: "ModelSeasonConnection",
  items?:  Array<Season | null > | null,
  nextToken?: string | null,
};

export type ModelWeekFilterInput = {
  id?: ModelIDInput | null,
  day?: ModelStringInput | null,
  seasonID?: ModelIDInput | null,
  and?: Array< ModelWeekFilterInput | null > | null,
  or?: Array< ModelWeekFilterInput | null > | null,
  not?: ModelWeekFilterInput | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  team1Score?: ModelIntInput | null,
  team2Score?: ModelIntInput | null,
  team1SpiritScore?: ModelIntInput | null,
  team2SpiritScore?: ModelIntInput | null,
  weekID?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  colour?: ModelStringInput | null,
  name?: ModelStringInput | null,
  players?: ModelIntInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  mobileNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items?:  Array<Player | null > | null,
  nextToken?: string | null,
};

export type CreateSeasonMutationVariables = {
  input: CreateSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type CreateSeasonMutation = {
  createSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeasonMutationVariables = {
  input: UpdateSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type UpdateSeasonMutation = {
  updateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeasonMutationVariables = {
  input: DeleteSeasonInput,
  condition?: ModelSeasonConditionInput | null,
};

export type DeleteSeasonMutation = {
  deleteSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWeekMutationVariables = {
  input: CreateWeekInput,
  condition?: ModelWeekConditionInput | null,
};

export type CreateWeekMutation = {
  createWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWeekMutationVariables = {
  input: UpdateWeekInput,
  condition?: ModelWeekConditionInput | null,
};

export type UpdateWeekMutation = {
  updateWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWeekMutationVariables = {
  input: DeleteWeekInput,
  condition?: ModelWeekConditionInput | null,
};

export type DeleteWeekMutation = {
  deleteWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSeasonQueryVariables = {
  id: string,
};

export type GetSeasonQuery = {
  getSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeasonsQueryVariables = {
  filter?: ModelSeasonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeasonsQuery = {
  listSeasons?:  {
    __typename: "ModelSeasonConnection",
    items?:  Array< {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWeekQueryVariables = {
  id: string,
};

export type GetWeekQuery = {
  getWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWeeksQueryVariables = {
  filter?: ModelWeekFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeeksQuery = {
  listWeeks?:  {
    __typename: "ModelWeekConnection",
    items?:  Array< {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      time: string,
      team1Score: number,
      team2Score: number,
      team1SpiritScore: number,
      team2SpiritScore: number,
      weekID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSeasonSubscription = {
  onCreateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeasonSubscription = {
  onUpdateSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeasonSubscription = {
  onDeleteSeason?:  {
    __typename: "Season",
    id: string,
    name: string,
    startDate: string,
    endDate: string,
    weeks?:  {
      __typename: "ModelWeekConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWeekSubscription = {
  onCreateWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWeekSubscription = {
  onUpdateWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWeekSubscription = {
  onDeleteWeek?:  {
    __typename: "Week",
    id: string,
    day: string,
    games?:  {
      __typename: "ModelGameConnection",
      nextToken?: string | null,
    } | null,
    seasonID: string,
    season?:  {
      __typename: "Season",
      id: string,
      name: string,
      startDate: string,
      endDate: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    time: string,
    team1:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team2:  {
      __typename: "Team",
      id: string,
      colour: string,
      name: string,
      players: number,
      createdAt: string,
      updatedAt: string,
    },
    team1Score: number,
    team2Score: number,
    team1SpiritScore: number,
    team2SpiritScore: number,
    team1mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    team2mvp?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    weekID: string,
    week?:  {
      __typename: "Week",
      id: string,
      day: string,
      seasonID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    captain?:  {
      __typename: "Player",
      id: string,
      firstName: string,
      lastName: string,
      dob: string,
      mobileNumber: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    colour: string,
    name: string,
    players: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    firstName: string,
    lastName: string,
    dob: string,
    mobileNumber: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};