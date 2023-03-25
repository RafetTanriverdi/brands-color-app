import React, { useEffect, useContext } from 'react';
import Sidebar from './Components/Sidebar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collections from './Components/Collections';
import Content from './Components/Content';
import MainContext from './Context/MainContext';
import { forceCheck } from 'react-lazyload';
import Copied from './Components/Copied';




function App() {

  const { brands, copied, setCopied } = useContext(MainContext)
  useEffect(() => {
    forceCheck();
  }, [brands])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 1000)
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [copied])


  return (
  <>
    <BrowserRouter>
      {copied && <Copied color={copied} />}
      <Sidebar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/collection/:slugs" element={<Collections />} />
      </Routes>

    </BrowserRouter>
  </>
  );
}

export default App;
