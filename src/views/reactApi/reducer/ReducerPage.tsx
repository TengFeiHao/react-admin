import AddTask from './Addtask';
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
