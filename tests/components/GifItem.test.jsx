import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests in <GifItem />', () => {
  let title = 'Steins Gate';
  let url = 'https://steinsgate.org/';
  test('should match the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('should render img element with the given url and alt attributes', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug(); // console.log del componente
    // expect(screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show the title in the component', () => {
    render(<GifItem title={title} url={url} />);

    // screen.debug(); // console.log del componente
    expect(screen.getByText(title)).toBeTruthy();
  });
});
