import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import TodoItems from './TodoItems';
import '../Styles/Form.css';

const Form: FC = () => {
  // :FC sets the component to Functional component
  const [task, setTask] = useState<string>(''); //set useState as type string when using string
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [editTask, setEditTask] = useState<ITask | null>(null); // Track the task being edited

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // if a fucntion does not return() anything, we set the return to void
    if (event.target.name === 'task') {
      setTask(event.target.value);
    }
  };

  // function to add the task
  const addTask = (): void => {
    if (task !== '') {
      // Check if task is not empty
      if (editTask) {
        // If editTask exists, update the task
        const updatedList = todoList.map((item) => {
          if (item === editTask) {
            return { ...item, taskName: task };
          }
          return item;
        });
        setTodoList(updatedList);
        setEditTask(null); // Clear the editTask after updating
      } else {
        // If editTask is null, add a new task
        const newTask: ITask = { taskName: task };
        setTodoList([...todoList, newTask]);
      }
      setTask(''); // we add a value in input field and set that value to empty string, doing this will clear the input field on reload
    }
  };

  //function to delete task

  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  // Edit Task
  const editTaskItem = (taskItem: ITask): void => {
    setTask(taskItem.taskName);
    setEditTask(taskItem);
  };

  return (
    <div>
      <div className='form-InputField'>
        <form>
          <input
            className='input'
            type='text'
            placeholder='task...'
            onChange={handleChange}
            value={task}
            name='task'
          />
        </form>
        <button className='add-button' onClick={addTask}>
          {editTask ? 'Save' : 'Add'}
        </button>
      </div>

      <div className='todoList'>
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoItems
              key={key}
              task={task}
              deleteTask={deleteTask}
              editTask={editTaskItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Form;
