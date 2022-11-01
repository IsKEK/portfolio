import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home, About, Contact, Portfolio } from './components/body';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Enactus, Galeneo, Lancaster } from './components/jobs';

const Main = () => <main><Outlet /></main>

function App() {
  return (
    <BrowserRouter>
      <WavyContainer />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<><Navbar /><About /></>} />
            <Route path="portfolio" element={<><Navbar /><Portfolio /></>} />
            <Route path="contact" element={<><Navbar /><Contact /></>} />
            <Route path="lancaster" element={<Lancaster />} />
            <Route path="galeneo" element={<Galeneo />} />
            <Route path="enactus" element={<Enactus />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
