import type { InitialTask } from "./TasksContext"
import TasksContext from "./TasksContext"
import TasksDispatchContext from "./TasksDispatchContext"
import { useImmerReducer } from "use-immer";

const initialTasks: InitialTask[] = [
  { id: 0, text: "哲学家之路", done: true },
  { id: 1, text: "参观寺庙", done: false },
  { id: 2, text: "喝抹茶", done: false }
];

type TasksProviderProps = {
  children: React.ReactNode
};
export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

function tasksReducer(draft: InitialTask[], action: any) {
  switch (action.type) {
    case "added": {
      draft.push(action.task);
      break;
    }
    case "textChanged": {
      const draftTemp = draft.find((item) => item.id === action.id);
      if (draftTemp) draftTemp.text = action.text;
      break;
    }
    case "doneChanged": {
      const draftTemp = draft.find((item) => item.id === action.id);
      if (draftTemp) draftTemp.done = action.done;
      break;
    }
    case "deleted": {
      const idx = draft.findIndex((item) => item.id === action.id);
      draft.splice(idx, 1);
      break;
    }
    default: {
      throw Error("未知操作：" + action.type);
    }
  }
}
