/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      weeks {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      weeks {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
      id
      name
      startDate
      endDate
      weeks {
        items {
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
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWeek = /* GraphQL */ `
  mutation CreateWeek(
    $input: CreateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    createWeek(input: $input, condition: $condition) {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1SpiritComments
          team2SpiritComments
          team1FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team1MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
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
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWeek = /* GraphQL */ `
  mutation UpdateWeek(
    $input: UpdateWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    updateWeek(input: $input, condition: $condition) {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1SpiritComments
          team2SpiritComments
          team1FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team1MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
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
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWeek = /* GraphQL */ `
  mutation DeleteWeek(
    $input: DeleteWeekInput!
    $condition: ModelWeekConditionInput
  ) {
    deleteWeek(input: $input, condition: $condition) {
      id
      day
      games {
        items {
          id
          time
          team1 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team2 {
            id
            colour
            name
            createdAt
            updatedAt
          }
          team1Score
          team2Score
          team1SpiritScore
          team2SpiritScore
          team1SpiritComments
          team2SpiritComments
          team1FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team1MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2FemaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          team2MaleMvp {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
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
        nextToken
      }
      seasonID
      season {
        id
        name
        startDate
        endDate
        weeks {
          items {
            id
            day
            seasonID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1SpiritComments
      team2SpiritComments
      team1FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team1MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            team1SpiritComments
            team2SpiritComments
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1SpiritComments
      team2SpiritComments
      team1FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team1MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            team1SpiritComments
            team2SpiritComments
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      time
      team1 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team2 {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      team1Score
      team2Score
      team1SpiritScore
      team2SpiritScore
      team1SpiritComments
      team2SpiritComments
      team1FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team1MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2FemaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      team2MaleMvp {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      weekID
      week {
        id
        day
        games {
          items {
            id
            time
            team1Score
            team2Score
            team1SpiritScore
            team2SpiritScore
            team1SpiritComments
            team2SpiritComments
            weekID
            createdAt
            updatedAt
          }
          nextToken
        }
        seasonID
        season {
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      captain {
        id
        firstName
        lastName
        dob
        mobileNumber
        email
        teamID
        team {
          id
          captain {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          colour
          name
          players {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      colour
      name
      players {
        items {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      mobileNumber
      email
      teamID
      team {
        id
        captain {
          id
          firstName
          lastName
          dob
          mobileNumber
          email
          teamID
          team {
            id
            colour
            name
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        colour
        name
        players {
          items {
            id
            firstName
            lastName
            dob
            mobileNumber
            email
            teamID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
