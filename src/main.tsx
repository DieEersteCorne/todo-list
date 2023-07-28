// import React from 'react';
// // import ReactDOM from 'react-dom/client';
// import ReactDOM from "react-dom";

// import App from './App.tsx';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Reverted back to react 17 due to mui5 not supporting react 18

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
