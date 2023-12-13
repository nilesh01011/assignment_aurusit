import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home';
import AddEventPage from './pages/addEvents/AddEventPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/all-event" element={<HomePage />}></Route>
        {/* Events Page */}
        <Route exact path="/" element={<AddEventPage />}></Route>
        {/* Other Routes */}
        <Route path="/*" element={<AddEventPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
