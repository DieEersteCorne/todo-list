import { useState, useReducer, Reducer, Dispatch } from 'react';
import { ITask } from '../../../Interfaces';

// export const useTodoItem = () => {
//   // :FC sets the component to Functional component
//   const [newTaskText, setNewTaskText] = useState<string>(''); //set useState as type string when using string
//   const [tasks, setTasks] = useState<ITask[]>([]);
//   const [showCompleted, setShowCompleted] = useState(false);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     // if a fucntion does not return() anything, we set the return to void
//     if (event.target.name === 'task') {
//       setNewTaskText(event.target.value);
//     }
//   };

//   // function to add the task

//   const addTask = (): void => {
//     if (newTaskText !== '') {
//       const newTask: ITask = {
//         text: newTaskText,
//         completed: false,
//         id: Date.now(),
//         dueDate: selectedDate
//       };
//       setTasks([...tasks, newTask]);
//       setNewTaskText('');
//       setSelectedDate(null);
//     }
//   };

//   // Edit Task
//   const editTask = (taskId: number, newText: string): void => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, text: newText } : task
//       )
//     );
//   };

//   //toggle completed tasks
//   const toggleCompleted = (taskId: number): void => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const toggleShowCompleted = (): void => {
//     setShowCompleted(!showCompleted);
//   };

//   const filteredTasks = showCompleted
//     ? tasks
//     : tasks.filter((task) => !task.completed);

//   return {
//     newTaskText,
//     tasks,
//     setTasks,
//     showCompleted,
//     selectedDate,
//     handleChange,
//     addTask,
//     editTask,
//     toggleCompleted,
//     toggleShowCompleted,
//     filteredTasks,
//     setSelectedDate
//   };
// };

enum ActionType {
  SET_NEW_TASK_TEXT,
  SET_TASKS,
  SET_SHOW_COMPLETED,
  SET_SELECTED_DATE,
  ADD_TASK,
  EDIT_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_SHOW_COMPLETED
}

interface SetNewTaskTextAction {
  type: ActionType.SET_NEW_TASK_TEXT;
  payload: string;
}

interface SetTasksAction {
  type: ActionType.SET_TASKS;
  payload: ITask[];
}

interface SetShowCompletedAction {
  type: ActionType.SET_SHOW_COMPLETED;
  payload: boolean;
}

interface SetSelectedDateAction {
  type: ActionType.SET_SELECTED_DATE;
  payload: Date | null;
}

interface AddTaskAction {
  type: ActionType.ADD_TASK;
  payload: ITask;
}

interface EditTaskAction {
  type: ActionType.EDIT_TASK;
  payload: {
    taskId: number;
    newText: string;
  };
}

interface ToggleCompletedAction {
  type: ActionType.TOGGLE_COMPLETED;
  payload: number;
}

interface ToggleShowCompletedAction {
  type: ActionType.TOGGLE_SHOW_COMPLETED;
}
type TodoState = {
  newTaskText: string;
  tasks: ITask[];
  showCompleted: boolean;
  selectedDate: Date | null;
};

type TodoAction =
  | SetNewTaskTextAction
  | SetTasksAction
  | SetShowCompletedAction
  | SetSelectedDateAction
  | AddTaskAction
  | EditTaskAction
  | ToggleCompletedAction
  | ToggleShowCompletedAction;

const todoReducer: Reducer<TodoState, TodoAction> = (state, action) => {
  switch (action.type) {
    case ActionType.SET_NEW_TASK_TEXT:
      return { ...state, newTaskText: action.payload };
    case ActionType.SET_TASKS:
      return { ...state, tasks: action.payload };
    case ActionType.SET_SHOW_COMPLETED:
      return { ...state, showCompleted: action.payload };
    case ActionType.SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };
    case ActionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case ActionType.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) =>
          task.id === action.payload.taskId
            ? { ...task, text: action.payload.newText }
            : task
        )
      };
    case ActionType.TOGGLE_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task: ITask) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case ActionType.TOGGLE_SHOW_COMPLETED:
      return { ...state, showCompleted: !state.showCompleted };
    default:
      return state;
  }
};

export const useTodoItem = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    newTaskText: '',
    tasks: [],
    showCompleted: false,
    selectedDate: null
  });

  const { newTaskText, tasks, showCompleted, selectedDate } = state;

  const setTasks = (updatedTasks: ITask[]) => {
    dispatch({ type: ActionType.SET_TASKS, payload: updatedTasks });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      dispatch({
        type: ActionType.SET_NEW_TASK_TEXT,
        payload: event.target.value
      });
    }
  };

  // The addTask function
  const addTask = (): void => {
    if (newTaskText !== '') {
      const newTask: ITask = {
        text: newTaskText,
        completed: false,
        id: Date.now(),
        dueDate: selectedDate
      };
      dispatch({ type: ActionType.ADD_TASK, payload: newTask });
      dispatch({ type: ActionType.SET_NEW_TASK_TEXT, payload: '' });
      dispatch({ type: ActionType.SET_SELECTED_DATE, payload: null });
    }
  };

  // The editTask function
  const editTask = (taskId: number, newText: string): void => {
    dispatch({
      type: ActionType.EDIT_TASK,
      payload: { taskId, newText }
    });
  };

  // The toggleCompleted function
  const toggleCompleted = (taskId: number): void => {
    dispatch({
      type: ActionType.TOGGLE_COMPLETED,
      payload: taskId
    });
  };

  const toggleShowCompleted = (): void => {
    dispatch({
      type: ActionType.TOGGLE_SHOW_COMPLETED
    });
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task: ITask) => !task.completed);

  return {
    newTaskText,
    tasks,
    setTasks,
    showCompleted,
    selectedDate,
    handleChange,
    addTask,
    editTask,
    toggleCompleted,
    toggleShowCompleted,
    filteredTasks,

    setSelectedDate: (date: Date | null) =>
      dispatch({ type: ActionType.SET_SELECTED_DATE, payload: date })
  };
};
