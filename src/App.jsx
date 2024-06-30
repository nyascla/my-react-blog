import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* <Route path="/my-react-blog" element={<HomePage />} /> */}
        <Route path="/" element={<UnderConstruction />} />
        <Route path="/my-react-blog" element={<UnderConstruction />} />
        <Route path="/my-react-blog/proyectos" element={<UnderConstruction />} />
        <Route path="/my-react-blog/sobremi" element={<UnderConstruction />} />
        <Route path="/my-react-blog/contacto" element={<UnderConstruction />} />
        <Route path="/my-react-blog/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
