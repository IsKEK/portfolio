import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home, About } from './components/body';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';

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
            <Route path="nav" element={<Navbar />} />
            <Route path="about" element={<><Navbar /><About /></>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

// const AppBody = styled.body`
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   -ms-overflow-style: none;
//   scrollbar-width: none; 
// `;

export default App;
