import { FC } from 'react';
import { ITask } from '../../Interfaces';
import '../Buttons/ButtonStyles/_ClearCompletedTask.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export enum Types {
  DeleteButton = 'delete',
  ClearButton = 'clear',
  AddButton = 'add',
  ShowCompleted = 'showCompleted'
}

interface ButtonsProps {
  type: Types;
  icon?: any; // Add ? to make the prop optional
  tasks?: ITask[];
  task?: ITask;
  handleClick?: () => void;
  showCompleted?: boolean;
  // setTasks?: React.Dispatch<React.SetStateAction<ITask[]>>;
  setTasks?: (updatedTasks: ITask[]) => void;
}

const Buttons: FC<ButtonsProps> = ({
  type,
  task,
  tasks,
  setTasks,
  handleClick,
  showCompleted,
  icon
}) => {
  // Clear completed tasks
  const clearCompletedTasks = (): void => {
    if (tasks && setTasks) {
      setTasks(tasks.filter((task) => !task.completed));
    }
  };

  // delete task
  const deleteTask = (taskNameToDelete: string): void => {
    if (tasks && setTasks) {
      setTasks(
        tasks.filter((task) => {
          return task.text != taskNameToDelete;
        })
      );
    }
  };

  switch (type) {
    case Types.AddButton:
      return (
        <button className='add-button' onClick={handleClick}>
          <span className='buttonSpan'></span>
          Add
        </button>
      );
    case Types.ShowCompleted:
      return (
        <button className='toggleCompletebuttton' onClick={handleClick}>
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      );
    case Types.DeleteButton:
      return (
        <button
          className='delete-button'
          onClick={() => deleteTask(task?.text || '')}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
        </button>
      );
    case Types.ClearButton:
      return (
        <button className='clear-button' onClick={clearCompletedTasks}>
          Clear Completed Tasks
        </button>
      );
    // Add other cases for different button types here if needed
    default:
      return <>Default Button</>;
  }
};

export default Buttons;
