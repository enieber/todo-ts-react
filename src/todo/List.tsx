import React from 'react';
import Item from './Item';
import { ListProps } from './domain';

export default function List(props: ListProps) {
  if (props.items.length == 0) {
    return <span>Empty List</span>;
  }

  return (
    <div>
      {props.items.map((item) => (
        <Item {...item} key={`${item.id}`} changeDone={props.changeDone}/>
      ))}
    </div>
  );
}

