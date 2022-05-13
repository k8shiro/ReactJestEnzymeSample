import { render, screen } from '@testing-library/react';
import RandomDog from '.';

test('renders learn react link', () => {
  render(<RandomDog />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
