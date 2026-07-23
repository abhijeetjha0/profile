import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../../src/components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  test('renders heading with expected error text', () => {
    render(<ErrorBoundary />);

    const heading = screen.getByRole('heading', { level: 1, name: /This is not expected!/i });
    expect(heading).toBeDefined();
  });
});
