import { useState } from 'react';
import { useTasksDispatch } from './TasksDispatchContext';
let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch()!;
  return (
    <>
      <input
        placeholder="添加任务"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          task: {
            id: nextId++,
            text: text,
            done: false
          }
        });
      }}>添加</button>
    </>
  );
}
