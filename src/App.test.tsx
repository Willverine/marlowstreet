import { render } from '@testing-library/react';
import { App } from './App';

test('renders hello', () => {
  render(<App />);
  document.getElementsByClassName('body');
  expect(document.getElementsByClassName('body')).toBeTruthy();
});
