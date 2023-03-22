import { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import MainContext from './Context/MainContext';
import Copied from './Components/Copied';
import BrandsData from './brands.json'
import { clear } from '@testing-library/user-event/dist/clear';

function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setbrands] = useState(brandsArray);
  const [selectedBrands, setselectedBrands] = useState([]);
  const [copied, setcopied] = useState(false)
  const [search, setsearch] = useState("");

  useEffect(() => {
    console.log(selectedBrands);
  }, [selectedBrands])

  useEffect(() => {
    setbrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])




  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setcopied(false)
      }, 1000)
      return () => {
        clearTimeout(timeout);
      }
    }

  }, [copied])

  const data = {
    brands, setselectedBrands, selectedBrands, setcopied, search, setsearch
  }


  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
