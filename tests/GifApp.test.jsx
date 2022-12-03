import { fireEvent, render, screen } from '@testing-library/react';
import GifApp from '../src/GifApp';

describe('Tests on <GifApp />', () => {
  test('should match the snapshot', () => {
    const { container } = render(<GifApp />);

    expect(container).toMatchSnapshot();
  });

  test('should show a heading h3 with "GifApp"', () => {
    render(<GifApp />);

    const h1 = screen.getByRole('heading', { level: 1 });

    expect(h1.innerHTML).toBe('GifApp');
  });

  test('should show a new category', () => {
    render(<GifApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'One Piece' } });
    fireEvent.submit(form);

    expect(screen.getByText('One Piece')).toBeTruthy();
  });

  test('should not add an existing category', () => {
    render(<GifApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // Steins Gate is my default value
    fireEvent.input(input, { target: { value: 'Steins Gate' } });
    fireEvent.submit(form);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  });
});
