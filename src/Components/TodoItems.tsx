import React, { FC } from 'react';
import { ITask } from './Interfaces';
import '../Styles/TodoItem.css';

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void; // we can call a fucntion as a prop
  editTask(taskItem: ITask): void; // Add the editTask prop
}

const TodoItems: FC<Props> = ({ task, deleteTask, editTask }) => {
  return (
    <div className='Task-Container'>
      <div className='checkbox'>
        <input type='checkbox' />
      </div>
      <div>
        <input className='task' type='text' value={task.taskName} />
        {/* <span className='tasks'>{task.taskName}</span> */}
      </div>
      <div className='button-container'>
        <button className='edit-button' onClick={() => editTask(task)}>
          Edit
        </button>{' '}
        <button
          className='delete-button'
          onClick={() => deleteTask(task.taskName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
