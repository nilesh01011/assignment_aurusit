import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEventPage from './pages/allEvent/AllEvent';
import AddEventPage from './pages/addEvents/AddEventPage';
import { persistor, store } from './redux/store';
import EditEvent from './pages/editEvent/EditEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* redux store */}
    <Provider store={store}>
      {/* redux persist */}
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* Home Page */}
            <Route path="/all-event" element={<AllEventPage />}></Route>
            {/* Events Page */}
            <Route exact path="/" element={<AddEventPage />}></Route>

            {/* edit page */}
            <Route path="/edit/:id" element={<AddEventPage />}></Route>
            {/* <Route path="/edit/:id" element={<EditEvent />}></Route> */}
            {/* Other Routes */}
            {/* <Route path="/*" element={<AddEventPage />} /> */}
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
