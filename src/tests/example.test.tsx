import { describe, expect, it } from 'vitest';

import { Button } from '@components/ui/Button';

import { renderWithProviders, screen } from './test-utils';

describe('Button', () => {
  it('renders children', () => {
    renderWithProviders(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('disables when isLoading', () => {
    renderWithProviders(<Button isLoading>Save</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
