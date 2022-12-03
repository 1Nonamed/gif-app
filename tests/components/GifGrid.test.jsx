import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGird />', () => {
  const category = 'Steins Gate';

  test('should show the loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should show items when useFetchGifs loads', () => {
    const gifs = [
      {
        id: 123,
        title: 'FMAB',
        url: 'https://webfmab.jpg',
      },
      {
        id: 234,
        title: 'Naruto',
        url: 'https://webnaruto.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
