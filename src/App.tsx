import { useState, useRef } from 'react'

interface Task {
  name: string,
  id: number,
}

function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState<Task>([]);
  
  function handlerAddTask() {
    const taskName = inputRef.current.value;
    if (taskName !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        name: taskName,
      };
      setTasks([...tasks, newTask]);
      inputRef.current.value = ''
    }
  }

  function handlerRemoveTask(taskId: number) {
    return function() {
      const newList = tasks.filter(task => task.id !== taskId);
      setTasks(newList);
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        ref={inputRef}
      />
      <button onClick={handlerAddTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={handlerRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
