import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home, About } from './components/body';

function App() {
  return (
    <body>
      <Home />
      <About />
    </body>
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
