import styled from 'styled-components';

export const Title = styled.h1({
  fontSize: '26px',
});

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px',
});

export const Label = styled.label({
  fontSize: '20px',
  fontWeight: 600,
  paddingTop: '10px',
});

export const ScoreInput = styled.input`
  max-width: 30px;
  height: 24px;
  font-size: 18px;
  padding-left: 7px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  max-width: 200px;
  height: 24px;
  font-size: 18px;
  padding-left: 8px;
  margin: 0;
`;

export const TextArea = styled.input`
  max-width: 400px;
  height: 32px;
  font-size: 18px;
  padding-left: 8px;
  margin: 0;
`;

export const SubmitButton = styled.button`
  margin-top: 40px;
  max-width: 400px;
  height: 34px;
  background-color: #ff6347;
  border-radius: 8px;
  border: solid 1px black;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #c54a35;
  }

  &:active {
    background-color: #8a3627;
  }
`;
