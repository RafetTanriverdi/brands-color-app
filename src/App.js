import { MainProvider } from './Context/MainContext';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import Collection from './Components/Collection';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <MainProvider>
      <Sidebar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />

          <Route path="/collection/:slugs" element={<Collection />} />

        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
