import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests on useFetchGifs hook', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Gon'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading should be false', async () => {
    const { result } = renderHook(() => useFetchGifs('Gon'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
