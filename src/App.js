import React, { useEffect,useState } from 'react';
import Sidebar from './Components/Sidebar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collections from './Components/Collections';
import Content from './Components/Content';
import MainContext from './Context/MainContext';
import { forceCheck } from 'react-lazyload';
import BrandsData from './brands.json'




function App() {

  

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false)
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


useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands])
  
  useEffect(() => {
      setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])
  
 
  
  const data = {
    brands, setSelectedBrands, selectedBrands, setCopied, search, setSearch
  }


  return (
    <BrowserRouter>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/collection/:slugs" element={<Collections/>} />
        </Routes>
      </MainContext.Provider>   
    </BrowserRouter>
  );
}

export default App;
