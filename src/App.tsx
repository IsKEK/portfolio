import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/body/Home';

function App() {
  return (
    <body>
      <Home />
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
