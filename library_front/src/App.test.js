import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Livros', () => {
  render(<App />);
  const linkElement = screen.getByText(/Livros/i);
  expect(linkElement).toBeInTheDocument();
});
