import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRefreshIdentity } from 'official-common';
import './app.scss';
import router from './router';

function App() {
  useRefreshIdentity();
  return (
    <div className="onlycoin-app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
