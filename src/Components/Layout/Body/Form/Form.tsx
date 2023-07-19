import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from '../../../Interfaces';
import TodoItems from '../TodoItems/TodoItems';

import './_Form.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import MuiDatePicker from '../../../Controls/DatePicker/MuiDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ToDoCount from '../../ToDoCount/ToDoCount';
import ClearCompletedTask from '../../../Controls/ClearTaskButton/ClearCompletedTasks';
import { Button, Stack } from '@mui/material';
import CustomDatePicker from '../../../../Components/Controls/DatePicker/CustomDatePicker';

const Form: FC = () => {
  // :FC sets the component to Functional component
  const [newTaskText, setNewTaskText] = useState<string>(''); //set useState as type string when using string
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // if a fucntion does not return() anything, we set the return to void
    if (event.target.name === 'task') {
      setNewTaskText(event.target.value);
    }
  };

  // function to add the task

  const addTask = (): void => {
    if (newTaskText !== '') {
      const newTask: ITask = {
        text: newTaskText,
        completed: false,
        id: Date.now(),
        dueDate: selectedDate
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
      setSelectedDate(null);
    }
  };

  // delete task
  const deleteTask = (taskNameToDelete: string): void => {
    setTasks(
      tasks.filter((task) => {
        return task.text != taskNameToDelete;
      })
    );
  };

  // Edit Task
  const editTask = (taskId: number, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  // Clear completed tasks
  const clearCompletedTasks = (): void => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  //toggle completed tasks
  const toggleCompleted = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='form-container'>
        <div className='form-InputField'>
          <Stack direction='row' spacing={1}>
            <form>
              <input
                className='input'
                type='text'
                placeholder='task...'
                onChange={handleChange}
                value={newTaskText}
                name='task'
              />
            </form>
            <div className='date-picker-container'>
              <CustomDatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              {/* <MuiDatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              /> */}
            </div>
          </Stack>
          <button className='add-button' onClick={addTask}>
            <span className='buttonSpan'></span>
            Add
          </button>
          {/* <Button
              className='add-button'
              variant='contained'
              onClick={addTask}
            >
              Add
            </Button> */}
          {/* <Button variant='contained' onClick={toggleShowCompleted}>
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
          </Button> */}
          <div className='Controls-styled-spaceBetween'>
            <button
              className='toggleCompletebuttton'
              onClick={toggleShowCompleted}
            >
              {showCompleted ? 'Hide Completed' : 'Show Completed'}
            </button>
            <ToDoCount countTasks={tasks.length} /> {/* Display task count */}
            <ClearCompletedTask clearCompletedTasks={clearCompletedTasks} />
          </div>
        </div>

        <div className='todoTaskList'>
          {filteredTasks.map((task: ITask, key: number) => {
            return (
              <TodoItems
                key={key}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                editTask={editTask}
              />
            );
          })}
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Form;
