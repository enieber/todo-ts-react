export interface ItemTodo {
  id: number;
  value: string;
  isDone: boolean;
}

export interface ListProps {
  items: ItemTodo[];
  changeDone: (string) => ItemTodo[];
}

export function nextId(items: ItemTodo[] = []): number {
  let id = 0;
  if (items.lenght == 0) {
    return id + 1;
  }
  items.map((item) => {
    if (item.id > id) {
     id = item.id;
    }
  });
  
  return id + 1;
}

export function addNewItem(items: ItemTodo[]) {
  return function (value: string) {
    if (value) {
      const newItemObject = {
        id: nextId(items),
        value,
        isDone: false,
      };
      return [newItemObject, ...items];
    }
  };
}

export function changeDone(items: ItemTodo[]) {
  return function (value: string) {
    return items.map(item => {
      if (item.id === value) {
        return {
          ...item,
          isDone: !item.isDone
        }
      }
    })
  }
}

