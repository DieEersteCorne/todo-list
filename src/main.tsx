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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
