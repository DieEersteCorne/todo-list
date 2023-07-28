import { FC, useState } from 'react';
import Form from '../../Layout/Body/Form/Form';
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import TodoItem from '../../Layout/Body/TodoItem/TodoItem';

import { useTodoItem } from '../../Layout/Body/TodoItem/useTodoItem';
import './_HomePage.scss';

const HomePage: FC = ({}) => {
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
    <div>
      <Header />
      <main>
        <Form />

        <div className='Item'>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              toggleCompleted={toggleCompleted}
              editTask={editTask}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
