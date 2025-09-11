import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import Header from '../header/Header.svelte';

test('renders Manzano Homes logo', () => {
  render(Header);
  expect(screen.getByText('Manzano Homes')).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(Header);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Neighborhood')).toBeInTheDocument();
  expect(screen.getByText('Homes for Sale')).toBeInTheDocument();
  expect(screen.getByText('Home Valuation')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
