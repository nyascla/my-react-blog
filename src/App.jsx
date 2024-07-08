import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage.jsx/HomePage';
import DetailPage from './pages/DetailPage';
import UnderConstruction from './pages/underconstruction/UnderConstruction';
import AboutMe from './pages/aboutme/AboutMe';
import ContactInfo from './pages/contactinfo/ContactInfo';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        {/* <Route path="/my-react-blog" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sobremi" element={<AboutMe />} />
        <Route path="/contacto" element={<ContactInfo />} />
        
        <Route path="/my-react-blog/detail/:id" element={<DetailPage />} />
      </Routes>


    </div>
  );
}

export default App;

