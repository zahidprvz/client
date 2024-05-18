// client/src/tests/user.test.js

import { render, screen } from '@testing-library/react';
import User from '../User';

test('renders user name', () => {
  render(<User name="John" />);
  const nameElement = screen.getByText(/John/i);
  expect(nameElement).toBeInTheDocument();
});

// You can add more tests as needed
