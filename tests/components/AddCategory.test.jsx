import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests on <AddCategory />', () => {
  test('should change the input value', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'FMAB' } });
    // screen.debug();
    expect(input.value).toBe('FMAB');
    expect(input.value).toBeTruthy();
  });

  test('should run onNewCategory if the input has a value', () => {
    const inputValue = 'FMAB';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if the input is empty', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
    // screen.debug();
  });
});
