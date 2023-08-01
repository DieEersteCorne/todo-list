import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Pages/Homepage/HomePage';
import FeedbackPage from './Components/Pages/FeedbackPage/FeedbackPage';
import ContactUsPage from './Components/Pages/ContactUsPage/ContactUsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
