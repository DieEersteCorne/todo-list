import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import Form from './Components/Layout/Body/Form/Form';
import Header from './Components/Layout/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Form />
    </>
  );
}

export default App;
