import { useNavigate } from 'react-router-dom';

export const useButtonNavigationFunctions = () => {
  const navigate = useNavigate();

  const clickFeedbackPage = (): void => {
    navigate('/feedback');
  };

  const clickHomePage = (): void => {
    navigate('/home');
  };

  const clickContactUsPage = (): void => {
    navigate('/contact');
  };

  return {
    clickFeedbackPage,
    clickContactUsPage,
    clickHomePage
  };
};
