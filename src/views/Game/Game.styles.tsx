import styled from 'styled-components';

export const Game = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

export const Title = styled.h1({
  fontSize: '26px',
});

export const Details = styled.p({
  fontSize: '20px',
});

export const Id = styled.p({
  colour: 'grey',
  fontSize: '12px',
});

export const PlayerList = styled.ol({
  margin: '20px',
  backgroundColor: 'lightgray',
});
