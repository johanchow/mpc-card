import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './app.scss';
import router from './router';

function App() {
  return (
    <div className="onlycoin-app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
