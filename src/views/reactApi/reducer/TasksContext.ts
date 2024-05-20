import { createContext, useContext } from "react";

export type InitialTask = {
  id: number;
  text: string;
  done: boolean;
}

const TasksContext = createContext<InitialTask[] | undefined>(undefined);

export function useTasks() {
  return useContext(TasksContext);
}

export default TasksContext