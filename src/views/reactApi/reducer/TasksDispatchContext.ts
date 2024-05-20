import { createContext, useContext } from "react";

const TasksDispatchContext = createContext<React.Dispatch<any> | undefined>(undefined);

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export default TasksDispatchContext