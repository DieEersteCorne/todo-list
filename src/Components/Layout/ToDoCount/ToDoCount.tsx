import { FC } from 'react';
import './_ToDoCount.scss';

interface ToDoCountProps {
  countTasks: number;
}

const ToDoCount: FC<ToDoCountProps> = ({ countTasks }) => {
  return <div className='ToDoCount'>Total Tasks = {countTasks}</div>;
};

export default ToDoCount;
