import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
