import React, { FC } from 'react';
import { ITask } from '../../../Interfaces';
import './_TodoItem.scss';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void; // we can call a fucntion as a prop
  editTask(taskId: number, newText: string): void;
  toggleCompleted(taskId: number): void;
}

const TodoItems: FC<Props> = ({
  task,
  deleteTask,
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
        <button className='delete-button' onClick={() => deleteTask(task.text)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {/* <Button
          variant='contained'
          startIcon={<DeleteIcon />}
          onClick={() => deleteTask(task.text)}
        >
          {' '}
          Delete{' '}
        </Button> */}
      </div>
    </div>
  );
};

export default TodoItems;
