import React, { FC } from 'react';
import { Button } from '@mui/material';
import './_ClearCompletedTask.scss';

interface Props {
  clearCompletedTasks(): void;
}

const ClearCompletedTask: FC<Props> = ({ clearCompletedTasks }) => {
  return (
    <button className='clear-button' onClick={clearCompletedTasks}>
      Clear Completed Tasks
    </button>
    // <Button
    //   variant='outlined'
    //   onClick={clearCompletedTasks}
    //   className='clear-button'
    // >
    //   Clear Completed Tasks
    // </Button>
  );
};

export default ClearCompletedTask;
