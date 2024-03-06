import React from 'react';
import List from './List';
import { addNewItem, ItemTodo, changeDone } from './domain';

export default function Todo() {
  const [items, setItems] = React.useState<ItemTodo[]>([]);
  const [input, setInput] = React.useState<string>('');

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        data-testid="todo-new-item"
      />
      <button
        data-testid="todo-add-button"
        disabled={input.lenght > 2}
        onClick={() => {
          setItems(addNewItem(items)(input))
          setInput('')
        }}>
        Add
      </button>
      <List items={items} changeDone={() => {
        setItems(changeDone(items))
      }} />
    </div>
  );
}

