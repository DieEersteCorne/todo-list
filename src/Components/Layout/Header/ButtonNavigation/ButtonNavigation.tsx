import { FC } from 'react';
import { useButtonNavigationFunctions } from './useButtonNavigationFunctions';
import './_ButtonNavigation.scss';
const ButtonNavigation: FC = () => {
  const { clickFeedbackPage, clickContactUsPage, clickHomePage } =
    useButtonNavigationFunctions();
  return (
    <div className='NavigationButtons'>
      <button onClick={clickHomePage}>HomePage</button>
      <button onClick={clickFeedbackPage}>FeedBack Page</button>
      <button onClick={clickContactUsPage}>contact us page</button>
    </div>
  );
};

export default ButtonNavigation;
