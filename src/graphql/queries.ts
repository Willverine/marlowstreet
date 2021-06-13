/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!) {
    getSeason(id: $id) {
      id
      name
      startDate
      endDate
      weeks {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSeasons = /* GraphQL */ `
  query ListSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startDate
        endDate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWeek = /* GraphQL */ `
  query GetWeek($id: ID!) {
    getWeek(id: $id) {
      id
      day
      games {
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listWeeks = /* GraphQL */ `
  query ListWeeks(
    $filter: ModelWeekFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeeks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        day
        seasonID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      time
      team1 {
        id
        colour
        name
        players
        createdAt
        updatedAt
      }
      team2 {
        id
        colour
        name
        players
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        createdAt
        updatedAt
      }
      team2mvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        seasonID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        team1Score
        team2Score
        team1SpiritScore
        team2SpiritScore
        weekID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        createdAt
        updatedAt
      }
      colour
      name
      players
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        colour
        name
        players
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
