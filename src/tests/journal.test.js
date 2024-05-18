// client/src/tests/journal.test.js

import { render, screen } from '@testing-library/react';
import Journal from '../Journal';

test('renders journal title', () => {
  render(<Journal />);
  const titleElement = screen.getByText(/Journal of Cancer Research & Medicine/i);
  expect(titleElement).toBeInTheDocument();
});

// You can add more tests as needed
