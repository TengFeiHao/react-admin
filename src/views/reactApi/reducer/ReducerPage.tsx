import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContextContainer';

export default function ReducerPage() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
