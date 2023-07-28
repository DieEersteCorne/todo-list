// import React, { FC } from 'react';
// import './_ClearCompletedTask.scss';
// import { ITask } from '../../../../Interfaces';

// interface ClearCompletedTaskProps {
//   tasks: ITask[];
//   setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
// }

// const ClearCompletedTask: FC<ClearCompletedTaskProps> = ({
//   tasks,
//   setTasks
// }) => {
//   // Clear completed tasks
//   const clearCompletedTasks = (): void => {
//     setTasks(tasks.filter((task) => !task.completed));
//   };

//   return (
//     <button className='clear-button' onClick={clearCompletedTasks}>
//       Clear Completed Tasks
//     </button>
//   );
// };

// export default ClearCompletedTask;
