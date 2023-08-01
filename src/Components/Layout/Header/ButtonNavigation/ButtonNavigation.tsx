import { FC } from 'react';
import { useButtonNavigationFunctions } from './useButtonNavigationFunctions';
import './_ButtonNavigation.scss';
const ButtonNavigation: FC = () => {
  const { clickFeedbackPage, clickContactUsPage, clickHomePage } =
    useButtonNavigationFunctions();
  return (
    <div className='NavigationButtons'>
      <button className='HomepageButton' onClick={clickHomePage}>HomePage</button>
      <button className='FeedbackPageButton' onClick={clickFeedbackPage}>FeedBack Page</button>
      <button className='ContactUsPageButton' onClick={clickContactUsPage}>contact us page</button>
    </div>
  );
};

export default ButtonNavigation;
