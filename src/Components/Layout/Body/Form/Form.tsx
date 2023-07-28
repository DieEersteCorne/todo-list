import React, { FC, useState, ChangeEvent } from 'react';
import { ITask } from '../../../Interfaces';
import TodoItem from '../TodoItem/TodoItem';
import './_Form.scss';
import ToDoCount from '../../ToDoCount/ToDoCount';
import CustomDatePicker from '../../../../Components/Controls/DatePicker/CustomDatePicker';
import Buttons, { Types } from '../../../Controls/Buttons/Buttons';
import { useTodoItem } from '../TodoItem/useTodoItem';

const Form: FC = () => {
  const {
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
    setSelectedDate
  } = useTodoItem();

  return (
    <div className='form-container'>
      <div className='form-InputField'>
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
        </div>

        {/* add Button */}
        <Buttons type={Types.AddButton} handleClick={addTask} />

        <div className='Controls-styled-spaceBetween'>
          <Buttons
            type={Types.ShowCompleted}
            handleClick={toggleShowCompleted}
            showCompleted={showCompleted}
          />
          <ToDoCount countTasks={tasks.length} /> {/* Display task count */}
          <Buttons type={Types.ClearButton} tasks={tasks} setTasks={setTasks} />
        </div>
      </div>

      {/* <div className='todoTaskList'>
        {filteredTasks.map((task: ITask, key: number) => {
          return (
            <TodoItem
              key={key}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              toggleCompleted={toggleCompleted}
              editTask={editTask}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default Form;
