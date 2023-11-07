import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a sample text', () => {
  render(<App />);
  const sampleTextElement = screen.getByText('This is your sample text');
  expect(sampleTextElement).toBeInTheDocument();
});
