import { MainProvider } from './Context/MainContext';
import React from 'react';
import Sidebar from './Components/Sidebar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collections from './Components/Collections';
import Content from './Components/Content';


function App() {

  return (
    <BrowserRouter>
      <MainProvider>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/collection/:slugs" element={<Collections/>} />
        </Routes>
      </MainProvider>
    </BrowserRouter>
  );
}

export default App;
