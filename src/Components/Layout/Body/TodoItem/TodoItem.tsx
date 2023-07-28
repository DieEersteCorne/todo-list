import React, { FC } from 'react';
import { ITask } from '../../../Interfaces';
import './_TodoItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Buttons, { Types } from '../../../Controls/Buttons/Buttons';

interface Props {
  task: ITask;
  tasks: ITask[];
  editTask(taskId: number, newText: string): void;
  toggleCompleted(taskId: number): void;
  // setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  setTasks: (updatedTasks: ITask[]) => void;
}

const TodoItem: FC<Props> = ({
  task,
  tasks,
  setTasks,
  editTask,
  toggleCompleted
}) => {
  return (
    <div className={`Task-Container ${task.completed ? 'completed' : ''}`}>
      <div className='checkbox'>
        <input
          type='checkbox'
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
        />
      </div>

      <div>
        <input
          className='task'
          type='text'
          value={task.text}
          onChange={(event) => editTask(task.id, event.target.value)}
        />
      </div>
      <div className='dueDateSelected'>
        Due Date:{' '}
        {task.dueDate ? task.dueDate.toLocaleDateString() : 'No due date'}
      </div>

      <div className='button-container'>
        <Buttons
          type={Types.DeleteButton}
          tasks={tasks}
          task={task}
          setTasks={setTasks}
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default TodoItem;
