import React from 'react';
import { ItemTodo } from './domain';

export default function Item(item: ItemTodo) {
  return (
    <div>
      <span onClick={() => item.changeDone(item.id)}>
        {item.value}
      </span>
    </div>
  );
}

