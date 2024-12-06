import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LivingRoom from './Pages/LivingRoom';
import LivingRoom2 from './Pages/LivingRoom2';
import 'boxicons/css/boxicons.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Living-Room" element={<LivingRoom />} />
        <Route path="/Living-Room/page2" element={<LivingRoom2 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();


