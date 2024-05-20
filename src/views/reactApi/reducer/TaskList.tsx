import { useState } from 'react';
import type { InitialTask } from "./TasksContext"
import { useTasks } from './TasksContext';
import { useTasksDispatch } from './TasksDispatchContext';

export default function TaskList() {
  const tasks = useTasks()!;
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }: {task: InitialTask}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch()!;
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'textChanged',
              id: task.id,
              text: e.target.value
            });
          }} />
        <button onClick={() => setIsEditing(false)}>
          保存
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          编辑
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'doneChanged',
            id: task.id,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        删除
      </button>
    </label>
  );
}
