import {describe, expect, test} from 'vitest';
import {render, screen, keyboard, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe("Todo test component", () => {
  
  beforeEach(() => {
       render(<Todo />);
  })

  test("should render text empty list", () => {    
    expect(screen.getByText(/Empty list/i)).toBeDefined()
  })

  test("should add item test in list", () => {
    const input = screen.getByTestId('todo-new-item')
    fireEvent.change(input, {target: {value: 'test'}});
    expect(input.value).toEqual('test');
  })
})
